let isMdBook = document
    .getElementsByTagName("head")[0]
    .innerHTML
    .match("<!-- Book generated using mdBook -->");

// only work on pages that definitely are mdBook
if (isMdBook) {
    log("Page is mdBook!");

    let colorPreference = matchMedia("(prefers-color-scheme: dark)");
    updateTheme(colorPreference.matches);
    colorPreference.addEventListener("change", e => {
        updateTheme(e.matches);
    });
}

function updateTheme(setToDark) {
    let theme = setToDark ? "ayu" : "light";

    let preference = setToDark ? "dark" : "light";
    let printTheme = theme[0].toUpperCase() + theme.slice(1);
    log(`Wants ${preference} mode. Will set to '${printTheme}'.`);

    let selectorButton = document.querySelector(`.theme#${theme}`);
    selectorButton.click();
}

function log(message) {
    console.log(
        "%c[mdBook Auto Theme] %c" + message,
        "color: #ff7733",
        "color: inherit"
    );
}
