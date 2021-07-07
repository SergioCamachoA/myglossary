export const handlerFormSubmit = (setFilledOut, form) => {
    let tempArray = []
    for (const property in form) {
        let missingInput = document.getElementById(property)
        if (property === 'category') {
            if (form[property] === 'category') {
                form[property] = ''
            }
        }

        if (form[property] === '') {
            missingInput.style.backgroundColor = '#abd1c6'
            missingInput.style.border = '1px solid #004643'
        } else {
            tempArray.push('item-added')
            setFilledOut(tempArray)
            missingInput.style.backgroundColor = ''
            missingInput.style.border = ''
        }
    }
}
