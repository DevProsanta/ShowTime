import React from "react";
import Items from "./Items";

function ItemList({ results }) {
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 lg:grid-cols-3 3xl:flex flex-wrap justify-center">
      {results?.map((result) => (
        <Items key={result.id} result={result} />
      ))}
    </div>
  );
}

export default ItemList;
