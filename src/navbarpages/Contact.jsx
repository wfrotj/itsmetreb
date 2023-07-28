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
    <div className="mobile:flex mobile:flex-col">
      <h2 className="laptop:text-7xl mobile:text-4xl">Contact Me</h2>{" "}
      <div className="contact-me tablet:flex  tablet:flex-col laptop:flex laptop:flex-row laptop:justify-between laptop:items-center gap-8 mobile:flex mobile:flex-col">
        <div className="flex laptop:flex-col laptop:text-3xl laptop:justify-center items-center tablet:text-2xl mobile:text-xl mobile:flex mobile:flex-col">
          <img
            src={Picture}
            className="rounded-full laptop:w-60 laptop:h-60 mobile:w-40 mobile:h-40  flex items-center justify-center "
          />
          <section className="number mt-4">09399716621</section>
          <p className="github">https://github.com/wfrotj</p>
          <p className="address">Antipolo City</p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/treb.rodrigo/">
              <FaFacebook className="icon text-white" />
            </a>
            <a href="https://www.instagram.com/wilbertrodrigo/">
              <FaInstagram className="icon text-white" />
            </a>
            <a href="https://github.com/wfrotj">
              <FaGithub className="icon text-white" />
            </a>
          </div>
        </div>
        <div className="flex mobile:flex mobile:flex-col tablet:flex-col tablet:justify-center tablet:items-center">
          <h3 className="laptop:text-4xl mobile:text-2xl">
            I will be glad to hear from you.
          </h3>
          <form
            onSubmit={handleMessage}
            className="flex laptop:flex-col laptop:gap-4 mobile:flex-col mobile:text-2xl mobile:p-4"
          >
            <label>Message</label>
            <input
              className="text-black flex laptop:w-96 mobile:w-60 tablet:w-80"
              type="text"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label>Email</label>
            <input
              className="text-black laptop:w-96 mobile:w-60 tablet:w-80"
              required
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="flex mobile:flex-col">
              <button
                className="color-main mobile:w-40 bg-blue-500 text-white font-bold py-2 laptop:w-96 laptop:px-4  laptop:text-2xl laptop:rounded mt-4 hover:bg-white "
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
