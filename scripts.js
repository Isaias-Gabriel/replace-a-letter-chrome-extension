function replaceLetters(nodeList, searchValue, replaceValue) {

    const searchValueRegExp = new RegExp(searchValue, "g");

    for (nodeListElement of nodeList) {

        if (nodeListElement !== null) {
            if (nodeListElement.nodeType === 3) {
                nodeListElement.nodeValue = nodeListElement.nodeValue.
                    replace(searchValueRegExp, replaceValue);
            }
    
            else if (nodeListElement.hasChildNodes()) {
                const auxiliaryNodeListElement = nodeListElement.childNodes;
    
                replaceLetters(auxiliaryNodeListElement, searchValue, replaceValue);
            }
    
            else {
                if (nodeListElement.innerText !== "" &&
                nodeListElement.innerText !== undefined
                ) {
                    nodeListElement.innerText = nodeListElement.nodeValue.
                        replace(searchValueRegExp, replaceValue);
                }
            }
        }
    }
}

const form = document.getElementById('letter-form');

form.addEventListener('submit', (event) => {


    // gotHere();
    
    const letterInput = form.elements['letter-input'].value.toString();

    form.elements['letter-input'].value = "";
    
    alert(letterInput);

    // const body = document.getElementsByTagName('body')[0].childNodes;

    // replaceLetters(body, "a", letterInput); 
    
    console.log("a");
    
    // replaceLetters(window.pageBody, "a", "x");  

})
