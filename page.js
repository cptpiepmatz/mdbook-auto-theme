let isMdBook = document
    .getElementsByTagName("head")[0]
    .innerHTML
    .match("<!-- Book generated using mdBook -->");

// only work on pages that definitely are mdBook
if (isMdBook) {
    log("Page is mdBook!");

    chrome.storage.sync.get(["light", "dark"], ({light, dark}) => {
        let lightTheme = light ?? "light";
        let darkTheme = dark ?? "navy";

        log(
          "Theme for light mode: " +
          lightTheme[0].toUpperCase() +
          lightTheme.slice(1)
        );
        log(
          "Theme for dark mode: " +
          darkTheme[0].toUpperCase() +
          darkTheme.slice(1)
        );

        let colorPreference = matchMedia("(prefers-color-scheme: dark)");
        updateTheme(
          colorPreference.matches,
          colorPreference.matches ? darkTheme : lightTheme
        );
        colorPreference.addEventListener("change", e => {
            updateTheme(
              e.matches,
              e.matches ? darkTheme : lightTheme
            );
        });
    });
}

function updateTheme(setToDark, theme) {
    let preference = setToDark ? "dark" : "light";
    let printTheme = theme[0].toUpperCase() + theme.slice(1);
    log(`Wants ${preference} mode, will set to '${printTheme}'.`);

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
