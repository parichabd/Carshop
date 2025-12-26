import carsData from "../../Data/cardata";
import CarsCards from "../../Components/templates/CarCards";

function Cars() {
  return (
    <div>
      <CarsCards data={carsData} />
    </div>
  );
}

export default Cars;
