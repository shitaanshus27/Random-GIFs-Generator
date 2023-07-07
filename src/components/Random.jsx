import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

export default function Random() {
  const { gif, loading, fetchData } = useGif();

  return (
    <div className="w-[50%] gap-y-5  flex flex-col  border border-black rounded-3xl min-h-[450px] bg-green-500 items-center justify-evenly">
      <h1 className="text-2xl underline font-bold uppercase">A Random Gif</h1>
      {loading ? <Spinner /> : <img src={gif} className="w-[75%]" />}
      <button
        onClick={() => fetchData()}
        className="w-10/12 bg-yellow-500 text-lg text-black py-2 rounded-lg mb-4"
      >
        Generate
      </button>
    </div>
  );
}
