function tagCreate(tType, props) {
  let element = document.createElement(tType);
  for (let i in props) {
    element[i] = props[i];
  }
  return element;
};

function styleCreate(target, styleOb) {
  for (i in styleOb) {
    target.style[i] = styleOb[i];
  }
}

styleCreate(document.body, {
  margin: 0,
})

let root = tagCreate('div', {id: 'root'})
document.body.appendChild(root);
styleCreate(root, {
  backgroundColor: '#F5F3C1',
  width: '100vw',
  height: '100vh'
})

let header = tagCreate('div', {id: 'header'});
root.appendChild(header);
styleCreate(header, {
  width: '50%',
  height: '30%',
  backgroundColor: '#27E1C1',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

header.innerText = "여긴 헤더입니다."

let main = tagCreate('div', {id: 'main'});
root.appendChild(main);

styleCreate(main, {
  width: '50%',
  height: '30%',
  backgroundColor: '#0EA293',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

main.innerText = "여긴 메인입니다."

let footer = tagCreate('div', {id: 'footer'});
root.appendChild(footer);

styleCreate(footer, {
  width: '50%',
  height: '30%',
  backgroundColor: '#2F0F5D',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

footer.innerText = "여긴 푸터입니다."
