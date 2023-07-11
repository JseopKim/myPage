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

window.addEventListener('load', function() {
  growthContainer.style.display = "none";
  aboutContainer.style.display = "none";
})

document.getElementById(menuName[0]).addEventListener('click', function() {
  profileContainer.style.display = "flex";
  growthContainer.style.display = "none";
  aboutContainer.style.display = "none";
})

document.getElementById(menuName[1]).addEventListener('click', function() {
  profileContainer.style.display = "none";
  growthContainer.style.display = "flex";
  aboutContainer.style.display = "none";
})

document.getElementById(menuName[2]).addEventListener('click', function() {
  profileContainer.style.display = "none";
  growthContainer.style.display = "none";
  aboutContainer.style.display = "flex";
})

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

const profileContentBox = tagCreate("div");
profileContainer.appendChild(profileContentBox);
styleCreate(profileContentBox, style.profileContentBox);

let textBoxArr = [];

for(let i = 0; i < 4; i++) {
  const text = tagCreate("div");
  textBoxArr.push(text);
  profileContentBox.appendChild(textBoxArr[i]);
  styleCreate(textBoxArr[i], style.profileContent);
}

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
    link: ['aaabbbccc', 'aaabbb'],
  },
  project_2021: {
    title: ['seeseeTV'],
    link: ['aaaaaaa'],
  },
  project_2022: {
    title: ['CCTV Manager', 'KIDSAFE'],
    link: ['aaa', 'bbb'],
  },
  project_2023: {
    title: ['Mungta', 'ChickenStock', 'smooD'],
    link: ['ddd', 'eee', 'fff'],
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

  detailBox.innerText = link;
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
        makeContent(modalContent, project.project_2020.title[j], project.project_2020.link[j]);
      }
    } else if (i === 1) {
      for (let j = 0; j < project.project_2021.title.length; j++) {
        makeContent(modalContent, project.project_2021.title[j], project.project_2021.link[j]);
      }
    } else if (i === 2) {
      for (let j = 0; j < project.project_2022.title.length; j++) {
        makeContent(modalContent, project.project_2022.title[j], project.project_2022.link[j]);
      }
    } else if (i === 3) {
      for (let j = 0; j < project.project_2023.title.length; j++) {
        makeContent(modalContent, project.project_2023.title[j], project.project_2023.link[j]);
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
const activityTitle = document.getElementById("2of0");
styleCreate(activityTitle, style.activityBox);

