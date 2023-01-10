

let scoreH = document.getElementById("score-H")

let scoreG = document.getElementById("score-G")

let countH = 0

let countG = 0

function add1H() {
	countH = countH + 1
	scoreH.innerText = countH

}

function add2H(){
	countH = countH + 2
	scoreH.innerText = countH
}

function add3H(){
	countH = countH + 3
	scoreH.innerText = countH
}

function add1G() {
	countG = countG + 1
	scoreG.innerText = countG

}

function add2G(){
	countG = countG + 2
	scoreG.innerText = countG
}

function add3G(){
	countG = countG + 3
	scoreG.innerText = countG
}

function resetH(){
	countH = countH - countH
	scoreH.innerText = countH
}

function resetG(){
	countG = countG - countG
	scoreG.innerText = countG
}