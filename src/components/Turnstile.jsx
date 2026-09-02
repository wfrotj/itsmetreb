import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

const Turnstile = forwardRef(function Turnstile(
  { siteKey, onVerify, onExpire, onError, onReady },
  ref,
) {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);

  useImperativeHandle(ref, () => ({
    reset() {
      if (widgetIdRef.current !== null && window.turnstile) {
        window.turnstile.reset(widgetIdRef.current);
      }
    },
  }));

  useEffect(() => {
    if (!siteKey || !containerRef.current) {
      return undefined;
    }

    const renderWidget = () => {
      if (!window.turnstile || !containerRef.current) {
        return;
      }

      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        size: "normal",
        theme: "auto",
        callback: onVerify,
        "expired-callback": onExpire,
        "error-callback": onError,
      });

      onReady?.();
      containerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    };

    if (window.turnstile) {
      renderWidget();
    } else {
      const existingScript = document.querySelector(
        'script[src*="challenges.cloudflare.com/turnstile"]',
      );

      if (existingScript) {
        if (window.turnstile) {
          renderWidget();
        } else {
          existingScript.addEventListener("load", renderWidget, { once: true });
        }
      } else {
        const script = document.createElement("script");
        script.src =
          "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
        script.onload = renderWidget;
        document.head.appendChild(script);
      }
    }

    return () => {
      if (widgetIdRef.current !== null && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [siteKey, onVerify, onExpire, onError, onReady]);

  return (
    <div ref={containerRef} className="min-h-[65px] w-full py-2" aria-live="polite" />
  );
});

export default Turnstile;
