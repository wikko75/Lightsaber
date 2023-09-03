const handle = document.querySelector(".handle");
const edge = document.querySelector(".edge");
const goldEdge = document.querySelector("#gold header");
const fioletEdge = document.querySelector("#fiolet");
const greenEdge = document.querySelector("#green");
const blueEdge = document.querySelector("#blue");


function setBoxShadow(shadow) {
    handle.addEventListener("mouseover", () => {
        edge.style.boxShadow = shadow;
    });

    handle.addEventListener("mouseout", () => {
        edge.style.boxShadow = "";
    });
}


goldEdge.onclick = function() {
    setBoxShadow("0px 0px 20px 15px rgb(218, 186, 4)");
    // alterHeader(this, "rgb(79, 79, 79)");
}

fioletEdge.onclick = () => {
   setBoxShadow("0px 0px 30px 10px rgb(132, 0, 158)");
//    alterHeader("rgb(79, 79, 79)");
}

greenEdge.onclick = () => {
    setBoxShadow("0px 0px 30px 15px green");
    // alterHeader("rgb(79, 79, 79)");
}

blueEdge.onclick = () => {
    setBoxShadow("0px 0px 30px 15px rgb(6, 6, 209)");
    // alterHeader("rgb(79, 79, 79)");
}
