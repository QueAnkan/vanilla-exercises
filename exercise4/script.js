// lägg till knapp
// gör den klickbar
// koppla knapp till textfältet
// lägg till ord från fält till listan
// töm fältet när man lägger till
// knappen ska bara gå att klicka när fältet är ifyllt
// enter ska ha samma funktion som kanppen


let addButton = document.querySelector('#add-button')

let textInput = document.querySelector('#text-input')

let list = document.querySelector('.text-list')

console.log(addButton, textInput, list, 'Hello')


	
	

 /* textInput.addEventListener ('input', () =>{
	let input = textInput.value

	
	addButton.addEventListener('click', () =>{
		console.log('du klickade')
		if( input !==''){

	let listElement = document.createElement('li')

	listElement.innerText = textInput.value

	list.appendChild(listElement)

	textInput.value = '' 
		}
	})
}) 
 */

textInput.addEventListener ('input', () =>{
	addButton.addEventListener('click', () =>{
		console.log('du klickade')
	let input = textInput.value
	if( input !==''){
		
			let listElement = document.createElement('li')
			listElement.innerText = textInput.value
			textInput.value = ''
				 
	
		
		list.appendChild(listElement)
		
	}
})
})
	




