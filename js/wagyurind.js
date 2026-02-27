const translations = {
    de: {
        nav_start: "START",
        nav_wagyu: "BIO WAGYU RIND",
        nav_wohl: "TIERWOHL",
        nav_grappi: "GRÄPPI'S",
        nav_galerie: "GALERIE",
        nav_shop: "SHOP",
        card_title: "BIO WAGYU RIND",
        card_desc:
            "Edle Genetik, regionale Wurzeln – das Beste aus zwei Welten",
        breeding_title: "ZUCHT & HALTUNG",
        breeding_desc:
            "Unsere Bio Wagyu-Rinder verbinden japanische Genetik mit robusten Schweizer Rassen. Das Ergebnis: Tiere, die perfekt an unser Klima angepasst sind und Fleisch mit einzigartiger Marmorierung liefern. Sie wachsen auf unseren Bio-Weiden auf, ohne Stress und mit viel Zeit – so, wie es sein soll.",
        quality_title: "QUALITÄT & GENUSS",
        quality_desc:
            "Das fein marmorierte Fleisch unserer Wagyu-Rinder steht für höchste Qualität. Die intramuskuläre Fetteinlagerung sorgt für unvergleichliche Zartheit und einen intensiven, buttrigen Geschmack. Jedes Stück erzählt die Geschichte von artgerechter Haltung und handwerklicher Sorgfalt.",
        footer_powered: "Shop powered by",
        footer_tagline: "Nachbarschafts-Shopping in Realtime. swiss made",
        footer_legal: "Impressum/Datenschutz/AGB",
        footer_contact: "Kontakt",
        footer_copyright:
            "© 2026 WAGYU Biohof Linde / Christian Gräppi | Realisation: openarena GmbH, Merzligen",
    },
    fr: {
        nav_start: "ACCUEIL",
        nav_wagyu: "BŒUF WAGYU BIO",
        nav_wohl: "BIEN-ÊTRE ANIMAL",
        nav_grappi: "CHEZ GRÄPPI",
        nav_galerie: "GALERIE",
        nav_shop: "BOUTIQUE",
        card_title: "BŒUF WAGYU BIO",
        card_desc:
            "Une génétique noble, des racines régionales – le meilleur des deux mondes",
        breeding_title: "ÉLEVAGE & DÉTENTION",
        breeding_desc:
            "Nos bovins Wagyu bio associent la génétique japonaise à des races suisses robustes. Le résultat : des animaux parfaitement adaptés à notre climat qui fournissent une viande au persillage unique. Ils grandissent dans nos pâturages bio, sans stress et avec beaucoup de temps – comme il se doit.",
        quality_title: "QUALITÉ & PLAISIR",
        quality_desc:
            "La viande finement persillée de nos bœufs Wagyu est synonyme de qualité supérieure. Le dépôt de graisse intramusculaire assure une tendreté incomparable et un goût intense de beurre. Chaque morceau raconte l'histoire d'un élevage respectueux et d'un soin artisanal.",
        footer_powered: "Boutique propulsée par",
        footer_tagline: "Shopping de proximité en temps réel. swiss made",
        footer_legal: "Mentions légales/Protection des données/CGV",
        footer_contact: "Contact",
        footer_copyright:
            "© 2026 WAGYU Biohof Linde / Christian Gräppi | Réalisation : openarena GmbH, Merzligen",
    },
};

document.addEventListener("DOMContentLoaded", () => {
    const radioButtons = document.querySelectorAll('input[name="language"]');
    const menuToggle = document.getElementById("menu-toggle");

    function updateLanguage(lang) {
        document.querySelectorAll("[data-i18n]").forEach((el) => {
            const key = el.getAttribute("data-i18n");
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
    }

    radioButtons.forEach((radio) => {
        radio.addEventListener("change", () => {
            if (radio.checked) {
                updateLanguage(radio.id);
                if (menuToggle) menuToggle.checked = false;
            }
        });
    });

    const activeRadio = document.querySelector(
        'input[name="language"]:checked',
    );
    if (activeRadio) {
        updateLanguage(activeRadio.id);
    }
});
