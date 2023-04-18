import React from "react";
import styled from "styled-components";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactUs.css";

const ContactUs = () => {
  const Form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w1uu05p",
        "template_fchiugh",
        Form.current,
        "Af3_0D0-0Avq-mRps"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    // <>
    <div class="container">
      <span class="big-circle"></span>
      <img src="img/shape.png" class="square" alt="" />
      <div class="form">
        <div class="contact-info">
          <h3 class="title1">Contact Us</h3>
          {/* <h1 class="title1">Get In Touch For</h1> */}
          <div class="image-grid">
            <img
              src="https://cdn.discordapp.com/attachments/885108791610322964/969512290049216542/gr.png"
              alt=""
            />
          </div>
        </div>

        <div class="contact-form">
          <div class="contact-form-background">
            <form name="submit-to-google-sheet" ref={Form} onSubmit={sendEmail}>
              <div class="input-container">
                <input
                  type="text"
                  name="name"
                  class="input"
                  placeholder="Name"
                />
                {/* <label for="">Name</label> */}
                <span>Name</span>
              </div>
              <div class="input-container">
                <input
                  type="email"
                  name="email"
                  class="input"
                  placeholder="Email"
                />
                {/* <label for="">Email</label> */}
                <span>Email</span>
              </div>
              {/* <div class="input-container">
                <input type="tel" name="phone" class="input" />
                <label for="">Phone</label>
                <span>Phone</span>
              </div> */}
              <div class="input-container textarea">
                <textarea
                  name="message"
                  class="input"
                  placeholder="Message"
                ></textarea>
                {/* <label for="">Message</label> */}
                <span>Message</span>
              </div>
              <div class="buttons">
                <input type="submit" value="Send" class="btn btn-primary" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    // </>
  );
};

export default ContactUs;
