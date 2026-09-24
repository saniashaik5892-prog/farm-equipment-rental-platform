// FarmRent Main Application
// Handles homepage interactions and navigation helpers.

document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // Quick Search
    // =========================

    const searchForm =
        document.getElementById("searchForm");

    if (searchForm) {

        searchForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();

                const equipmentType =
                    document.getElementById("equipmentType")
                        ?.value || "";

                const location =
                    document.getElementById("location")
                        ?.value || "";

                const startDate =
                    document.getElementById("startDate")
                        ?.value || "";

                const endDate =
                    document.getElementById("endDate")
                        ?.value || "";


                const params =
                    new URLSearchParams();


                if (equipmentType) {
                    params.set(
                        "category",
                        equipmentType
                    );
                }


                if (location) {
                    params.set(
                        "location",
                        location
                    );
                }


                if (startDate) {
                    params.set(
                        "start",
                        startDate
                    );
                }


                if (endDate) {
                    params.set(
                        "end",
                        endDate
                    );
                }


                const query =
                    params.toString();


                window.location.href =
                    query
                        ? `equipment.html?${query}`
                        : "equipment.html";

            }
        );

    }


    // =========================
    // Smooth Scrolling
    // =========================

    const internalLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    internalLinks.forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetId =
                    link.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(targetId);


                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }
        );

    });


    // =========================
    // Mobile Navigation
    // =========================

    const navbar =
        document.querySelector(".navbar");

    const navLinks =
        document.querySelector(".nav-links");


    if (navbar && navLinks) {

        const menuButton =
            document.createElement("button");

        menuButton.type = "button";

        menuButton.className =
            "mobile-menu-button";

        menuButton.textContent = "☰";

        menuButton.setAttribute(
            "aria-label",
            "Toggle navigation menu"
        );


        const navContent =
            navbar.querySelector(".nav-content");


        if (navContent) {

            navContent.insertBefore(
                menuButton,
                navLinks
            );

        }


        menuButton.addEventListener(
            "click",
            () => {

                navLinks.classList.toggle(
                    "mobile-open"
                );

            }
        );


        navLinks
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    () => {

                        navLinks.classList.remove(
                            "mobile-open"
                        );

                    }
                );

            });

    }


    // =========================
    // Category Cards
    // =========================

    const categoryLinks =
        document.querySelectorAll(
            "[data-category]"
        );


    categoryLinks.forEach(category => {

        category.addEventListener(
            "click",
            () => {

                const selectedCategory =
                    category.dataset.category;


                if (!selectedCategory) {
                    return;
                }


                window.location.href =
                    `equipment.html?category=${encodeURIComponent(
                        selectedCategory
                    )}`;

            }
        );

    });


    // =========================
    // Current Year
    // =========================

    const yearElements =
        document.querySelectorAll(
            "[data-current-year]"
        );


    yearElements.forEach(element => {

        element.textContent =
            new Date().getFullYear();

    });

});