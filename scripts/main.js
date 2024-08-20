initTechSlider();
initFullScreenWidthGallerSlider();
initWelcomeSlider();
initMenu();
initServicesTabs();
initSpecBlock();
initDatePicker();


function initDatePicker() {
    const getDateView = (add) => {
        const event = new Date();
        event.setDate(event.getDate() + add);
        const options = {
            month: 'long',
            day: 'numeric'
        };
        return event.toLocaleDateString('ru-RU', options);
    }
    const datePickers = document.querySelectorAll(".spec-tab-content-date");
    for (let i = 0; i < datePickers.length; i++) {
        const picker = datePickers[i];

        const view = picker.querySelector(".spec-tab-content-current");

        view.innerHTML = getDateView(0);
    }
}

function initSpecBlock() {
    const btns = document.querySelectorAll(".specialists-controls .btn");
    const content = document.querySelectorAll(".specialist-tab-content");

    for (let i = 0; i < btns.length; i++) {
        const btn = btns[i];

        btn.addEventListener("click", () => {
            const currentActive = document.querySelector(".specialists-controls .btn--red");
            currentActive.classList.remove("btn--red");
            currentActive.classList.add("btn--outlined_white");
            btn.classList.add("btn--red");
            btn.classList.remove("btn--outlined_white");

            const currentActiveCnt = document.querySelector(".specialist-tab-content--active");
            currentActiveCnt.classList.remove("specialist-tab-content--active");
            content[i].classList.add("specialist-tab-content--active");
        })
    }

    for (let i = 0; i < content.length; i++) {
        const contentItem = content[i];

        const buttons = contentItem.querySelectorAll(".specialist-item");
        const docContent = contentItem.querySelectorAll(".specialist-tab-content-right");
        
        for (let i = 0; i < buttons.length; i++) {
            const btndoc = buttons[i];

            btndoc.addEventListener("click", () => {
                const currentActive = contentItem.querySelector(".specialist-item--active");
                currentActive.classList.remove("specialist-item--active");
                btndoc.classList.add("specialist-item--active");

                const currentActiveRight = contentItem.querySelector(".specialist-tab-content-right--active");
                currentActiveRight.classList.remove("specialist-tab-content-right--active");
                docContent[i].classList.add("specialist-tab-content-right--active");
            });
        }
    }
}

function initServicesTabs() {
    const serviceBlocks = document.querySelectorAll(".services");

    for (let i = 0; i < serviceBlocks.length; i++) {
        const wrap = serviceBlocks[i];

        const btns = wrap.querySelectorAll(".services-tabs-control-item");
        const items = wrap.querySelectorAll(".services-items");
    
        for (let i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", (event) => {
                event.preventDefault();
    
                const currentActive = wrap.querySelector(".services-items--active");
                currentActive.classList.remove("services-items--active");
                items[i].classList.add("services-items--active");
    
                const currentActiveBtn = wrap.querySelector(".services-tabs-control-item--active .btn");
                currentActiveBtn.classList.remove("btn--red");
                currentActiveBtn.classList.add("btn--transparent");
                currentActiveBtn.parentNode.classList.remove("services-tabs-control-item--active");
                btns[i].classList.add("services-tabs-control-item--active");
                const btnInner = btns[i].querySelector(".btn");
                btnInner.classList.add("btn--red");
            });
        }
    }
}

function initMenu() {
    const openButton = document.querySelector(".header-mobile-menu");
    const menu = document.querySelector(".menu-mobile");
    const firstLevelParents = document.querySelectorAll(".menu-mobile-lvl1-item--parent");
    const firstLevelParentsLinks = document.querySelectorAll(".menu-mobile-lvl1-item--parent > a");

    openButton.addEventListener("click", () => {
        menu.classList.toggle("menu-mobile--open");

        for (let i = 0; i < firstLevelParents.length; i++) {
            firstLevelParents[i].classList.remove("menu-mobile-lvl1-item--parent--open")
        }
    });

    for (let i = 0; i < firstLevelParentsLinks.length; i++) {
        firstLevelParentsLinks[i].addEventListener("click", (event) => {
            event.preventDefault();
            const parent = event.target.parentNode;
            parent.classList.toggle("menu-mobile-lvl1-item--parent--open");
        });
    }
}

function initTechSlider() {
    const slider = window.tns({
        container: '.tech-block-items',
        items: 1,
        autoplay: true,
        controls: false,
        autoplayTimeout: 9000,
        mode: "gallery",
        gutter: 20
    });

    slider.events.on('transitionEnd', (info) => {
        const video = info.event.target.querySelector("video");
        video.pause();
        video.currentTime = 0;
        video.play();

    });
}
function initFullScreenWidthGallerSlider() {
    window.tns({
        container: '.full-screen-gallery-slider-inner',
        items: 1,
        autoplay: true,
        controls: false,
        gutter: 20,
        responsive: {
            768: {
                items: 3,
                gutter: 15
            },
            1024: {
                items: 3,
                gutter: 40
            }
        }
    });
}
function initWelcomeSlider() {
    window.tns({
        container: '.welcome-slider-inner',
        items: 1,
        autoplay: true,
        gutter: 15,
        controls: true,
        fixedWidth: 359,
        responsive: {
            768: {
                items: 2,
                gutter: 15
            },
            1024: {
                items: 3,
                gutter: 25
            }
        }
    });
}