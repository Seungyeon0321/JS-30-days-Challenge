'use strict'

class ColorPicker {
    
    constructor(root) {
        this.root = root;
        console.log(this.root);
    }

}

const root = new ColorPicker(document.querySelector('.container'))