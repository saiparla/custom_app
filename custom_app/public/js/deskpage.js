
const replaceMenuIcon = () => {
    const labels = document.querySelectorAll('.menu-btn-group-label');
    labels.forEach(label => {
        const svg = label.querySelector('svg');
        if (svg) svg.remove();

        if (!label.querySelector('img')) {
            const img = document.createElement('img');
            img.src = "/assets/flowtech_ui/images/option.png";
            img.alt = "Options";
            img.style.width = "16px";
            img.style.height = "16px";
            img.style.objectFit = "contain";
            label.appendChild(img);
        }
    });
}

document.addEventListener("DOMContentLoaded", replaceMenuIcon);

const observer1 = new MutationObserver(replaceMenuIcon);
observer1.observe(document.body, {
    childList: true,
    subtree: true
});




const replacePageIcon = () => {
    const pageButtons = document.querySelectorAll('.page-icon-group button');
    pageButtons.forEach(btn => {
        const reloadtitle = btn.getAttribute('data-original-title') || btn.title;
        if (reloadtitle == 'Reload List') {
            const svg = btn.querySelector('svg');
            if (svg) svg.remove();

            if (!btn.querySelector('img')) {
                const img = document.createElement('img');
                img.src = "/assets/flowtech_ui/images/reload.png";
                img.alt = "Reload";
                img.style.width = "16px";
                img.style.width = "16px";
                img.style.rotate = "29deg";
                img.style.objectFit = "contain";
                img.style.transition = "transform  0.5s";
                btn.appendChild(img);
                img.addEventListener('click', () => {
                    img.style.transform = "rotate(360deg)";

                    setTimeout(() => {
                        img.style.transform = "rotate(0deg)";
                    }, 500);
                });
            }
        }

        const printtitle = btn.getAttribute('data-original-title') || btn.title;
        if (printtitle == 'Print') {
            const svg = btn.querySelector('svg');
            if (svg) svg.remove();
            if (!btn.querySelector('img')) {
                const img = document.createElement('img');
                img.src = "/assets/flowtech_ui/images/printer.png";
                img.alt = "Reload";
                img.style.width = "16px";
                img.style.height = "16px";
                // img.style.rotate = "29deg";
                img.style.objectFit = "contain";
                img.style.transition = "transform 0.25s ease";
                btn.appendChild(img);

                img.addEventListener('mouseenter', () => {
                    img.style.transform = "rotate(29deg)";

                    setTimeout(() => {
                        img.style.transform = "rotate(-29deg)";
                    }, 150);

                    setTimeout(() => {
                        img.style.transform = "rotate(-29deg)";
                    }, 300);
                    setTimeout(() => {
                        img.style.transform = "rotate(0deg)";
                    }, 400);
                });
                img.addEventListener('mouseout', () => {
                    img.style.transform = "rotate(0deg)";
                })
            }


        }
    });
}

document.addEventListener("DOMContentLoaded", replacePageIcon);

const observer2 = new MutationObserver(replacePageIcon);
observer2.observe(document.body, {
    childList: true,
    subtree: true
});


function replaceCustomButtonIcon() {

    const customButtons = document.querySelectorAll('.custom-btn-group .btn.btn-default.btn-sm.ellipsis');

    customButtons.forEach(btn => {
        const hiddenSpan = btn.querySelector('.hidden-xs');
        if (hiddenSpan) {
            const svgs = hiddenSpan.querySelectorAll('.icon.icon-sm');
            svgs.forEach(svg => svg.remove());

            if (!hiddenSpan.querySelector('img')) {
                const img = document.createElement('img');
                img.src = "/assets/flowtech_ui/images/menu.png";
                img.alt = "Options";
                img.style.width = "16px";
                img.style.height = "16px";
                img.style.objectFit = "contain";
                hiddenSpan.insertBefore(img, hiddenSpan.firstChild);
            }
        }
    });
}
replaceCustomButtonIcon();
const observer = new MutationObserver(replaceCustomButtonIcon);
observer.observe(document.body, { childList: true, subtree: true });


function replaceAddItemIcon() {
    const addItemButton = document.querySelector('.btn-primary.primary-action');

    if (addItemButton) {
        const textSpan = addItemButton.querySelector('.hidden-xs');
        if (textSpan) {
            const svg = addItemButton.querySelector('svg');
            if (svg) svg.remove();

            if (!textSpan.querySelector('img')) {
                const img = document.createElement('img');
                img.src = "/assets/flowtech_ui/images/add.png";
                img.alt = "Options";
                img.style.width = "16px";
                img.style.height = "16px";
                img.style.objectFit = "contain";
                img.style.marginRight = "4px";

                textSpan.insertBefore(img, textSpan.firstChild);
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', replaceAddItemIcon);

const observer3 = new MutationObserver(replaceAddItemIcon);
observer3.observe(document.body, {
    childList: true,
    subtree: true
});

const sortselection = () => {
    const filterflex = document.querySelector('.filter-section.flex');
    if (!filterflex) return;

    const filterselectors = filterflex.querySelectorAll('.sort-selector');
    if (filterselectors.length === 0) return;

    filterselectors.forEach(selector => {
        const orderButton = selector.querySelector('.btn-order');
        const ordertext = selector.querySelector('.sort-selector-button');
        const dropdown = selector.querySelector('.dropdown-menu.dropdown-menu-right')
        if (!orderButton) return;
        orderButton.style.padding = '6px';
        // orderButton.style.marginRight = '2px';
        // orderButton.style.borderRadius = '5px';
        // orderButton.style.boxShadow = '0px 0px 3px grey';

        // if (ordertext) {
        // ordertext.style.backgroundColor = '#3271c2';
        // ordertext.style.color = '#fff';
        // ordertext.style.marginRight = '2px';
        // ordertext.style.borderRadius = '5px';
        // ordertext.style.boxShadow = '0px 0px 3px grey';

        // ordertext.addEventListener('mouseover', () => {
        //     ordertext.style.backgroundColor = '#525252';
        //     ordertext.style.color = '#fff';
        // })
        // ordertext.addEventListener('mouseout', () => {
        //     ordertext.style.backgroundColor = '#3271c2';
        //     ordertext.style.color = '#fff';
        // })
        //     if (dropdown) {
        //         const dropdownactions = dropdown.querySelectorAll('.dropdown-item.option')
        //         if (dropdownactions) {
        //             dropdownactions.forEach((options) => {
        //                 options.style.color = '#383838'
        //                 options.style.transition = '500ms'


        //                 options.addEventListener('mouseover', () => {
        //                     const currentWidth = options.getBoundingClientRect().width;
        //                     options.style.background = 'linear-gradient(135deg, #3271C2, #163E76)'
        //                     options.style.color = '#fff'
        //                     options.style.marginLeft = '10px'
        //                     options.style.width = (currentWidth - 10) + 'px';
        //                 })
        //                 options.addEventListener('mouseout', () => {
        //                     options.style.background = 'transparent';
        //                     options.style.color = '#383838';
        //                     options.style.marginLeft = '0px'
        //                     const currentWidth = options.getBoundingClientRect().width;
        //                     options.style.width = (currentWidth) + 'px';
        //                 })
        //             })
        //         }
        //         dropdown.style.backgroundColor = '#fff'
        //         dropdown.style.borderRadius = '5px'
        //         dropdown.style.boxShadow = '0px 0px 4px #888'
        //     }
        // }

        const sortselectorsvg = selector.querySelector('.sort-order');
        if (sortselectorsvg) sortselectorsvg.style.display = 'none';

        let img = orderButton.querySelector('img');
        if (!img) {
            img = document.createElement('img');
            img.style.width = '20px';
            img.style.height = '20px';
            img.style.objectFit = 'contain';
            img.style.marginLeft = '3px';
            img.style.marginTop = '-2px';
            orderButton.appendChild(img);
        }

        if (orderButton.dataset.sortState === undefined) {
            orderButton.dataset.sortState = orderButton.getAttribute('data-value') || 'asc';
        }

        const updateSortIcon = () => {
            const sortValue = orderButton.dataset.sortState;
            if (sortValue === 'asc') {
                img.src = '/assets/flowtech_ui/images/sort-asc.png';
                img.alt = 'Ascending';
            } else {
                img.src = '/assets/flowtech_ui/images/sort-desc.png';
                img.alt = 'Descending';
            }
            orderButton.style.color = '#fff';
        };

        updateSortIcon();
        if (!orderButton.dataset.listenerAttached) {
            orderButton.addEventListener('click', () => {
                orderButton.dataset.sortState = orderButton.dataset.sortState === 'asc' ? 'desc' : 'asc';

                updateSortIcon();
            });
            orderButton.dataset.listenerAttached = 'true';
        }
    });
};

document.addEventListener("DOMContentLoaded", sortselection);

const sortobserver = new MutationObserver(sortselection);
sortobserver.observe(document.body, {
    childList: true,
    subtree: true
});


