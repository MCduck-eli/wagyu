const translations = {
    de: {
        nav_start: "START",
        nav_wagyu: "BIO WAGYU RIND",
        nav_wohl: "TIERWOHL",
        nav_grappi: "GRÄPPI'S",
        nav_galerie: "GALERIE",
        nav_shop: "SHOP",
        gallery_title: "GALERIE",
        gallery_subtitle: "Einblicke in unser Leben auf dem Biohof",
        gal_img1_title: "Luftaufnahme Biohof Linde",
        gal_cat_hof: "Hof",
        gal_img1_caption: "Luftaufnahme Biohof Linde - Hof",
        gal_img2_title: "Gräppi's Esel",
        gal_cat_tiere: "Tiere",
        gal_img2_caption: "Gräppi's Esel - Tiere",
        gal_img3_title: "Chrigu bei der Arbeit",
        gal_img3_caption: "Chrigu bei der Arbeit - Hof",
        gal_img4_title: "Sonnenuntergang über den Feldern",
        gal_img4_caption: "Sonnenuntergang über den Feldern - Hof",
        gal_img5_title: "Heuernte",
        gal_img5_caption: "Heuernte - Hof",
        gal_img6_title: "Neugeborenes Wagyu Kalb",
        gal_img6_caption: "Neugeborenes Wagyu Kalb - Tiere",
        visit_title: "Besuchen Sie uns",
        visit_intro:
            "Sie möchten unseren Hof persönlich kennenlernen? Wir freuen uns über Ihren Besuch!",
        visit_details:
            "Nach vorheriger Absprache zeigen wir Ihnen gerne, wie unsere Tiere leben und wie wir arbeiten. Erleben Sie selbst die Atmosphäre auf unserem Biohof und überzeugen Sie sich von unserer artgerechten Tierhaltung.",
        visit_btn: "Kontakt aufnehmen",
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
        gallery_title: "GALERIE",
        gallery_subtitle: "Aperçus de notre vie à la ferme bio",
        gal_img1_title: "Vue aérienne de la ferme Linde",
        gal_cat_hof: "Ferme",
        gal_img1_caption: "Vue aérienne de la ferme Linde - Ferme",
        gal_img2_title: "Les ânes de Gräppi",
        gal_cat_tiere: "Animaux",
        gal_img2_caption: "Les ânes de Gräppi - Animaux",
        gal_img3_title: "Chrigu au travail",
        gal_img3_caption: "Chrigu au travail - Ferme",
        gal_img4_title: "Coucher de soleil sur les champs",
        gal_img4_caption: "Coucher de soleil sur les champs - Ferme",
        gal_img5_title: "Récolte du foin",
        gal_img5_caption: "Récolte du foin - Ferme",
        gal_img6_title: "Veau Wagyu nouveau-né",
        gal_img6_caption: "Veau Wagyu nouveau-né - Animaux",
        visit_title: "Visitez-nous",
        visit_intro:
            "Vous souhaitez découvrir notre ferme personnellement ? Nous nous réjouissons de votre visite !",
        visit_details:
            "Sur rendez-vous, nous vous montrerons volontiers comment vivent nos animaux et comment nous travaillons. Découvrez l'atmosphère de notre ferme bio par vous-même.",
        visit_btn: "Prendre contact",
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
