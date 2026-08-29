import { heritageSites } from "../data/heritage";
import { HeritageCard } from "./HeritageCard";
export function HeritageGrid() {
  return <div className="grid">{heritageSites.map(site => <HeritageCard key={site.name} site={site}/>)}</div>;
}
