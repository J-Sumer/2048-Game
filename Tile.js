export default class Tile {
    #titleElement
    #x
    #y
    #value

    constructor(tileContainer, value = Math.random() > 0.5 ? 2 : 4) {
        this.#titleElement = document.createElement("div")
        this.#titleElement.classList.add("tile")
        tileContainer.append(this.#titleElement)
        this.value = value
    }

    set value(v) {
        this.#value = v
        this.#titleElement.textContent = v;
        const power = Math.log2(v)
        const backgroundLightness = 100 - power * 9;
        this.#titleElement.style.setProperty("--background-lightness", `${backgroundLightness}%`)
        this.#titleElement.style.setProperty("--text-lightness", `${backgroundLightness > 50 ? 10 : 90}%`)
    }

    set x(value) {
        this.#x = value
        this.#titleElement.style.setProperty("--x", value)
    }

    set y(value) {
        this.#y = value
        this.#titleElement.style.setProperty("--y", value)
    }
}