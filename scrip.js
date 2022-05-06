
 function myfunction(){
   let userinput1 = document.querySelector("#userinput1");
    let userinput2 = document.querySelector("#userinput2");
    let userinput3 = document.querySelector("#userinput3");
    let userinput4 = document.querySelector("#userinput4");
    let userinput5 = document.querySelector("#userinput5");


   let message1 = document.querySelector("#message1");
    let message2 = document.querySelector("#message2");
    let message3 = document.querySelector("#message3");
    let message4 = document.querySelector("#message4");
    let message5 = document.querySelector("#message5");

    message1.innerHTML= userinput1.value;
    message2.innerHTML= userinput2.value;
    message3.innerHTML= userinput3.value;
    message4.innerHTML= userinput4.value;    
    message5.innerHTML= userinput5.value;
}
