import { BiMenu } from "react-icons/bi";
import { BiDotsVerticalRounded } from "react-icons/bi";

export default function ContenuSignet({ id, titre, date, image }) {
  return (
    <article>
      {/* BoutonMenu */}
      <BiMenu />

      {/* Image */}
      <img src={image} alt="apercu de l'article" />

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
