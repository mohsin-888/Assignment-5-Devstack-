import {useState} from "react";

const Navbar = ()=>{
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white">

      <div className="mx-auto max-w-7xl px-4 py-4">

        <div className="grid grid-cols-3 items-center md:flex md:justify-between">

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="justify-self-start text-2xl md:hidden"
          >
              ☰
          </button>




          <div className="flex items-center justify-center gap-2">
            <div className="rounded-md bg-pink-500 px-2 py-1 text-sm font-bold text-white">
              DS
            </div>

            <h2 className="hidden text-xl font-bold sm:block">
              Dev <span className="text-pink-500">Stack</span>
            </h2>
          </div>




          <div className="hidden items-center gap-8 md:flex">
            <a href="#" className="text-pink-500">Home</a>
            <a href="#technologies" className="text-gray-600">Technologies</a>
            <a href="#" className="text-gray-600">Projects</a>
            <a href="#" className="text-gray-600">About</a>
            <a href="#" className="text-gray-600">Contact</a>
          </div>




          <div className="flex justify-self-end items-center gap-2">
            <button className="hidden text-gray-700 sm:block">
              Sign In
            </button>

            <button className="rounded-full bg-pink-500 px-4 py-2 text-sm text-white hover:bg-pink-600">
              Sign Up
            </button>
          </div>

        </div>





        {menuOpen && (
          <div className="mt-4 flex flex-col gap-4 border-t pt-4 md:hidden">
            <a href="#">Home</a>
            <a href="#technologies">Technologies</a>
            <a href="#">Projects</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;