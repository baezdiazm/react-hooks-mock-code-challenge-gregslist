import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] =useState("")

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(res => res.json())
    .then(setListings)
  }, [])

  const itemsToDisplay = listings.filter((listing) =>
    listing.description.toLowerCase().includes(search.toLowerCase())
  );

  
  return (
    <div className="app">
      <Header search={search} onSearch={setSearch} />
      <ListingsContainer itemsToDisplay={itemsToDisplay} setListings={setListings} />
    </div>
  );
}

export default App;
