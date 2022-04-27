let myImage = document.querySelector('img');
myImage.onclick = function () {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/p01.png') {
    myImage.setAttribute('src', 'images/p02.png');
  } else if(mySrc === 'images/p02.png') {
    myImage.setAttribute('src', 'images/p03.png');
  } else if(mySrc === 'images/p03.png') {
    myImage.setAttribute('src', 'images/p04.png');
  } else if(mySrc === 'images/p04.png') {
    myImage.setAttribute('src', 'images/p05.png');
  } else if(mySrc === 'images/p05.png') {
    myImage.setAttribute('src', 'images/p06.png');
  } else {
    myImage.setAttribute('src', 'images/p01.png');  
  }
}