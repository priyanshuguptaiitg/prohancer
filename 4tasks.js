var temp;
var url;
var input;
var des;
var lat, lon;
function get_todos() {
  var todos = new Array();
  var todos_str = localStorage.getItem("todo");
  if (todos_str !== null) {
    todos = JSON.parse(todos_str);
  }
  return todos;
}
function get_color() {
  var color = localStorage.getItem("color");
  return color;
}
function get_fontColor() {
  var color = localStorage.getItem("fontColor");
  return color;
}
function add() {
  var audio = new Audio("button.mp3");
  audio.play();
  var task = document.getElementById("task").value;
  if (task == "") {
    document.getElementById("task").focus();
    return;
  }
  var todos = get_todos();
  todos.push(task);
  localStorage.setItem("todo", JSON.stringify(todos));
  show();
  document.getElementById("task").value = null;
  document.getElementById("task").focus();
  return false;
}
function removee() {
  var audio = new Audio("Task Complete.mp3");
  audio.play();
  var id = this.getAttribute("id");
  var todos = get_todos();
  todos.splice(id, 1);
  localStorage.setItem("todo", JSON.stringify(todos));
  show();
  return false;
}
function redcolorChange() {
  localStorage.setItem("color", "#963019");
  localStorage.setItem("titleColor", "#16174f");
  show();
  document.getElementById("task").focus();
}
function blackFont() {
  localStorage.setItem("fontColor", "black");
  show();
  document.getElementById("task").focus();
}
function whiteFont() {
  localStorage.setItem("fontColor", "white");
  show();
  document.getElementById("task").focus();
}
function greyFont() {
  localStorage.setItem("fontColor", "grey");
  show();
  document.getElementById("task").focus();
}
function greencolorChange() {
  var color = get_color();
  localStorage.setItem("color", "#49412c");
  localStorage.setItem("titleColor", "#97743a");
  show();
  document.getElementById("task").focus();
}
function bluecolorChange() {
  localStorage.setItem("color", "#62bcfa");
  localStorage.setItem("titleColor", "#6534ff");
  show();
  document.getElementById("task").focus();
}
function pinkcolorChange() {
  localStorage.setItem("color", "#FFB2AE");
  localStorage.setItem("titleColor", "#efefef");
  show();
  document.getElementById("task").focus();
}
function yellowcolorChange() {
  localStorage.setItem("color", "#aa863a");
  localStorage.setItem("titleColor", "#49412c");
  show();
  document.getElementById("task").focus();
}
function cyancolorChange() {
  localStorage.setItem("color", "#20b2aa");
  localStorage.setItem("titleColor", "#49412c");
  show();
  document.getElementById("task").focus();
}

function show() {
  var todos = get_todos();
  var color = get_color();
  var titleColor = localStorage.getItem("titleColor");
  var fontColor = get_fontColor();
  l1 = todos.length;
  document.getElementById("title").style.color = titleColor;
  document.getElementById("date").style.color = titleColor;
  document.getElementById("add").style.color = titleColor;
  document.getElementById("task").style.color = titleColor;
  document.getElementById("body").style.backgroundColor = color;
  document.getElementById("todos").style.color = fontColor;
  var html = "<ul>";
  for (var i = 0; i < todos.length; i++) {
    html +=
      "<li>" +
      "   " +
      '<input type = "checkbox" class="removee" id="' +
      i +
      '"></input>' +
      todos[i] +
      "</li>";
  }
  html += "</ul>";
  chrome.browserAction.setBadgeText({ text: todos.length.toString() });
  document.getElementById("todos").innerHTML = html;
  var buttons = document.getElementsByClassName("removee");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", removee);
  }
}
function motivation() {
  var audio = new Audio("JUST DO IT.mp3");
  audio.play();
}
document.getElementById("task").addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keycode == 13) {
    document.getElementById("add").click();
  }
});
document.getElementById("add").addEventListener("click", add);
get_color();
document.getElementById("redd").addEventListener("click", redcolorChange);
document.getElementById("greenn").addEventListener("click", greencolorChange);
document.getElementById("bluee").addEventListener("click", bluecolorChange);
document.getElementById("yellow").addEventListener("click", yellowcolorChange);
document.getElementById("pink").addEventListener("click", pinkcolorChange);
document.getElementById("cyan").addEventListener("click", cyancolorChange);
get_fontColor();
document.getElementById("fcolor").addEventListener("click", blackFont);
document.getElementById("wcolor").addEventListener("click", whiteFont);
document.getElementById("gcolor").addEventListener("click", greyFont);
document.getElementById("mot").addEventListener("click", motivation);
var date = new Date();
document.getElementById("date").innerHTML = date.toDateString();
show();
