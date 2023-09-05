
// home menu start  ------------------------------
const ClickHome = document.getElementById('header-mobile-links-click');
const ClicikFaAngle = document.querySelector('.fa-angle-right');
const MobileHomeDisble = document.querySelector('.header-mobile-links-home-bottom1');
// bottom1 start
ClickHome.addEventListener('click', function (e) {
    e.preventDefault();

    MobileHomeDisble.classList.toggle('display-on');
    ClicikFaAngle.classList.toggle('fa-angle-left');
});

const ClickHome2 = document.getElementById('header-mobile-links-click2');
const MobileHomeDisble2 = document.querySelector('.header-mobile-links-home-bottom1');

ClickHome2.addEventListener('click', function (e) {
    e.preventDefault();

    MobileHomeDisble2.classList.toggle('display-on');
    ClicikFaAngle.classList.toggle('fa-angle-left');
});
//  bottom1 end
// bottom2 start
const ClickUpdateNewHomepages1 = document.getElementById('header-mobile-links-Update-New-Homepages1')
const UpdateNewHomePagesDisable1 = document.querySelector('.header-mobile-links-home-bottom2')
ClickUpdateNewHomepages1.addEventListener('click', function (e) {
    e.preventDefault()

    UpdateNewHomePagesDisable1.classList.toggle('display-on')
    ClicikFaAngle.classList.toggle('fa-angle-left')
})

const ClickUpdateNewHomepages2 = document.getElementById('header-mobile-links-Update-New-Homepages2')
const UpdateNewHomePagesDisable2 = document.querySelector('.header-mobile-links-home-bottom2')

ClickUpdateNewHomepages2.addEventListener('click', function (e) {
    e.preventDefault()

    UpdateNewHomePagesDisable2.classList.toggle('display-on')
    ClicikFaAngle.classList.toggle('fa-angle-left')
})
// bottom2 end
// home menu end ------------------------------

//courses menu start -----------------------
// bottom1 start
const coursesMenuClick = document.getElementById('CorusesClick')
const coursesMenuCoursesListDisplay = document.querySelector('.courses-bottom1')

coursesMenuClick.addEventListener("click", function(e){
    e.preventDefault()

    coursesMenuCoursesListDisplay.classList.toggle('display-on')
    ClicikFaAngle.classList.toggle('fa-angle-left')
})
const coursesMenuClick2 = document.getElementById('CorusesClick2')
const coursesMenuCoursesListDisplay2 = document.querySelector('.courses-bottom1')

coursesMenuClick2.addEventListener('click', function(e){
    e.preventDefault()

    coursesMenuCoursesListDisplay2.classList.toggle('display-on')
    ClicikFaAngle.classList.toggle('fa-angle-left')
})
// bottom1 end

// bottom2 start
const coursesListClick = document.getElementById('Coruses-list-Click')
const coursesListDisplay = document.querySelector('.Courses-List-bottom2')

coursesListClick.addEventListener('click', function(e){
    e.preventDefault()

    coursesListDisplay.classList.toggle('display-on')
    ClicikFaAngle.classList.toggle('fa-angle-left')
})
const coursesListClick2 = document.getElementById('Coruses-list-Click2')
const coursesListDisplay2 = document.querySelector('.Courses-List-bottom2')

coursesListClick2.addEventListener('click', function(e){
    e.preventDefault()

    coursesListDisplay.classList.toggle('display-on')
    ClicikFaAngle.classList.toggle('fa-angle-left')
})
// bottom2 end 

// bottom3 start

const coursesSingleClcik = document.getElementById('Courses-Single-Click')
const coursesSingleDisplay = document.querySelector('.Coruses-Single-bottom3')

coursesSingleClcik.addEventListener('click', function(e){
    e.preventDefault()

    coursesSingleDisplay.classList.toggle('display-on')
    ClicikFaAngle.classList.toggle('.fa-angle-left')
})

const coursesSingleClcik2 = document.getElementById('Coruses-Single-Click2')
const coursesSingleDisplay2 = document.querySelector('.Coruses-Single-bottom3')

coursesSingleClcik2.addEventListener('click', function(e){
    e.preventDefault()

    coursesSingleDisplay2.classList.toggle('display-on')
    ClicikFaAngle.classList.toggle('.fa-angle-left')
})
// bottom3 end
// courses menu end

// Events menu start
// bottom1 strat
    const EventsClick = document.getElementById('EventsClick')
    const EventsDisplay = document.querySelector(".Events-bottom1")

    EventsClick.addEventListener('click', function(e){
        e.preventDefault()

        EventsDisplay.classList.toggle('display-on')
        ClicikFaAngle.classList.toggle('.fa-angle-left')
    })
    const EventsClick2 = document.getElementById('EventsClick2')
    const EventsDisplay2 = document.querySelector(".Events-bottom1")

    EventsClick2.addEventListener('click', function(e){
        e.preventDefault()

        EventsDisplay2.classList.toggle('display-on')
        ClicikFaAngle.classList.toggle('.fa-angle-left')
    })
// bottom1 end
// Ecents menu end

//pages menu start
// bottom1 start
    const PagesClick = document.getElementById('PagesClick')
    const PagesDisplay = document.querySelector('.Pages-bottom1')

    PagesClick.addEventListener('click', function(e){
        e.preventDefault()

        PagesDisplay.classList.toggle('display-on')
        ClicikFaAngle.classList.toggle('.fa-angle-left')
    })
    const PagesClick2 = document.getElementById('PagesClick2')
    const PagesDisplay2 = document.querySelector('.Pages-bottom1')

    PagesClick2.addEventListener('click', function(e){
        e.preventDefault()

        PagesDisplay2.classList.toggle('display-on')
        ClicikFaAngle.classList.toggle('.fa-angle-left')
    })
// bottom1 end
//pages menu end

// shop pages menu start
// bottom2 start
    const ShopPagesClick = document.getElementById('Shop-Pages-Click')
    const ShopPagesDisplay = document.querySelector('.Shop-pages-bottom2')

    ShopPagesClick.addEventListener('click', function(e){
        e.preventDefault()
        
        PagesDisplay.style.overflowY = 'hidden';
        ShopPagesDisplay.classList.toggle('display-on')
        ClicikFaAngle.classList.toggle('.fa-angle-left')
    })
    const ShopPagesClick2 = document.getElementById('Shop-Pages-Click2')
    const ShopPagesDisplay2 = document.querySelector('.Shop-pages-bottom2')

    ShopPagesClick2.addEventListener('click', function(e){
        e.preventDefault()
        
        
        ShopPagesDisplay2.classList.toggle('display-on')
        ClicikFaAngle.classList.toggle('.fa-angle-left')
    })
    // bottom2 ende
// shop pages menu ende


// Users-Admin menu start
// bottom3 start

    const UsersAdminClick = document.getElementById('User-Admin-Click')
    const UsersAdminDisplay = document.querySelector('.User-Admin-bottom3')

    UsersAdminClick.addEventListener('click', function(e){
        e.preventDefault()

        PagesDisplay.style.overflowY = 'hidden';
        UsersAdminDisplay.classList.toggle('display-on')
        ClicikFaAngle.classList.toggle('fa-angle-left')

    })
    const UsersAdminClick2 = document.getElementById('User-Admin-Click2')
    const UsersAdminDisplay2 = document.querySelector('.User-Admin-bottom3')

    UsersAdminClick2.addEventListener('click', function(e){
        e.preventDefault()
        PagesDisplay.style.overflowY = 'scroll';
        UsersAdminDisplay2.classList.toggle('display-on')
        ClicikFaAngle.classList.toggle('fa-angle-left')

    })
// bottom3 ende
// Users-Admin menu ende

// blog menu start
// bottom1 start
    const blogClick = document.getElementById('BlogClick')
    const blogDisplay = document.querySelector('.Blog-bottom1')

    blogClick.addEventListener('click', function(e){
        e.preventDefault()

        blogDisplay.classList.toggle('display-on')
        ClicikFaAngle.classList.toggle('.fa-angle-left')
    })
    const blogClick2 = document.getElementById('BlogClick2')
    const blogDisplay2 = document.querySelector('.Blog-bottom1')

    blogClick2.addEventListener('click', function(e){
        e.preventDefault()

        blogDisplay2.classList.toggle('display-on')
        ClicikFaAngle.classList.toggle('.fa-angle-left')
    })
// bottom1 end
// blog menu end