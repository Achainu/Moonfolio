
import Navbar from "./components/Navbar"
import Accueil from "./components/Accueil"
import Apropos from "./components/Apropos"
import Experiance from "./components/Experiance"
export default function App() {
  return (
    <div>
      <div className="p-5 md:px[15%] ">
        <Navbar></Navbar>
        <Accueil></Accueil>
      </div>
      <Apropos />
      <Experiance></Experiance>
    </div>
  )
}