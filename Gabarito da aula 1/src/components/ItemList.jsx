import React from "react";
import SigleItem from "./SigleItem";
import { Link } from "react-router-dom";

const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  return (
    <div>
      <div className="item-list__header">
        <h2>{title} Populares</h2>
        <Link to={`/${path}`} className="item-list__link">
          Mostrar tudo
        </Link>
      </div>
      <div className="item-list__container">
        {itemsArray
          .filter((_, index) => index < items)
          .map(({ id, image, name, banner, artist }, index) => (
            <SigleItem
              id={id}
              image={image}
              name={name}
              banner={banner}
              key={`${title}-${index}`}
              artist={artist}
              idPath={idPath}
            />
          ))}
      </div>
    </div>
  );
};

export default ItemList;
