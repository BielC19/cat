// Array de parelles d'icones en català
var icons = [
'icon1.png', 'icon2.png', 'icon3.png', 'icon4.png',
'icon5.png', 'icon6.png', 'icon7.png', 'icon8.png'
];

// Funció per barrejar les icones aleatòriament
function shuffle(array) {
for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
    return array;
}

// Funció per gestionar el clic de l'usuari
function handleClick(event) {
    var img = event.target.querySelector('img');
    if (img) {
        img.style.visibility = 'visible';
        var visibleImgs = document.querySelectorAll('img[style="visibility: visible"]');
        if (visibleImgs.length === 2) {
            if (visibleImgs[0].src === visibleImgs[1].src) {
                visibleImgs[0].parentNode.style.backgroundColor = 'green';
                visibleImgs[1].parentNode.style.backgroundColor = 'green';
            } else {
                setTimeout(function() {
                visibleImgs[0].style.visibility = 'hidden';
                visibleImgs[1].style.visibility = 'show';
            }, 1000);
            }
            }
            }
            
        // Comprovar si s'han descobert totes les parelles d'icones
    var matchedImgs = document.querySelectorAll('td[style="background-color: green"]');
    if (matchedImgs.length === icons.length) {
        alert('Felicitats, has guanyat el joc!');
        }
        }
        
        // Barrejar les icones aleatòriament
    shuffle(icons);
    
    // Afegir les icones a la taula
    var table = document.querySelector('table');
    var row, cell, img;
    for (var i = 0; i < icons.length; i++) {
        if (i % 4 === 0) {
            row = table.insertRow();
    }
    cell = row.insertCell();
    cell.style.backgroundColor = 'lightblue';
    cell.style.padding = '10px';
    img = document.createElement('img');
    img.src = icons[i];
    img.style.visibility = 'hidden';
    cell.appendChild(img);
    cell.addEventListener('click', handleClick);
    }