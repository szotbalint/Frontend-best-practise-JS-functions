/* To top BTN scroller */

//jQuery version:
var btn = $('#button');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});

//without jQuery
function ScrollToTop() {
    if (window.scrollY != 0) {
        setTimeout(function() {
            window.scrollTo(0, window.scrollY - 30);
            ScrollToTop();
        }, 20);
    }
}

//without jquery, advanced version
document.getElementsByTagName('button')[0].onclick = function() {
    scrollTo(document.body, 0, 1250);
}

function scrollTo(element, to, duration) {
    var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;

    var animateScroll = function() {
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if (currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
}

//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
};


/* Paginer hider
    If there are more buttons like you need to show in paginer.
    Every paginer buttons have to got "paginer" class, and the active button has to got "btn-active" class
*/

function PaginerDecorator() {
    var buttonsNumber = document.getElementsByClassName("paginer-btn")
    for (let i = 0; i < buttonsNumber.length; i++) {
        if (buttonsNumber[i].classList.contains("active-btn")) {
            var activeNumber = i
        }
    }
    for (let i = 1; i < activeNumber; i++) {
        buttonsNumber[i].classList.add("d-none")
    }
    for (let i = activeNumber + 1; i < buttonsNumber.length; i++) {
        buttonsNumber[i].classList.add("d-none")
    }
}

/* Price formatter, integer to Ft format, like 1 000 or 1 000 000 
every country's code can be used, it's changeable
*/
var priceArray = document.getElementsByClassName("price");
for (let i = 0; i < priceArray.length; i++) {
    let y = priceArray[i].innerHTML;
    y.toString;
    priceArray[i].innerHTML = new Number(y).toLocaleString("hu-HU");
}