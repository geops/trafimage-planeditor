import React from "react";

const style = {
  lineHeight: "22.5px",
  marginTop: "-20px"
};

function Imprint() {
  return (
    <div>
      <p style={style}>
        geOps AG
        <br />
        Eggstr. 42
        <br />
        CH-4402 Frenkendorf
      </p>

      <p style={style}>
        fon +41 61 588 05 05
        <br />
        mail&nbsp;
        <a
          href={"mailto:info@geops.ch"}
          style={{ color: "rgb(110, 144, 166)" }}
        >
          info@geops.ch
        </a>
      </p>
      <p style={style}>Geschäftsführer, VR-Präsident: Ulrich Müller-Ertle</p>

      <p style={style}>
        Handelsregister Nr. CHE-455.829.547 Basel-Landschaft
        <br />
        UID: CHE-455.829.547 MWST
      </p>
      <br />
      <p style={style}>
        Haftungshinweis: Trotz sorgfältiger inhaltlicher Kontrolle übernehmen
        wir keine Haftung für die Inhalte externer Links. Für den Inhalt der
        verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
      </p>
      <p style={style}>
        Inhaltlich Verantwortlicher: Ulrich Müller-Ertle (Anschriften wie oben)
      </p>
    </div>
  );
}

export default Imprint;
