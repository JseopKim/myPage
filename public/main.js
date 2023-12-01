function tagCreate(tType, props) {
  let element = document.createElement(tType);
  for (let i in props) {
    element[i] = props[i];
  }
  return element;
}

function styleCreate(target, styleOb) {
  for (i in styleOb) {
    target.style[i] = styleOb[i];
  }
}

const root = tagCreate("div", { id: "root" });
document.body.appendChild(root);
styleCreate(root, style.rootContainer);
root.scrollLeft = 0;
root.scrollTo(0, root.scrollTop);

//! 메뉴 파트

const menuContainer = tagCreate("div", { id: "menu" });
root.appendChild(menuContainer);
styleCreate(menuContainer, style.menuContainer);

const menuTitle = tagCreate("div");
menuContainer.appendChild(menuTitle);
styleCreate(menuTitle, style.menuTitle);

const menuTitleText = tagCreate("div");
menuTitle.appendChild(menuTitleText);
styleCreate(menuTitleText, style.menuTitleText);
// menuTitleText.innerText = `Sensuous Developer`;

// "Sensuous Developer" 텍스트를 구성하는 부분을 서로 다른 스타일로 감싸기
const titleTextFirstfix = tagCreate("span");
titleTextFirstfix.innerText = "Se";
titleTextFirstfix.style.color = "#79EF39"; // 첫 번째 부분의 색상 지정

const titleTextSecondfix = tagCreate("span");
titleTextSecondfix.innerText = "nsitive Devel";
titleTextSecondfix.style.color = "#ffffff"; // 두 번째 부분의 색상 지정

const titleTextThirdfix = tagCreate("span");
titleTextThirdfix.innerText = "op";
titleTextThirdfix.style.color = "#79EF39"; // 세 번째 부분의 색상 지정

const titleTextLastfix = tagCreate("span");
titleTextLastfix.innerText = "er";
titleTextLastfix.style.color = "#ffffff"; // 네 번째 부분의 색상 지정

menuTitleText.appendChild(titleTextFirstfix);
menuTitleText.appendChild(titleTextSecondfix);
menuTitleText.appendChild(titleTextThirdfix);
menuTitleText.appendChild(titleTextLastfix);

const menuBox = tagCreate("div");
menuContainer.appendChild(menuBox);
styleCreate(menuBox, style.menuBox);

//? 제목 및 메뉴 스타일 파트
let boxArray = [];
let menuName = ['Profile', 'Growth Process', 'About Jiseop Kim'];

for (let i = 0; i < 3; i++) {
  let menu = tagCreate("div", { id: menuName[i] });
  boxArray.push(menu);
  menuBox.appendChild(boxArray[i]);
  styleCreate(boxArray[i], style.menu);
  
  // 'About Jiseop Kim' 텍스트에서 'seop' 부분을 다른 색상으로 표시
  if (menuName[i] === 'About Jiseop Kim') {
    const spanElement = document.createElement('span');
    spanElement.innerText = 'seop ';
    spanElement.style.color = '#79EF39'; // 다른 색상으로 지정
    boxArray[i].appendChild(document.createTextNode('About Ji'));
    boxArray[i].appendChild(spanElement);
    boxArray[i].appendChild(document.createTextNode(' Kim'));
  } else {
    boxArray[i].innerText = menuName[i];
  }

  boxArray[i].addEventListener('mouseover', function() {
    styleCreate(boxArray[i], eventStyle.menuEvent);
  });
  boxArray[i].addEventListener('mouseout', function() {
    boxArray[i].style.borderBottom = '';
  });
}


//! 내용 파트
const main = tagCreate("div", { id: "main" });
root.appendChild(main);
styleCreate(main, style.mainContainer);

//? 프로필
const profileContainer = tagCreate("div", { id: "profile" });
main.appendChild(profileContainer);
styleCreate(profileContainer, style.profileBox);

const profileImgBox = tagCreate("div");
profileContainer.appendChild(profileImgBox);
styleCreate(profileImgBox, style.profileImgBox);

const profileImg = tagCreate("div");
profileImgBox.appendChild(profileImg);
styleCreate(profileImg, style.profileImg);

const profileInfo = tagCreate("div");
profileImgBox.appendChild(profileInfo);
styleCreate(profileInfo, style.profileInfo);

const infoText = `
  <span style="color: #89F150; font-family: 'GmarketSansMedium';">감각적인</span> 개발자를 꿈꾸는 김지섭입니다.<br>
  백엔드나 프론트엔드에 얽매이지 않고 개발하고 싶습니다.<br>
  만들고 싶은 것을 만들면서 개발에 흥미를 가지게 되었고,<br>
  만들고 싶은 것이 많아지면서 배우고 싶은 것도 많아지고 그만큼 노력하는 개발자입니다.<br>
  늘 성장하며 <span style="color: #89F150; font-family: 'GmarketSansMedium';">Sensitive</span> Developer로 거듭날 것입니다.
`;

profileInfo.innerHTML = infoText

const profileContentBox = tagCreate("div");
profileContainer.appendChild(profileContentBox);
styleCreate(profileContentBox, style.profileContentBox);

let textBoxArr = [];

const textName = tagCreate("a", {id: "name"});
profileContentBox.appendChild(textName);
styleCreate(textName, style.profileContent);
textName.innerText = "김지섭"

const textEmail = tagCreate("a", {href: "mailto:jsub5646@gmail.com"});
profileContentBox.appendChild(textEmail);
styleCreate(textEmail, style.profileContent);
const emailIcon = tagCreate("img", {src: "./mailicon.png"});
textEmail.appendChild(emailIcon);
styleCreate(emailIcon, style.icon);

const textGithub = tagCreate("a", {href: "https://github.com/JseopKim"});
profileContentBox.appendChild(textGithub);
styleCreate(textGithub, style.profileContent);
const githubIcon = tagCreate("img", {src: "./githubicon.png"});
textGithub.appendChild(githubIcon);
styleCreate(githubIcon, style.icon);


//? 성장과정
const growthContainer = tagCreate("div");
main.appendChild(growthContainer);
styleCreate(growthContainer, style.growthContainer);

function makeWriteBox(title, detail) {
  const contentBox = tagCreate("div");
  modal.appendChild(contentBox);
  styleCreate(contentBox, style.contentBox);

  const writeBox = tagCreate("div");
  contentBox.appendChild(writeBox);
  styleCreate(writeBox, style.writeBox);

  const titleBox = tagCreate("div");
  writeBox.appendChild(titleBox);
  styleCreate(titleBox, style.titleBox);

  titleBox.innerText = title;

  const detailBox = tagCreate("div");
  writeBox.appendChild(detailBox);
  styleCreate(detailBox, style.detailBox);

  detailBox.innerText = detail;
}

const years = [2020, 2021, 2022, 2023];

//? 2020 - 2023 박스
let box = [];

const boxContainer = tagCreate("div");
growthContainer.appendChild(boxContainer);
styleCreate(boxContainer, style.boxContainer);

for (let i in years) {
  const boxComponent = tagCreate("div");
  box.push(boxComponent);
  boxContainer.appendChild(box[i]);
  styleCreate(box[i], style.boxComponent);
  box[i].innerText = years[i];
}

const project = {
  project_2020: {
    title: ['ShoeNikers', 'keen'],
    detail: ['신발을 좋아해서 만들어보았습니다.\n어떤 브랜드가 있는지 신발을 좋아하는 사람들이나 좋아하지 않는 사람들도 충분히 신발에 대한 관심을 가질 수 있도록 웹 페이지를 만들었습니다.', '옷을 좋아하다 보니 쇼핑몰 페이지도 직접 만들 수 있지 않을까 하는 마음이 들어 만들어보았습니다.\n 옷을 볼 수 있고 자세한 옷의 정보를 확인할 수 있도록 웹 페이지를 만들어보았습니다.'],
    link: ['https://github.com/JseopKim/2020_shoeNikers.git', 'https://github.com/JseopKim/2020_keen.git'],
  },
  project_2021: {
    title: ['seeseeTV'],
    detail: ['집 안에 CCTV를 이용하여 밖에서도 CCTV를 안드로이드 앱을 이용하여 확인할 수 있는 프로그램을 만들어보았습니다.'],
    link: ['https://childlike-dryer-fc8.notion.site/2021-324e4b291b6445d39aba5aafd6fce457?pvs=4'],
  },
  project_2022: {
    title: ['CCTV Manager', 'KIDSAFE'],
    detail: ['라즈베이파이를 이용하여 만든 CCTV를 밖에서도 동작할 수 있도록 만들고 CCTV의 기능까지 가능하도록 프로그램을 만들었습니다.', '아동안전시스템으로 AI카메라를 통해 아동을 감지하도록 하였습니다.\n어린이 보호구역에서의 안전시스템으로 아이들의 안전을 지킬 수 있도록 프로그램을 만들었습니다.'],
    link: ['https://childlike-dryer-fc8.notion.site/IoT-CCTV-11d3494fce41464bbc954d4ea5d2d6a5?pvs=4', 'https://childlike-dryer-fc8.notion.site/2022-15a6c41ee73a460cae7bf8009ecf17e3?pvs=4'],
  },
  project_2023: {
    title: ['Mungta', 'ChickenStock', 'smooD', 'WatermelonGame'],
    detail: ['지도 API를 이용한 강아지 산책 친구 만들어주는 ‘멍타’ 웹 서비스입니다.', '주식 입문자를 위한 주식 종목을 추천을 목적으로 만든 리액트 네이티브 앱입니다.', 'Tmap API를 활용하여 지도에서 선택한 시설 중 가까운 곳을 우선으로 빠르게 안내하는 서비스입니다.', 'Vite와 matter.js를 사용하여 같은 과일을 부딪혀 더 큰 과일을 만드는, 간단한 웹 게임입니다.'],
    link: ['https://childlike-dryer-fc8.notion.site/Project-C-bc47faeeb7354343b5c6b2d794251062?pvs=4', 'https://childlike-dryer-fc8.notion.site/Project-A-3-8347aeb01fe24d0d84e68c8a84dbf21f?pvs=4', 'https://childlike-dryer-fc8.notion.site/Project-B-D-4f1e89b04ac2425f8fddd53404ac2334?pvs=4', 'https://www.notion.so/2bc856fbaf6d48f599c1d6b9be5ac54c?pvs=4'],
  }
}

//* 모달 안에 컨텐츠 함수
function makeContent(parent, title, content, link) {
  const contentBox = tagCreate("div");
  parent.appendChild(contentBox);
  const titleLength = project.project_2020.title.length;
  const heightPercentage = 100 / titleLength;
  const contentBoxHeight = heightPercentage + "%";
  
  styleCreate(contentBox, {
    ...style.contentBox,
    height: contentBoxHeight,
  });
  // styleCreate(contentBox, style.contentBox);

  const setBox = tagCreate("div");
  contentBox.appendChild(setBox);
  styleCreate(setBox, style.setBox);
  
  const writeBox = tagCreate("div");
  contentBox.appendChild(writeBox);
  styleCreate(writeBox, style.writeBox);

  const titleBox = tagCreate("div");
  writeBox.appendChild(titleBox);
  styleCreate(titleBox, style.titleBox);

  titleBox.innerText = title;

  const detailBox = tagCreate("div");
  writeBox.appendChild(detailBox);
  styleCreate(detailBox, style.detailBox);

  detailBox.innerText = content;

  const linkBox = tagCreate("div");
  writeBox.appendChild(linkBox);
  styleCreate(linkBox, style.linkBox);

  const imgGithub = tagCreate("a", {href: `${link}`, target: "_blank"});
  linkBox.appendChild(imgGithub);
  styleCreate(imgGithub, style.imgGithub);
  imgGithub.innerText = "Go to Project";
}

//* 모달 생성 함수
function makeModal() {
  const modal = tagCreate("div", {id: "modal"});
  styleCreate(modal, style.modal);

  const modalContent = tagCreate("div", { id: "modalContent" });
  styleCreate(modalContent, style.modalContent);
  modal.appendChild(modalContent);

  //* 모달 닫기 이벤트 처리
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.parentNode.removeChild(modal);
    }
  });

  return modal;
}

//* 모달 열기 함수

function openModal() {
  const modal = makeModal();
  document.body.appendChild(modal);
}

//* boxComponent 클릭 이벤트 처리
for (let i = 0; i < box.length; i++) {
  box[i].addEventListener('click', function() {
    openModal();
    if (i === 0) {
      for (let j = 0; j < project.project_2020.title.length; j++) {
        makeContent(modalContent, project.project_2020.title[j], project.project_2020.detail[j], project.project_2020.link[j]);
      }
    } else if (i === 1) {
      for (let j = 0; j < project.project_2021.title.length; j++) {
        makeContent(modalContent, project.project_2021.title[j], project.project_2021.detail[j], project.project_2021.link[j]);
      }
    } else if (i === 2) {
      for (let j = 0; j < project.project_2022.title.length; j++) {
        makeContent(modalContent, project.project_2022.title[j], project.project_2022.detail[j], project.project_2022.link[j]);
      }
    } else if (i === 3) {
      for (let j = 0; j < project.project_2023.title.length; j++) {
        makeContent(modalContent, project.project_2023.title[j], project.project_2023.detail[j], project.project_2023.link[j]);
      }
    }
  });
}

//? About Jiseop Kim
const aboutContainer = tagCreate("div", {id: "about"});
main.appendChild(aboutContainer);
styleCreate(aboutContainer, style.aboutContainer);

let subMenuBoxArr = [];

for(let i = 0; i < 3; i++){
  const subMenuBox = tagCreate("div");
  subMenuBoxArr.push(subMenuBox);
  aboutContainer.appendChild(subMenuBoxArr[i]);
  styleCreate(subMenuBoxArr[i], style.subMenuBox);
  if(subMenuBoxArr[0]) {
    subMenuBoxArr[0].style.width = "20%"
  } 
  if (subMenuBoxArr[1]) {
    subMenuBoxArr[1].style.width = "30%"
  } 
  if (subMenuBoxArr[2]) {
    subMenuBoxArr[2].style.width = "50%"
  }
}

const subMenuName = ['Education', 'Skills', 'Activities'];
let subMenuNameBoxArr = [];
let subMenuNameArr = [];
let subMenuDetailBoxArr = [];

for(let i in subMenuName){
  const subMenuNameBox = tagCreate("div");
  subMenuNameBoxArr.push(subMenuNameBox);
  subMenuBoxArr[i].appendChild(subMenuNameBoxArr[i]);
  styleCreate(subMenuNameBoxArr[i], style.subMenuNameBox);

  const subMenu = tagCreate("div");
  subMenuNameArr.push(subMenu);
  subMenuNameBoxArr[i].appendChild(subMenuNameArr[i]);
  styleCreate(subMenuNameArr[i], style.subMenu);
  subMenuNameArr[i].innerText = subMenuName[i];

  const subMenuDetail = tagCreate("div");
  subMenuDetailBoxArr.push(subMenuDetail);
  subMenuBoxArr[i].appendChild(subMenuDetailBoxArr[i]);
  styleCreate(subMenuDetailBoxArr[i], style.subMenuDetailBox);
}

for (let i = 0; i < subMenuDetailBoxArr.length; i++) {
  for (let j = 0; j < i + 1; j++) {
    const subMenuDetail = tagCreate("div", {id: `${i}of${j}`});
    subMenuDetailBoxArr[i].appendChild(subMenuDetail);
    styleCreate(subMenuDetail, style.subMenuDetail);
    subMenuDetail.style.width = `${100 / (i + 1)}%`;
  }
}

//* Education Part

const educationObj = {
  term: "2017.03 - 2023.02",
  title: "배재대학교",
  major: "정보통신공학과",
  score: "3.88 / 4.5"
}
const education = document.getElementById("0of0");
styleCreate(education, style.education);

const educationTerm = tagCreate("div");
education.appendChild(educationTerm);
styleCreate(educationTerm, style.educationFont);
educationTerm.innerText = educationObj.term;

const educationTitle = tagCreate("div");
education.appendChild(educationTitle);
styleCreate(educationTitle, style.educationTitle);
educationTitle.innerText = educationObj.title;

const educationMajor = tagCreate("div");
education.appendChild(educationMajor);
styleCreate(educationMajor, style.educationFont);
educationMajor.innerText = educationObj.major;

const educationScore = tagCreate("div");
education.appendChild(educationScore);
styleCreate(educationScore, style.educationFont);
educationScore.innerText = educationObj.score;

//* Skills Part
const skillObj = {
  title: ["BackEnd", "FrontEnd", "Tools"],
  backend: ["Node.js", "Python", "MySQL", "MongoDB"],
  frontend: ["JavaScript", "TypeScript", "React", "ReactNative", "HTML", "CSS"],
  tool: ["Git, GitHub", "Slack", "Notion"],
}

const skillTitle = document.getElementById("1of0");
styleCreate(skillTitle, style.skillBox);

const skillContent = document.getElementById("1of1");
styleCreate(skillContent, style.skillBox);

let skillTitleArr = [];
let skillContentArr = [];

for(let i in skillObj.title){
  const skillTitleName = tagCreate("div");
  skillTitleArr.push(skillTitleName);
  skillTitle.appendChild(skillTitleArr[i]);
  styleCreate(skillTitleName, style.skillTitleName);
  skillTitleArr[i].innerText = skillObj.title[i];

  const skillContentName = tagCreate("div");
  skillContentArr.push(skillContentName);
  skillContent.appendChild(skillContentArr[i]);
  styleCreate(skillContentName, style.skillContentName);
}

for(let i in skillObj.backend) {
  const backendText = tagCreate("div");
  skillContentArr[0].appendChild(backendText);
  backendText.innerText = skillObj.backend[i];
}

for(let i in skillObj.frontend) {
  const frontendText = tagCreate("div");
  skillContentArr[1].appendChild(frontendText);
  frontendText.innerText = skillObj.frontend[i];
}

for(let i in skillObj.tool) {
  const toolText = tagCreate("div");
  skillContentArr[2].appendChild(toolText);
  toolText.innerText = skillObj.tool[i];
}

//* Activities Part
const activityObj = {
  title: ["교내활동", "교육활동"],
  subtitle: ["멘토 / 멘티 프로그램", "튜터링 및 학습동아리", "아이디어 해커톤", "KDT 교육과정"],
  content: [
    "안항 교육 프로그램 멘토링\n2022. 1학기 - Python\n2022. 2학기 - C", "학습모둠\n2021.1학기 - Java\n2021.2학기 - Java\n\n학습동아리\n2022.1학기 HTML\n\n튜터링\n2022.1학기 - C\n2022.2학기 - Arduino", 
    "AI/SW 아이디어 해커톤\n2022.05.21 - 2022.05.22", 
    "기업에서 요구하는 프레임워크를 활용한 풀스택 개발자(NODE, ECMAScript)양성"
  ],
}

const activityTitle = document.getElementById("2of0");
styleCreate(activityTitle, style.activityBox);

const activitySubTitle = document.getElementById("2of1");
styleCreate(activitySubTitle, style.activityBox);

const activityContent = document.getElementById("2of2");
styleCreate(activityContent, style.activityBox);

let activityTitleArr = [];
let activitySubTitleArr = [];
let activityContentArr = [];

for(let i in activityObj.title) {
  const activityTitleName = tagCreate("div");
  activityTitleArr.push(activityTitleName);
  activityTitle.appendChild(activityTitleArr[i]);
  if(activityTitleArr[0]) {
    styleCreate(activityTitleArr[0], style.activityTitleOne);
  }
  if(activityTitleArr[1]) {
    styleCreate(activityTitleArr[1], style.activityTitleTwo);
  }
  activityTitleArr[i].innerText = activityObj.title[i];
}

for(let i in activityObj.subtitle) {
  const activitySubTitleName = tagCreate("div");
  activitySubTitleArr.push(activitySubTitleName);
  activitySubTitle.appendChild(activitySubTitleArr[i]);
  if(activitySubTitleArr[0]) {
    styleCreate(activitySubTitleArr[0], style.activitySubTitleOneThree);
  }
  if(activitySubTitleArr[1]) {
    styleCreate(activitySubTitleArr[1], style.activitySubTitleTwo);
  }
  if(activitySubTitleArr[2]) {
    styleCreate(activitySubTitleArr[2], style.activitySubTitleOneThree);
  }
  if(activitySubTitleArr[3]) {
    styleCreate(activitySubTitleArr[3], style.activitySubTitleFour);
  }
  activitySubTitleArr[i].innerText = activityObj.subtitle[i];  
}

for(let i in activityObj.content) {
  const activityContentName = tagCreate("div");
  activityContentArr.push(activityContentName);
  activityContent.appendChild(activityContentArr[i]);
  if(activityContentArr[0]) {
    styleCreate(activityContentArr[0], style.activityContentOne);
  }
  if(activityContentArr[1]) {
    styleCreate(activityContentArr[1], style.activityContentTwo);
  }
  if(activityContentArr[2]) {
    styleCreate(activityContentArr[2], style.activityContentThree);
  }
  if(activityContentArr[3]) {
    styleCreate(activityContentArr[3], style.activityContentFour);
  }
  activityContentArr[i].innerText = activityObj.content[i];
}

//! 클릭 이벤트 처리
window.addEventListener('load', function() {
  growthContainer.style.display = "none";
  aboutContainer.style.display = "none";
})

document.getElementById(menuName[0]).addEventListener('click', function() {
  profileContainer.style.display = "flex";
  growthContainer.style.display = "none";
  aboutContainer.style.display = "none";
  menuName[0].style.transform = 'translateX(0)';
})

document.getElementById(menuName[1]).addEventListener('click', function() {
  profileContainer.style.display = "none";
  growthContainer.style.display = "flex";
  aboutContainer.style.display = "none";
  menuName[1].style.transform = 'translateX(-100%)';
})

document.getElementById(menuName[2]).addEventListener('click', function() {
  profileContainer.style.display = "none";
  growthContainer.style.display = "none";
  aboutContainer.style.display = "flex";
  menuName[2].style.transform = 'translateX(-200%)';
})

document.body.addEventListener("scroll", function() {
  // 스크롤 이벤트 발생 시 스크롤바 스타일을 변경하는 코드 작성
  document.body.style.scrollbarWidth = "thin";
  document.body.style.scrollbarColor = "red blue";
});