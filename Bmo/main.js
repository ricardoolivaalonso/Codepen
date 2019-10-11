const score = document.querySelector('#score');
let con = 0;

let sto = (event) => {
	setInterval(() => {
		con ++;
		score.innerText = `${con}M`
	}, 250);
}

sto();
