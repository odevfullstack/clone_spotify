import React from "react";
import ItemList from "./ItemList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Main = () => {
  // songsArray.map(({ image, name, duration, artist, audio, id }) => {
  //   console.log(`Música: ${name}, Artista: ${artist}`);
  // });
  return (
    <main className="main">
      <ItemList
        title={"Artistas"}
        items={5}
        itemsArray={artistArray}
        path={"artists"}
        idPath={"artist"}
      />
      <ItemList
        title={"Músicas"}
        items={20}
        itemsArray={songsArray}
        path={"songs"}
        idPath={"song"}
      />
    </main>
  );
};

export default Main;
