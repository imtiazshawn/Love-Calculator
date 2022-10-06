function Love(selfName, partnerName){
    this.selfName = selfName;
    this.partnerName = partnerName;
}
function Display(){

}
Display.prototype.add = function (love) {
    let number = Math.random() * 100;
    number = Math.floor(number) + 1;
    output = document.getElementById('outputMessage');
    let message = `${love.selfName} and ${love.partnerName}'s love percentage is ${number}%`;
    console.log(message);
    output.innerHTML += message;
}
Display.prototype.clear = function () {
    let inputSelf = document.getElementById('inputSelf');
    let inputPartner = document.getElementById('inputPartner');
    inputSelf.reset();
    inputPartner.reset();
}
let btn = document.getElementById('btn');
btn.addEventListener('click', btnFunction);

function btnFunction(e){
    let selfName = document.getElementById('inputSelf').value;
    let partnerName = document.getElementById('inputPartner').value;
    let love = new Love(selfName, partnerName);
    let display = new Display();
    display.add(love);
    display.clear();
    console.log(love);
    e.preventDefault();
}