let equal_pressed=0;
//access all buttons excluding C and DEL 
let button_input=document.querySelectorAll(".input-button");

//Access input ,equal, clear and erase 
let input =document.getElementById("input");
let equal =document.getElementById("equal");
let clear=document.getElementById("clear");
let erase =document.getElementById("erase");

window.onload=()=>{
    input.value="";
};

//Access each class using forEach
button_input.forEach((button_class)=>{
button_class.addEventListener("click",()=>{
if(equal_pressed==1){
    input.value="";
    equal_pressed=0;
}
// display value of each button
input.value+=button_class.value;
});
});
//solved the user input when clicked on equal sign 

equal.addEventListener("click",()=>{
    equal_pressed=1;
    let inp_val=input.value;
    try{
        //evaluate user input  
        let solution=eval(inp_val);
        //true for natural numbers 
        // false for decimals
        if(Number.isInteger(solution)){
            input.value=solution;
        }
         else{
                    input.value=solution.toFixed(2);
            }
          }catch(error){
            // if  the user  has entered invalued input 
            alert("Invalid Input");
          }
});
//clear whole INput
clear.addEventListener("click",()=>{
    input.value="";
});

//Erase single digit

erase.addEventListener("click",()=>{
    input.value=input.value.substr(0,input.value.length-1);
});




