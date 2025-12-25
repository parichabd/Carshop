import Brands from "../Components/brands/Brands";
import styles from "../styles/mainPage.module.css";
export default function Home() {
  return <div>
    <section className={styles.landingPage}></section>
    <section className={styles.mainPage}>
      <Brands/>
    </section>
  </div>;
}
