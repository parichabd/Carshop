import React from "react";
import styles from "./brands.module.css";
function Brands() {
  return (
    <div className={styles.container}>
      <h2>Explore Our Permium Brands</h2>
      <div className={styles.brands}>
        <div>
          <img src="/carsBrand/b1.jpg.png" alt="" />
              </div>
              <div>
          <img src="/carsBrand/b2.jpg.png" alt="" />
              </div>
              <div>
          <img src="/carsBrand/b3.jpg.png" alt="" />
        </div>
        <div>
          <img src="/carsBrand/b4.jpg.png" alt="" />
        </div>
        <div>
          <img src="/carsBrand/b5.jpg.png" alt="" />
        </div>
        <div>
          <img src="/carsBrand/b6.jpg.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Brands;
