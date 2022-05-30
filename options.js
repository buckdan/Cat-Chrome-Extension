let option = "Default"

document.getElementById('CatDropDown').addEventListener('change', function() {
    option = document.getElementById('CatDropDown').value
    console.log(option)
})

document.getElementById('savebt').addEventListener('click', function(){
    chrome.storage.sync.set({ cat_Option : option })
    console.log("Save " + option)
})

function SetupOption(){
    chrome.storage.sync.get({ cat_Option }, function(result) {
        if(result.option){
            document.getElementById('CatDropDown').value = result.option
        }
    })

    console.log("Finish loading options.js")
}

SetupOption()