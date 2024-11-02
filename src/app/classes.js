
import Image from "next/image";

export default function Home() {
    const listofclasses = ["English", "History", "Physics", "Physical Education", "Math", "etc.."]
    const listofgrades = ["A","B+","B-","C+","D-","N"]
    const elements = [];
    for (let i = 0; i < 7; i++) {
        elements.push(<p className="mt-3">
            <input className="form-control grades w-0.25 p-1 bg-gray-200 rounded-md" defaultValue={listofclasses[i]} ></input>
            <input className="ml-3  form-control grades w-10 p-1 bg-gray-200 rounded-md" defaultValue={listofgrades[i]} id={[i]}></input>

            </p>
        );
    }

    return <>{elements}</>;
}





