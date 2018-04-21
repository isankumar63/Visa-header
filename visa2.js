
var arrow = document.getElementById("arrow");
arrow.classList.add('hidden');

document.getElementsByClassName('mainNav')[0].addEventListener('click',animateArrow)


function animateArrow(e){
    if(e.target.tagName.toLowerCase() != 'span') return
    var size = e.target.parentElement.getBoundingClientRect()
    var xCoord = size.x + (size.width/2) - 15;
    
    if(Math.abs(parseFloat(arrow.style.left) - xCoord) < 10){
        arrow.classList.toggle('hidden')
        return
    }
    arrow.classList.remove('hidden');
    arrow.style.left = xCoord + 'px';
}



