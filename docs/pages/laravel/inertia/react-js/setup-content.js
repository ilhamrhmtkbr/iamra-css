import {data} from "./data.js";
import {dedent, escapeHtml} from "../../../../assets/js/utils.js";

export function formatText(str) {
    let text = str.split("-")
    let newFormat = []
    for (let i = 0; i < text.length; i++){
        let newText = text[i].split("")
        newText[0].toUpperCase()
        newFormat[i] = newText.join("")
    }
    return newFormat.join(" ")
}

function provideElement(title, html, highlight, index) {
    function getHtml() {
        if (!data[index].example) {
            return ''
        } else {
            return `<h3>Example</h3>
            <div class="example">${html}</div>`
        }
    }

    return `
        <div class="padding-top-ideal-distance-to-header" id="${title}">
        <div class="card-wrapper" style="max-width: 1000px">
            <div class="text-title">${formatText(title)}</div>
                <div class="how-to-use">
                    <div class="how-to-use-header">
                        ${formatText(title)}
                        <div class="how-to-use-button-copy">copy</div>
                    </div>
                    <pre><code class="language-js">${escapeHtml(dedent(highlight))}</code></pre>
                </div>
                ${getHtml()}
            </div>
</div>`
}

let elements = ''

for (let i = 0; i < data.length; i++) {
    elements += provideElement(data[i].title, data[i].html, data[i].highlight, i)
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

