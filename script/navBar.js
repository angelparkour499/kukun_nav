var index_1 = false;
var index_2 = false;


const content = (x) => {
    x.classList.toggle("change");
 

active_layer()
}

const active_layer = () => {
    let content_box_1 = document.getElementsByClassName
    ('bar-content')
    let layer1 = document.getElementById("layer_1")
    if (index_1 === false) {
        index_1 = true
        content_box_1[0].style.width = "100%"
        layer1.style.width = "100%"
console.log(index_1)
    }
    else if (index_1 === true) {
        index_1 = false
        content_box_1[0].style.width = "0%"
        console.log(index_1)
    }
}

const portals = [""]

const portal_1 = ""


var slide_index;
const grid_slide = (e) => {
    let layer1 = document.getElementById("layer_1")
var slides = document.getElementsByClassName("grid_slider")
for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
}
slides[e-1].style.display = "block"
layer1.style.width = "0"
}
grid_slide(slide_index)