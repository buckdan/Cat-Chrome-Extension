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

function AddLessCss(){
    let link = document.createElement('link');
    link.rel = 'stylesheet/less';
    link.type = 'text/css';
    link.href = 'style.less';
    document.getElementsByTagName('head')[0].appendChild(link);

    console.log("Less CSS added")

    let script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/less@4';
    document.getElementsByTagName('head')[0].appendChild(script);

    console.log("Less JS added")
}

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

//AddLessCss()
createCat()

console.log("Finish loading test.js")
