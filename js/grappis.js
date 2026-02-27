const translations = {
    de: {
        nav_start: "START",
        nav_wagyu: "BIO WAGYU RIND",
        nav_wohl: "TIERWOHL",
        nav_grappi: "GRÄPPI'S",
        nav_galerie: "GALERIE",
        nav_shop: "SHOP",
        grappi_title: "GRÄPPI'S",
        grappi_subtitle: "Die Menschen hinter dem Biohof",
        history_title: "UNSERE GESCHICHTE",
        history_p1:
            "Ich führe einen Familienbetrieb, der seit Generationen weitergegeben wird.",
        history_p2: "2002 habe ich den Hof von meinem Vater übernommen.",
        history_p3:
            "2014 kam der Gemüsebau dazu, und 2016 stellte ich den ganzen Betrieb auf Bio um.",
        history_p4:
            "2017 entschied ich mich für die Mutterkuhhaltung mit Wagyu-Rindern.",
        history_p5: "2025 habe ich den Gemüsebau beendet.",
        history_highlight:
            "Heute steht der Hof für klare, einfache Grundsätze: Respekt gegenüber den Tieren und eine Landwirtschaft, die zu mir passt.",
        philo_title: "UNSERE PHILOSOPHIE",
        philo_p1:
            "Für uns steht der respektvolle Umgang mit Tier, Natur und Kunde im Mittelpunkt. Wir glauben an Transparenz, kurze Wege und ehrliche Produkte. Jedes Tier auf unserem Hof hat einen Namen und bekommt die Zeit, die es braucht.",
        philo_p2:
            "Diese Haltung spiegelt sich in jedem Stück Fleisch wider, das wir verkaufen. Regional, bio und mit Herz – das ist unsere Überzeugung.",
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
        grappi_title: "CHEZ GRÄPPI",
        grappi_subtitle: "Les visages derrière la ferme bio",
        history_title: "NOTRE HISTOIRE",
        history_p1:
            "Je dirige une exploitation familiale transmise de génération en génération.",
        history_p2: "En 2002, j'ai repris la ferme de mon père.",
        history_p3:
            "En 2014, le maraîchage s'est ajouté, et en 2016, j'ai converti toute l'exploitation au bio.",
        history_p4:
            "En 2017, j'ai opté pour l'élevage de vaches allaitantes avec des bœufs Wagyu.",
        history_p5: "En 2025, j'ai arrêté le maraîchage.",
        history_highlight:
            "Aujourd'hui, la ferme repose sur des principes clairs et simples : le respect des animaux et une agriculture qui me ressemble.",
        philo_title: "NOTRE PHILOSOPHIE",
        philo_p1:
            "Pour nous, le respect de l'animal, de la nature et du client est au cœur de tout. Nous croyons en la transparence, aux circuits courts et aux produits authentiques. Chaque animal de notre ferme a un nom et reçoit le temps dont il a besoin.",
        philo_p2:
            "Cette attitude se reflète dans chaque morceau de viande que nous vendons. Régional, bio et avec du cœur – telle est notre conviction.",
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
