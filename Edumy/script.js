AOS.init();

const swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.scroll-white');
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const navbarLinks = document.querySelector('.navbar-links')
  const navbarLogo1 = document.querySelector('.navbar-logo img:nth-child(1)')
  const navbarLogo2 = document.querySelector('.navbar-logo img:nth-child(2)')
  const navbarLogoSpan = document.querySelector('.navbar-logo span')
  const navbarLogin1 = document.querySelector('.login-div i:nth-child(1) ')
  const navbarLogin2 = document.querySelector('.login-div a:nth-child(2) ')
  const navbarLogin3 = document.querySelector('.login-div i:nth-child(3) ')
  const navbarLogin4 = document.querySelector('.login-div i:nth-child(4) ')
  const NavbarLogin991px1 = document.querySelector('.navbar-login-991px i:nth-child(1)')
  const NavbarLogin991px2 = document.querySelector('.navbar-login-991px i:nth-child(2)')
  if (scrollTop > 0) {
    navbar.classList.add('fixed');
    navbarLinks.classList.add('navbar-links-color')
    navbar.style.position = 'fixed'
    navbar.style.width = '100%'
    navbar.style.zIndex = "1000"
    navbarLogo1.style.display = 'none'
    navbarLogo2.style.display = 'block'
    navbarLogoSpan.style.color = 'black'
    navbarLogin1.style.color = 'black'
    navbarLogin2.style.color = 'black'
    navbarLogin3.style.color = 'black'
    navbarLogin4.style.color = 'black'
    NavbarLogin991px1.style.color = 'black'
    NavbarLogin991px2.style.color = 'black'

  } else {
    navbar.classList.remove('fixed');
    navbar.style.zIndex = "auto";
    navbarLinks.classList.remove('navbar-links-color')
    navbarLogo1.style.display = 'block'
    navbarLogo2.style.display = 'none'
    navbarLogoSpan.style.color = 'white'
    navbarLogin1.style.color = 'white'
    navbarLogin2.style.color = 'white'
    navbarLogin3.style.color = 'white'
    navbarLogin4.style.color = 'white'
    NavbarLogin991px1.style.color = 'white'
    NavbarLogin991px2.style.color = 'white'
  }
});

// ofline start neteework
const pageContainer = document.getElementById('page-container');
const pageofline = document.getElementById('ofline-div')
function checkOnlineStatus() {
  if (navigator.onLine) {
    pageContainer.style.display = 'block';
    pageofline.style.display = 'none';
  } else {
    pageContainer.style.display = 'none';
    pageofline.style.display = 'flex'
  }
}

// İnternet bağlantısını kontrol et
checkOnlineStatus();

// İnternet bağlantısı durumunu dinle
window.addEventListener('online', checkOnlineStatus);
window.addEventListener('offline', checkOnlineStatus);

// ofline end neteework


const LeftNextBtn = document.getElementById('left-next-btn');
const RightNextBtn = document.getElementById('right-next-btn');
const SectionHeader = document.querySelector('.section-header');

const backgroundImageList = [
  'url(assets/images/1.jpg)',
  'url(assets/images/2.jpg)',
  'url(assets/images/3.jpg)'
];
let currentIndex = 0;

function updateBackgroundImage() {
  SectionHeader.style.backgroundImage = backgroundImageList[currentIndex];
  SectionHeader.style.transition = "background-image 0.5s ease";
}

LeftNextBtn.addEventListener('click', function (e) {
  e.preventDefault();
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = backgroundImageList.length - 1;
  }
  updateBackgroundImage();
});

RightNextBtn.addEventListener('click', function (e) {
  e.preventDefault();
  currentIndex++;
  if (currentIndex >= backgroundImageList.length) {
    currentIndex = 0;
  }
  updateBackgroundImage();
});



// bars menu clcik start

const BarsMenuClick = document.getElementById("fa-bars-Click-menu")
const MobileNavbarDisplay = document.querySelector('.header-mobile-navbar')
const bodyElement = document.getElementById('body')
const htmlElement = document.getElementById('html')

BarsMenuClick.addEventListener('click', function (e) {
  e.preventDefault()
  bodyElement.style.overflowY = 'hidden';
  bodyElement.style.overflowX = 'hidden';
  htmlElement.style.overflow = 'hidden'
  MobileNavbarDisplay.classList.toggle('display-on-menu-bars')

})



const BarsMenuCloseClick = document.getElementById("fa-bars-Close-Click-menu")
const MobileNavbarCloseDisplay = document.querySelector('.header-mobile-navbar')
const SectionHeaderColor = document.querySelector('.section-header-color')
BarsMenuCloseClick.addEventListener('click', function (e) {
  e.preventDefault()
  bodyElement.style.overflowY = 'visible';
  bodyElement.style.overflowX = 'visible';
  htmlElement.style.overflow = 'auto'
  MobileNavbarCloseDisplay.classList.toggle('display-on-menu-bars')
})

SectionHeaderColor.addEventListener('click', function (e) {
  if (!e.target.matches('#fa-bars-Click-menu')) {
    if (MobileNavbarDisplay.classList.contains('display-on-menu-bars')) {
      MobileNavbarDisplay.classList.remove('display-on-menu-bars')
      bodyElement.style.overflowY = 'visible';
      bodyElement.style.overflowX = 'visible';
      htmlElement.style.overflow = 'auto'
    }
  }
})

//  basr menu click end
// searcg click start

const SearchClick = document.getElementById('search-Click')
const SeacrInputDispaly = document.querySelector('.serach-navbar')

SearchClick.addEventListener('click', function(e){
  e.preventDefault()

  SeacrInputDispaly.classList.toggle('serach-navbar-diaplay')

})
const SearchClick2 = document.getElementById('search-Click2')
const SeacrInputDispaly2 = document.querySelector('.serach-navbar')

SearchClick2.addEventListener('click', function(e){
  e.preventDefault()

  SeacrInputDispaly2.classList.toggle('serach-navbar-diaplay')

})
const SearchClose = document.getElementById('close-Search')
const SeacrInpuClose = document.querySelector('.serach-navbar')

SearchClose.addEventListener('click', function(e){
  e.preventDefault()

  SeacrInpuClose.classList.toggle('serach-navbar-diaplay')

})

// search click end





// swiper start

// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'vertical',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });

// swiper end









