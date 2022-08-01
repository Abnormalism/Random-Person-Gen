import React from "react";
import { useGlobalContext } from "../Context";
import {
  FaUser,
  FaEnvelopeOpen,
  FaCalendarTimes,
  FaMap,
  FaLock,
} from "react-icons/fa";

const SquareButtons = () => {
  const { setName, setPlaceHolder, fetchData } = useGlobalContext();

  const handleEvent = (e) => {
    const userId = e.currentTarget.dataset.id;
    setName(userId);
    setPlaceHolder(userId);
  };

  return (
    <main>
      <div className="mt-[.75rem] h-[2.5rem] flex items-center justify-around text-2xl w-[90%] mx-auto text-slate-500">
        <button
          className="hover:text-slate-700"
          onMouseOver={handleEvent}
          data-id="name"
        >
          <FaUser />
        </button>
        <button
          className="hover:text-slate-700"
          onMouseOver={handleEvent}
          data-id="email"
        >
          <FaEnvelopeOpen />
        </button>
        <button
          className="hover:text-slate-700"
          onMouseOver={handleEvent}
          data-id="gender"
        >
          <FaCalendarTimes />
        </button>
        <button
          className="hover:text-slate-700"
          onMouseOver={handleEvent}
          data-id="state"
        >
          <FaMap />
        </button>
        <button
          className="hover:text-slate-700"
          onMouseOver={handleEvent}
          data-id="password"
        >
          <FaLock />
        </button>
      </div>
      <button
        className="block mx-auto p-1 mt-[1rem] rounded-sm bg-slate-600 text-white"
        onClick={() => fetchData()}
      >
        Generate Random
      </button>
    </main>
  );
};

export default SquareButtons;
