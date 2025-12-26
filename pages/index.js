import Ads from "@/Components/Ads/Ads";
import Brands from "../Components/brands/Brands";
import styles from "../styles/mainPage.module.css";
import Layout from "@/Components/Layout/Layout";

import Cars from "./cars";
import Categories from "@/Components/module/Caragories";
export default function Home() {
  return (
    <Layout>
      <section className={styles.landingPage}>
        <Categories/>
      </section>
      <section className={styles.mainPage}>
        <Brands />
        <Cars />
        <Ads />
      </section>
    </Layout>
  );
}
