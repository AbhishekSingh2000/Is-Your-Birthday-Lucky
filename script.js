var input1 = document.querySelector("#inArea1");
var input2 = document.querySelector("#inArea2");
//var buttonsub = document.querySelector("#btns");
var buttoncheck = document.querySelector("#btnc");
var output = document.querySelector(".otpt");
var anim1 = document.querySelector(".anime1");
var anim2 = document.querySelector(".anime2");

function enterCheck(){
    console.log(input1.value.split('-').join(''));
    var bDate=input1.value.split('-').join('');
    var lnum=input2.value;

    var dateSum=0;
    while(bDate!==0){
        dateSum=dateSum+(bDate%10);
        bDate=Math.floor(bDate/10);
    }

    if(bDate===""){
        output.innerText="Enter an Appropriate Date";
    }
    else if(lnum===""){
        output.innerText="Enter an Appropriate Lucky Number"; 
    }

    else if(dateSum%lnum===0){
        output.innerText="🎂🎉Congratulations! Your Birthday is a Lucky Date🎉🎂"; 
        if(anim1.style.display="none"){
            anim1.style.display="block";
         }
         if(anim2.style.display="block"){
            anim2.style.display="none";
         }
        }
        else {
        output.innerText="Sorry! But your Birthday is not a lucky Date w.r.t our criteria."; 
        if(anim1.style.display="block"){
            anim1.style.display="none";
         }
        if(anim2.style.display="none"){
            anim2.style.display="block";
         }
        }
}

buttoncheck.addEventListener("click", enterCheck);
