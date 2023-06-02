const btnElist = document.querySelectorAll("button");

btnElist.forEach(btnEl =>{
  btnEl.addEventListener("click",()=>{
   document.querySelector(".special")?.classList.remove("special");
   btnEl.classList.add("special");
  });
});
let result = "";
let set =[];
document.getElementById("button1").addEventListener("click",function(){
  let email1 = document.getElementById("chkemail").value;
  set.push(email1);
  let pass1 = document.getElementById("chkpass").value;
  if (email1 !== "shreyanshmishra@gmail.com") {
    alert("You are not registered!! Sign up, please.");
    result +="You are not registered!! Sign up, please."+" "; 
  }
  if (pass1.length <= 5) {
    alert("Your password should contain at least 5 letters!");
    result +="Your password should contain at least 5 letters!"+" ";
  } else {
    var nm = 0;
    var wd = 0;
  
    for (var i = 0; i < pass1.length; i++) {
      var k = pass1.charAt(i);
      // alert(typeof(k));
      if (k === "0" || k === "1" || k === "2" || k === "3" || k === "4" || k === "5" || k === "6" || k === "7" || k === "8" || k === "9") {
        nm++;
      } else {
        wd++;
      }
    }
    if (nm === 0 || wd === 0) {
      alert("Please enter a password containing both letters and digits to have a strong password!");
      result +="Please enter a password containing both letters and digits to have a strong password!"+" ";
    }
  }
  // let realStr = `<p>result</p>`
  // let finalRes = document.getElementById('wrongans');
  // finalRes.innerHTML = realStr;
})

