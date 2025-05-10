import Navbar from "./components/Navbar";
import Accueil from "./components/Accueil";
import Apropos from "./components/Apropos";
import Experiance from "./components/Experiance";
import Projet from "./components/projet";
import Contact from "./components/contact";
import Footer from "./components/Footer"; // ⬅️ Correction ici (majuscule)

export default function App() {
  return (
    <div>
      <div className="p-5 md:px-[15%]"> {/* Correction de px[15%] aussi */}
        <Navbar />
        <Accueil />
      </div>
      <Apropos />
      <Experiance />
      <Projet />
      <Contact />
      <Footer /> {/* ⬅️ Correction ici */}
    </div>
  );
}
