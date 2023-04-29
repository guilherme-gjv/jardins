import { useEffect, useMemo, useState } from "react";
import Pot from "./Pot";
import Vegetal from "./Vegetal";

export interface IPlantProps {
  name: string;
  date: number;
}

const Plant: React.FC<IPlantProps> = ({ name, date }) => {
  //* constants
  const SECONDS_IN_A_DAY = 86400;

  //* memos
  const numberOfVegetals: number = useMemo(() => {
    return Math.floor((Date.now() - date) / 1000 / SECONDS_IN_A_DAY) + 1;
  }, [date]);

  //* states
  const [vegetals, setVegetals] = useState<JSX.Element[]>([]);

  //* effects
  useEffect(() => {
    const newVegetals = [];
    for (let i = 0; i < numberOfVegetals; i++) {
      newVegetals.push(<Vegetal key={name + date + i} />);
    }
    setVegetals(newVegetals);
  }, [date, name, numberOfVegetals]);

  //* render
  return (
    <div className="relative w-32">
      <div id="vegetal" className="relative flex flex-col items-center">
        {vegetals}
      </div>
      <Pot name={name} date={date} />
    </div>
  );
};

export default Plant;
