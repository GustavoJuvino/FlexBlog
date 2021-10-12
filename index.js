const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")


/*const initialColors ={
    bg: window.getComputedStyle(html).getPropertyValue("--bg"),
    bgpainel: window.getComputedStyle(html).getPropertyValue("--bg-painel"),
    colorText: window.getComputedStyle(html).getPropertyValue("--color-text"),
    colorTextP: window.getComputedStyle(html).getPropertyValue("--color-text-p"),
    colorTextBold: window.getComputedStyle(html).getPropertyValue("--color-text-bold"),
}
Forma Verbosa
*/


const getStyle = (element, style) =>
    window
        .getComputedStyle(element)
        .getPropertyValue(style)  


const initialColors = {
    bg: getStyle(html, "--bg"),
    backPainel: getStyle(html, "--back-painel"),
    colorText: getStyle(html, "--color-text"),
    colorTextt: getStyle(html, "--color-text-p"),
    colorTextBold: getStyle(html, "--color-text-bold"),
}


const darkMode = {
    bg: "#1c1c1c",
    backPainel: "#4f4f4f",
    colorText: "#ffe5a8" ,
    colorTextt: "#ffffff", 
    colorTextBold: "#c2c2c2", 
}

const transformKey = key =>
"--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key =>
        html.style.setProperty(transformKey(key), colors[key] )
    )
}



checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})