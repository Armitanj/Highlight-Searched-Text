let $ = document
let paragraphElem = $.querySelector('#paragraph')
let inputElem = $.querySelector('input')
let button = $.querySelector('button')

const search = () => {
    let inputElemValue = inputElem.value
    let searchRegex = new RegExp(`${inputElemValue}`, 'gi')
    paragraphElem.innerHTML = paragraphElem.textContent.replace(searchRegex, (item) => `<mark>${item}</mark>`)
}
button.addEventListener('click', search)


