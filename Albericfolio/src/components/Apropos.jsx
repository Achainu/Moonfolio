import { LetterText, CalendarSync, Paintbrush, Gamepad2 } from 'lucide-react';

const aboutSections = [
  {
    id: 1,
    title: "Développeur Frontend",
    description: "Je suis un développeur frontend avec une bonne expérience.",
    icon: <LetterText className="text-warning w-6 h-6" />,
  },
  {
    id: 2,
    title: "Développeur Backend",
    description: "Je maîtrise les bases du développement backend pour créer des APIs robustes.",
    icon: <CalendarSync className="text-warning w-6 h-6" />,
  },
  {
    id: 3,
    title: "Passionné par l'UI/UX",
    description: "Créer des interfaces utilisateur attrayantes et fonctionnelles est ma priorité.",
    icon: <Paintbrush className="text-warning w-6 h-6" />,
  },
  {
    id: 4,
    title: "Passionné par la 3D & les Jeux Vidéo",
    description: "J’aime concevoir des environnements 3D et développer des jeux avec Unity et Blender.",
    icon: <Gamepad2 className="text-warning w-6 h-6" />,
  },
];

const Apropos = () => {
  return (
    <div className="py-10 px-4  text-white">
      <h1 id="apropos" className="text-3xl font-bold text-center bg-yellow-500 text-black p-6 mb-12 rounded-xl w-fit mx-auto">
        À propos
      </h1>

      <div className="flex flex-col items-center gap-8 max-w-3xl mx-auto">
        {aboutSections.map((section) => (
          <div
            key={section.id}
            className="flex items-start gap-4 p-4 bg-gray-800 rounded-xl w-full shadow-md hover:scale-[1.02] transition-transform"
          >
            <div className="p-2 bg-gray-700 rounded-full">{section.icon}</div>
            <div>
              <h2 className="text-lg font-semibold mb-1">{section.title}</h2>
              <p className="text-sm text-gray-300">{section.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apropos;
