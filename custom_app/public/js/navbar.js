
let logotoggle = false;

frappe.call({
    method: "custom_app.api.get_logged_user_company",
    callback: function (r) {
        const company = r.message;

        if (company && typeof company === "string") {
            localStorage.setItem('company', company);

            if (company === "MK Eco Bricks") {
                logotoggle = true;
            }
        } else {
            localStorage.removeItem('company');
            logotoggle = false;
        }
        console.log(r)

        // preLoginNavbar();
        // forgotPasswordUI();
    },
    error: function () {
        localStorage.removeItem('company');
        logotoggle = false;
        // preLoginNavbar();
        // forgotPasswordUI();
    }
});
// alert(`a ${logotoggle}`)




function changeNavbarBG() {
    const navbars = document.getElementsByClassName('navbar');
    if (navbars.length > 0) {
        Array.from(navbars).forEach(nav => {
            if (nav.classList.contains('navbar-expand')) {
                nav.style.background = 'linear-gradient(90deg,#007e85 0%,#007e85dc 30%,#007e85d8 60%,#007e85dc 80%,#007e85 100%)';
            }
        });
    } else {
        setTimeout(changeNavbarBG, 100);
    }
}
function updateNavbarLogo() {
    const navbarBrand = document.querySelector('.navbar-brand');

    if (!navbarBrand) {
        setTimeout(updateNavbarLogo, 100);
        return;
    }

    const existingLogo = navbarBrand.querySelector('.app-logo');
    if (existingLogo) existingLogo.remove();

    const logoWrapper = document.createElement('span');
    logoWrapper.style.backgroundColor = '#fff';
    logoWrapper.style.borderRadius = '10px';
    logoWrapper.style.padding = !logotoggle ? '5px 10px' : '0px';
    logoWrapper.style.display = 'flex';
    logoWrapper.style.alignItems = 'center';
    logoWrapper.style.justifyContent = 'center';
    logoWrapper.style.boxShadow = '0px 0px 7px grey';
    logoWrapper.style.height = !logotoggle ? '40px' : '43px';

    const logoImg = document.createElement('img');
    logoImg.src = !logotoggle ? '/assets/custom_app/images/mk_logo.png' : '/assets/custom_app/images/eco_logo.png';
    logoImg.alt = 'App Logo';
    logoImg.className = 'app-logo';
    logoImg.style.maxHeight = !logotoggle ? '35px' : '45px';
    logoImg.style.width = !logotoggle ? 'auto' : 'auto'
    // logoImg.style.filter = !logotoggle ? 'none' : 'drop-shadow(0px 0px 2px #ccc)  '

    logoWrapper.appendChild(logoImg);

    navbarBrand.innerHTML = '';
    navbarBrand.appendChild(logoWrapper);
}

function updateNavbarBell() {
    const bellButton = document.querySelector('.dropdown-notifications .notifications-icon');

    if (!bellButton) {
        setTimeout(updateNavbarBell, 100);
        return;
    }

    const existingSVG = bellButton.querySelector('svg');
    if (existingSVG) existingSVG.remove();

    const existingImg = bellButton.querySelector('img');
    if (existingImg) existingImg.remove();

    const bellImg = document.createElement('img');
    bellImg.src = '/assets/custom_app/images/bell.png';
    bellImg.alt = 'Notifications';
    bellImg.style.width = '16px';
    bellImg.style.height = '16px';
    bellImg.style.display = 'block';
    bellImg.style.objectFit = 'contain';

    bellButton.style.padding = '2px';
    bellButton.style.border = '1px solid #ccc';
    bellButton.style.borderRadius = '5px';
    bellButton.style.display = 'flex';
    bellButton.style.alignItems = 'center';
    bellButton.style.justifyContent = 'center';

    bellButton.appendChild(bellImg);

    const btns = document.querySelectorAll('.btn-reset.nav-link');

    if (btns.length === 0) {
        setTimeout(updateBtnResetColor, 100);
        return;
    }

    btns.forEach(btn => {
        btn.style.color = '#ffffff';

        btn.style.fontWeight = '700';
        btn.style.background = 'transparent';
    });

    const helpButtonSVG = document.querySelector('.btn-reset.nav-link[aria-label*="Help Dropdown"] svg');

    if (!helpButtonSVG) {
        setTimeout(updateHelpButtonSVGStroke, 100);
        return;
    }

    helpButtonSVG.style.stroke = '#ffffff';
    helpButtonSVG.style.strokeWidth = '1.5px';



}

// function updatePageHeader() {
//     const sidebarToggleSVGs = document.querySelectorAll('.sidebar-toggle-btn svg');
//     if (sidebarToggleSVGs.length === 0) {
//         setTimeout(updatePageHeader, 100);
//         return;
//     }
//     sidebarToggleSVGs.forEach(svg => {
//         svg.style.stroke = '#ffffff';
//         svg.style.strokeWidth = '1.5px';
//     });

//     // const menuOptionSpan = document.querySelector('.menu-btn-group-label');
//     // if (menuOptionSpan) {
//     //     const existingSVG = menuOptionSpan.querySelector('svg');
//     //     if (existingSVG) existingSVG.remove();

//     //     const existingImg = menuOptionSpan.querySelector('img');
//     //     if (!existingImg) {
//     //         const img = document.createElement('img');
//     //         img.src = '/assets/custom_app/images/option.png';
//     //         img.alt = 'Option';
//     //         img.style.width = '16px';
//     //         img.style.height = '16px';
//     //         img.style.objectFit = 'contain';
//     //         menuOptionSpan.appendChild(img);
//     //     }
//     // }

//     const menuOptionSpan = document.querySelector('.menu-btn-group-label');

//     if (menuOptionSpan) {
//         const unwantedSVG = menuOptionSpan.querySelector('svg');
//         if (unwantedSVG) unwantedSVG.remove();

//         let optionImg = menuOptionSpan.querySelector('img.option-icon');

//         if (!optionImg) {
//             optionImg = document.createElement('img');
//             optionImg.src = '/assets/custom_app/images/option.png';
//             optionImg.alt = 'Option';
//             optionImg.classList.add('option-icon');   // Helps identify it later
//             optionImg.style.width = '16px';
//             optionImg.style.height = '16px';
//             optionImg.style.objectFit = 'contain';
//             menuOptionSpan.appendChild(optionImg);
//         } else {
//             optionImg.src = '/assets/custom_app/images/option.png';
//         }
//     }


//     const actionsSVGs = document.querySelectorAll('.actions-btn-group svg');
//     actionsSVGs.forEach(svg => {
//         svg.style.stroke = '#ffffff';
//         svg.style.strokeWidth = '1.5px';
//     });

//     const buttons = document.querySelectorAll('.page-head .btn, .page-head .btn-reset');
//     buttons.forEach(btn => {
//         btn.style.color = '#ffffff';
//         btn.style.borderRadius = '5px';
//         btn.style.display = 'flex';
//         btn.style.alignItems = 'center';
//         btn.style.justifyContent = 'center';
//         btn.style.padding = '2px 6px';
//         btn.style.background = '#007e85';
//         btn.style.height = '30px'
//         btn.style.width = '30px'
//     });
// }

function updatePageHeader() {
    const sidebarToggleSVGs = document.querySelectorAll('.sidebar-toggle-btn svg');
    if (sidebarToggleSVGs.length === 0) {
        setTimeout(updatePageHeader, 100);
        return;
    }

    sidebarToggleSVGs.forEach(svg => {
        svg.style.stroke = '#ffffff';
        svg.style.strokeWidth = '1.5px';
    });

    const menuOptionSpan = document.querySelector('.menu-btn-group-label');

    // if (menuOptionSpan) {
    //     const unwantedSVG = menuOptionSpan.querySelector('svg');

    //     if (unwantedSVG) unwantedSVG.remove();

    //     let optionImg = menuOptionSpan.querySelector('img.option-icon');

    //     if (!optionImg) {
    //         optionImg = document.createElement('img');
    //         optionImg.src = '/assets/custom_app/images/option.png';
    //         optionImg.alt = 'Option';
    //         optionImg.classList.add('option-icon');
    //         optionImg.style.width = '16px';
    //         optionImg.style.height = '16px';
    //         optionImg.style.objectFit = 'contain';
    //         menuOptionSpan.appendChild(optionImg);
    //     } else {
    //         optionImg.src = '/assets/custom_app/images/option.png';
    //     }
    // }

    const actionsSVGs = document.querySelectorAll('.actions-btn-group svg');
    actionsSVGs.forEach(svg => {
        svg.style.stroke = '#ffffff';
        svg.style.strokeWidth = '1.5px';
    });

    const buttons = document.querySelectorAll('.page-head .btn, .page-head .btn-reset');
    buttons.forEach(btn => {

        btn.style.color = '#ffffff';
        btn.style.borderRadius = '5px';
        btn.style.display = 'flex';
        btn.style.alignItems = 'center';
        btn.style.justifyContent = 'center';
        btn.style.padding = '2px 6px';
        btn.style.background = '#007e85';
        btn.style.height = '30px';

        const hasText = btn.querySelector('span:not(.menu-btn-group-label):not(.hidden-xs)');

        if (hasText) {
            btn.style.width = 'max-content';
            btn.style.minWidth = '30px';
        }
        else {
            btn.style.width = '30px';
        }
    });
}





// function updateSortIcon() {
//     const sortBtn = document.querySelector('.btn-order');
//     const sortIcon = document.querySelector('.btn-order .sort-order');

//     if (!sortBtn || !sortIcon) {
//         setTimeout(updateSortIcon, 100);
//         return;
//     }

//     const sortOrder = sortBtn.getAttribute("data-value") || "asc";

//     const oldImg = sortIcon.querySelector('img');
//     if (oldImg) oldImg.remove();

//     const oldSvg = sortIcon.querySelector('svg');
//     if (oldSvg) oldSvg.remove();

//     const imgSrc = sortOrder === "desc"
//         ? "/assets/custom_app/images/sort-desc.png"
//         : "/assets/custom_app/images/sort-asc.png";

//     const altText = sortOrder === "desc" ? "Descending" : "Ascending";

//     const img = document.createElement("img");
//     img.src = imgSrc;
//     img.alt = altText;
//     img.style.width = "20px";
//     img.style.borderRadius = "2px";

//     sortIcon.appendChild(img);
// }

function updatePageHeader1() {
    const menuOptionSpan = document.querySelector('.menu-btn-group-label');

    if (!menuOptionSpan) {
        setTimeout(updatePageHeader, 100);
        return;
    }

    const unwantedSVG = menuOptionSpan.querySelector('svg');
    // unwantedSVG.style.filter = 'invert(1)';

    if (unwantedSVG) unwantedSVG.remove();

    const unwantedImg = menuOptionSpan.querySelector('img.option-icon');
    if (unwantedImg) unwantedImg.remove();
    // insert new image
    const optionImg = document.createElement('img');
    optionImg.src = '/assets/custom_app/images/option.png';
    optionImg.alt = 'Options';
    optionImg.classList.add('option-icon');
    optionImg.style.width = '16px';
    optionImg.style.height = '16px';
    optionImg.style.objectFit = 'contain';

    menuOptionSpan.appendChild(optionImg);

    const sidebarToggleSVGs = document.querySelectorAll('.sidebar-toggle-btn svg');
    sidebarToggleSVGs.forEach(svg => {
        svg.style.stroke = '#ffffff';
        svg.style.strokeWidth = '1.5px';
    });

    const actionsSVGs = document.querySelectorAll('.actions-btn-group svg');
    actionsSVGs.forEach(svg => {
        svg.style.stroke = '#ffffff';
        svg.style.strokeWidth = '1.5px';
    });

    const buttons = document.querySelectorAll('.page-head .btn, .page-head .btn-reset');
    buttons.forEach(btn => {

        btn.style.color = '#ffffff';
        btn.style.borderRadius = '5px';
        btn.style.display = 'flex';
        btn.style.alignItems = 'center';
        btn.style.justifyContent = 'center';
        btn.style.padding = '2px 6px';
        btn.style.background = '#007e85';
        btn.style.height = '30px';

        const hasText = btn.querySelector('span:not(.menu-btn-group-label):not(.hidden-xs)');

        if (hasText) {
            btn.style.width = 'max-content';
            btn.style.minWidth = '30px';
        } else {
            btn.style.width = '30px';
        }
    });
}



setTimeout(() => {
    // updateStatusColor();
    // updateSortIcon();
    updatePageHeader1();
    updatePageHeader();
    updateNavbarBell();
    updateNavbarLogo();
    changeNavbarBG();
    updateNavbarLogo()
}, 800);






