import { useRef } from "react";
import { FaSearch } from "react-icons/fa";

const Navbar = ({search}) => {
    const inputRef=useRef();

    return (
        <div className="flex items-center justify-center  h-[100px] border-b border-b-gray-200 drop-shadow-4xl">
            <div className="flex flex-row gap-5 text-center bg-blue-500 hover:bg-blue-600 items-center justify-center rounded-lg" >
                <input ref={inputRef} type="text" id="name" placeholder="search" className="bg-white  p-2 border border-black rounded-lg "/>
               <FaSearch onClick={()=>search(inputRef.current.value)}  className="mr-3 text-white w-full h-full text-xl cursor-pointer"/>
            </div>
        </div>
    )
}

export default Navbar
