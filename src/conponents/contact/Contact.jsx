import { useState } from "react";
import { Lottie } from "lottie-react";
import doneAnimation from "../../../public/animation/Success.json";
import "./contact.css";
import contact from "../../../public/animation/contact.json";
function Contact() {
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("access_key", "a546e6d0-96d6-4917-9362-0280664139ff");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };

  return (
    <section className="contact">
      <h1 className="title">
        <span className="icon-envelope"></span>
        Contact us
      </h1>
      <p className="subTitle">
        Contact us for more information and get notified when I publish somthing
        new.
      </p>

      <div className="flex" style={{ justifyContent: "space-between" }}>
        <form className="" onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email">Email:</label>
            <input name="email" type="email" id="email" required />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="">Your message:</label>
            <textarea name="message" id="message" required></textarea>
          </div>

          <button className="submit" type="submit">
            Submit
          </button>
          {result && (
            <p
              className="flex"
              style={{ fontSize: "18px", marginTop: "1.7rem" }}
            >
              <Lottie
                src={doneAnimation}
                autoplay
                loop={false}
                style={{
                  height: 37,
                  width: 30,
                  background: "transparent !important",
                  backgroundColor: "transparent !important",
                }}
              />
              Your message has been sent successfuly
            </p>
          )}
        </form>

        <div
          className="animation flex"
          style={{ justifyContent: "space-evenly" }}
        >
          <div style={{ height: "75%", width: "75%" }}>
            <Lottie src={contact} autoplay loop />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
