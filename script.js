var input1 = document.querySelector("#inArea1");
var input2 = document.querySelector("#inArea2");
//var buttonsub = document.querySelector("#btns");
var buttoncheck = document.querySelector("#btnc");
var output = document.querySelector(".otpt");

var bDate=0;
var lnum=0;

function enterCheck(){
    console.log(input1.value.split('-').join(''));
    var bDate=input1.value.split('-').join('');
    var lnum=input2.value;
    if(bDate===""){
        output.innerText="Enter an Appropriate Date";
    }
    else if(lnum===""){
        output.innerText="Enter an Appropriate Lucky Number"; 
    }

    if(bDate%lnum===0){
        output.innerText="🎂🎊🎉✨Congratulations! Your Birthday is a Lucky Date✨🎉🎊🎂"; 
        }
        else {
        output.innerText="Sorry! But your Birthday is not a lucky Date w.r.t our criteria."; 
        }
}

buttoncheck.addEventListener("click", enterCheck);
