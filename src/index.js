require('./index.scss')

import Logo from './logo.png'
import Happy from './happy.jpg'
// require Logo = ('./logo.png')
// require Happy = ('./happy.jpg')

function component() {
  const element = document.createElement('div')

  return createImg(element, [Happy, Logo])
}

function createImg(ele, urls) {
  if (Object.prototype.toString.call(urls) !== '[object Array]') {
    urls = [urls]
  }
  urls.forEach(url => {
    const img = new Image()
    img.src = url
    ele.appendChild(img)
  })
  return ele
}

document.body.appendChild(component());

console.log('hello webpack!')