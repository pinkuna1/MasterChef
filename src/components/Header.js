import {LOGO_URL} from "../utils/constant";
import { useState } from "react";
import {Link} from "react-router-dom";

const Header = () => {
    const[btnNameReact,setBtnNameReact] = useState("login");

    return (
        <div className="flex  justify-between bg-pink-100 shadow-lg m-1">
            
            <div className="logo_container">
                <img className="w-32 h-32 rounded-full p-2" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
              <ul className="flex justify-between p-4 m-4">
                    <li className="px-4">
                    <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to ="/Contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/Grocery">grocery</Link>
                    </li>
                    <li className="px-4">Cart</li>
                    <button
                      className = "login"
                      onClick = {() => {
                       btnNameReact==="login"
                       ? setBtnNameReact("logout")
                       : setBtnNameReact("login");
                      }}
                      >
                        {btnNameReact}
                    </button>
                </ul>
                
            </div>
        </div>
    );
};
export default Header;