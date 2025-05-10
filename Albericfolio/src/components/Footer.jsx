
import { Facebook, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className=" text-white py-6 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-4 text-center">
        {/* Texte principal */}
        <div>
          <p className="text-sm">
            © {new Date().getFullYear()} <span className="font-semibold">Alberic Dev</span>. Tous droits réservés.
          </p>
          <p className="text-sm">Réalisé avec passion et dévouement.</p>
        </div>

        {/* Icônes réseaux sociaux */}
        <div className="flex gap-4 mt-2">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-warning transition-colors">
            <Github />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-warning transition-colors">
            <Linkedin />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-warning transition-colors">
            <Facebook />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
