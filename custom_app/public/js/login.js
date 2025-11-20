
const screenWidth = window.innerWidth;
// document.getElementById('page-content-wrapper').style.background = '#fff'
document.getElementById('page-login').style.background = '#fff'

const preLoginNavbar = () => {
    const navbar = document.querySelector(".navbar.navbar-light.navbar-expand-lg");
    const main = document.querySelector(".container.my-4");

    const login = document.getElementById('page-login')
    if (login) {
        login.style.background = '#fff'
    }
    if (main) {
        main.style.backgroundColor = '#fff'
    }
    if (navbar) {
        navbar.style.height = "48px"
    }


    if (navbar) {
        navbar.style.background = 'linear-gradient(90deg,#007e85 0%,#007e85dc 30%,#007e85d8 60%,#007e85dc 80%,#007e85 100%)';
        const logoWrapper = document.querySelector('.navbar-brand');
        if (logoWrapper) {
            logoWrapper.style.backgroundColor = 'rgb(255, 255, 255)';
            logoWrapper.style.borderRadius = '10px';
            logoWrapper.style.padding = '5px 10px';
            logoWrapper.style.display = 'flex';
            logoWrapper.style.alignItems = 'center';
            logoWrapper.style.justifyContent = 'center';
            logoWrapper.style.boxShadow = '0px 0px 7px grey';
            logoWrapper.style.height = '40px';
            logoWrapper.style.margin = '3px';
            logoWrapper.innerHTML = `<img src='/assets/custom_app/images/mk_logo.png' style ="max-height: 35px; width: auto;"/>`
        }

        const logintext = document.querySelector(".nav-link.btn-login-area");
        if (logintext) {
            logintext.style.color = "#fff";
            logintext.style.transition = "800ms";



            logintext.addEventListener('mouseover', () => {

                logintext.style.backgroundColor = "#fff";
                logintext.style.color = "#007e85";
                logintext.style.borderRadius = "5px"
                logintext.style.boxShadow = "0px 0px 4px #ccc"
            });
            logintext.addEventListener('mouseout', () => {
                logintext.style.color = "#fff";
                logintext.style.backgroundColor = "transparent";
                logintext.style.boxShadow = "none";


            });
        }

        const homeButton = document.querySelector('.page-card-body a');
        if (homeButton) {
            homeButton.style.background = "#956438";
            homeButton.style.border = "none";
            homeButton.style.borderRadius = "5px";
            homeButton.style.boxShadow = "0px 0px 4px #ccc";
            homeButton.style.transition = "500ms";

            homeButton.addEventListener('mouseout', () => {
                homeButton.style.background = "#956438";
            })
            homeButton.addEventListener('mouseover', () => {
                homeButton.style.background = "#007e85";
            })
        }
    }

    const footer = document.querySelector('.web-footer');
    if (footer) {
        // footer.style.display = "none"
    }



    const logincard = document.querySelector('.for-login');
    const pagefooter = document.querySelector('.page-footer');
    const pagecardhead = document.querySelector('.page-card-head');
    const signuptext = document.querySelector('.text-center.sign-up-message');
    const pageContent = document.querySelector('.page_content');
    if (pageContent) {


        pageContent.style.alignContent = 'center';
        pageContent.style.height = '80vh';
        pageContent.style.width = '100%';
        pageContent.style.padding = '0px';
        if (signuptext) {
            signuptext.style.display = 'none';
        }
        if (logincard) {
            if (screenWidth <= 370) {
                logincard.style.display = 'flex';
                logincard.style.flexDirection = 'column';
                logincard.style.justifyContent = 'center';
            }
            else {
                logincard.style.display = 'flex';
                logincard.style.justifyContent = 'space-between';
            }

        }
        if (pageContent && pagecardhead) {
            if (screenWidth <= 370) {
                pagecardhead.style.padding = '0px';
                pagecardhead.style.marginTop = '-80px';
            }
            else {
                pagecardhead.style.display = 'flex';
                pagecardhead.style.alignItems = 'center'
                pagecardhead.style.flexDirection = 'column'
                pagecardhead.style.padding = '20px';
                if (screenWidth >= 1300) {
                    pagecardhead.style.marginLeft = '6%';
                }
            }
        }

        const loginLogo = document.querySelector('.page-card-head .app-logo');
        const logincardheading = document.querySelector('.page-card-head h4');

        if (loginLogo) {
            if (screenWidth <= 370) {
                loginLogo.src = '/assets/custom_app/images/mk_logo.png';
                loginLogo.style.width = '150px';
                loginLogo.style.display = 'block'
                loginLogo.style.margin = '30px auto 10px';
            }
            else {
                loginLogo.src = '/assets/custom_app/images/mk_logo.png';
                loginLogo.style.width = '200px';
                loginLogo.style.display = 'block'
                loginLogo.style.margin = '60px auto 20px';
            }

        }

        if (loginLogo && logincardheading) {
            const welcomemessage = document.createElement('p');
            welcomemessage.textContent = 'Welcome Back!';
            welcomemessage.style.fontWeight = '800';
            welcomemessage.style.textAlign = 'center';
            welcomemessage.style.margin = '0px auto 0px';
            welcomemessage.style.fontSize = '24px';
            welcomemessage.style.color = '#000';

            const welcomemessage1 = document.createElement('p');
            welcomemessage1.textContent = 'Sign in for easy management';
            welcomemessage1.style.color = "#007e85";
            welcomemessage1.style.fontSize = '13px';
            welcomemessage1.style.marginTop = '12px';

            logincardheading.parentNode.insertBefore(welcomemessage, logincardheading);
            logincardheading.parentNode.insertBefore(welcomemessage1, logincardheading);
        }
        if (logincardheading) {
            logincardheading.style.display = 'none'
        }

        const logincontent = document.querySelector('.login-content.page-card');
        const loginContainer = document.querySelector('.form-signin.form-login');

        const pageCardBody = loginContainer.querySelector('.page-card-body');

        const formFields = pageCardBody.querySelectorAll('.form-control');

        const emailField = pageCardBody.querySelector('.email-field');
        const emailFieldsvg = pageCardBody.querySelector('.email-field .field-icon.email-icon');
        const passwordField = pageCardBody.querySelector('.password-field');
        const showbutton = pageCardBody.querySelector('.password-field .toggle-password.text-muted');
        const passwordFieldsvg = pageCardBody.querySelector('.password-field .field-icon.password-icon');
        const forgotpassword = pageCardBody.querySelector('.forgot-password-message a');
        const sociallogins = pageCardBody.querySelector('.social-logins.text-center');
        const emailInput = emailField.querySelector('input');
        const passwordInput = passwordField.querySelector('input');


        if (emailInput) {
            emailInput.placeholder = "Enter your email";
            emailInput.style.backgroundColor = '#fff'
            emailInput.style.boxShadow = '0px 0px 4px #888'
            emailInput.style.borderRadius = '4px'
        }

        if (passwordInput) {
            passwordInput.placeholder = "Enter your password";
            passwordInput.style.backgroundColor = '#fff'
            passwordInput.style.boxShadow = '0px 0px 4px #888'
            passwordInput.style.borderRadius = '4px'
        }


        if (logincontent) {
            if (screenWidth <= 370) {
                logincontent.style.width = "300px";
                logincontent.style.backgroundColor = "#fff"
                logincontent.style.boxShadow = "0px 0px 5px #888"
                logincontent.style.borderRadius = "8px";
                logincontent.style.marginLeft = "0px";

                const newlogo = document.createElement('img');
                newlogo.src = `/assets/custom_app/images/mk_logo.png`;
                newlogo.style.display = 'block'
                newlogo.style.margin = '0px auto 10px'
                newlogo.style.width = '150px'
                logincontent.insertBefore(newlogo, logincontent.firstChild);

            }
            else {
                logincontent.style.width = "350px";
                logincontent.style.backgroundColor = "#fff"
                logincontent.style.boxShadow = "0px 0px 5px #888"
                logincontent.style.borderRadius = "8px";

                const newlogo = document.createElement('img');
                newlogo.src = `/assets/custom_app/images/mk_logo.png`;
                newlogo.style.display = 'block'
                newlogo.style.margin = '0px auto 10px'
                newlogo.style.width = '200px'
                newlogo.style.padding = '5px'
                logincontent.insertBefore(newlogo, logincontent.firstChild);

                if (screenWidth >= 1200) {
                    logincontent.style.marginRight = '-2%';

                }

            }
            if (emailFieldsvg) {
                emailFieldsvg.style.marginTop = '-5px'
            }
            if (passwordFieldsvg) {
                passwordFieldsvg.style.marginTop = '-5px'
            }
            if (showbutton) {
                showbutton.style.marginTop = '-5px'
                showbutton.style.color = '#007e85 !important';
            }
            if (forgotpassword) {
                forgotpassword.style.backgroundColor = 'transparent'
                forgotpassword.style.boxShadow = 'none'
                forgotpassword.style.color = '#888';
                forgotpassword.style.transition = '500ms'

                forgotpassword.addEventListener('mouseover', () => {
                    forgotpassword.style.backgroundColor = 'transparent'
                    forgotpassword.style.boxShadow = 'none'
                    forgotpassword.style.color = '#007e85'

                })
                forgotpassword.addEventListener('mouseout', () => {
                    forgotpassword.style.backgroundColor = 'transparent'
                    forgotpassword.style.boxShadow = 'none';
                    forgotpassword.style.color = '#888'
                })

            }
            if (sociallogins) {
                sociallogins.style.display = 'none'
            }
            if (emailField) {
                emailField.style.display = 'flex';
                emailField.style.alignItems = 'center';
                emailField.style.background = '#fff';
                emailField.style.height = '33px'
                emailField.style.marginTop = '30px'
            }

            if (passwordField) {
                passwordField.style.display = 'flex';
                passwordField.style.alignItems = 'center';
                passwordField.style.backgroundColor = 'transparent !important';
                passwordField.style.height = '33px'
            }
            const pagecardactions = pageCardBody.querySelector('.page-card-actions button');
            if (pagecardactions) {
                pagecardactions.style.background = '#956438';
                pagecardactions.style.borderRadius = '5px'
                pagecardactions.style.boxShadow = '0px 0px 5px #888';
                pagecardactions.style.transition = '500ms';


                pagecardactions.addEventListener('mouseover', () => {
                    pagecardactions.style.background = '#007e85';
                });
                pagecardactions.addEventListener('mouseout', () => {
                    pagecardactions.style.background = '#956438';
                });



            }

        }
    }

}



const forgotPasswordUI = () => {

    const screenWidth = window.innerWidth;

    const navbar = document.querySelector(".navbar.navbar-light.navbar-expand-lg");
    if (navbar) {
        navbar.style.height = "48px";
        navbar.style.background = 'linear-gradient(90deg,#007e85 0%,#007e85dc 30%,#007e85d8 60%,#007e85dc 80%,#007e85 100%)';

        const logoWrapper = document.querySelector('.navbar-brand');
        if (logoWrapper) {
            logoWrapper.style.backgroundColor = 'rgb(255, 255, 255)';
            logoWrapper.style.borderRadius = '10px';
            logoWrapper.style.padding = '5px 10px';
            logoWrapper.style.display = 'flex';
            logoWrapper.style.alignItems = 'center';
            logoWrapper.style.justifyContent = 'center';
            logoWrapper.style.boxShadow = '0px 0px 7px grey';
            logoWrapper.style.height = '40px';
            logoWrapper.style.margin = '3px';
            logoWrapper.innerHTML = `<img src='/assets/custom_app/images/mk_logo.png' style="max-height: 35px; width:auto;" />`;
        }
    }

    const forgotCard = document.querySelector('.for-forgot');
    if (!forgotCard) return;

    forgotCard.style.display = "flex";
    forgotCard.style.flexDirection = "row";
    forgotCard.style.justifyContent = "space-between";
    forgotCard.style.width = "100%";

    const pagecardhead = forgotCard.querySelector('.page-card-head');
    const forgotFormContainer = forgotCard.querySelector('.for-forgot .login-content.page-card');
    if (forgotFormContainer) {
        forgotFormContainer.style.boxShadow = '0px 0px 4px #ccc';
        if (screenWidth >= 1200) {
            forgotFormContainer.style.marginRight = '-2%';

        }
    }
    if (pagecardhead) {
        pagecardhead.style.display = "flex";
        pagecardhead.style.flexDirection = "column";
        pagecardhead.style.alignItems = "center";
        pagecardhead.style.padding = "20px";

        if (screenWidth >= 1200) {
            pagecardhead.style.marginLeft = '12%';

        }

        const logo = pagecardhead.querySelector('.app-logo');
        const heading = pagecardhead.querySelector('h4');

        if (logo) {
            logo.src = "/assets/custom_app/images/mk_logo.png";
            logo.style.width = (screenWidth <= 370) ? "150px" : "200px";
            logo.style.margin = (screenWidth <= 370) ? "30px auto 10px" : "60px auto 20px";
            logo.style.display = "block";
        }

        if (heading) {
            heading.style.fontSize = "22px";
            heading.style.fontWeight = "700";
            heading.style.marginTop = "10px";
            heading.style.color = "#000";
        }
    }

    const forgotForm = forgotCard.querySelector('.form-signin.form-forgot');
    if (forgotForm) {
        forgotForm.style.width = (screenWidth <= 370) ? "300px" : "350px";
        forgotForm.style.backgroundColor = "#fff";

        const newlogo = document.createElement('img');
        newlogo.src = `/assets/custom_app/images/mk_logo.png`;
        newlogo.style.display = 'block'
        newlogo.style.margin = '0px auto 30px'
        newlogo.style.width = (screenWidth <= 370) ? "150px" : "200px"
        forgotForm.insertBefore(newlogo, forgotForm.firstChild);

    }

    const emailField = forgotCard.querySelector('.email-field');
    const formFields = forgotCard.querySelector('.form-control');
    if (emailField) {
        emailField.style.display = "flex";
        emailField.style.alignItems = "center";
        emailField.style.background = "#fff";
        emailField.style.height = "33px";
        emailField.style.marginTop = "15px";

    }

    const emailInput = forgotCard.querySelector('#forgot_email');
    if (emailInput) {
        emailInput.placeholder = "Enter your email";
        emailInput.style.backgroundColor = '#fff'
        emailInput.style.boxShadow = '0px 0px 4px #888'
        emailInput.style.borderRadius = '4px'
    }

    const emailIcon = forgotCard.querySelector('.email-field .field-icon');
    if (emailIcon) {
        emailIcon.style.marginTop = "-8px";
    }
    const resetBtn = forgotCard.querySelector('.btn-forgot');
    if (resetBtn) {
        resetBtn.style.background = "#956438";
        resetBtn.style.borderRadius = "5px";
        resetBtn.style.boxShadow = "0px 0px 5px #888";
        resetBtn.style.transition = "500ms";
        resetBtn.style.marginTop = "-10px";

        resetBtn.addEventListener("mouseover", () => {
            resetBtn.style.background = "#007e85";
        });
        resetBtn.addEventListener("mouseout", () => {
            resetBtn.style.background = "#956438";
        });
    }

    const backToLogin = forgotCard.querySelector('.sign-up-message a');
    if (backToLogin) {
        backToLogin.style.color = "#888";
        backToLogin.style.transition = "500ms";

        backToLogin.addEventListener("mouseover", () => {
            backToLogin.style.color = "#007e85";
        });
        backToLogin.addEventListener("mouseout", () => {
            backToLogin.style.color = "#888";
        });
    }
};

preLoginNavbar();
forgotPasswordUI()
