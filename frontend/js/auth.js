// FarmRent Authentication
// Frontend validation for login and registration forms.
// Database authentication will be connected during backend integration.

document.addEventListener("DOMContentLoaded", () => {

    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");


    // =========================
    // Login
    // =========================

    if (loginForm) {

        const loginMessage =
            document.getElementById("loginMessage");

        loginForm.addEventListener("submit", event => {

            event.preventDefault();

            const email =
                document.getElementById("email").value.trim();

            const password =
                document.getElementById("password").value;


            if (!email || !password) {

                showMessage(
                    loginMessage,
                    "Please enter your email and password."
                );

                return;
            }


            if (!isValidEmail(email)) {

                showMessage(
                    loginMessage,
                    "Please enter a valid email address."
                );

                return;
            }


            /*
             * Demo authentication.
             *
             * This will be replaced with an API request
             * after the MySQL backend is implemented.
             */

            loginMessage.textContent =
                "Login interface validated. Backend authentication will be connected next.";

            loginMessage.classList.add("show");

        });


        // Forgot password
        const forgotPassword =
            document.getElementById("forgotPassword");

        if (forgotPassword) {

            forgotPassword.addEventListener(
                "click",
                event => {

                    event.preventDefault();

                    loginMessage.textContent =
                        "Password recovery will be available after backend integration.";

                    loginMessage.classList.add("show");

                }
            );

        }

    }


    // =========================
    // Registration
    // =========================

    if (registerForm) {

        const registerMessage =
            document.getElementById("registerMessage");


        registerForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                const fullName =
                    document.getElementById("fullName")
                        .value.trim();

                const email =
                    document.getElementById("email")
                        .value.trim();

                const phone =
                    document.getElementById("phone")
                        .value.trim();

                const role =
                    document.getElementById("role")
                        .value;

                const location =
                    document.getElementById("location")
                        .value.trim();

                const password =
                    document.getElementById("password")
                        .value;

                const confirmPassword =
                    document.getElementById("confirmPassword")
                        .value;

                const terms =
                    document.getElementById("terms")
                        .checked;


                // Required fields
                if (
                    !fullName ||
                    !email ||
                    !phone ||
                    !role ||
                    !location ||
                    !password ||
                    !confirmPassword
                ) {

                    showRegisterMessage(
                        registerMessage,
                        "Please fill in all required fields.",
                        "error"
                    );

                    return;
                }


                // Email validation
                if (!isValidEmail(email)) {

                    showRegisterMessage(
                        registerMessage,
                        "Please enter a valid email address.",
                        "error"
                    );

                    return;
                }


                // Phone validation
                if (!/^[0-9]{10}$/.test(phone)) {

                    showRegisterMessage(
                        registerMessage,
                        "Please enter a valid 10-digit phone number.",
                        "error"
                    );

                    return;
                }


                // Password length
                if (password.length < 6) {

                    showRegisterMessage(
                        registerMessage,
                        "Password must contain at least 6 characters.",
                        "error"
                    );

                    return;
                }


                // Password confirmation
                if (password !== confirmPassword) {

                    showRegisterMessage(
                        registerMessage,
                        "Passwords do not match.",
                        "error"
                    );

                    return;
                }


                // Terms and conditions
                if (!terms) {

                    showRegisterMessage(
                        registerMessage,
                        "Please accept the terms of use.",
                        "error"
                    );

                    return;
                }


                /*
                 * Demo registration.
                 *
                 * The collected information will later
                 * be sent to the backend and stored in MySQL.
                 */

                showRegisterMessage(
                    registerMessage,
                    "Registration details validated successfully. MySQL integration will be connected next.",
                    "success"
                );

            }
        );

    }


    // =========================
    // Helper Functions
    // =========================

    function isValidEmail(email) {

        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    }


    function showMessage(element, message) {

        element.textContent = message;

        element.classList.add("show");

    }


    function showRegisterMessage(
        element,
        message,
        type
    ) {

        element.textContent = message;

        element.classList.remove(
            "error",
            "success"
        );

        element.classList.add(type);

    }

});