/* eslint-disable jsx-a11y/alt-text */
import styles from "./portfolio.module.css";
import Image1 from "../../public/img1.jpeg";
import Image2 from "../../public/img 2.jpeg";
import Image3 from "../../public/3.jpeg";
import Image4 from "../../public/img4.jpeg";
import { useState } from "react";
import Image from "next/image";

const tabs = [
  {
    item: "ALL",
    index: 0,
  },
  {
    item: "WEB",
    index: 1,
  },
  {
    item: "APP",
    index: 2,
  },
  {
    item: "SERVER",
    index: 3,
  },
];

const Portfolio = () => {
  const [index, setIndex] = useState(0);
  const handleTab = (e) => {
    console.log(typeof e.target.getAttribute("tabIndex"));
    //   setIndex(e.tage)
    setIndex(Number(e.target.getAttribute("tabIndex")));
  };
  return (
    <div className={styles.container} id="portfolio">
      <div className={styles.portfolio}>
        <h1>PORTFOLIO</h1>
      </div>
      <p>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>
      <div className={styles.tabs}>
        {tabs.map((item) => (
          <div
            key={item.index}
            tabIndex={item.index}
            className={index == item.index ? styles.active : ""}
            onClick={handleTab}
          >
            {item.item}
          </div>
        ))}
      </div>
      <div className={styles.tabsElement}>
        {index === 0 && (
          <div className={styles.element}>
            <div>
              <Image
                width={500}
                height={500}
                src="https://picsum.photos/500/500?random=3"
                alt="image"
              />
              <div className={styles.wrapper}>
                <h4>WEB</h4>
                <small>title</small>
                <p>+</p>
              </div>
            </div>
            <div>
              <Image
                width={500}
                height={500}
                src="https://picsum.photos/300/300?random=4"
                alt="image"
              />{" "}
              <div className={styles.wrapper}>
                <h4>WEB</h4>
                <p>title</p>
                <p>+</p>
              </div>
            </div>
            <div>
              <Image
                width={500}
                height={500}
                src="https://picsum.photos/300/300?random=5"
                alt="image"
              />
              <div className={styles.wrapper}>
                <h4>App</h4>
                <p>title</p>
                <p>+</p>
              </div>
            </div>
            <div>
              <Image
                width={500}
                height={500}
                src="https://picsum.photos/300/300?random=6"
                alt="image"
              />
              <div className={styles.wrapper}>
                <h4>Server</h4>
                <p>title</p>
                <p>+</p>
              </div>
            </div>
            <div>
              <Image
                width={500}
                height={500}
                src="https://picsum.photos/300/300?random=6"
                alt="image"
              />
              <div className={styles.wrapper}>
                <h4>App</h4>
                <p>title</p>
                <p>+</p>
              </div>
            </div>
          </div>
        )}
        {index == 1 && (
          <div className={styles.element}>
            <div>
              <Image
                height={300}
                width={500}
                src="https://picsum.photos/300/300?random=7"
              />
              <div className={styles.wrapper}>
                <h4>App</h4>
                <p>title</p>
                <p>+</p>
              </div>
            </div>
            <div>
              <Image
                height={300}
                width={500}
                src="https://picsum.photos/300/300?random=3"
              />
              <div className={styles.wrapper}>
                <h4>App</h4>
                <p>title</p>
                <p>+</p>
              </div>
            </div>
            <div>
              <Image
                height={300}
                width={500}
                src="https://picsum.photos/300/300?random=10"
              />
              <div className={styles.wrapper}>
                <h4>App</h4>
                <p>title</p>
                <p>+</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
