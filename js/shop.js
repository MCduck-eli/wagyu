const translations = {
    de: {
        nav_start: "START",
        nav_wagyu: "BIO WAGYU RIND",
        nav_wohl: "TIERWOHL",
        nav_grappi: "GRÄPPI'S",
        nav_galerie: "GALERIE",
        nav_shop: "SHOP",
        shop_items_list:
            "Würste*, Hamburger*, Saftplätzli*, A-la-minute-Stücke*, Hohrückensteaks*, Hackfleisch*, Geschnetzeltes*, Ragout*, Steaks*, Filet*, Braten*.",
        shop_asterisk_note:
            "*Diese Stücke sind im Mischpaket enthalten. Einzel Stücke auch separat erhältlich auf Anfrage.",
        shop_separate_items:
            "Würste, Hamburger, Trockenfleisch und Trockenwürste auch separat erhältlich.",
        shop_package_desc:
            "Unsere 5-kg/10-kg-Mischpakete vereinen edle Stücke und klassische Cuts in einer ausgewogenen Auswahl. Sie genießen ein attraktives Preis-Leistungs-Verhältnis und entdecken den vollen Geschmack unseres hochwertigen Fleisches. Mit dem Kauf eines Pakets unterstützen Sie eine verantwortungsvolle Verwertung des ganzen Tieres.",
        shop_storage_info:
            "Das Fleisch ist vakuumiert, tiefgefroren und zur Abholung direkt am Hof bereit.",
        shop_slaughter_date:
            "Wir metzgen ca. 4x pro Jahr. Nächster Termin: M/J",
        shop_button_text: "ZUM ONLINE-SHOP",
        shop_agb_text:
            "Hier können Sie jederzeit unsere Allgemeinen Geschäftsbedingungen (AGB) einsehen. Mit dem Absenden der Bestellung gibt der Kunde eine verbindliche Bestellung ab.",
        shop_agb_accept:
            "Ich habe die Allgemeinen Geschäftsbedingungen (AGB) gelesen und akzeptiert.",
        shop_warning: "PREISE NOCH KORRIGIEREN",
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
        shop_items_list:
            "Saucisses*, hamburgers*, steaks juteux*, morceaux à la minute*, steaks de basse-côte*, viande hachée*, émincé*, ragoût*, steaks*, filet*, rôti*.",
        shop_asterisk_note:
            "*Ces morceaux sont inclus dans le colis mixte. Morceaux individuels également disponibles sur demande.",
        shop_separate_items:
            "Saucisses, hamburgers, viande séchée et saucisses sèches également disponibles séparément.",
        shop_package_desc:
            "Nos colis mixtes de 5 kg / 10 kg combinent des morceaux nobles et des coupes classiques dans une sélection équilibrée. Vous bénéficiez d'un rapport qualité-prix attractif et découvrez toute la saveur de notre viande de haute qualité. En achetant un colis, vous soutenez une utilisation responsable de l'animal entier.",
        shop_storage_info:
            "La viande est emballée sous vide, surgelée et prête à être récupérée directement à la ferme.",
        shop_slaughter_date:
            "Nous abattons environ 4 fois par an. Prochaine échéance : M/J",
        shop_button_text: "VERS LA BOUTIQUE EN LIGNE",
        shop_agb_text:
            "Vous pouvez consulter nos conditions générales de vente (CGV) à tout moment. En envoyant la commande, le client passe une commande ferme.",
        shop_agb_accept:
            "J'ai lu et accepté les conditions générales de vente (CGV).",
        shop_warning: "PRIX ENCORE À CORRIGER",
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
                if (
                    el.tagName === "A" &&
                    el.getAttribute("data-i18n") === "shop_button_text"
                ) {
                    el.textContent = translations[lang][key];
                } else {
                    el.innerHTML = translations[lang][key];
                }
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
