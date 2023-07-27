import React from "react";
import { useState } from "react";
import Picture from "../images/Picture.jpg";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import messageService from "../services/messageService";
function Contact() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const handleMessage = (e) => {
    e.preventDefault();

    const messageObject = {
      message,
      email,
    };

    messageService.createMessage(messageObject).then((returnedMessage) => {
      setMessage("");
      setEmail("");
      alert("Message sent. Thank you!");
    });
  };

  return (
    <div>
      <h2 className="text-7xl">Contact Me</h2>{" "}
      <div className="contact-me  flex flex-row justify-between items-center gap-8">
        <div className="flex flex-col text-3xl justify-center items-center">
          <img
            src={Picture}
            className="rounded-full w-60 h-60 flex items-center justify-center "
          />
          <section className="number mt-4">09399716621</section>
          <p className="github">https://github.com/wfrotj</p>
          <p className="address">Antipolo City</p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/treb.rodrigo/">
              <FaFacebook className="icon text-white" />
            </a>{" "}
            <FaInstagram className="icon text-white" />
            <FaGithub className=" icontext-white" />
          </div>
        </div>
        <div>
          <h3>I will be glad to hear from you</h3>
          <form onSubmit={handleMessage} className="flex flex-col gap-4">
            <label>Message</label>
            <input
              className="text-black"
              type="text"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label>Email</label>
            <input
              className="text-black"
              required
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
