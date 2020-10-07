
const task = {
  engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
  designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
  entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']

}
const phrase = ['很簡單', '很容易', '很快', '很正常']
let chCareer = ''

function randomTrashTalk(career) {

  // //不知道為什麼switch 不能用
  // switch (career) {
  //   case 'engineer':
  //     chCareer = '工程師'
  //   case 'designer':
  //     chCareer = '設計師'
  //   case 'entrepreneur':
  //     chCareer = '創業家'
  //   default:
  //     return `說好的要被嘴的人呢??`
  // }

  if (!career) {
    return `說好的要被嘴的人呢??`
  }
  if (career === 'engineer') {
    chCareer = '工程師'
  } else if (career === 'designer') {
    chCareer = '設計師'
  } else if (career === 'entrepreneur') {
    chCareer = '創業家'
  }

  if (!career) {
    return `說好的要被嘴的人呢??`
  }
  const careerTask = task[career]
  const randomTask = careerTask[Math.floor(Math.random())]
  const randomPhrase = phrase[Math.floor(Math.random() * 4)]
  return (`身為一個${chCareer}，${randomTask}，${randomPhrase}吧!`)
}

module.exports = randomTrashTalk