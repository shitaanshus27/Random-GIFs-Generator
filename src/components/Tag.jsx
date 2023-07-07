import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
import { useState } from "react";

export default function Tag() {
  const [tag, setTag] = useState("");

  const { gif, loading, fetchData } = useGif(tag);

  function changeHandler(event) {
    setTag(event.target.value);
  }

  return (
    <div className="w-[50%] gap-y-5  flex flex-col  border border-black rounded-3xl min-h-[450px] bg-blue-500 items-center justify-evenly">
      <h1 className="text-2xl underline font-bold uppercase">
        Random {tag} Gif
      </h1>
      {loading ? <Spinner /> : <img src={gif} className="w-[75%]" />}

      <input
        className="w-10/12 text-lg text-black py-2 rounded-md mb-1"
        onChange={changeHandler}
        value={tag}
      />

      <button
        onClick={() => fetchData(tag)}
        className="w-10/12 bg-yellow-500 text-lg text-black py-2 rounded-lg mb-4"
      >
        Generate
      </button>
    </div>
  );
}
