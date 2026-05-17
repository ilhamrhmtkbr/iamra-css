import {data} from "./data.js";

function ucwords(str) {
    return str.replace(/\b\w/g, c => c.toUpperCase());
}

function getSvg(svg) {
    if (svg.includes('loading')) {
        return 'loading-spinner'
    } else if (svg.includes("form")) {
        return 'form-example'
    } else {
        return svg
    }
}

let elements = ''
for (let i = 0; i < data?.length; i++) {
    if (data[i].hasOwnProperty('data')) {
        function getSubLinks() {
            let links = ''
            for (let k = 0; k < data[i]?.data?.length; k++) {
                links += `<a class="sidebar-menu-item" href="#${data[i]?.data[k]?.title}" data-title="${ucwords(data[i]?.data[k]?.title)}">
                            <svg class="sidebar-menu-item-svg">
                                <use xlink:href="../../assets/svg/sprite.svg#${getSvg(data[i]?.data[k]?.title)}"></use>
                            </svg>
                            <span>${data[i]?.data[k]?.title}</span>
                          </a>`
            }
            return links
        }

        elements += `<details class="sidebar-menu-accordion">
                            <summary class="sidebar-menu-item" data-title="${ucwords(data[i]?.title)}">
                                <svg class="sidebar-menu-item-svg">
                                    <use href="../../assets/svg/sprite.svg#${getSvg(data[i]?.title)}"></use>
                                </svg>
                                <span>${data[i]?.title}</span>
                            </summary>
                            <div class="sidebar-menu-accordion-elements">
                                ${getSubLinks()}
                            </div>
                        </details>`
    } else {
        elements += `<a class="sidebar-menu-item" href="#${data[i].title}" data-title="${ucwords(data[i].title)}">
                        <svg class="sidebar-menu-item-svg">
                            <use xlink:href="../../assets/svg/sprite.svg#${getSvg(data[i]?.title)}"></use>
                        </svg>
                        <span>${data[i].title}</span>
                    </a>`
    }
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

            if(linkHash === sectionId) {
                links[i].classList.add('active');
            } else {
                links[i].classList.remove('active');
            }
        } else {
            links[i].classList.remove('active');
        }
    }
});