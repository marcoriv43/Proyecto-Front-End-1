import { Link, NavLink } from "react-router";


export const MenuDes =() => {
    return (
        <div >
        <NavLink to= "/login">
            <button className='flex flex-col MenuDes'>
            <h1>Menu</h1>
            <ul className="flex flex-col gap-4">     
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            </button>
        </NavLink>
        </div>
    )
}