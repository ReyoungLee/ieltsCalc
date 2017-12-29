import './index.scss'

let scoreMap = [
	1,
	2,
	2.5,
	3, 3,
	3.5, 3.5, 3.5, 3.5,
	4, 4, 4,
	4.5, 4.5, 4.5,
	5, 5, 5, 5,
	5.5, 5.5, 5.5,
	6, 6, 6, 6,
	6.5, 6.5, 6.5,
	7, 7, 7,
	7.5, 7.5,
	8, 8,
	8.5, 8.5,
	9, 9
]

let [result, totalResult] = document.querySelectorAll('p'),
	[calcItem, calcAll] = document.querySelectorAll('button'),
	[amountL, amountR] = document.querySelectorAll('.amount input'),
	itemScores = document.querySelectorAll('.score input')

calcItem.onclick = () => {
	let listeningAmount = scoreMap[amountL.value - 1] || 0,
		readingAmount = scoreMap[amountR.value - 1] || 0 
	result.innerHTML = `听力分数 ${listeningAmount}, 阅读分数 ${readingAmount}`
}

calcAll.onclick = () => {
	let total = 0
	for (let item of itemScores) {
		total += +item.value
	}
	total /= 4;
	let int = parseInt(total),
		dec = total - int
	if (dec < 0.25){
		total = int
	} else if (dec < 0.75) {
		total = int + 0.5
	} else {
		total = int + 1
	}
	totalResult.innerHTML = `总分 ${total}`
}