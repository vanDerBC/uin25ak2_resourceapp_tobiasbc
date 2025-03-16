import { useParams } from "react-router-dom";
import resources from "../assets/javascript/ressurser";
import "../assets/styles/pageTitle.scss"


export default function PageTitle() {
  const { category } = useParams();
  const filteredResources = resources.filter(resource => resource.category === category);

  return (
    <>
      {filteredResources.map((resource, index) => (
        <article key={index}>
          {/** Henter ut kategorien fra resources som soverskrift */}
          <h1>{resource.category}</h1>
          {/** Henter ut texten fra resources */}
          <p>{resource.text}</p>
        </article>
      ))}
    </>
  );
}
