'use strict'

class ColorPicker {
    constructor(root) {
        this.root = root;
        this.colorjoe = colorjoe.rgb(this.root.querySelector(".colorjoe"));
        this.selectedColor = null;
        this.savedColors = this.getSavedColors();

        this.colorjoe.show();
    }

    getSavedColors() {
        return ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"];
    }

}

    const cp = new ColorPicker(document.querySelector(".container")) //이렇게 객체로 select된 html class도 보낼 수 있다.