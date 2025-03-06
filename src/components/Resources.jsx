import { useParams } from "react-router-dom";
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
                <a href={source.url}>{source.title}</a>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}