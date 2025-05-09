import { LetterText, CalendarSync, Paintbrush } from 'lucide-react';
import Alberic from '../assets/Amani.jpg'; // Assure-toi que ce fichier existe bien

const aboutSections = [
    {
        id: 1,
        title: "Développeur Frontend",
        description: "Je suis un développeur frontend avec une bonne expérience.",
        icon: <LetterText className="text-warning scale-150" />,
    },
    {
        id: 2,
        title: "Développeur Backend",
        description: "Je maîtrise les bases du développement backend pour créer des APIs robustes.",
        icon: <CalendarSync className="text-warning scale-150" />,
    },
    {
        id: 3,
        title: "Passionné par l'UI/UX",
        description: "Créer des interfaces utilisateur attrayantes et fonctionnelles est ma priorité.",
        icon: <Paintbrush className="text-warning scale-150" />,
    },
];

const Apropos = () => {
    return (
        <div className="py-10 px-4 flex-col">
            <h1 className="text-3xl font-bold text-center bg-warning text-black p-6 mb-10 md:mb-20 rounded-xl w-fit mx-auto">
                À propos
            </h1>

            <div className="flex flex-col-reversel md:flex-row items-center justify-around gap-10 ">
                {/* Image à gauche en grand écran */}
                <div className="hidden md:block">
                    <img
                        src={Alberic}
                        alt="Alberic"
                        className="shadow-md w-80 md:h-96 object-cover rounded-xl"
                    />
                </div>

                {/* Sections à propos */}
                <div className="space-y-6 max-w-lg">
                    {aboutSections.map((section) => (
                        <div key={section.id} className="flex items-start gap-4">
                            <div>{section.icon}</div>
                            <div>
                                <h2 className="text-xl font-semibold">{section.title}</h2>
                                <p className="text-sm text-gray-300">{section.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Apropos;
