import Tag from "./components/Tag";
import Random from "./components/Random";

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col background overflow-x-hidden items-center">
      <h1 className="bg-white mt-[40px] px-10 py-2 text-3xl text-center font-bold w-11/12 rounded-lg">
        Random GIFs
      </h1>
      <div className="flex flex-col gap-y-10 mt-[30px] items-center w-full">
        <Random />
        <Tag />
      </div>
    </div>
  );
}
