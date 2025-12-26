import Card from "../module/Cards";
import styles from "./cardata.module.css";

function CarsPage({ data }) {
  return (
    <div>
      <h1 className={styles.title}>Available Cars</h1>
      <div className={styles.container}>
      {data.map((car) => (
        <Card key={car.id} {...car} />
      ))}
    </div>
    </div>
  );
}

export default CarsPage;