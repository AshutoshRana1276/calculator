function screenSize (){
	let btnRow = document.querySelector(".btnRow");

let size = btnRow.getBoundingClientRect();
let heightBtnRow = size.height;
let height = document.body.clientHeight;

document.querySelector(".screen").style.height = `${height - heightBtnRow}px`;
console.log(height - heightBtnRow);
}

screenSize();

window.addEventListener("resize",screenSize);
