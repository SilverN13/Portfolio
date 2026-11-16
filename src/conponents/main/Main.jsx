import "./main.css";
import {  useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const project = [
  {
    id: 1,
    title: "HCJ projcet",
    category: "html",
    img: "/cat.png",
  },
  {
    id: 2,
    title: "react projcet",
    category: "react",
    img: "/1.jpg",
  },
  {
    id: 3,
    title: "flutter projcet",
    category: "flutter",
    img: "/2.jpg",
  },
];

function Main() {
  const [active, setActive] = useState("all");
  const [arr, setArr] = useState(project);

  const handleOnClick = (buttonCat) => {
    setActive(buttonCat);
    const newArr = project.filter((i) => {
      return i.category === buttonCat;
    });

    setArr(newArr);
  };

 const array = arr.map((e) => {
    return (
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 1.5 }}
        key={e.id}
        className="card"
      >
        <img src={e.img} alt="" height={266} width={266} style={{ borderRadius: "15px" }} />
        <div style={{ width: "266px" }} className="box">
          <h3 className="title">{e.title}</h3>
          <p className="subTitle">{e.category}</p>
          <div className="flex icons">
            <div className="flex" style={{ gap: "11px" }}>
              <div className="icon-link"></div>
              <div className="icon-github"></div>
            </div>
            <a href="#" className="link flex">
              more
              <div className="icon-arrow-right2"></div>
            </a>
          </div>
        </div>
      </motion.div>
    );
  });
  return (
    <main className="flex">
      <section className="leftSection flex">
        <button
          onClick={() => {
            setActive("all");
            setArr(project);
          }}
          className={active === "all" ? "active" : null}
        >
          All Porjects
        </button>
        <button
          onClick={() => {
            handleOnClick("html");
          }}
          className={active === "HCJ" ? "active" : null}
        >
          HTML CSS JS
        </button>
        <button
          onClick={() => {
            handleOnClick("react");
          }}
          className={active === "react" ? "active" : null}
        >
          React
        </button>
        <button
          onClick={() => {
            handleOnClick("flutter");
          }}
          className={active === "flutter" ? "active" : null}
        >
          Flutter
        </button>
      </section>
      <section className="rightSection flex">{array}</section>
    </main>
  );
}

export default Main;
