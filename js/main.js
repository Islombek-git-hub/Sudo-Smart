let inp = document.querySelector('#inp');
let root = document.querySelector('#root');
let text;
function getData() {
  root.textContent = '';

  text = inp.value.toUpperCase().split('');
  for (let i = 0; i < text.length; i++) {
    if (
      text[i] === 'A' ||
      text[i] === 'B' ||
      text[i] === 'D' ||
      text[i] === 'E' ||
      text[i] === 'F' ||
      text[i] === 'G' ||
      text[i] === 'H' ||
      text[i] === 'I' ||
      text[i] === 'J' ||
      text[i] === 'K' ||
      text[i] === 'L' ||
      text[i] === 'M' ||
      text[i] === 'N' ||
      text[i] === 'O' ||
      text[i] === 'P' ||
      text[i] === 'Q' ||
      text[i] === 'R' ||
      text[i] === 'S' ||
      text[i] === 'T' ||
      text[i] === 'U' ||
      text[i] === 'V' ||
      text[i] === 'X' ||
      text[i] === 'Y' ||
      text[i] === 'Z' ||
      text[i] === "O'" ||
      text[i] === "G'" ||
      text[i] === 'SH' ||
      text[i] === 'CH' ||
      text[i] === 'NG' ||
      text[i] === ' ' ||
      text[i] === 'C'
    ) {
      if (text[i] === 'S' && text[i + 1] === 'H') {
        text.splice(i, 2, 'SH');
      } else if (text[i] === 'C' && text[i + 1] === 'H') {
        text.splice(i, 2, 'CH');
      } else if (text[i] === 'N' && text[i + 1] === 'G') {
        text.splice(i, 2, 'NG');
      } else if (text[i] === 'O' && text[i + 1] === "'") {
        text.splice(i, 2, "O'");
      } else if (text[i] === 'G' && text[i + 1] === "'") {
        text.splice(i, 2, "G'");
      }
    } else {
      alert('Xato yozyabsiz');
      text.splice(i, 1);
    }
  }
  text.forEach((x) => {
    if (x !== ' ' && x !== 'C') {
      let imgBox = document.createElement('div');
      let img = document.createElement('img');
      let a = document.createElement('span');
      img.src = `assets/sudoImages/${x}.jpg`;
      img.alt = x;
      imgBox.style.width = '100px';
      imgBox.style.height = '100px';
      imgBox.style.position = 'relative';
      imgBox.style.margin  = '3px';
      imgBox.style.boxShadow  = '0 0 5px #aaa';

      img.style.width = '100%';
      img.style.height = '100%';
      img.style.position = 'absolute';
      img.style.top = 0;
      img.style.left = 0;

      a.innerText = x
      a.style.position = 'absolute';
      a.style.bottom = 0;
      a.style.right = '5px';
      a.style.zIndex = 11;
      
      imgBox.appendChild(img)
      imgBox.appendChild(a)
      root.appendChild(imgBox);
    }
  });
}
