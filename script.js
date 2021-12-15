replaceText(document.body)

function replaceText(element) {  
    if (element.hasChildNodes()) {
        element.childNodes.forEach(replaceText)
    } else if (element.nodeType === Text.TEXT_NODE) {
        if (element.textContent.match(/coronavirus/gi))
        element.textContent = element.textContent.replace(/coronavirus/gi, '█████')
        element.textContent = element.textContent.replace(/covid-19/gi, '█████')
    }
}