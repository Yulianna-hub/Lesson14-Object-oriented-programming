'use strict';

document.querySelector('body').style.cssText = 'background-color:#ebe3dd;textAlign:center;';
//let selector = ('#selecto');
//let selector = ('.select');

function DomElement(height, width, fontSize, selector, backgroundcolor) {
    this.height = Number(height);
    this.width = width;
    this.fontSize = fontSize;
    this.selector = selector;
    this.backgroundcolor = backgroundcolor;
    
}
DomElement.prototype.selecKtor = function() {
    if (this.selector == '.select') {
    const neWdiv = document.createElement('div');
    neWdiv.classList.add('.select');
    neWdiv.textContent = 'Сегодня хороший день!';
    document.body.append( neWdiv);
    }
    if(this.selector == '#selecto') {
    const neWp = document.createElement('p'); 
    neWp.classList.add('#select');
    document.body.append( neWp);
    neWp.textContent = 'До того, как начнёте изучать способы работы со стилями и классамив JavaScript,есть одно важное правило. Надеемся, это достаточно очевидно, но мы все равно должны об этом упомянуть.';

    }     
};

const doMElem = new DomElement('100px', '100%', '18px', '#selecto', '#f0dbdb');
console.log(doMElem);
doMElem.selecKtor();










    


