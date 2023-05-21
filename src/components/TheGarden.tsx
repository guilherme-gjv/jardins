import { useEffect, useState } from "react";
import Plant, { IPlantProps } from "./plant/Plant";

const TheGarden = (): JSX.Element => {
  //* states
  const [plants, setPlants] = useState<IPlantProps[]>([]);

  //* effects
  useEffect(() => {
    const fetchPlants = async () => {
      const response = await fetch("/api/plants");
      const data = await response.json();
      setPlants(data.response);
    };

    fetchPlants();
  });

  //* render
  return (
    <div className="bg-cyan-400 text-white text-center h-screen flex flex-col">
      <h1 className="mt-5 mb-auto text-4xl">Jardins.</h1>
      <div className="bg-cyan-300 h-[90vh] w-full pt-10 flex flex-col justify-end">
        <div className="bg-green-700 z-50 w-full h-16 px-5 pb-5 flex flex-row  items-end justify-start space-x-3">
          {plants.map((plant, index) => {
            return (
              <Plant
                key={plant.name + plant.date + index}
                name={plant.name}
                date={plant.date}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TheGarden;
