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

styleCreate(document.body, {
  margin: 0,
});

const root = tagCreate("div", { id: "root" });
document.body.appendChild(root);
styleCreate(root, style.rootContainer);

//! 메뉴 파트

const menu = tagCreate("div", { id: "menu" });
root.appendChild(menu);
styleCreate(menu, style.menuContainer);

const profile = tagCreate("div", { id: "profile" });
menu.appendChild(profile);
styleCreate(profile, style.profileBox);

profile.innerText = "프로필";

const indexBox = tagCreate("div", { id: "index" });
menu.appendChild(indexBox);
styleCreate(indexBox, style.indexBox);

let indexArray = [];

for (let i = 0; i < 6; i++) {
  let index = tagCreate("div");
  indexArray.push(index);
  indexBox.appendChild(indexArray[i]);
  styleCreate(indexArray[i], style.indexComponent);
}

//! 내용 파트
const main = tagCreate("div", { id: "main" });
root.appendChild(main);

styleCreate(main, style.mainContainer);

function makeWriteBox(title, detail) {
  const writeBox = tagCreate("div");
  main.appendChild(writeBox);
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

function makeBox() {
  const boxContainer = tagCreate("div");
  main.appendChild(boxContainer);
  styleCreate(boxContainer, style.boxContainer);
  
  let box = [];
  
  for (let i = 0; i < 4; i++) {
    let boxComponent = tagCreate("div");
    box.push(boxComponent);
    boxContainer.appendChild(box[i]);
    styleCreate(box[i], style.boxComponent);
  }
}

makeWriteBox("성장과정", "나는 자랑스럽게 자라와....");

makeBox();
makeBox();
makeBox();
makeBox();