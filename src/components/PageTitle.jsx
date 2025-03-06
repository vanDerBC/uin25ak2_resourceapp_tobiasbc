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
          <h1>{resource.category}</h1>
          <p>{resource.text}</p>
        </article>
      ))}
    </>
  );
}
