import Image from "next/image";
import Classes from "./classes";
import Button from "./button";

export default function Home() {
  

  return (
    <div>
      <div className="relative isolate overflow-hidden bg-gray-300 py-24 sm:py-32">
      <h1 className="text-4xl ml-10 text-gray-700 font-semibold">GPA Calculator</h1>
      <h2 className="text-md ml-10">Calculate your GPA below! Quick and easy.</h2>

    </div>
    <div className="relative isolate overflow-hidden py-5 p-10">


    <h3 className="text-xl">Class Name / Grades</h3>
    <Classes />
 
    </div>
    <div className="ml-10 mb-10 w-1/6" >
    <Button />

</div>
    </div>
  );
}
