var index_1 = false;
var index_2 = false;

const content = (x) => {
    x.classList.toggle("change");
 

active_layer()
}

const active_layer = () => {
    let content_box_1 = document.getElementsByClassName('bar-content')
    if (index_1 === false) {
        index_1 = true
        content_box_1[0].style.width = "100%"
console.log(index_1)
    }
    else if (index_1 === true) {
        index_1 = false
        content_box_1[0].style.width = "0%"
        console.log(index_1)
    }
}
