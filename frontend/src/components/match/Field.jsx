import React from "react";
import fieldImage from "../../assets/field.jpg";
import overlayImage1 from "../../assets/player.jpg";
import overlayImage2 from "../../assets/player.jpg";
import "../../styles/Field.css"; // Asegúrate de que la ruta sea correcta
import PlayerOnField from "./PlayerOnField";

const Field = () => {
  return (
    <div className="field-container">
      <img src={fieldImage} alt="Field" className="field-image" />
      <PlayerOnField
        player={{ name: "Portero", position: "gk", photo: overlayImage2 }}
      />
      <PlayerOnField
        player={{ name: "Portero", position: "def1", photo: overlayImage2 }}
      />
      <PlayerOnField
        player={{ name: "Portero", position: "def2", photo: overlayImage2 }}
      />
      <PlayerOnField
        player={{ name: "Portero", position: "lb", photo: overlayImage2 }}
      />
      <PlayerOnField
        player={{ name: "Portero", position: "rb", photo: overlayImage2 }}
      />
      <PlayerOnField
        player={{ name: "Portero", position: "mc1", photo: overlayImage2 }}
      />
      <PlayerOnField
        player={{ name: "Portero", position: "mc2", photo: overlayImage2 }}
      />
      <PlayerOnField
        player={{ name: "Portero", position: "rw", photo: overlayImage2 }}
      />
      <PlayerOnField
        player={{ name: "Portero", position: "lw", photo: overlayImage2 }}
      />
      <PlayerOnField
        player={{ name: "Portero", position: "dc1", photo: overlayImage2 }}
      />
      <PlayerOnField
        player={{ name: "Portero", position: "dc2", photo: overlayImage2 }}
      />
    </div>
  );
};

export default Field;
