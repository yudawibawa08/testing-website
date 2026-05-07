// Toggle class menu
$(function () {
    $('.menu').on('click', function () {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.ss-menu1').addClass('visible1');
            $('.ss-menu2').addClass('visible2');
            $('.ss-menu3').addClass('visible3');
            $('.ss-menu4').addClass('visible4');
            $('.ss-menu5').addClass('visible5');
        } else {
            $('.ss-menu1').removeClass('visible1');
            $('.ss-menu2').removeClass('visible2');
            $('.ss-menu3').removeClass('visible3');
            $('.ss-menu4').removeClass('visible4');
            $('.ss-menu5').removeClass('visible5');
        }
    });
});

$(function () {
    $('.ss-menu').on('click', function () {
        $('.menu').removeClass('active');
        $('.ss-menu1').removeClass('visible1');
        $('.ss-menu2').removeClass('visible2');
        $('.ss-menu3').removeClass('visible3');
        $('.ss-menu4').removeClass('visible4');
        $('.ss-menu5').removeClass('visible5');
    });
});

$(function () {
    $(window).on('scroll', function () {
        if ($('.menu').hasClass('active')) {
            $('.menu').removeClass('active');
            $('.ss-menu1').removeClass('visible1');
            $('.ss-menu2').removeClass('visible2');
            $('.ss-menu3').removeClass('visible3');
            $('.ss-menu4').removeClass('visible4');
            $('.ss-menu5').removeClass('visible5');
        }
    });
});

// Parallax effect and gsap
$(function () {
    if (!window.location.pathname.match("mentions")) {
        $('.rellax').css('transform', 'translateX(-50%)');
        var rellax = new Rellax('.rellax');
    }
});

// Script alamat Email
window.addEventListener("load", function () {
    if (document.getElementById('insertMail')) {
        let name = "admin";
        let domain = "travelagent.com";
        let divMail = document.getElementById('insertMail');
        let newAhref = document.createElement('a');
        newAhref.href = "mailto:" + name + '@' + domain;
        newAhref.innerHTML = name + '@' + domain;
        divMail.appendChild(newAhref);
    }
});

// Manage video
$(function () {
    $('video').on('click', function (event) {
        event.preventDefault();
        let videoId = this.id;
        document.getElementById(videoId).play();
    });
});

// Manage form validation (Real-time)
$(function () {
    $('#nom').on('blur input', function () {
        if ($('#nom').val().length >= 50) {
            $('#helpNom').text('50 characters max').show();
        } else {
            $('#helpNom').hide();
        }
    });

    $('#telephone').on('blur input', function () {
        let regexTelephone = /[0]{1}[1-7]{1}[0-9]{8}/;
        let telEntry = String($('#telephone').val()).replace(/\s/g, '');
        if (!telEntry.match(regexTelephone)) {
            $('#helpTel').text('Incorrect phone number').show();
        } else {
            $('#helpTel').hide();
        }
    });

    $('#mail').on('blur input', function () {
        let regexMail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
        let mailEntry = $('#mail').val();
        if (!mailEntry.match(regexMail)) {
            $('#helpMail').text('Incorrect email address').show();
        } else {
            $('#helpMail').hide();
        }
    });

    $('#checkRobot').on('blur input', function () {
        if ($('#checkRobot').val() != 7) {
            $('#helpRobot').text('Incorrect result of 3 + 4').show();
        } else {
            $('#helpRobot').hide();
        }
    });
});

// Contact form Submission (Static Mode for Testing)
$(function () {
    $('.contactForm').on('submit', function (e) {
        e.preventDefault();
        let checkRobot = $('#checkRobot').val();

        if (checkRobot == 7) {
            // Simulasi pengiriman berhasil untuk testing
            $('.contactForm').fadeOut(400, function () {
                $('#thankYouPopup').fadeIn();
                $('#overlay').fadeIn();
            });
            $('.contactForm').trigger("reset");
        } else {
            $('#helpRobot').text('Please solve the math correctly!').show();
        }
    });
});

// Form newsletter static send
$(function () {
    $('.newsletterForm').on('submit', function (e) {
        e.preventDefault();
        let checkRobot = $('#checkRobotNews').val();

        if (checkRobot == 7) {
            $('.newsletterForm').fadeOut(400, function () {
                $('#retourNewsFormulaire').css({
                    "padding": "10px",
                    "margin-top": "20px",
                    "color": "white",
                    "text-align": "center"
                });
                $('#retourNewsFormulaire').html("Subscription successful! (Static Test)").show();
            });
        } else {
            $('#helpMailNews').text('Incorrect result of 4 + 3').show();
        }
    });
});

// Close Popup Function
function closePopup() {
    $('#thankYouPopup').fadeOut();
    $('#overlay').fadeOut();
}

// Animations on scroll
$(function () {
    $(window).on('scroll', function () {
        let sizePage = $(window).height();
        let trigger = 100;
        $('.animatableY, .animatableX, .animatableOpacity').each(function () {
            if (this.getBoundingClientRect().top + trigger <= sizePage) {
                $(this).addClass('showed');
            }
        });
    });
});

// Manage scroll up button
$(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 600) {
            $('#upArrow').fadeIn();
        } else {
            $('#upArrow').fadeOut();
        }
    });
    $('#upArrow').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
});

// UI helpers
$(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 150) {
            $('#scrollDown').hide();
        } else {
            $('#scrollDown').show();
        }
    });

    $('#scrollDown').on('click', function () {
        $('html, body').animate({
            scrollTop: $("#nextShow").offset().top
        }, 800);
    });
});
