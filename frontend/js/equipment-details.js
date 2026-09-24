// FarmRent Equipment Details
// Handles equipment details and rental request form.

document.addEventListener("DOMContentLoaded", () => {

    const equipmentData = {
        "tractor-001": {
            name: "Mahindra Farm Tractor",
            type: "Tractor",
            location: "Vijayawada, Andhra Pradesh",
            price: "₹1,500",
            visual: "TRACTOR",
            power: "45 HP",
            fuel: "Diesel",
            usage: "Agricultural",
            description:
                "Reliable farm tractor suitable for field preparation, transportation, and general agricultural operations."
        },

        "harvester-001": {
            name: "Compact Crop Harvester",
            type: "Harvester",
            location: "Guntur, Andhra Pradesh",
            price: "₹3,500",
            visual: "HARVESTER",
            power: "Multi Crop",
            fuel: "Diesel",
            usage: "Crop Harvesting",
            description:
                "Compact harvesting equipment designed for efficient crop harvesting and field operations."
        },

        "plough-001": {
            name: "Heavy Duty Farm Plough",
            type: "Plough",
            location: "Tenali, Andhra Pradesh",
            price: "₹900",
            visual: "PLOUGH",
            power: "3 Blade",
            fuel: "Tractor Mount",
            usage: "Soil Preparation",
            description:
                "Heavy-duty agricultural plough designed for soil preparation and primary tillage operations."
        },

        "seeder-001": {
            name: "Precision Seed Drill",
            type: "Seeder",
            location: "Amaravati, Andhra Pradesh",
            price: "₹1,200",
            visual: "SEEDER",
            power: "7 Row",
            fuel: "Tractor Mount",
            usage: "Seed Sowing",
            description:
                "Precision seed drill designed to support consistent seed placement during agricultural sowing operations."
        },

        "sprayer-001": {
            name: "Agricultural Crop Sprayer",
            type: "Sprayer",
            location: "Tenali, Andhra Pradesh",
            price: "₹800",
            visual: "SPRAYER",
            power: "16 L",
            fuel: "Manual",
            usage: "Crop Spraying",
            description:
                "Portable agricultural sprayer suitable for crop protection and routine field spraying activities."
        },

        "cultivator-001": {
            name: "Rotary Field Cultivator",
            type: "Cultivator",
            location: "Vijayawada, Andhra Pradesh",
            price: "₹1,100",
            visual: "CULTIVATOR",
            power: "9 Tine",
            fuel: "Tractor Mount",
            usage: "Field Cultivation",
            description:
                "Heavy-duty field cultivator designed for soil preparation and cultivation before planting."
        }
    };


    // Get equipment ID from URL.
    const params = new URLSearchParams(
        window.location.search
    );

    const equipmentId =
        params.get("id") || "tractor-001";


    const equipment =
        equipmentData[equipmentId];


    // Page elements
    const equipmentName =
        document.getElementById("equipmentName");

    const equipmentType =
        document.getElementById("equipmentType");

    const equipmentLocation =
        document.getElementById("equipmentLocation");

    const equipmentPrice =
        document.getElementById("equipmentPrice");

    const equipmentVisual =
        document.getElementById("equipmentVisual");

    const equipmentPower =
        document.getElementById("equipmentPower");

    const equipmentFuel =
        document.getElementById("equipmentFuel");

    const equipmentUsage =
        document.getElementById("equipmentUsage");

    const equipmentDescription =
        document.getElementById("equipmentDescription");

    const breadcrumbName =
        document.getElementById("breadcrumbName");


    // Load selected equipment
    if (equipment) {

        equipmentName.textContent =
            equipment.name;

        equipmentType.textContent =
            equipment.type;

        equipmentLocation.textContent =
            equipment.location;

        equipmentPrice.textContent =
            equipment.price;

        equipmentVisual.textContent =
            equipment.visual;

        equipmentPower.textContent =
            equipment.power;

        equipmentFuel.textContent =
            equipment.fuel;

        equipmentUsage.textContent =
            equipment.usage;

        equipmentDescription.textContent =
            equipment.description;

        breadcrumbName.textContent =
            equipment.name;

        document.title =
            `${equipment.name} | FarmRent`;

    }


    // Set minimum date to today.
    const today =
        new Date().toISOString().split("T")[0];

    const startDate =
        document.getElementById("startDate");

    const endDate =
        document.getElementById("endDate");


    startDate.min = today;
    endDate.min = today;


    // Prevent end date before start date.
    startDate.addEventListener(
        "change",
        () => {

            endDate.min =
                startDate.value;

            if (
                endDate.value &&
                endDate.value < startDate.value
            ) {
                endDate.value = "";
            }

        }
    );


    // Rental request form
    const rentalForm =
        document.getElementById("rentalForm");

    const formMessage =
        document.getElementById("formMessage");


    rentalForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            if (!equipment) {
                return;
            }


            if (
                !startDate.value ||
                !endDate.value
            ) {
                return;
            }


            if (
                new Date(endDate.value) <
                new Date(startDate.value)
            ) {

                alert(
                    "End date cannot be before the start date."
                );

                return;

            }


            // Display confirmation.
            formMessage.textContent =
                `Rental request for ${equipment.name} has been submitted successfully.`;

            formMessage.classList.add("show");


            // Reset message after a few seconds.
            setTimeout(() => {

                formMessage.classList.remove("show");

            }, 5000);

        }
    );

});