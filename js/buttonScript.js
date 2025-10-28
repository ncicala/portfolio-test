//buttonScript.js
function displayMessage(){
    window.alert('Hello')
}

function addParagraph(){
    const newElement = document.createElement('p');
    newElement.textContent='New Paragraph';
    // document.body.appendChild(newElement);
    document.querySelector('.container').appendChild(newElement);
}

const btn1=document.querySelector('#btn-1');
// btn1.addEventListener('click', addParagraph);
btn1.onclick=addParagraph;

const btn2=document.querySelector('#btn-2');
// btn1.addEventListener('click', addParagraph);
btn2.onclick=removeParagraph;

function removeParagraph(){
    const list = document.querySelector('.container');
    list.children[list.children.length-1].remove();
}