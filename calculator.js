function screenSize (){
	let btnRow = document.querySelector(".btnRow");

let size = btnRow.getBoundingClientRect();
let heightBtnRow = size.height;
let height = window.innerHeight;

document.querySelector(".screen").style.height = `${height - heightBtnRow}px`;
// document.body.style.minHeight = `${height}px`;
}

screenSize();

window.addEventListener("resize",screenSize);
