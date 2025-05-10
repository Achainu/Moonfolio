import imgHTML from "../assets/html.png";
import imgCSS from "../assets/css.png";
import imgJS from "../assets/js.png";
import imgREACT from "../assets/react.png";
import imgLARAVEL from "../assets/laravel.png";
import imgTAILWIND from "../assets/tailwind.png";
import imgCSHARP from "../assets/csharp.jpg";
import imgUNITY from "../assets/unity-hub.avif";
import imgBLANDER from "../assets/blander.jpg";

const skills = [
  { id: 1, name: "HTML", image: imgHTML },
  { id: 2, name: "CSS", image: imgCSS },
  { id: 3, name: "JavaScript", image: imgJS },
  { id: 4, name: "React", image: imgREACT },
  { id: 5, name: "Laravel", image: imgLARAVEL },
  { id: 6, name: "Tailwind CSS", image: imgTAILWIND },
  { id: 7, name: "C#", image: imgCSHARP },
  { id: 8, name: "Unity", image: imgUNITY },
  { id: 9, name: "Blender", image: imgBLANDER },
];

const Experiance = () => {
  return (
    <div className="py-12  text-white">
      <h1 id="experience" className="text-3xl font-bold text-center bg-warning text-black p-6 mb-12 rounded-xl w-fit mx-auto">
        Expérience
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4 sm:px-8 max-w-7xl mx-auto place-items-center">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="w-full max-w-[140px] flex flex-col items-center p-4 bg-gray-800 border border-yellow-400 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={skill.image}
              alt={skill.name}
              title={skill.name}
              className="w-16 h-16 object-contain mb-2 rounded"
            />
            <p className="text-sm font-semibold text-center">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiance;
