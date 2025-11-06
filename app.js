
// function submitForm(){
//     var fname = document.getElementById("fname").value;
//     var email = document.getElementById("email").value;
//     var number = document.getElementById("number").value;
//     var topic = document.getElementById("topic").value;
//     var message = document.getElementById("msg").value;

//     console.log(`Name: ${fname}
// Email: ${email}
// Phone: ${number}
// Email subject: ${topic}
// Message: ${message}
// `);
// }
// _________________-
// ___________OR
// ________________
// let name = "Unsha";
// let age = 24;
// let skills = ["HTML", "CSS", "JavaScript"];

// console.log("Name: " + name);
// console.log("Age: " + age);
// console.log("Skills: " + skills.join(", "));
// 
//  ______________________________
// function to add two numbers
// _______________________________
// function Add(a,b){
// console.log(a + b);
// } 
// Add(2,4)
// _________________OR
// var num1 = Number(prompt("Enter your first number"))
// var num2 = Number(prompt("Enter your second number"))
// function Add(a,b){
// console.log(`Your first number is : ${a}
//     Your second number is : ${b}
//     The Addition of both is : ${+a + +b}`);
// }
// Add(num1,num2);
// ________________________________
// find the average with variable only
// ______________________________________
// var Sub1= prompt("Enter your first Subject")
// var Marks1 = +prompt("Enter your marks in " + Sub1)
// var Sub2= prompt("Enter your second Subject")
// var Marks2 = +prompt("Enter your marks in " + Sub2)
// var Sub3= prompt("Enter your third Subject")
// var Marks3 = +prompt("Enter your marks in " + Sub3)
// var Average = (Marks1 + Marks2 +Marks3)/3
// console.log(Average);
// ________________________________
// find the average with helpof function
// ______________________________________
// function Avg(a,b,c){
// console.log((a+b+c)/3);
// }
// Avg(3,4,5)
// ______________________
// __________OR
// ____________________________
// function Avg(a,b,c){
// console.log((a+b+c)/3);
// }
// var val1= Number(prompt("Enter first value"))
// var val2= Number(prompt("Enter Second value"))
// var val3= Number(prompt("Enter third value"))
// Avg(val1,val2,val3)
//================================================
//---------------Toggle Button----------------
//================================================
function darkTheme(){
  var hero = document.getElementsByClassName("maindiv")[0];
  var btn = document.getElementById("btn");
  var paras = hero.getElementsByTagName("p");
  var spans= hero.getElementsByTagName("span")
//   var allh1 = hero.getElementsByTagName("h1")
var myname=document.getElementsByClassName("MyNameheading")
btn.style.backgroundColor = "transparent"
btn.style.padding = "10px"
// btn.style.transform ="scale(1.2)"
btn.style.borderRadius = "10px"
btn.style.position ="fixed"
btn.style.bottom = "-700px";      // bottom se distance
btn.style.right = "20px";  
// btn.style.right = "0px";
  if (hero.style.backgroundImage.includes("freepik.com")) {
    // btn.classList.remove("button");
    hero.style.backgroundImage = "url('./images/green-bg-2')";
    hero.style.backgroundSize = "contain";          
hero.style.backgroundRepeat = "repeat";    
// hero.style.backgroundPosition = "center"; 
    hero.style.color = "white";
   btn.style.border ="2px solid #c9d6c2ff";
    btn.style.color = "white";
    btn.innerHTML = "Light Mode";
    for (var i = 0; i < paras.length; i++) {
  paras[i].style.setProperty("color", "white", "important");
}
  }
  else {
  
    hero.style.backgroundImage = "url('https://img.freepik.com/premium-vector/abstract-background-pastel-colors_627230-60.jpg?w=360')";
    hero.style.backgroundSize = "contain";         
hero.style.backgroundRepeat = "repeat";  
btn.innerHTML = "Dark Mode";
btn.style.color = "black"
// btn.classList.add("button");
btn.style.border ="2px solid #192e0eff";
myname[0].style.color = "green";
for (var i = 0; i < paras.length; i++) {
  paras[i].style.setProperty("color", "black", "important");
}

for (var i = 0; i < spans.length; i++) {
  spans[i].style.setProperty("color", "green", "important");
}

  }

}