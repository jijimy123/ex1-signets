import { BiMenu } from "react-icons/bi";
import { BiDotsVerticalRounded } from "react-icons/bi";

export default function ContenuSignet({ id, couleur, titre, date }) {
  return (
    <article style={{ backgroundColor: couleur }}>
      {/* BoutonMenu */}
      <BiMenu />

      {/* Image */}
      <img
        src={"images-signets/signet00" + id + ".png"}
        alt={"Image " + titre}
      />

      <div>
        {/* Titre */}
        <h2>{titre}</h2>

        {/* Date */}
        <span>
          Modifié : <p>{date}</p>
        </span>

        {/* Bouton3Points */}
        <BiDotsVerticalRounded />
      </div>
    </article>
  );
}
