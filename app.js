
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
var myname=document.getElementById("MyNameheading")
btn.style.backgroundColor = "transparent"
btn.style.padding = "10px"
btn.style.borderRadius = "10px"
  btn.style.border ="2px solid #c9d6c2ff";
    btn.style.color = "white";
  if (hero.style.backgroundImage.includes("_hybrid&w=740&q=80")) {
    // btn.classList.remove("button");
    hero.style.backgroundImage = "url('./images/green-bg-2')";
    hero.style.backgroundSize = "contain";          
hero.style.backgroundRepeat = "repeat";    
// hero.style.backgroundPosition = "center"; 
    hero.style.color = "white";
 
    btn.innerHTML = "Light Mode";
    for (var i = 0; i < paras.length; i++) {
  paras[i].style.setProperty("color", "white", "important");
}
  }
  else {
    hero.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.07)),url('https://img.freepik.com/free-vector/hand-painted-watercolor-nature-background_23-2148934719.jpg?semt=ais_hybrid&w=740&q=80')";
    hero.style.backgroundSize = "contain";         
hero.style.backgroundRepeat = "repeat";  
btn.innerHTML = "Dark Mode";
myname.style.backgroundImage ="none"
myname.style.backgroundColor ="green"
myname.style.fontFamily ="MyPaintingFont"

for (var i = 0; i < paras.length; i++) {
  paras[i].style.setProperty("color", "black", "important");
}

for (var i = 0; i < spans.length; i++) {
  spans[i].style.setProperty("color", "green", "important");
}
var parent = document.getElementsByClassName("cta-buttons")[0];
var btns = parent.getElementsByTagName("a");

for (var i = 0; i < btns.length; i++) {
  btns[i].style.border = "3px solid green";
  btns[i].style.color = "green";
  btns[i].style.background = "none";
}

  }

}
var buttons = document.getElementsByClassName("resume-btn");
var details = document.getElementsByClassName("resume-detail");

// SAB CONTENT HIDE KARNE KA FUNCTION
function hideAll() {
  for (var i = 0; i < details.length; i++) {
    details[i].classList.remove("active");
  }
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }
}

// BUTTONS PAR EVENT LISTENER LAGANA
for (let i = 0; i < buttons.length; i++) {
  
  buttons[i].addEventListener("click", function () {

    hideAll(); // pehle sab hatao

    // BUTTON ko active style
    this.classList.add("active");

    // index ke hisaab se correct content show karna
    details[i].classList.add("active");
  });
}
// ==================================== Dynamically Randered Skills Function 
let mySkills = [
  { name: "HTML", percent: 95 },
  { name: "CSS", percent: 95 },
  { name: "JavaScript", percent: 70 },
  { name: "Bootstrap", percent: 90 },
  
];
function renderSkills() {
  const container = document.getElementById("skillsContainer");
  container.innerHTML = "";

  mySkills.forEach((skill, index) => {
    container.innerHTML += `
      <div class="box">
        <div class="shadow"></div>
        <div class="content">
          <div class="percent" data-text="${skill.name}" style="--num: ${skill.percent}">
            <div class="dot"></div>
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70"></circle>
            </svg>
          </div>
          <div class="number">
            <h2>${skill.percent}<span>%</span></h2>
          </div>

          <button class="deleteBtn" onclick="removeSkill(${index})">Delete</button>
        </div>
      </div>
    `;
  });
}
function removeSkill(i) {
  mySkills.splice(i, 1);
  renderSkills();
}
document.getElementById("addSkillBtn").addEventListener("click", () => {
  const name = document.getElementById("skillInput");
  const percent = document.getElementById("skillPercent");

  if (name.value.trim() !== "" && percent.value !== "") {
    mySkills.push({
      name: name.value,
      percent: percent.value
    });

    name.value = "";
    percent.value = "";

    renderSkills();
  }
});
 renderSkills();
//  ================================Alert Function
function showalert(e){
var name = e.innerHTML

console.log(name);
Swal.fire({
  title: "Hi Unsha!!!",
  text: `You clicked on ${name}`,
  customClass: {
    popup: 'my-popup',
    title: 'my-title',
    htmlContainer: 'my-text',
     confirmButton: 'my-btn'
  }
});

}