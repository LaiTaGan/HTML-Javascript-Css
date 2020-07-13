let textColor=document.getElementById("button")


chrome.storage.sync.get('color' ,function(data){
    textColor.style.color=data.color;
    textColor.setAttribute('value',data.color)//这句可以说是涂上颜色，<button value="data.color"></button>
})

textColor.onclick=function (element) {
    let color=element.target.value;
    
    chrome.tabs.query(
        {active:true, currentWindow:true},function(tabs){
        chrome.tabs.executeScript(
            tabs[0].id,{code:'document.body.style.color="'+color+'";'
        })
    })

    
}