import {data} from "./data.js";
import {formatText} from "./setup-content.js";

function ucwords(str) {
    return str.replace(/\b\w/g, c => c.toUpperCase());
}

let elements = ''

function getSvg(svg) {
    if (svg.includes('loading')) {
        return 'loading-spinner'
    } else if (svg.includes("format-text-js")) {
        return 'js'
    } else if (svg.includes("form") && !svg.includes("form-example")) {
        return 'form-input'
    }
    else {
        return svg
    }
}

for (let i = 0; i < data?.length; i++) {
    elements += `<a class="sidebar-menu-item" href="#${data[i].title}" data-title="${ucwords(data[i].title)}">
                        <svg class="sidebar-menu-item-svg">
                            <use xlink:href="../../../assets/svg/sprite.svg#${getSvg(data[i].title)}"></use>
                        </svg>
                        <span>${formatText(data[i].title)}</span>
                    </a>`
}

document.getElementsByClassName('sidebar-menu')[0].innerHTML += elements

var headerHeight = document.getElementsByTagName('header')[0].offsetHeight;
var content = document.getElementsByClassName('padding-top-ideal-distance-to-header');
var links = document.querySelectorAll('.sidebar-menu-item');

window.addEventListener('scroll', function () {
    var userScroll = window.scrollY;

    for (var i = 0; i < content.length; i++) {
        let contentOffset = content[i].offsetTop,
            contentHeight = contentOffset + content[i].offsetHeight;

        if (userScroll >= contentOffset - headerHeight && contentHeight - headerHeight > userScroll) {
            let linkHash = links[i].getAttribute('href'); // Ini akan mengambil "#overview"
            let sectionId = '#' + content[i].id; // Ini akan menghasilkan "#overview"

            if (linkHash === sectionId) {
                links[i].classList.add('active');
            } else {
                links[i].classList.remove('active');
            }
        } else {
            links[i].classList.remove('active');
        }
    }
});