
import Link from "next/link";
import Button from "./pyButton"

export default function Home() {
  return (
    <div className="bg-white w-screen h-screen relative overflow-hidden z-10">
      <div className="flex justify-center flex-wrap items-center space-x-4 h-full ">
        <div>
          <h1 className="text-8xl font-sans font-semibold text-red-500 font-heading my-5 text-center">
            Rate My Driver
          </h1>
          <h3 className="text-3xl font-semibold text-red-700 font-heading my-5 text-center">
            Keeping your insurance to a minimum
          </h3>

          <div className="flex items-center justify-center w-full relative ">
            <Link
              href="/driver"
              className="text-white text-2xl bg-red-900 hover:bg-white hover:text-red-900 py-2 px-4 rounded transition duration-300 ease-in-out font-heading font-bold  mx-5  drop-shadow-xl z-40"
            >
              OWNER SIGN IN
            </Link>

            <Button/>
            <div></div>

            
          </div>
        </div>
      </div>
    </div>
  );
}


