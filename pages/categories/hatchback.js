import CarsList from "../../Components/templates/CarList";
import carsData from "../../Data/cardata";

function Hatchback() {
  const hatchbackCars = carsData.filter((car) => car.category === "hatchback");

  return <CarsList data={hatchbackCars} />;
}

export default Hatchback;
