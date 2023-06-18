const CHARACTERS = [
  { id: 1,
    name: '爾蒙',
    slogan: '「人生就是無止盡的即興演出。」',
    introduction: '人見人愛的男孩，技能是使用舌頭噴口水。最近被困在海拉魯大地，久久無法脫逃。願望是平安喜樂，永遠安康自在（或是成為有錢人家的狗）。', 
    bodyImg: 'https://github.com/Melon-Lo/Lonely-Hormone-Website/blob/main/materials/xiang.png?raw=true',
    headImg: 'https://github.com/Melon-Lo/Lonely-Hormone-Website/blob/main/materials/head/xiang_head.png?raw=true',
    lineImg: 'https://github.com/Melon-Lo/Lonely-Hormone-Website/blob/main/materials/line/blue_line.png?raw=true', }
]

const sliders = document.querySelectorAll('.slider')
const typings = document.querySelectorAll('.typing')
const sloganBoxes = document.querySelectorAll('.slogan-box')

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

// animation

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -200px 0px"
}

const appearOnScroll = new IntersectionObserver (function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return
    } else {
      entry.target.classList.add('appear')
      entry.target.classList.remove('hidden')
      appearOnScroll.unobserve(entry.target)
    }
  })
},
appearOptions)

sliders.forEach(slider => {
  appearOnScroll.observe(slider)
})

typings.forEach(typing => {
  appearOnScroll.observe(typing)
})

sloganBoxes.forEach(sloganBox => {
  appearOnScroll.observe(sloganBox)
})