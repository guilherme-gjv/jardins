import Pot from "./Pot";
import Vegetal from "./Vegetal";

export interface IPlantProps {
  name: string;
  date: Date;
}

const Plant: React.FC<IPlantProps> = ({ name, date }) => {
  const SECONDS_IN_A_DAY = 86400;
  const numberOfVegetals: number =
    Math.floor(
      (new Date(Date.now()).getTime() - date.getTime()) /
        1000 /
        SECONDS_IN_A_DAY
    ) + 1;
  let vegetals = [];
  for (let i = 0; i < numberOfVegetals; i++) {
    vegetals.push(<Vegetal />);
  }
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
