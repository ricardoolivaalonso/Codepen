const root = document.documentElement
const card = document.querySelector("#card")
const btn = document.querySelector("#btn")
const cardUser = document.querySelector(".card__name")
const cardInfo = document.querySelector(".card__info")
const cardNumber = document.querySelectorAll(".card__number-group")
const cardBg = document.querySelector(".card__bg")

const schemas = {
	schema0: {
		s1: "#020918",
		s2: "#0e1930",
		s3: "#1e2e50",
		s4: "#d18b1a"
	},
	schema1: {
		s1: "#120022",
		s2: "#1c0135",
		s3: "#3a0070",
		s4: "#007054"
	},
	schema2: {
		s1: "#004763",
		s2: "#045879",
		s3: "#036d97",
		s4: "#9eb3b0"
	},
	schema3: {
		s1: "#0E050F",
		s2: "#170B3B",
		s3: "#2a1568",
		s4: "#0f0922"
	},
	schema4: {
		s1: "#22282e",
		s2: "#3A4750",
		s3: "#58636b",
		s4: "#93b6b8"
	}
}
const names = [
	'Carol',
	'Darryl',
	'Stephanie',
	'Lynn',
	'Mary',
	'Ramon',
	'Daniel',
	'Mildred',
	'Charles',
	'Ana'
]
const lastnames = [
	'Schreiner',
	'Meyers',
	'Conroy',
	'Schreiner',
	'Lapointe',
	'McCaulley',
	'Walton',
	'Olson',
	'Mendes',
	'Walker'
]
const numbers = [0,1,2,3,4,5,6,7,8,9]
const bgs = ['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg']
// ------------------------- 
let createNumberF = (e) => {
	cardNumber.forEach((g, index) => {
		let con = 0
		let number = ''
		
		while( con < 4 ){
			let n = Math.floor(Math.random() * 10)
			number += n
			con++
		}
		cardNumber[index].innerHTML = number
	})
}
let createNameF = (e) => {
	let name = Math.floor(Math.random() * 10)
	let lastname = Math.floor(Math.random() * 10)

	cardUser.innerHTML = names[`${name}`]+' '+lastnames[`${lastname}`]
}
let changeBgF = (e) => {
	let bg = Math.floor(Math.random() * 5)

	cardInfo.classList.add('is-card-visible')
	cardBg.src = bgs[`${bg}`]

	setTimeout(() => { cardInfo.classList.remove('is-card-visible') }, 500)
}
// ------------------------- 
let createCubeF = (e) => {
	card.innerHTML = '';
	let color = Math.floor(Math.random() * 5)

  	for (let i = 0; i < 24; i++) {
		setTimeout(() => {
			let pattern = Math.floor(Math.random() * 11)
			let div = document.createElement("div")

			root.style.setProperty("--c1", schemas[`schema${color}`].s1)
			root.style.setProperty("--c2", schemas[`schema${color}`].s2)
			root.style.setProperty("--c3", schemas[`schema${color}`].s3)
			root.style.setProperty("--c4", schemas[`schema${color}`].s4)

			div.className = `cube cube--${pattern}`
			card.appendChild(div)

		}, 20 * i)
  	}
}
// ------------------------- 
let mainF = (e) => {
	createCubeF()
	createNumberF()
	createNameF()
	changeBgF()
}
// ------------------------- 
btn.addEventListener("click", mainF)
window.addEventListener("load", mainF)
