import { Lottie } from "lottie-react";
import dev from "../../../public/animation/dev.json";
import "./hero.css";
import { motion } from "motion/react";

function Hero() {
  return (
    <section className="hero flex">
      <div className="left-section ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1)" }}
            transition={{ damping: 6 , type:"spring",stiffness: 100}}
            src="/cat.png"
            alt=""
            className="avatar"
          />
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4 }}
          className="title"
        >
          SoftWare Designer, Founder, and amateur astronaut.
        </motion.h1>
        <p className="subTilte">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
          asperiores modi blanditiis, natus doloremque recusandae accusantium
          vel assumenda excepturi porro quis dolorem. Praesentium assumenda
          pariatur quo quisquam! Ipsa, libero nemo.
        </p>
        <div className="icons flex">
          <div className="icon icon-twitter "></div>
          <div className="icon icon-facebook"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin"></div>
        </div>
      </div>

      <div className="right-section animation">
        <Lottie src={dev} autoplay loop />
      </div>
    </section>
  );
}

export default Hero;
