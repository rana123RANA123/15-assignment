
function showOutput(textoutput){
    document.getElementById("textoutput").innerHTML = textoutput;
}

function clearOutput(){
    document.getElementById("textoutput").innerHTML = "";
}






function ifelse(){
    var now = new Date();
    var today = now.getDay();

    // use for check today name 

    if(today === 0){
        alert("It's Sunday")
    }
    else if(today === 1){
        alert("It's Monday")
    }
    else if(today === 2){
        alert("It's Tuesday")
    }
    else if(today === 5){
        alert("It's Friday")
    }
    else{
        alert("It's some other day")
    }
}






// Switch Statement 
function switcH(){

var now = new Date();
var today = now.getDay();

switch (today){
    case 0:
    case 6:
        showOutput("It's Sunday or Saturday");
        break;
    case 1:
        showOutput("It's Monday");
        break;
    case 2:
        showOutput("It's Tuesday");
        break;
    case 5:
        showOutput("It's Friday");
        break;
    default:
        showOutput("It's some other day");
    }
}function tellTime(){
    let now = new Date();
    let theHr = now.getHours();
    let theMin = now.getMinutes();
    let theSec = now.getSeconds();

    textoutput.innerHTML +="<br> You clicked the button @ " + theHr + ":" + theMin + ":" + theSec + "<br />";
}






// for loop 
// for(let i = 0 ; i < 3 ; i++){
//     document.getElementById("textoutput").innerHTML += i + "<br>"
// }






// while loop 
// let i = 0;
// while(i < 3){
//     document.getElementById("textoutput").innerHTML += i + "<br>"
//     i++;
// }






// do while loop 
// var i = 0;
// do {
//         document.getElementById("textoutput").innerHTML += i + "<br>"
//     i++;
// }while(i < 10)






// arrow function 
// const askUserName = () => {
//     console.log("User Name")
// }







// keep asking name function 
const askingName = function(){
    do {
        var name = prompt("Enter your name")

        if(name)
        name = name.trim();

        console.log(name)

    }while(name === null || name.length < 3);

    let first = name.slice(0 , 2).toUpperCase();
      console.log(first);

      let all = name.slice(1).toLowerCase();
      console.log(all);

      let fullName = first + all;
      console.log(fullName);
    document.getElementById("textoutput").style.textTransform = 'capitalize';
    document.getElementById("textoutput").innerHTML = '<span style="color: green ; font-size: 20px;">"' +  fullName  + '"</span>';
}