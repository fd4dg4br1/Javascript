class MobileNavBar {
    constructor(mobileMenu,navList,menuBar) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.menuBar = document.querySelector(menuBar);
        this.activeClass = "active";

        this.menuEnter = this.menuEnter.bind(this);
        this.menuOut = this.menuOut.bind(this);
    }

    menuOut(){
        
        this.navList.classList.remove(this.activeClass);
        this.mobileMenu.classList.remove(this.activeClass);
    }

    menuEnter(){
        // console.log("mouse dentro")
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
    }

    addListenEvent(){
        this.menuBar.addEventListener("mouseenter", () => this.menuEnter());
        // this.navList.addEventListener("mouseleave", () => this.menuOut());
        this.menuBar.addEventListener("mouseleave", () => this.menuOut());
    }
    addClickEvent(){
        this.mobileMenu.addEventListener("click", () => this.menuEnter());
    }
    init() {
        if(this.mobileMenu){
            this.addClickEvent();
            this.addListenEvent();
        }
        return this;
    }

}
const mobileNavBar = new MobileNavBar(
    ".mobile-menu",
    ".nav-list",
    ".menuBar"
);
mobileNavBar.init();