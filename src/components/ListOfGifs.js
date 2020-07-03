import React, { useState, useEffect } from "react";
import Gif from "./Gif";
import { getGifs } from "../services/getGifs";

const ListOfGifs = ({ params }) => {
  const { keyword } = params;
  const [gifs, setGifs] = useState({
    loading: false,
    results: [],
  });

  useEffect(() => {
    setGifs((currentGifs) => ({ loading: true, results: currentGifs.results }));
    getGifs({ keyword }).then((gifs) => {
      setGifs({ loading: false, results: gifs });
    });
  }, [keyword]);

  if (gifs.loading) return <i>Cargando 🧭</i>;

  return (
    <>
      {gifs.results.map(({ id, title, url }) => (
        <Gif key={id} id={id} title={title} url={url} />
      ))}
    </>
  );
};

export default ListOfGifs;
