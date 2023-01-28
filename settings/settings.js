// make every dropdown toggleable
document.addEventListener("click", e => {
   for (let el of e.composedPath()) {
      if (el.classList?.contains("dropdown")) {
         el.classList.toggle("is-active");
      }
   }
});
