import React, {useState} from "react";

function ListingCard({post, onDelete}) {
  const [favorite, setFavorite] = useState(false)

  function handleFave() {
    setFavorite(favorite => !favorite)
  }

  function onDeleteClick() {
    onDelete(post)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={post.image} alt={"description"} />
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active" onClick={handleFave}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFave}>☆</button>
        )}
        <strong>{post.description}</strong>
        <span> · {post.location}</span>
        <button className="emoji-button delete" onClick={onDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
