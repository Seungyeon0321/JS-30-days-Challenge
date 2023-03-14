'use strict'

class ColorPicker {
    constructor(root) {
        this.root = root;
        this.colorjoe = colorjoe.rgb(this.root.querySelector(".colorjoe"));
        this.selectedColor = null;
        this.savedColors = this.getSavedColors();

        this.colorjoe.show();
        this.setSelectedColor("#009578");

        this.colorjoe.on("change", color => {
            this.setSelectedColor(color.hex(), true)
        })

        this.root.querySelectorAll(".saved-color").forEach((el, i) => {
            this.showSavedColor(el, this.savedColors[i]);

            el.addEventListener("click", e => {

                console.log(this.showSavedColor);
                if (e.button == 1) {
                    this.saveColors(this.selectedColor, i);
                    this.showSavedColor(el, this.selectedColor);
                }

                this.setSelectedColor(el.dataset.color);
            });
        })
    }

    setSelectedColor(color, skipCjUpdate = false) {
        this.selectedColor = color;
        this.root.querySelector('.selected-color-text').textContent = color;
        this.root.querySelector('.selected-color').style.background = color;

        if (!skipCjUpdate) {
            this.colorjoe.set(color);
        }
    }

    getSavedColors() {
        return ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"];
    }

    showSavedColor(element, color) {
        element.style.background = color;
        element.dataset.color = color;
    }

    saveColor(color, i) {
        // this.savedColors[i] = color;
        // localStorage.setItem("colorPicked-saved", JSON.stringify(this.savedColors));
    }

}

    const cp = new ColorPicker(document.querySelector(".container")) //이렇게 객체로 select된 html class도 보낼 수 있다.