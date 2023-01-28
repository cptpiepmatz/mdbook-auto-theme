// show version number
document.getElementById("manifestVersion").innerText =
  chrome.runtime.getManifest().version;

// set theme via radio
document.addEventListener("input", e => {
  let data = Object.fromEntries([[e.target.name, e.target.value]]);
  chrome.storage.sync.set(data);
});

// fetch themes from sync storage
chrome.storage.sync.get(["light", "dark"], ({light, dark}) => {
  let lightId = "dark-" + (dark ?? "navy");
  let lightInput = document.getElementById(lightId);
  lightInput.checked = true;

  let darkId = "light-" + (light ?? "light");
  let darkInput = document.getElementById(darkId);
  darkInput.checked = true;
});
