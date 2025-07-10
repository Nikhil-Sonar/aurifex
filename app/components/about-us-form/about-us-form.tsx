"use client";
import React, { useRef, useState, FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import "./about-us-form.css";
import Image from "next/image";
import Modal from "../modal/modal";

const AboutUsForm: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [agree, setAgree] = useState(false);
  const [showCard, setShowCard] = useState("hide");
  const [passData, setPassData] = useState<{
    title: string;
    year: string;
    image: string;
    card_view_title: string;
    description: string;
  } | null>(null);

  const handleModalClose = () => {
    setShowCard("hide");
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    const formData = new FormData(form.current);
    const firstName = formData.get("user_firstname")?.toString().trim() || "";
    const lastName = formData.get("user_lastname")?.toString().trim() || "";
    const email = formData.get("user_email")?.toString().trim() || "";
    const phone = formData.get("user_phone")?.toString().trim() || "";
    const message = formData.get("user_message")?.toString().trim() || "";

    const nameRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;
    const emailRegex = /^\S+@\S+\.\S+$/;
    const phoneRegex = /^\d{10}$/;

    if (!firstName || !nameRegex.test(firstName)) {
      alert("First name should contain only alphabets and spaces.");
      return;
    }

    if (!lastName || !nameRegex.test(lastName)) {
      alert("Last name should contain only alphabets and spaces.");
      return;
    }

    if (!email || !emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (phone && !phoneRegex.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    if (!message) {
      alert("Please enter a message.");
      return;
    }

    if (!agree) {
      alert("Please agree to the privacy policy before submitting.");
      return;
    }

    emailjs
      .sendForm(
        "service_rms75ff",
        "template_72utqja",
        form.current,
        "mfRcrq7IIouJwARYt"
      )
      .then(
        (result) => {
          console.log(result);
          const thankYouUserdata = {
            id: 1,
            title: `Thank you! ${firstName || ""} for reaching us,`,
            year: "",
            card_view_title: "Thank You",
            image: "/green-tick-image.jpg",
            description: "One of our representatives will contact you shortly.",
          };
          setPassData(thankYouUserdata);
          setShowCard("show");
          form.current?.reset();
          setAgree(false);
        },
        (error) => {
          console.log(error);
          const thankYouUserdata = {
            id: 1,
            title: `Something went wrong!`,
            year: "",
            card_view_title: "failed",
            image: "/red-cross-img.jpg",
            description: 'Uh-oh! It looks like something went wrong. Please give it another try.',
          };
          setPassData(thankYouUserdata);
          setShowCard("show");
        }
      );
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="contact-wrapper"
      >
        <div className="contact-form">
          <h2>Get in touch</h2>
          <p>Our friendly team would love to hear from you.</p>

          <form ref={form} onSubmit={sendEmail}>
            <div className="input-group">
              <div className="input-field">
                <label htmlFor="first-name">First name*</label>
                <input
                  type="text"
                  id="first-name"
                  name="user_firstname"
                  placeholder="First name"
                  required
                  onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value.replace(
                      /[^a-zA-Z\s]/g,
                      ""
                    );
                  }}
                />
              </div>
              <div className="input-field">
                <label htmlFor="last-name">Last name*</label>
                <input
                  type="text"
                  id="last-name"
                  name="user_lastname"
                  placeholder="Last name"
                  required
                  onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value.replace(
                      /[^a-zA-Z\s]/g,
                      ""
                    );
                  }}
                />
              </div>
            </div>

            <div className="input-field">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                id="email"
                name="user_email"
                placeholder="you@company.com"
                required
              />
            </div>

            <div className="input-field">
              <label htmlFor="phone">Phone number</label>
              <div className="phone-wrapper">
                <select name="user_country_code">
                  <option value="IN">IN</option>
                </select>
                <input
                  type="text"
                  id="phone"
                  name="user_phone"
                  placeholder="0000088888"
                  maxLength={10}
                  inputMode="numeric"
                  pattern="\d{10}"
                  onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value.replace(
                      /[^0-9]/g,
                      ""
                    );
                  }}
                />
              </div>
            </div>

            <div className="input-field">
              <label htmlFor="message">Message*</label>
              <textarea
                id="message"
                name="user_message"
                placeholder="Leave us a message..."
                required
              ></textarea>
            </div>

            <div className="checkbox-wrapper">
              <input
                type="checkbox"
                id="agree"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                required
              />
              <label htmlFor="agree" className="checkbox-wrapper-label">
                You agree to our friendly <a href="#">privacy policy</a>.
              </label>
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="contact-image">
          <Image width={360} height={640} src="/Image.png" alt="girl image" />
        </div>
      </motion.div>

      {showCard === "show" && (
        <Modal
          showCard={showCard}
          passData={passData}
          onSendData={handleModalClose}
        />
      )}
    </>
  );
};

export default AboutUsForm;
