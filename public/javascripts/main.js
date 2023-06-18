const CHARACTERS = [
  { name: '爾蒙',
    slogan: '「人生就是無止盡的即興演出。」',
    introduction: '人見人愛的男孩。', 
    bodyImg: 'https://github.com/Melon-Lo/Lonely-Hormone-Website/blob/main/materials/xiang.png?raw=true',
    headImg: 'https://github.com/Melon-Lo/Lonely-Hormone-Website/blob/main/materials/head/xiang_head.png?raw=true',
    lineImg: 'https://github.com/Melon-Lo/Lonely-Hormone-Website/blob/main/materials/line/blue_line.png?raw=true', }
]

const characters = document.querySelectorAll('.character')

for(let character of characters) {
  character.addEventListener('click', (e) => {
    let target = e.target
    let id = target.id
    let idArr = id.split('-')
    let name = idArr[0]
    location.href=`#${name}`
  })
}

function Onscrollfnction() {
  let bodyBottom = window.scrollY + window.innerHeight; // 視窗最底
  let box = document.querySelector('#introduction');
  (box.offsetTop < bodyBottom) ? console.log('See box') : console.log('Cant see') 
};