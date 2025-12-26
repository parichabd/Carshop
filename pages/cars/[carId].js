import { useRouter } from "next/router";
import carsData from "@/Data/cardata";
import React from "react";
import CarDeatils from "@/Components/templates/CarDeatils";

function carId() {
  const router = useRouter();
  const { carId } = router.query;
  const carDetails = carsData[carId - 1];
  return <CarDeatils { ...carDetails} />;
}

export default carId;
