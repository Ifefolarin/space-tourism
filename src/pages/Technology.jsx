import { useEffect, useState } from "react";
import PageNav from "../components/PageNav";
import styles from "./Technology.module.css";

// import image1 from "../assets/technology/image-launch-vehicle-portrait.jpg";
// import image2 from "../assets/technology/image-launch-vehicle-landscape.jpg";

import data from "../data/data.json";
import HamburgerNav from "../components/HamburgerNav";

function Technology() {
  const [technologies, setTechnologies] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    setTechnologies(data.technology);
  }, []);

  function changeTechnology(index) {
    setActiveTab(index);
  }

  const tech = technologies[activeTab] || {};

  return (
    <div className={styles.technology}>
      {window.innerWidth > 767 ? <PageNav /> : <HamburgerNav />}
      <div className="subHeader">
        <span>03</span>
        <p>space launch 101</p>
      </div>
      <div className={styles.techData}>
        <div className={styles.techInfo}>
          <div className={styles.tab}>
            {technologies.map((tech, index) => (
              <button
                className={`${styles.tab_button} ${
                  index === activeTab ? styles["tabButton--active"] : ""
                }`}
                key={index}
                onClick={() => changeTechnology(index)}
              >
                {index < 9 ? index + 1 : index}
              </button>
            ))}
          </div>
          <div className={styles.tech_text}>
            <span>THE TERMINOLOGY...</span>
            <h1>{tech.name}</h1>
            <p>{tech.description}</p>
          </div>
        </div>
        <img
          src={
            window.innerWidth > 1024
              ? tech.images?.portrait
              : tech.images?.landscape
          }
          alt={tech.name}
        />
      </div>
    </div>
  );
}

export default Technology;
