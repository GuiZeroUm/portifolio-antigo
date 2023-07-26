let titulo = document.title;

window.addEventListener ("blur", () => {
    document.title = "Volta ai por favor :<"
})

window.addEventListener ("focus", () => {
    document.title = titulo;
})