import styles from "./Ads.module.css";
import { FaArrowTrendUp } from "react-icons/fa6";
function Ads() {
  return (
    <div className={styles.container}>
      <div className={styles.ads}>
        <video
          src="/Video/YTDown.com_YouTube_The-Soul-of-BMW_Media_-8UPg6hyDBg_001_1080p.mp4"
          controls
        ></video>
        <div>
          <h1>Get a Fair Price For Your Car</h1>
          <h1>Sell To Us Today</h1>
          <p>
            We are committed to providing our customers with exceptional
            service, competitive pricing, and a wide range of.
          </p>
          <button>
            Get Started <FaArrowTrendUp />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Ads;
