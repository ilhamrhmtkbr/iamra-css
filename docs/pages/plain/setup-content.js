import {data} from "./data.js";
import {dedent, escapeHtml} from "../../assets/js/utils.js";

window.showSyntax = function (index, type, subIndex) {
    let el;
    if (data[index].hasOwnProperty('data')) {
        let finalIndex = index === 11 ? index + data[index - 1]?.data?.length - 1 : index
        el = document.getElementsByClassName('language-xml')[finalIndex + subIndex];
        el.textContent = dedent(type === 'css' ? data[index]?.data[subIndex]?.css : data[index]?.data[subIndex]?.html);
    } else {
        let finalIndex = index
        if (index > 11) {
            finalIndex = ((data[10]?.data?.length - 1) + (data[11]?.data?.length - 1)) + index
        }
        el = document.getElementsByClassName('language-xml')[finalIndex];
        el.textContent = dedent(type === 'css' ? data[index].css : data[index].html);
    }
    delete el.dataset.highlighted;
    hljs.highlightElement(el);
}

function provideElement(title, html, css, index, subIndex = 0) {
    function getTitle() {
        if (html == null) {
            return `<div class="how-to-use-title">css</div>`
        } else if (css == null) {
            return `<div class="how-to-use-title">html</div>`
        } else {
            return `<div class="how-to-use-title">
                        <div class="how-to-use-title-button-html" onclick="showSyntax(${index}, 'html', ${subIndex})">html</div>
                        <div>|</div>
                        <div class="how-to-use-title-button-css" onclick="showSyntax(${index}, 'css', ${subIndex})">css</div>
                    </div>`
        }
    }

    function getHtml() {
        if (data[index].hasOwnProperty('data')) {
            if (!data[index]?.data[subIndex]?.example) {
                return ''
            } else {
                return `<h3>Example</h3>
            <div class="example">${html}</div>`
            }
        } else {
            if (!data[index].example) {
                return ''
            } else {
                return `<h3>Example</h3>
            <div class="example">${html}</div>`
            }
        }
    }

    return `
        <div class="padding-top-ideal-distance-to-header" id="${title}">
        <div class="card-wrapper" style="max-width: 1000px">
            <div class="text-title">${title}</div>
                <div class="how-to-use">
                    <div class="how-to-use-header">
                        ${getTitle()}
                        <div class="how-to-use-button-copy">copy</div>
                    </div>
                    <pre><code class="language-xml">${escapeHtml(dedent(html == null ? css : html))}</code></pre>
                </div>
                ${getHtml()}
            </div>
</div>`
}

let elements = ''

for (let i = 0; i < data.length; i++) {
    if (data[i].hasOwnProperty('data')) {
        for (let k = 0; k < data[i]?.data.length; k++) {
            elements += provideElement(data[i].data[k].title, data[i].data[k].html, data[i].data[k].css, i, k)
        }
    } else {
        elements += provideElement(data[i].title, data[i].html, data[i].css, i)
    }
}

document.getElementsByClassName('container-content')[0].innerHTML += elements

let copies = document.getElementsByClassName("how-to-use-button-copy");
for (let i = 0; i < copies.length; i++) {
    let copy = copies[i];
    copy.addEventListener("click", () => {
        const el = copy.parentElement.nextElementSibling.firstElementChild;
        const text = el.textContent;

        navigator.clipboard.writeText(text).then(() => {
            alert("Copied to clipboard!");
        }).catch(err => {
            console.error("Failed to copy:", err);
        });
    })
}

