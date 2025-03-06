import { useState } from "react";
import { Link } from "react-router-dom";
import resources from "../assets/javascript/ressurser";
import "../assets/styles/nav.scss"

export default function Nav() {
  const [selectedCategory, setSelectedCategory] = useState(resources[0].category);

  return (
    <nav>
      <ul>
        {resources.map((resource, index) => (
          <li key={index}>
            <button
              className={selectedCategory === resource.category ? "selected" : ""}  
              onClick={() => setSelectedCategory(resource.category)}
            >
              <Link to={`/${resource.category}`}>{resource.category}</Link>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}