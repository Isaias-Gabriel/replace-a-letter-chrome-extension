
function gotHere(logToPrint) {
    if(logToPrint === null) {
        console.log(logToPrint);
    }

    else {
        console.log('got here');
    }
}

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





// gotHere();

const body = document.getElementsByTagName('body')[0].childNodes;

replaceLetters(body, "a", "x");  
replaceLetters(body, "e", "x"); 



// let content = document.getElementsByTagName('div');

// console.log(content);

// for (divElement of content) {
//     if(divElement.innerText !== "") {
//         console.log(divElement.innerText);

//         let divText = divElement.innerText;
//         divText = divText.replace("a", "x");

//         divElement.innerText = divText;
//     }

//     else {

//     }
// }

// // content[0].innerText = '';

// function searchForPureText() {
//     const body = document.getElementsByTagName('body')[0];

//     console.log(body);
//     console.log(body.hasChildNodes());
// }

// searchForPureText();



    // const body = document.getElementsByTagName('body')[0];

    // console.log(body);
    // console.log(body.hasChildNodes());
    // console.log(body.chil)

    // const test1 = document.getElementById('test1');
    // const test2 = document.getElementById('test2');

    // console.log(test1, test2, test1.hasChildNodes(), test2.hasChildNodes());
    // console.log(test1.childNodes, test2.childNodes);
    // console.log(test1.children, test2.children);






