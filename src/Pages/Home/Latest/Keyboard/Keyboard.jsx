import React from "react";
import useDevice from "../../../../Hooks/useDevice";
import ShowKeyboard from "./ShowKeyboard";

const Keyboard = () => {
  const [keyboard] = useDevice();
  const keyboards = keyboard.filter((item) => item.category === "keyboard");
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="my-10 text-center text-4xl border-b border-b-[#DFCCFB] w-1/4 pb-2">
          Explore Keyboard
        </h1>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-5 mx-auto pb-20">
        {keyboards.map((keyboard) => (
          <ShowKeyboard keyboard={keyboard}></ShowKeyboard>
        ))}
      </div>
    </div>
  );
};

export default Keyboard;
