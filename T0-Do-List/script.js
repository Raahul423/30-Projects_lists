const input=document.querySelector(".search input")
const unorderlist=document.querySelector(".all-lists")

function addtask(){
    if(input.value ==''){
        alert("Please Enter Something!")
    }else{
        let li=document.createElement('li')
        li.innerHTML=input.value
        unorderlist.appendChild(li);
    }
    input.value=''
}

unorderlist.addEventListener('click',(e)=>{
    if(e.target.tagName =="LI"){
        console.log("hii")
        // e.target.classList.add("checked")
    }else{
        console.log("hello")
    }
});