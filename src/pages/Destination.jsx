import { useEffect, useState } from "react";

import PageNav from "../components/PageNav";
import styles from "./Destination.module.css";
import data from "../data/data.json";
import HamburgerNav from "../components/HamburgerNav";

function Destination() {
  const [destinations, setDestinations] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    setDestinations(data.destinations);
  });

  function changeDestination(index) {
    setActiveTab(index);
  }

  const destination = destinations[activeTab] || {};

  return (
    <main className={styles.destination}>
      {window.innerWidth > 767 ? <PageNav /> : <HamburgerNav />}
      <div className="subHeader">
        <span>01</span>
        <p>pick your destination</p>
      </div>

      <div className={styles.planet}>
        <img
          src={destination.images?.webp}
          alt={`image of ${destination.name}`}
        />
        <div className={styles.info}>
          <ul className={styles.nav}>
            {destinations.map((destination, index) => (
              <li
                className={`${styles.nav_tab} ${
                  index === activeTab ? styles["nav_active"] : ""
                }`}
                key={index}
                onClick={() => changeDestination(index)}
              >
                {destination.name}
              </li>
            ))}
          </ul>
          <h1>{destination.name}</h1>
          <p>{destination.description}</p>
          <div className={styles.distance_travel}>
            <div className={styles.dis_trav}>
              <span>avg. distance</span>
              <h3>{destination.distance}</h3>
            </div>
            <div className={styles.dis_trav}>
              <span>est. travel time</span>
              <h3>{destination.travel}</h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Destination;
