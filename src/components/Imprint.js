import React from "react";

function Imprint() {
  return (
    <div>
      <p>
        <span>geOps AG </span>
        <span>Eggstr. 42</span>
        <span>CH-4402 Frenkendorf</span>
      </p>
      <p>
        <span>fon +41 61 588 05 05</span>
        <span>
          mail&nbsp;
          <a
            href={"mailto:info@geops.ch"}
            style={{ color: "rgb(110, 144, 166)" }}
          >
            info@geops.ch
          </a>
        </span>
      </p>
      <p>
        <span>Geschäftsführer, VR-Präsident: Ulrich Müller-Ertle</span>
      </p>

      <p>
        <span>Handelsregister Nr. CHE-455.829.547 Basel-Landschaft</span>
        <span>UID: CHE-455.829.547 MWST</span>
      </p>
      <br />
      <p>
        <span>
          Haftungshinweis: Trotz sorgfältiger inhaltlicher Kontrolle übernehmen
          wir keine Haftung für die Inhalte externer Links. Für den Inhalt der
          verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
        </span>
      </p>

      <p>
        <span>
          Inhaltlich Verantwortlicher: Ulrich Müller-Ertle (Anschriften wie
          oben)
        </span>
      </p>
    </div>
  );
}

export default Imprint;
