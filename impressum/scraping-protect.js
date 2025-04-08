document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("impressum-content");
    if (!container) return;
  
    const parts = [
      "Angaben gemäß § 5 TMG",
      "Clarissa Bilke",
      "Leipzig",
      "E-Mail: ",
      "clarissa.bilke93",
      "@",
      "gmx",
      ".de",
      "Website: https://clarafalldevmonster.github.io/Clarissa-Bilke-UX-Design/",
      "Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:",
      "Clarissa Bilke",
      "Diese Webseite dient ausschließlich persönlichen und nicht-kommerziellen Zwecken, insbesondere zur Präsentation meiner kreativen Arbeiten und zur Kontaktaufnahme im Rahmen von Bewerbungen.",
      "Haftungsausschluss:",
      "Die Inhalte dieser Webseite wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehme ich jedoch keine Gewähr. Als private Anbieterin bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Eine Verpflichtung zur Überwachung übermittelter oder gespeicherter fremder Informationen besteht jedoch nicht (§§ 8 bis 10 TMG).",
      "Haftung für Links:",
      "Meine Webseite enthält Links zu externen Webseiten Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.",
      "Urheberrecht:",
      "Die durch mich erstellten Inhalte und Werke auf dieser Webseite unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung oder sonstige Verwendung bedürfen meiner ausdrücklichen schriftlichen Zustimmung. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet."
    ];
  
    container.innerHTML = `
      <p class="mainTextBlack">
        ${parts[0]}<br><br>
        <strong>${parts[1]}</strong><br>
        ${parts[2]}<br>
        ${parts[3]}<a href="mailto:${parts[4]}${parts[5]}${parts[6]}${parts[7]}" style="color:#ed61ad">${parts[4]}${parts[5]}${parts[6]}${parts[7]}</a><br>
        ${parts[8]}<br><br>
        ${parts[9]}<br>
        <strong>${parts[10]}</strong><br><br>
        ${parts[11]}<br><br>
        ${parts[12]}<br><br>
        ${parts[13]}<br><br>
        ${parts[14]}<br><br>
        ${parts[15]}<br><br>
        ${parts[16]}<br><br>
        ${parts[17]}
      </p>
    `;
  });
  