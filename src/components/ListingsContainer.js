import React from "react";
import ListingCard from "./ListingCard";

  function ListingsContainer({ itemsToDisplay, setListings }) {

    function handleDelete(post) {
      fetch(`http://localhost:6001/listings/${post.id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then( () => {
      const newData = itemsToDisplay.filter((item) => (item.id !== post.id))
      setListings(newData)
    })
    }

    const allListings = itemsToDisplay.map(post => {
      return (
        <ListingCard key={post.id}post={post} onDelete={handleDelete}/>
      )
    })

  return (
    <main>
      <ul className="cards">
        {allListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
