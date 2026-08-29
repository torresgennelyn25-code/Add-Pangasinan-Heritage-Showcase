import Image from "next/image";
import { Heritage } from "../data/heritage";
import { Button } from "./Button";
export function HeritageCard({site}:{site:Heritage}) {
  return <article className="card">
    <Image src={site.image} alt={`${site.name} in ${site.location}`} width={800} height={500}/>
    <div className="card-body">
      <span className="eyebrow">{site.category}</span>
      <h3>{site.name}</h3>
      <p className="location">{site.location}</p>
      <p>{site.description}</p>
      <Button href="#about" variant="ghost">{site.accent}</Button>
    </div>
  </article>;
}
