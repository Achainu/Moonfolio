import { Mail } from "lucide-react";
import Alberic from '../assets/Amani.jpg'; // image placée dans src/assets

const Accueil = () => {
  return (
    <div className="flex flex-col md:flex-row items-center h-screen   text-white">

      {/* Image en haut sur mobile, à droite sur desktop */}
      <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
        <img
          src={Alberic}
          alt="Alberic"
          className="rounded-full shadow w-64 h-64 md:w-96 md:h-96 object-cover mt-8
           md:mt-16 border-8 border-warning 
          "
          
        />
      </div>

      {/* Texte en bas sur mobile, à gauche sur desktop */}
      <div className="flex flex-col justify-center items-center md:items-start md:justify-start w-full md:w-1/2 p-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center md:text-left">
          Bonjour, <br />
          je suis <span className="text-warning">Alberic</span>
        </h1>

        <p className="text-md md:text-xl font-bold text-center md:text-left mt-4 my-4">
          Je suis un développeur web <br />
          spécialisé dans le développement front-end
          et je suis passionné par la création de sites web
          et d'applications web modernes et réactifs.
        </p>

        <a href="#" className="btn bg-warning flex items-center gap-2 mt-4">
          <Mail /> Me contacter
        </a>
      </div>
    </div>
  );
};

export default Accueil;
