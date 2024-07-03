// set initial count
let count = 0;

// select value and buttons
const value = document.getElementById("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener("click",function(event){
        const styles = event.currentTarget.classList;
        if(styles.contains("decrease")){
            count--;
        }
        else if(styles.contains("increase")){
            count++;
        }
        else{
            count = 0;
        }
        value.textContent = count;
        console.log(count);
        if(count > 0){
            value.style.color = "red";
        }
        if(count < 0){
            value.style.color = "green";
        }
        if(count === 0){
            value.style.color = "#222";
        }
    });
});