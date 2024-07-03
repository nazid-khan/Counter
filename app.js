// set initial count
let count = 0;

// select value and buttons
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    
    btn.addEventListener("click",function(event){
        const styles = event.currentTarget.classList;
        
        if(styles.contains("decrease")){
            // value Decrease by 1
            count--;
        }
        else if(styles.contains("increase")){
            // value Increase by 1
            count++;
        }
        else{
            // value Reset 
            count = 0;
        }
        value.textContent = count;

        // color change on negatives & positives
        if(count < 0){
            value.style.color = "red";
        }
        if(count > 0){
            value.style.color = "green";
        }
        if(count === 0){
            value.style.color = "#222";
        }
    });
});