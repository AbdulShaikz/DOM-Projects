let isStatus = document.querySelector("h5");
let button = document.querySelector(".btn");

let check = 0;

button.addEventListener("click",()=>{
    if(check==0){
        isStatus.innerHTML = "Friend"
        isStatus.style.color = 'green'
        button.style.backgroundColor = 'rgb(199, 188, 188)';
        button.innerHTML = "Remove"
        check = 1;
    }else{
        isStatus.innerHTML = "Stranger"
        isStatus.style.color = 'red'
        button.style.backgroundColor = 'rgb(49, 87, 255)';
        button.innerHTML = "Add Friend"
        check = 0; 
    }
})
