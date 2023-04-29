export interface IPotProps {
  name: string;
  date: number;
}

const Pot: React.FC<IPotProps> = ({ name, date }) => {
  return (
    <div id="pot" className="relative flex flex-row">
      <div className="bg-yellow-600 h-32 w-8 rounded-bl-[100%]"></div>
      <div className="bg-yellow-600 h-32 w-16 flex flex-col items-center">
        <div className="w-32 h-full p-3 space-y-1 z-50 overflow-hidden">
          <p className="bg-white text-black px-1 text-left text-md max-h-5 my-auto rounded-md whitespace-nowrap">
            {name}
          </p>
          <p className="bg-white text-sm text-black px-1 text-left rounded-md">
            {new Date(date).toLocaleDateString("en-GB")}
          </p>
        </div>
      </div>
      <div className="bg-yellow-600 h-32 w-8 rounded-br-[100%]"></div>
    </div>
  );
};

export default Pot;
