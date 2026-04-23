import React from "react"
import logo from '../logo.png'
import { Link } from "react-router-dom"
const Navbar = () => {
    return(
        <div className="flex border space-x-8 items-center pl-3 py-4">

            <img className="w-[50px]" src={logo} alt="" />
            <Link to="/" className="text-blue-500 text-2xl font-bold font-mono ..." >Movies</Link>
            <Link to="/watchlist" className="text-blue-500  text-2xl font-bold font-mono ...">WatchList</Link>
        </div>
    )
}
export default Navbar