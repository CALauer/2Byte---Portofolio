console.log("Connected");
import { gitHubIcon, twoByteLogo, hamburgerMenuIcon } from './svgs.js';

// Chooses image directory based on viewport
let imageDirectory;
let width = window.innerWidth
let myIndex = 0;

const checkViewPortSize = () => {
    if (width < 700) {
        imageDirectory = "../images/mobile/"
    } else {
        imageDirectory = "../images/"
    }
}
addEventListener('resize', checkViewPortSize);
checkViewPortSize()
const mouseClicked = addEventListener('click', () => {})
    // Global Variables
let mobileMenuState = false

// THUMBNAIL SLIDE
const thumbSlideOne = $('#thumb-slide-1')
const thumbSlideTwo = $('#thumb-slide-2')
const thumbSlideThree = $('#thumb-slide-3')

const thumb1 = {
    imagePath: `<img src="${imageDirectory}thumb1.jpg" alt="thumb1" />`,
    heading: `<h1>Guides</h1>`
}
const thumb2 = {
    imagePath: `<img src="${imageDirectory}thumb2.jpg" alt="thumb2" />`,
    heading: `<h1>Retro Gaming</h1>`
}
const thumb3 = {
        imagePath: `<img src="${imageDirectory}thumb3.jpg" alt="thumb3" />`,
        heading: `<h1>Tech Reviews</h1>`
    }
    // LOAD THUMB SLIDE
const loadThumbSlide = () => {
        thumbSlideOne.html(`${thumb1.imagePath}`)
        thumbSlideOne.append(`${thumb1.heading}`)
        thumbSlideTwo.html(`${thumb2.imagePath}`)
        thumbSlideTwo.append(`${thumb2.heading}`)
        thumbSlideThree.html(`${thumb3.imagePath}`)
        thumbSlideThree.append(`${thumb3.heading}`)
    }
    // MOBILE LINKS
const mobileMenuLink = $('#mobile-menu-link')
const mobileLogoLink = $('#mobile-logo-link')
const mobileMenu = $('#mobile-menu')

// HEADER SLIDESHOW

// HEADER SLIDES
const slideOne = {
    header: `<h1>Become a member today</h1>`,
    subheader: `
    <h2>Members have many additional benefits ranging from beta participation and community access</h2>
    <a href="javascript:void(0)" class="btn-style-one cta-btn">Register Now</a>`,
    image: `<img src="${imageDirectory}slide2.jpg" alt="slide1" />`,
    message: ``,
}
const slideTwo = {
    header: `<h1>Downloads</h1>`,
    subheader: `<h2>Games, snippets, and more...</h2>`,
    image: `<img src="${imageDirectory}slide1.jpg" alt="slide2" />`,
    message: ``,

}
const slideThree = {
    header: `<h1>Beta Participation</h1>`,
    subheader: `<h2>*Members Only</h2>`,
    image: `<img src="${imageDirectory}slide3.jpg" alt="slide3" />`,
    message: `<a href="javascript:void(0)" class="btn-style-one">Sign Up</a>`,

}

// CONTENT OBJECTS
const homePage = {
    id: $('#desktop-home')[0].id,
    mobileId: $('#mobile-home')[0].id,
    title: "Join a community ",
    message: "No bullshi*"
}
const downloadsPage = {
    id: $('#desktop-downloads')[0].id,
    mobileId: $('#mobile-downloads')[0].id,
    title: "Downloads",
    message: "Store and download you favorite thing."
}
const gamesPage = {
    id: $('#desktop-games')[0].id,
    mobileId: $('#mobile-games')[0].id,
    title: "Games",
    message: "Collection of 2Byte games"
}
const aboutPage = {
    id: $('#desktop-about')[0].id,
    mobileId: $('#mobile-about')[0].id,
    title: "About",
    message: "2ByteWare"
}

console.log(downloadsPage.id)

//  FUNCTIONS
// GET DISPLAYED SECTION
const getActiveSection = (wantedPage) => {
        pages.forEach((page) => {
            if (wantedPage.css('display') == 'none' && wantedPage == page.id) {
                page.id.fadeIn("slow")
                    // console.log(page)
            } else if (wantedPage.css('display') == 'grid' && wantedPage == page.id) {

                console.log("You are viewing this page")
            } else {
                page.id.css("display", "none")
            }
        });
    }
    // MOBILE DROPDOWN MENU
const toggleMobileMenu = () => {
        console.log("clicked menu")
        if (mobileMenuState != true) {
            mobileMenuState = true
            mobileMenu.fadeIn()
        } else if (mobileMenuState == true) {
            mobileMenuState = false
            mobileMenu.fadeOut().addClass('animate__animated animate__slideOutUp')
            setTimeout(() => {
                mobileMenu.removeClass('animate__animated animate__slideOutUp')
            }, 800);
        } else if (mobileMenuState == true && mouseClicked) {
            mobileMenu.fadeOut()
        }

    }
    // LOADS HEADER IMAGE AND MESSAGE
const loadHeaderImg = () => {
    $('#slide-1').append(`${slideOne.image}${slideOne.header}${slideOne.subheader}`)
    $('#slide-2').append(`${slideTwo.image}${slideTwo.header}${slideTwo.subheader}`)
    $('#slide-3').append(`${slideThree.image}${slideThree.header}${slideThree.subheader}`)
    carousel()
}
const carousel = () => {
    var i;
    var headSlides = $(".headerSlides");
    for (i = 0; i < headSlides.length; i++) {
        headSlides[i].classList.remove('appears');
    }
    myIndex++;
    if (myIndex > headSlides.length) { myIndex = 1 }
    headSlides[myIndex - 1].classList.add('appears')
    console.log(headSlides.length)
    setTimeout(carousel, 10000); // Change image every 2 seconds
}


loadThumbSlide()
loadHeaderImg()

// NAVIGATION LINK EVENT LISTENER DESKTOP
$('nav').on('click', 'a', function() {
    if (this.id == homePage.id || this.id == homePage.mobileId) {
        window.location.href = "../views/index.html"
    } else if (this.id == aboutPage.id || this.id == aboutPage.mobileId) {
        window.location.href = "../views/about.html"
    } else if (this.id == gamesPage.id || this.id == gamesPage.mobileId) {
        window.location.href = "../views/games.html"
    } else if (this.id == downloadsPage.id || this.id == downloadsPage.mobileId) {
        window.location.href = "../views/downloads.html"
    } else if (this.id == mobileMenuLink[0].id) {
        console.log("mobileMenuToggle")
        toggleMobileMenu()
    } else if (this.id == mobileLogoLink[0].id) {} else {
        return this.id
    }

});

$('#git-icon').html(gitHubIcon)
$('#two-byte-logo-nav').html(twoByteLogo)
$('#two-byte-logo-mobile-nav').html(twoByteLogo)
$('#hamburger-menu-icon').html(hamburgerMenuIcon)

// ANIMATE SECTIONS ON SCROLL
const target = document.querySelectorAll('.fadeIn');
let callback = function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear')
        } else {
            return
        }
    });
};

let options = {
    root: null,
    rootMargin: '0px 0px -100px 0px',
    threshold: .8
}

let observer = new IntersectionObserver(callback, options);
target.forEach(entry => {
    observer.observe(entry);
})