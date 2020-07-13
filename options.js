
let page = document.getElementById('buttonDiv');
const fourTypesColors = ['yellow', 'green', 'red', 'gray'];

function constructColors(fourTypesColors) {
    for(let item of fourTypesColors){
        let button=document.createElement('button')
        button.style.backgroundColor=item
        button.addEventListener('click',function () {
            chrome.storage.sync.set({color:item},function(){
                console.log('This color is '+ item);
            })
            
        })
        page.appendChild(button)
    }
}
constructColors(fourTypesColors);