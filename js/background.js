// img 태그를 생성하여 이미지 소스 가져오기
// 이 작업은 아직 HTML에 추가하지 않아 JS에만 존재한다.
const imgs = ["slamdunk1.jpg", "slamdunk2.jpg", "slamdunk3.jpg"];

const chosenImg = imgs[Math.floor(Math.random() * imgs.length)];

const bgImg = document.createElement("img");
// document로 가져온 img 태그에 새로운 이미지를 할당하는 과정
bgImg.src = `img/${chosenImg}`;

//bgImg를 body에 추가하기
document.body.appendChild(bgImg);