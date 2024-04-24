let ism = prompt ("ismingizni kiriting");
let harf = prompt ("harfingizni kiriting"); 
let orni = ism.indexOf(harf); 

console.log(orni);

if (orni === -1) {
    alert("Bu " + ism + " ismda " + "berilgan harf mavjud emas");
} else {
    alert("Bu " + ism + " ismda " + "berilgan harf mavjud");
}