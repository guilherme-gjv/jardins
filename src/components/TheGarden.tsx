import { useState } from "react";
import Plant, { IPlantProps } from "./plant/Plant";
import { plantsMock } from "@/mock/plantsMock";

const TheGarden: React.FC = () => {
  const [plants, setPlants] = useState<IPlantProps[]>(plantsMock);

  //* render
  return (
    <div className="bg-cyan-400 text-white text-center h-screen flex flex-col">
      <h1 className="mt-5 mb-auto text-4xl">Jardins.</h1>
      <div className="bg-cyan-300 h-[90vh] w-full pt-10 flex flex-col justify-end">
        <div className="bg-green-700 z-50 w-full h-16 px-5 pb-5 flex flex-row  items-end justify-start space-x-3">
          {plants.map((plant) => {
            return (
              <Plant key={plant.name} name={plant.name} date={plant.date} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TheGarden;
