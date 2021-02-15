import ContenuSignet from "./ContenuSignet";
import listeSignets from "../data/listeSignets.json";

export default function Signets() {
  console.log(listeSignets);

  return (
    <div>
      {listeSignets.map((signet) => (
        <ContenuSignet
          key={signet.id}
          id={signet.id}
          titre={signet.titre}
          couleur={signet.couleur}
          date={signet.date}
          image={signet.image}
        />
      ))}
    </div>
  );
}
