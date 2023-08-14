var slides = document.querySelectorAll("#slides > img");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var current = 0;

// showSlides(current);
prev.onclick = prevSlide;
next.onclick = nextSlide;


function showSlides(n) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[n].style.display = "block";
}

function prevSlide() {
  if (current > 0) current -= 1;
  else
    current = slides.length - 1;
  slideTo(current);
}

function nextSlide() {
  if (current < slides.length - 1) current += 1;
  else
    current = 0;
  slideTo(current);  
}

//todoList
function newRegister() {
  var newItem = document.createElement("li");  // 요소 노드 추가
  var subject = document.querySelector("#subject");  // 폼의 텍스트 필드
  if(subject.value == ''){
    var newText = document.createTextNode('　');
  }else{
    var newText = document.createTextNode(subject.value);  // 텍스트 필드의 값을 텍스트 노드로 만들기
  }
    newItem.appendChild(newText);   // 텍스트 노드를 요소 노드의 자식 노드로 추가

  var itemList = document.querySelector("#itemList");  // 웹 문서에서 부모 노드 가져오기 
  itemList.appendChild(newItem);  // 새로 만든 요소 노드를 부모 노드에 추가

  subject.value="";

  var newButton = document.createElement("div");
  newButton.className = 'deleteButton';
  newItem.appendChild(newButton);

  var items = document.querySelectorAll(".deleteButton");
  for(i=0; i<items.length; i++){
    items[i].addEventListener("click", function() {
      if(this.parentNode){
        this.parentNode.parentNode.removeChild(this.parentNode);
      }
    });
  }
}

var ad = document.querySelector('.ad');
var box = document.querySelector('.box');

ad.onmouseover = function() {
      box.style.display="none";
      void box.offsetWidth;
      box.style.display="flex";
}

// var slidebuttons = document.querySelectorAll(".buttons");

// for(var i=0; i<slidebuttons.length; i++){
//   slidebuttons[i].onclick = function(){
//     images = images.style.animation="slide"+i+" 2s forwards"; 
//   }
// }

var slidebuttons = document.querySelector("#slidebuttons");
var k = document.querySelectorAll(".buttons");
var images = document.querySelector('#slides');

//슬라이드
sliding();
slidebuttons.onmouseover = function(){
  for(let i=0;i<k.length;i++){
    k[i].style.color = "white";
  }
}

slidebuttons.onmouseout = function(){
  for(let i=0;i<k.length;i++){
    k[i].style.color = "black";
  }
};

function slideTo(n){
  images.style.transform="translateX(-"+n*1200+"px)"
}

function sliding(){
  for(let i=0; i<k.length; i++){
    k[i].onclick=function(){
      current=i;
      images.style.transform="translateX(-"+i*1200+"px)";
    }
  };
}

  