const addRemove=(id)=>{

    const clickedItem=document.getElementById("clickedItem");
    
    for(let i=1;i<=6;i++){
    
    /*this loop iterates for the every div in the html*/
    
    const element=document.getElementById(i)
    
    if(i==id){
    
    element.classList.add('click');/*adding the click class for clicked div*/
    
    clickedItem.textContent=element.textContent
    
    }
    
    else{
    
    element.classList.remove('click');/*removing click class for remining divs*/
    
    }
    
    }
    
    }