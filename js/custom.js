let text1 = document.getElementById("text1");
let text2 = document.getElementById("text2");
let btn1 = document.getElementById("sendbtn1");
let btn2 = document.getElementById("sendbtn2");
let ul1 = document.getElementById("pg-ul1");
let ul2 = document.getElementById("pg-ul2");

function creatmsg(classLi, msgInput) {
  let msgWrt = document.createElement("li");
  let msgElemP = document.createElement("p");
  msgElemP.textContent = msgInput;
  msgWrt.append(msgElemP);
  msgWrt.classList.add(classLi);
  return msgWrt;
}

function btn1click() {
  ul1.append(creatmsg("user1", text1.value));
  ul2.append(creatmsg("user2", text1.value));
}
function btn2click() {
  ul1.append(creatmsg("user2", text2.value));
  ul2.append(creatmsg("user1", text2.value));
}
