import { useEffect, useState } from "react";

import PageNav from "../components/PageNav";
import styles from "./Crew.module.css";
import data from "../data/data.json";
import HamburgerNav from "../components/HamburgerNav";

// import image from "../assets/crew/image-douglas-hurley.png";

function Crew() {
  const [crewMember, setCrewMember] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    setCrewMember(data.crew);
  }, []);

  function changeCrewMember(index) {
    setActiveTab(index);
  }

  const crew = crewMember[activeTab] || {};
  return (
    <main className={styles.crew}>
      {window.innerWidth > 767 ? <PageNav /> : <HamburgerNav />}
      <div className="subHeader">
        <span>02</span>
        <p>meet your crew</p>
      </div>
      <div className={styles.crews}>
        <div className={styles.crewInfo}>
          <h2>{crew.role}</h2>
          <h1>{crew.name}</h1>
          <p>{crew.bio}</p>
          <div className={styles.tab}>
            {crewMember.map((crew, index) => (
              <button
                className={`${styles.tab_button} ${
                  index === activeTab ? styles["tabButton--active"] : ""
                }`}
                key={index}
                onClick={() => changeCrewMember(index)}
              ></button>
            ))}
          </div>
        </div>
        <img src={crew.images?.webp} alt={crew.name} />
      </div>
    </main>
  );
}

export default Crew;
