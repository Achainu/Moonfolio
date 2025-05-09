import { Biohazard } from "lucide-react";

const Navbar = () => {
    return (
        <div className="flex md:justify-between items-center p-4 hideme justify-center ">
            <a href=""
                className="flex items-center  text-4xl font-bold
                text-center ">
                <span className="flex items-center  text-3xl font-bold">
                    <Biohazard className="text-warning w-20 h-20" />
                    Albe<span className="text-warning">DEV</span>
                </span>
            </a>
            <ul className="hidden md:flex md:items-center md:gap-4 mt-4 md:mt-0">
                <li className="inline-block px-4 py-2 text-white-700 ">
                    <a href="#home">Acueil</a>
                </li>
                <li className="inline-block px-4 py-2 text-white-700 ">
                    <a href="#about">A propos de moi</a>
                </li>
                <li className="inline-block px-4 py-2 text-white-700 ">
                    <a href="#projects">Mes Experiance</a>
                </li>
                <li className="inline-block px-4 py-2 text-white-700 ">
                    <a href="#projects">Projects</a>
                </li>
                <li className="inline-block px-4 py-2 text-white-700 ">
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar