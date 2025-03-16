import { NavLink } from "react-router-dom";
/** Imporeterer inn resources verdien fra javascript filen ressurser */
import resources from "../assets/javascript/ressurser";
import "../assets/styles/nav.scss"

export default function Nav() {
  return (
    /** Oppretter Nav struktur */
    <nav>
      <ul>
        {resources.map((resource, index) => (
          <li key={index}>
            {/* Bruker NavLink til å sette opp navigasjons knappene, med en lenke til hver kategori
              * NavLink fungerer med link måte som button
              * Henter ut category fra resources og setter det som tekst
            */}
              <NavLink to={`/${resource.category}`} className="nav-link">{resource.category}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}