let skin = "Cat2"

let num = 1

function createCat(){
    
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
}

function removeCat(){
    if(number >= 1){
        let divx = document.querySelector('.x')
        divx.remove()
    }
    else{
        console.log("No cat to remove")
    }
}

let btn = document.getElementById('createcat')
let btnR = document.getElementById('removecat')

let p = document.getElementById('catNum')

btn.addEventListener('click', async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: createCat,
    });

    num++

    p.innerHTML = "Number of Cats: " + num

    console.log("A new cat created")
})

btnR.addEventListener('click', async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: removeCat,
    });

    num--

    p.innerHTML = "Number of Cats: " + num

    console.log("A cat removed")
})