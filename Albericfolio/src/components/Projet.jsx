import { Code2, Server, Palette, Box, Camera } from "lucide-react";

const projectSections = [
    {
        id: 1,
        title: "Site de Gestion des Utilisateurs",
        description: "Application web complète en Laravel avec gestion des rôles, authentification et CRUD utilisateurs.",
        icon: <Code2 className="text-warning w-6 h-6" />,
    },
    {
        id: 2,
        title: "API RESTful avec Laravel",
        description: "Développement d’une API performante pour gérer des données d’une application web.",
        icon: <Server className="text-warning w-6 h-6" />,
    },
    {
        id: 3,
        title: "Portfolio Moderne en React",
        description: "Création d’un site personnel responsive avec animations, dark mode et formulaire de contact.",
        icon: <Palette className="text-warning w-6 h-6" />,
    },
    {
        id: 5,
        title: "Animation de Personnage 3D",
        description: "Réalisation d’un personnage animé (rigging, skinning, animation de marche) prêt à être exporté vers Unity.",
        icon: <Box className="text-warning w-6 h-6" />,
    },
    {
        id: 6,
        title: "Scène Architecturale 3D",
        description:
            "Modélisation d’une maison moderne avec éclairage réaliste, matériaux PBR et rendu final dans Cycles.",
        icon: <Camera className="text-warning w-6 h-6" />,
    },
    {
        id: 5,
        title: "Modélisation d’Environnement 3D",
        description:
            "Création d’un environnement 3D immersif (forêt, terrain, éléments naturels) pour jeux vidéo ou rendu réaliste dans Blender.",
        icon: <Box className="text-warning w-6 h-6" />,
    },


];

const Projet = () => {
    return (
        <div className="py-12 text-white">
            <h1 id="projects" className="text-3xl font-bold text-center bg-warning text-black p-6 mb-10 md:mb-20 rounded-xl w-fit mx-auto">
                Mes Projets
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
                {projectSections.map((project) => (
                    <div
                        key={project.id}
                        className="flex items-start gap-4 p-4 bg-gray-800 rounded-xl shadow-md hover:scale-105 transition-transform"
                    >
                        <div className="p-3 bg-gray-700 rounded-full">
                            {project.icon}
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold">{project.title}</h2>
                            <p className="text-sm text-gray-300 mt-1">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projet;
