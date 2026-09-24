// FarmRent Equipment Listing
// Handles search, category, location and price filtering.

document.addEventListener("DOMContentLoaded", () => {

    const searchInput = document.getElementById("searchInput");
    const categoryFilter = document.getElementById("categoryFilter");
    const locationFilter = document.getElementById("locationFilter");
    const priceFilter = document.getElementById("priceFilter");
    const filterButton = document.getElementById("filterButton");

    const equipmentCards = document.querySelectorAll(
        ".equipment-card-page"
    );

    const resultsCount = document.getElementById("resultsCount");
    const emptyState = document.getElementById("emptyState");


    function filterEquipment() {

        const searchValue =
            searchInput.value.trim().toLowerCase();

        const categoryValue =
            categoryFilter.value.toLowerCase();

        const locationValue =
            locationFilter.value.toLowerCase();

        const priceValue =
            priceFilter.value;

        let visibleCount = 0;


        equipmentCards.forEach(card => {

            const name =
                card.dataset.name.toLowerCase();

            const category =
                card.dataset.category.toLowerCase();

            const location =
                card.dataset.location.toLowerCase();

            const price =
                Number(card.dataset.price);


            // Search condition
            const matchesSearch =
                searchValue === "" ||
                name.includes(searchValue);


            // Category condition
            const matchesCategory =
                categoryValue === "all" ||
                category === categoryValue;


            // Location condition
            const matchesLocation =
                locationValue === "all" ||
                location === locationValue;


            // Price condition
            const matchesPrice =
                priceValue === "all" ||
                price <= Number(priceValue);


            const matches =
                matchesSearch &&
                matchesCategory &&
                matchesLocation &&
                matchesPrice;


            if (matches) {

                card.classList.remove("hidden");

                visibleCount++;

            } else {

                card.classList.add("hidden");

            }

        });


        // Update result count
        resultsCount.textContent =
            `${visibleCount} equipment listing${visibleCount !== 1 ? "s" : ""}`;


        // Show empty state when nothing matches
        if (visibleCount === 0) {

            emptyState.classList.add("show");

        } else {

            emptyState.classList.remove("show");

        }

    }


    // Apply filters button
    filterButton.addEventListener(
        "click",
        filterEquipment
    );


    // Live search
    searchInput.addEventListener(
        "input",
        filterEquipment
    );


    // Filter immediately when dropdown changes
    categoryFilter.addEventListener(
        "change",
        filterEquipment
    );

    locationFilter.addEventListener(
        "change",
        filterEquipment
    );

    priceFilter.addEventListener(
        "change",
        filterEquipment
    );


    // Allow Enter key in search box
    searchInput.addEventListener(
        "keydown",
        event => {

            if (event.key === "Enter") {

                event.preventDefault();

                filterEquipment();

            }

        }
    );


    // Initial count
    filterEquipment();

});