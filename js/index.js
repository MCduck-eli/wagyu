const translations = {
    de: {
        nav_start: "START",
        nav_wagyu: "BIO WAGYU RIND",
        nav_wohl: "TIERWOHL",
        nav_grappi: "GRÄPPI'S",
        nav_galerie: "GALERIE",
        nav_shop: "SHOP",
        hero_title: "Aus respektvoller Biohaltung",
        shop_title: "DIREKT VERKAUF AB HOF - ZUM SHOP",
        shop_description:
            "Unsere 5-6kg/10+kg Mischpakete: edle Stücke, klassische Cuts; voller Geschmack und mit echter Wertschätzung für das ganze Tier.",
        customer_say:
            "Das haben unsere Kundinnen und Kunden gesagt (Karussel?):",
        feedback_1: "Kundenfeedback 1",
        feedback_2: "Kundenfeedback 2",
        feedback_3: "Kundenfeedback 3",
        shop_button_text: "ZUM SHOP",
        contact_title: "KONTAKT",
        contact_subtitle: "Bei Fragen sind wir gerne für Sie da",
        owner_name: "Christian GRÄPPI",
        stress_title: "STRESSFREIE VOM HOF",
        stress_desc_1:
            "Die Hofschlachtung bedeutet, die Verantwortung bis zum letzten Handgriff zu übernehmen.",
        stress_desc_2: "Dabei entsteht Fleisch aus Respekt – nicht aus Stress.",
        more_info_text: "Mehr Info über unser Verarbeitungspartner",
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
        hero_title: "Issu d'une agriculture biologique respectueuse",
        shop_title: "VENTE DIRECTE À LA FERME - VERS LA BOUTIQUE",
        shop_description:
            "Nos colis mixtes de 5-6kg/10+kg : morceaux nobles, coupes classiques ; plein de saveur et avec une réelle appréciation pour l'animal entier.",
        customer_say: "Ce que nos clientes et clients ont dit :",
        feedback_1: "Commentaire client 1",
        feedback_2: "Commentaire client 2",
        feedback_3: "Commentaire client 3",
        shop_button_text: "VERS LA BOUTIQUE",
        contact_title: "CONTACT",
        contact_subtitle: "Nous sommes à votre disposition pour toute question",
        owner_name: "Christian GRÄPPI",
        stress_title: "SANS STRESS DE LA FERME",
        stress_desc_1:
            "L'abattage à la ferme signifie assumer la responsabilité jusqu'au dernier geste.",
        stress_desc_2:
            "Il en résulte une viande issue du respect, et non du stress.",
        more_info_text: "Plus d'infos sur notre partenaire de transformation",
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
