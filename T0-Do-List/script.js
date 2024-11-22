const input=document.querySelector(".search input")
const unorderlist=document.querySelector(".all-lists")

function addtask(){
    if(input.value ==''){
        alert("Please Enter Something!")
    }else{
        let li=document.createElement("li")
        li.innerHTML=input.value
        unorderlist.appendChild(li);
        let span=document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)
    }
    input.value=''
}

unorderlist.addEventListener('click',(e)=>{
    if(e.target.tagName =="LI"){
        e.target.classList.add("checked")
    }else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
    }
},false);