import { BsArrowReturnLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black flex justify-center items-center flex-col text-center">
      <h1 className="font-MANGO text-8xl my-6 text-white">404</h1>
      <h1 className="uppercase text-white font-MANGO text-2xl md:text-4xl tracking-wide">
        Oh oh! Looks like you're lost in the post-apocalypse world.
      </h1>
      <h2 className="font-MANGO text-xl md:text-3xl text-cus-orange my-2 tracking-wide">
        Stay calm and don't freak out!
      </h2>
      <Link
        to="/"
        className="border-red-500 border rounded-md uppercase px-6 py-2 mx-auto my-3 text-white bg-black hover:scale-105 hover:bg-cus-orange text-xl  md:text-2xl tracking-wider flex items-center justify-between font-MANGO gap-4"
      >
        take me back
        <BsArrowReturnLeft />
      </Link>
    </div>
  );
};
export default NotFound;
