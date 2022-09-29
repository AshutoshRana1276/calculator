function screenSize (){
	let btnRow = document.querySelector(".btnRow");

let size = btnRow.getBoundingClientRect();
let heightBtnRow = size.height;
let height = window.innerHeight;

document.querySelector(".screen").style.height = `${height - heightBtnRow}px`;
// document.querySelector(".formstyle").style.minHeight = `${height}px`;
console.log(height);
}

screenSize();

window.addEventListener("resize",screenSize);
