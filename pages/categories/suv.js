import carsData from "../../Data/cardata";
import CarsList from "../../Components/templates/CarList";

function Suv() {
  const suvCars = carsData.filter((car) => car.category === "suv");

  return <CarsList data={suvCars} />;
}

export default Suv;
