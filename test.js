let skin = "Cat2"
// function setup(){
//     chrome.storage.sync.get({ cat_Option }, function(result) {
//         if(result.option == "Default"){
//             skin = result.option
//         }
//         else if(result.option == "Cat2"){
//             skin = result.option
//         }
//     })

//     console.log("Finish seting up with " + skin)
// }

// setup()

const body = document.querySelector('body');

const divx = document.createElement('div');

divx.className = "x"
body.append(divx)

const divy = document.createElement('div')
divy.className = "y"
divx.append(divy)

const img = document.createElement('img');
img.className = "img-rotater"
if(skin == "Default"){
    img.src = "https://drive.google.com/uc?export=view&id=1enJaagoq08mvGGsJwQ-UXEQbzrsY2VxL"
}

if(skin == "Cat2"){
    img.src = "https://drive.google.com/uc?export=view&id=1B9rohDF_J5PPwfv3xuwy-fo5LYfTsl-m"
}
img.alt = "My Character :))"

divy.append(img)

console.log("Finish loading test.js")
