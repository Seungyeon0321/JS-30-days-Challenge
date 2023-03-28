'use strict'

class ColorPicker {
    constructor(root) {
        this.root = root;
        this.colorjoe = colorjoe.rgb(this.root.querySelector(".colorjoe"));
        this.selectedColor = null; //setselectedColor method을 통해서 color을 받게 됨, 결국은 declaration of color라고 생각하면 될 듯;
        this.savedColors = this.getSavedColors();
        console.log(this.savedColors);

        //method의 선언임
        this.colorjoe.show(); 
        this.setSelectedColor("#009578");

        //colorjoe Event Handling
        this.colorjoe.on("change", color => {
            this.setSelectedColor(color.hex(), true) //여기서 hex()는 colorjoe에서 received한 color을 hexcode로 변환해주는 역활을 한다.
        })

        this.root.querySelectorAll(".saved-color").forEach((el, i) => {
            this.showSavedColor(el, this.savedColors[i]);

            el.addEventListener("mouseup", e => {

                if (e.button == 0) {
                    this.saveColors(this.selectedColor, i); //save the selected color to local storage
                    this.showSavedColor(el, this.selectedColor);
                }

                this.setSelectedColor(el.dataset.color);
            });
        })
    }

    setSelectedColor(color, skipCjUpdate = false) { //이 skipCjUpdate가 true이면 왼쪽도 같이 움직이게 된다, 예를 들어서 default color가 오렌지라고 설정되었을 때 그 div를 누르게 되면 color picker도 같이 움직이게 된다.
        this.selectedColor = color;                 //그렇기 때문에 여기서 skipCjUpdate를 false로 받은것이다.
        this.root.querySelector('.selected-color-text').textContent = color;
        this.root.querySelector('.selected-color').style.background = color;

        if (!skipCjUpdate) {            //이거를 그럼 어떻게 true로 만들까?
            this.colorjoe.set(color);
        }
    }

    getSavedColors() {
        const saved = JSON.parse(localStorage.getItem("colorPicker-saved") || "[]")
        console.log(saved);
        
        return new Array(5).fill("#ffffff").map((defaultColor, i) => {
            return saved[i] || defaultColor //이 부분을 잘 모르겠음;
        });
    }

    showSavedColor(element, color) {
        element.style.background = color;
        element.dataset.color = color;
    }

    saveColors(color, i) {
        this.savedColors[i] = color; //내가 선택을 한 div도 그 인덱스에 따라서 저장을 하게 때문에 그 인덱스가 들어가서 save를 해야함
        localStorage.setItem("colorPicker-saved", JSON.stringify(this.savedColors));
    }

}

    const cp = new ColorPicker(document.querySelector(".container")) //이렇게 객체로 select된 html class도 보낼 수 있다.