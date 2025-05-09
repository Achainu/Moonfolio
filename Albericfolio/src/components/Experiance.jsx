// Assure-toi d'importer les images existantes
import imgHTML from "../assets/html.png";
import imgCSS from "../assets/css.png";
import imgJS from "../assets/js.png"; // Assure-toi que ce fichier existe bien avec ce nom
import imgREACT from "../assets/react.png";
import imgTAILWIND from "../assets/tailwind.png";
import imgCSHARP from "../assets/csharp.jpg";


const skills = [
    { id: 1, name: "HTML", image: imgHTML },
    { id: 2, name: "CSS", image: imgCSS },
    { id: 3, name: "JavaScript", image: imgJS },
    { id: 4, name: "React", image: imgREACT },
    { id: 6, name: "Tailwind CSS", image: imgTAILWIND },
    { id: 7, name: "csharp", image: imgCSHARP },

];

const Experiance = () => {
    return (
        <div className="py-12  text-white">
  <h1 className="text-3xl font-bold text-center bg-yellow-500 text-black p-6 mb-10 md:mb-20 rounded-xl w-fit mx-auto">
    Expérience
  </h1>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 px-4 sm:px-8 max-w-6xl mx-auto">
    {skills.map((skill) => (
      <div
        key={skill.id}
        className="w-full max-w-[150px] border-2 border-warning flex flex-col items-center p-4 bg-gray-800 shadow-md hover:scale-105 transition-transform duration-300 ease-in-out rounded-xl mx-auto"
      >
        <img
          src={skill.image}
          alt={skill.name}
          title={skill.name}
          className="object-contain w-16 h-16 mb-2"
        />
        <p className="text-base font-semibold text-center" aria-label={skill.name}>
          {skill.name}
        </p>
      </div>
    ))}
  </div>
</div>

    );
};

export default Experiance;
