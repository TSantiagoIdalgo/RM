import React, {useState, useEffect} from "react";
import icon from "../../../assets/icon/icon.png"
import ExtendedBar from "./extendedbar";
import SearchBar from "../searchBar/searchBar";

export default function NavBar(){
    let [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    const handleResize = () => {
        setViewportWidth(window.innerWidth);
      };
      useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    return(
        <div className="h-14 w-full bg-gray-900 flex justify-between flex-wrap" >
            <img src={icon} alt="icon" className="h-5/6 ml-6 mt-1"/> 
            {viewportWidth <= 768? <ExtendedBar /> : <SearchBar/>}
        </div>
    )
}
