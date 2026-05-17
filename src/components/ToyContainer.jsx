import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, likeToy, deleteToy }) {
  return (
    <div id="toy-collection">
      {toys.map((toy) => (
        <ToyCard
          key={toy.id}
          toy={toy}
          likeToy={likeToy}
          deleteToy={deleteToy}
        />
      ))}
    </div>
  );
}

export default ToyContainer;