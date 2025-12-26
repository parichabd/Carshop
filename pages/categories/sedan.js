import CarsList from "../../Components/templates/CarList";
import carsData from "../../Data/cardata";

function Sedan() {
  const sedanCars = carsData.filter((car) => car.category === "sedan");

  return <CarsList data={sedanCars} />;
}

export default Sedan;