import React from "react";

const Main: React.FC = () => {
  return (
    <div className="bg-green-600 text-white text-center h-screen flex flex-col">
      <h1 className="mt-5 mb-auto text-4xl">Jardins.</h1>
      <div className="border-black border-2 h-[90vh] w-full p-10">
        <div className="bg-green-700 w-full h-full">
          <p>planta</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
