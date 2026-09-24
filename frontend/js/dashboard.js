// FarmRent Dashboard
// Handles dashboard interactions and quick actions.

document.addEventListener("DOMContentLoaded", () => {

    const listEquipmentAction =
        document.getElementById("listEquipmentAction");

    const profileAction =
        document.getElementById("profileAction");


    // List equipment action
    if (listEquipmentAction) {

        listEquipmentAction.addEventListener(
            "click",
            event => {

                event.preventDefault();

                alert(
                    "Equipment listing functionality will be connected during the backend integration stage."
                );

            }
        );

    }


    // Edit profile action
    if (profileAction) {

        profileAction.addEventListener(
            "click",
            event => {

                event.preventDefault();

                alert(
                    "Profile management will be available after database integration."
                );

            }
        );

    }

});