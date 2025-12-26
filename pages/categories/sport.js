import CarsList from "../../Components/templates/CarList";
import carsData from "../../Data/cardata";

function Sport() {
  const sportCars = carsData.filter((car) => car.category === "sport");

  return <CarsList data={sportCars} />;
}

export default Sport;