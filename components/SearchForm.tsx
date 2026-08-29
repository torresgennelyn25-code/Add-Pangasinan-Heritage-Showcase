export function SearchForm() {
  return <form className="search" action="#heritage">
    <label htmlFor="search">Find a heritage destination</label>
    <div><input id="search" name="search" placeholder="Try “Bolinao” or “islands”" /><button type="submit">Search</button></div>
  </form>;
}
