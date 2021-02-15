import "./Appli.scss";

import Entete from "./composants/Entete";
import Signets from "./composants/Signets";
import BoutonAjout from "./composants/BoutonAjout";

export default function Appli() {
  return (
    <div className="Appli">
      <Entete />

      <Signets />

      <BoutonAjout />
    </div>
  );
}
