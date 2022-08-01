import SquareButtons from "./SquareButtons";
import { useGlobalContext } from "../Context";

const Square = () => {
  const { title, name, loading, placeHolder } = useGlobalContext();
  if (!loading) {
    return (
      <section className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[95%] max-w-[400px] border-2 border-white h-[25rem] bg-white rounded-sm">
        <div className="img-container h-[8rem] bg-slate-300 flex items-center justify-center">
          <img
            src={title.large}
            alt=""
            className="h-[10rem] w-[10rem] rounded-full border-2 border-white  translate-y-[3rem] shadow-xl"
          />
        </div>
        <div className="text-container mt-[6rem] text-center text-2xl">
          <h1 className="text-slate-500 text-sm">My {name} is</h1>
          <h2 className="capitalize">{title[placeHolder] || "Name Value"}</h2>
        </div>
        <SquareButtons />
      </section>
    );
  }
};

export default Square;
