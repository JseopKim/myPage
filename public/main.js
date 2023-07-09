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
menuTitleText.innerText = "Sensuous Developer";

const menuBox = tagCreate("div");
menuContainer.appendChild(menuBox);
styleCreate(menuBox, style.menuBox);

//? 제목 및 메뉴 스타일 파트
let boxArray = [];
let menuName = ['Profile', 'Growth Process', 'About Jiseop Kim'];

for (let i = 0; i < 3; i++) {
  let menu = tagCreate("div", {id: menuName[i]});
  boxArray.push(menu);
  menuBox.appendChild(boxArray[i]);
  styleCreate(boxArray[i], style.menu);
  boxArray[i].innerText = menuName[i];

  boxArray[i].addEventListener('mouseover',function() {
    styleCreate(boxArray[i], eventStyle.menuEvent)
  });
  boxArray[i].addEventListener('mouseout',function() {
    boxArray[i].style.borderBottom = '';
  });
}

//! 내용 파트
const main = tagCreate("div", { id: "main" });
root.appendChild(main);
styleCreate(main, style.mainContainer);

window.addEventListener('load', function() {
  growthContainer.style.display = "none";
})

document.getElementById(menuName[0]).addEventListener('click', function() {
  profileContainer.style.display = "flex";
  growthContainer.style.display = "none";
})

document.getElementById(menuName[1]).addEventListener('click', function() {
  profileContainer.style.display = "none";
  growthContainer.style.display = "flex";
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
  growthContainer.appendChild(contentBox);
  styleCreate(contentBox, style.contentBox);
  
  const growthImg = tagCreate("div");
  contentBox.appendChild(growthImg);
  styleCreate(growthImg, style.growthImg);

  const writeBox = tagCreate("div");
  contentBox.appendChild(writeBox);
  styleCreate(writeBox, style.writeBox);

  const titleBox = tagCreate("div");
  writeBox.appendChild(titleBox);
  styleCreate(titleBox, style.titleBox);

  titleBox.innerHTML = title;

  const detailBox = tagCreate("div");
  writeBox.appendChild(detailBox);
  styleCreate(detailBox, style.detailBox);

  detailBox.innerHTML = detail;
}

const years = [2020, 2021, 2022, 2023]

function makeBox() {
  const boxContainer = tagCreate("div");
  growthContainer.appendChild(boxContainer);
  styleCreate(boxContainer, style.boxContainer);
  
  let box = [];
  
  for (let i in years) {
    let boxComponent = tagCreate("div");
    box.push(boxComponent);
    boxContainer.appendChild(box[i]);
    styleCreate(box[i], style.boxComponent);
    box[i].innerText = years[i];
  }

  boxContainer.addEventListener("mouseover", function (event) {
    const target = event.target;
    const boxIndex = box.indexOf(target);

    if (boxIndex >= 0) {
      const fillPercentage = (boxIndex + 1) * 25;
      boxContainer.style.borderTop = `solid red ${fillPercentage}%`;
    }
  });

  boxContainer.addEventListener("mouseout", function () {
    boxContainer.style.borderTop = "none";
  });
}

makeBox();