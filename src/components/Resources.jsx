import { Link, useParams } from "react-router-dom";
import resources from "../assets/javascript/ressurser";
import "../assets/styles/resources.scss"


export default function Resources() {   
  const { category } = useParams();
  const filteredResources = resources.filter(resource => resource.category === category);

  return (
    <section>
      {filteredResources.map((resource, index) => (
        <article key={index}>  
          <ul>
            {resource.sources.map((source, idx) => (
              <li key={idx}>
                {/** Henter url-en fra resources i en Link, og tittelen*/}
                <Link to={source.url}>{source.title}</ Link>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}