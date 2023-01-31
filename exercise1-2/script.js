// övning 10_1

let div = document.querySelector('.body')
console.log(div, 'Bye!')
let textElement =document.createElement('p')
textElement.innerText = 'Bye!'
div.appendChild(textElement)

// övning 10_2
let clickCountButton = document.querySelector('#click-count-button')
console.log(clickCountButton)
let clickCounter =  document.querySelector('#click-counter')

let clicks = 0

clickCountButton.addEventListener('click',event => {
	clicks = clicks +1
	clickCounter.innerText = 'Antal klick: ' + clicks
})
