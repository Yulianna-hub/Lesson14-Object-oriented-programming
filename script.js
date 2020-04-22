'use strict';

document.querySelector('body').style.cssText = `background-color:#ebe3dd; text-align:center; margin-left: 15%; margin-right: 15%;`;

function DomElement(height, width, fontSize, selector, backgroundColor) {
    this.height = height;
    this.width = width;
    this.fontSize = fontSize;
    this.selector = selector;
    this.backgroundColor = backgroundColor;
    
}
DomElement.prototype.createElement = function(text) {
    let newElem = null;
    if (this.selector[0] === '.') {
    newElem = document.createElement('div');
    newElem.classList.add(this.selector.slice(1));
    }
    if(this.selector[0] === '#') {
    newElem = document.createElement('p'); 
    newElem.id = this.selector.slice(1);
    }
    newElem.style.cssText = `
    height: 50px;
    width: 100%;
    font-size: 20px;
    background-color:  #ff8080;
    `;

    /*newElem.style.cssText = 'height: ' + this.height + 'px;' +
    'width: ' + this.width + '%' + 
    'fontSize: ' + this.fontSize + 'px' + 
    'backgroundColor:' + this.backgroundColor + '';*/

    newElem.textContent =  text;
    document.body.append(newElem);    
};

const doMElem = new DomElement(50, 100, 10, '.select', ' #ff8080');
const doMElem1 = new DomElement(100, 100, 25, '#selecto',' #ff8080');

doMElem.createElement('Сегодня хороший день!');
doMElem1.createElement('До того, как начнёте изучать способы работы со стилями и классамив JavaScript,есть одно важное правило.Надеемся, это достаточно очевидно, но мы все равно должны об этом упомянуть.');

console.log(doMElem);
console.log(doMElem1);











    


