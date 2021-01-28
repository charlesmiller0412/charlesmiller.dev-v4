$(document).ready(function () {

    // SLICK INIT
    $('.projects__carousel-web').slick({
        speed: 300,
        swipeToSlide: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    swipeToSlide: true,
                    speed: 300,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 3000,
                }
            }
        ]
    });

    $('.projects__carousel-graphic').slick({
        speed: 300,
        swipeToSlide: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    swipeToSlide: true,
                    speed: 300,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 3000,
                }
            }
        ]
    });

    // $('.projects__carousel-apps').slick({
    //     speed: 300,
    //     swipeToSlide: true,
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 3
    // });

    // BEGIN PROJECTS OVERLAY
    if ($('.web_card').click(function () {
        $('.projects__carousel-card--overlay').css('display', 'flex');
        $('#project_code').css('display', 'block'); //makes view code display as block for each select
        
        if (this.id === 'natours') {
            $('#project_image').attr({ 'src': '/projects/Web/natours/natours.png', 'alt': 'Natours Project' });
            $('#project_site').attr({ 'href': '/projects/Web/natours/index.html', 'target': '_blank' });
            $('#project_code').attr({ 'href': 'https://github.com/charlesmiller0412/natours', 'target': '_blank' });
        } else if (this.id === 'twotrees') {
            $('#project_image').attr({ 'src': '/projects/Web/Two Trees/Screenshot.png', 'alt': 'Two Trees Project' });
            $('#project_site').attr({ 'href': '/projects/Web/Two Trees/index.html', 'target': '_blank' });
            $('#project_code').attr({ 'href': 'https://github.com/charlesmiller0412/twotrees', 'target': '_blank' });
        } else if (this.id === 'purrfect') {
            $('#project_image').attr({ 'src': '/projects/Web/purrfect/purrfect.png', 'alt': 'Purrfect Pet Adoption Landing Page project' });
            $('#project_site').attr({ 'href': '/projects/Web/purrfect/index.html', 'target': '_blank' });
            $('#project_code').attr({ 'href': 'https://github.com/charlesmiller0412/purrfect', 'target': '_blank' });
        } else if (this.id === 'chapter1') {
            $('#project_image').attr({ 'src': '/projects/Web/Chapter 1/screenshot.png', 'alt': 'University JavaScript Project' });
            $('#project_site').attr({ 'href': '/projects/Web/Chapter 1/index.html', 'target': '_blank' });
            $('#project_code').css('display', 'none');
        } else if (this.id === 'museum') {
            $('#project_image').attr({ 'src': '/projects/Web/museum/museumOfCandy.png', 'alt': 'Museum of Candy Landing Page project' });
            $('#project_site').attr({ 'href': '/projects/Web/museum/index.html', 'target': '_blank' });
            $('#project_code').attr({ 'href': 'https://github.com/charlesmiller0412/museumOfCandy', 'target': '_blank' });
        } else if (this.id === 'pattern') {
            $('#project_image').attr({ 'src': '/projects/Web/pattern/pattern.png', 'alt': 'Pattern project' });
            $('#project_site').attr({ 'href': '/projects/Web/pattern/index.html', 'target': '_blank' });
            $('#project_code').attr({ 'href': 'https://github.com/charlesmiller0412/pattern', 'target': '_blank' });
        } else if (this.id === 'jsOne') {
            $('#project_image').attr({ 'src': '/projects/Web/JS project/screenshot.png', 'alt': 'JavaScript University project' });
            $('#project_site').attr({ 'href': '/projects/Web/JS project/index.html', 'target': '_blank' });
            $('#project_code').attr({ 'href': 'https://github.com/charlesmiller0412/jsTutorialOne', 'target': '_blank' });
        } else if (this.id === 'jsTwo') {
            $('#project_image').attr({ 'src': '/projects/Web/JS Project 2/screenshot.png', 'alt': 'JavaScript University project' });
            $('#project_site').attr({ 'href': '/projects/Web/JS Project 2/index.html', 'target': '_blank' });
            $('#project_code').attr({ 'href': 'https://github.com/charlesmiller0412/jsTutorialTwo', 'target': '_blank' });
        } else if (this.id === 'wok') {
            $('#project_image').attr({ 'src': '/projects/Web/wok/screenshot.png', 'alt': 'Multi page restaurant from University project' });
            $('#project_site').attr({ 'href': '/projects/Web/wok/index.html', 'target': '_blank' });
            $('#project_code').attr({ 'href': 'https://github.com/charlesmiller0412/wok', 'target': '_blank' });
        } else if (this.id === 'routeHolden') {
            $('#project_image').attr({ 'src': '/projects/Web/routeHolden/screenshot.png', 'alt': 'Multi page blog from University project' });
            $('#project_site').attr({ 'href': '/projects/Web/routeHolden/index.html', 'target': '_blank' });
            $('#project_code').attr({ 'href': 'https://github.com/charlesmiller0412/routeHolden', 'target': '_blank' });
        }

    }))
        
        if ($('#overlay_close').click(function () {
            $('.projects__carousel-card--overlay').css('display', 'none');
        }))
// --------------------------------------//
    //SKILLS ANIMATION BEGIN IN VIEWPORT
    $(function () {
    
        var $meters = $(".percent > .progress");
        var $section = $('.skills__list-lifeCycle');
        var $queue = $({});
        
        function loadBars() {
            $meters.each(function () {
                $('.progress').css("opacity", "1");
                var $el = $(this);
                var origWidth = $el.width();
                $el.width(0);
                $queue.queue(function(next) {
                    $el.animate({width: origWidth}, 200, next);
                });
            });
        }
        
        $(document).bind('scroll', function(ev) {
            var scrollOffset = $(document).scrollTop();
            var containerOffset = $section.offset().top - window.innerHeight;
            if (scrollOffset > containerOffset) {
                loadBars();
                // unbind event not to load scrolsl again
                $(document).unbind('scroll');
            }
        });
    
    });
// --------------------------------------//
    
    
// --------------------------------------//
    // PROJECTS CARD HOVER EFFECTS
    $('.projects__carousel-card').hover(function() { // Mouse over
        $('.projects__carousel-card').not(this).stop().fadeTo(300, 0.6);
        $('.projects__carousel-card').not(this).stop().fadeTo(300, 0.3); 
    }, function() { // Mouse out
        $(this).stop().fadeTo(300, 1);
        $('.projects__carousel-card').stop().fadeTo(300, 1);
    });

    // BEGIN SCROLL ACTIVE LINKS
    $(window).scroll(function () {
        if ($(document).scrollTop() > 20) {
            $('.navbar').removeClass('navTop');
        } else {
            $('.navbar').addClass('navTop');
        }
        
        var scroll = $(window).scrollTop();
        var aboutOffset = $('.about').offset().top;
        var skillsOffset = $('.skills').offset().top;
        var projectsOffset = $('.projects').offset().top;
        var contactOffset = $('.contact').offset().top;
        
        //home
        if (scroll >= 0 && scroll < aboutOffset-5) {
            $('#home').addClass('active');
            $('#about').removeClass('active');
        }
        //about
        if (scroll >= aboutOffset && scroll < skillsOffset-5) {
            $('#about').addClass('active');
            $('#home').removeClass('active');
            $('#skills').removeClass('active');
        }
        //skills
        if (scroll >= skillsOffset && scroll < projectsOffset-5) {
            $('#skills').addClass('active');
            $('#about').removeClass('active');
            $('#projects').removeClass('active');
        }
        //projects
        if (scroll >= projectsOffset && scroll < contactOffset-5) {
            $('#projects').addClass('active');
            $('#contact').removeClass('active');
            $('#skills').removeClass('active');
        }
        //contact
        if (scroll >= contactOffset-5) {
            $('#contact').addClass('active');
            $('#projects').removeClass('active');
        }
    })
// --------------------------------------//
})