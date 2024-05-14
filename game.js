const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

// document.getElementsByClassName('image')
// document.body.setBackground

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}


// function setBackground(imagepath) {
//   console.log(imagepath)
// }



const textNodes = [
  {
    id: 1,
    text: 'Hello.. it isnt common to see visiters here.',
    options: [
      {
        text: 'Hello',
        nextText: 2 
      },
      {
        text: '....',
        nextText: 3
      }
    ]
  },
  {
    id: 2,
    text: 'You can speak',
    options: [
      {
        text: '......',
        nextText: 3
      },
    ]
  },
  {
    id: 3,
    text: '....',
    options: [
      {
        text: 'Where is this?',
        nextText: 4
      },
      {
        text: '....',
        nextText: 7
      },
    ]
  },
  {
    id: 4,
    text: 'A place, A home, A threat. Would you like to explore?',
    options: [
      {
        text: 'yes',
        nextText: 5
      },
      {
        text: 'No',
        nextText: 6
      }
    ]
  },
  {
    id: 5,
    text: 'A wise Choice.',
    options: [
      {
        text: 'A choice?',
        nextText: 8
      }
    ]
  },
  {
    id: 6,
    text: 'Unfortunate.',
    options: [
      {
        text: 'Make better decisions',
        nextText: -1
      }
    ]
  },
  {
    id: 7,
    text: '6.62607015×10−34',
    options: [
      {
        text: 'Observation is an interaction. You may not be complicit',
        nextText: -1
      },
    ]
  },
  {
    id: 8,
    text: 'There are only choices, The Right and The Wrong',
    options: [
      {
        text: 'Okay?',
        nextText: 9
      }
    ]
  },
  {
    id: 9,
    text: '....Choices are the only means of survival for you here.',
    options: [
      {
        text: 'The right choices?',
        nextText: 10
      }
    ]
  },
  {
    id: 10,
    text: 'Yes. ..... Theres a creature near here. What would you like to do?',
    options: [
      {
        text: 'Restart',
        nextText: -1
      },
      {
        text: 'Approach it',
        nextText: 11
      },
      {
        text: 'Ignore it',
        nextText: 12
      }
    ]
  },
  {
    id: 11,
    text: 'It is watching you. Waiting. What is your choice?',
    options: [
      {
        text: 'Observe it.',
        nextText: 12
      },
      {
        text: 'Observe it, hold out one hand.',
        nextText: 13
      }
    ]
  },
  {
    id: 12,
    text: 'Let us continue.',
    options: [
      {
        text: 'okay',
        nextText: 15
      }
    ]
  },
  {
    id: 13,
    text: 'Curiosity is usually rewarded - fortune favours those who seek for it',
    options: [
      {
        text:'remove your hand',
        nextText: 12
      },
      {
        text: 'open your hand',
        nextText: 14
      }
    ]
  },
  {
    id: 14,
    text: '..... a gift.',
    options: [
      {
        text: 'It has given a compass',
        setState: {compass: true},
        nextText: 15
      }
    ]
  },
  {
    id: 15,
    text: 'Are you afraid of being alone?',
    options: [
      {
        text:'yes',
        nextText: 17
      },
      {
        text: 'no',
        nextText: 16
      }
    ]
  },
  {
    id: 16,
    text: 'Are you afraid of being alone?',
    options: [
      {
        text:'yes',
        nextText: 17
      },
      {
        text: 'yes',
        nextText: 17
      },
      {
        text: 'yes',
        nextText: 17
      },
      {
        text: 'yes',
        nextText: 17
      },
    ]
  },
  {
    id: 17,
    text: 'Are you often left behind?',
    options: [
      {
        text:'yes',
        nextText: 18
      },
      {
        text: 'yes',
        nextText: 18
      },
      {
        text: 'yes',
        nextText: 18
      },
      {
        text: 'no',
        nextText: 18
      },
    ]
  },
  {
    id: 18,
    text: 'I will stay with you.',
    options: [
      {
        text:'yes',
        nextText: 19
      },
      {
        text: 'yes',
        nextText: 19
      },
    ]
  },
  {
    id: 19,
    text: 'Good. I will return your choices to you now',
    options: [
      {
        text:'the right choice',
        setState: {Entity: true},
        nextText: 20
      },
      {
        text: 'the wrong choice',
        nextText: 21
      },
      {
        text: 'the neutral choice',
        nextText: 7
      },
    ]
  },
  {
    id: 21,
    text: 'wrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrongwrong',
    options: [
      {
        text:'Im sorry',
        nextText: -1
      },
      {
        text:'Im sorry',
        nextText: -1
      },
    ]
  },
  {
    id: 20,
    text: 'Good. Shall we continue exporing?',
    options: [
      {
        text:'yes',
        nextText: 22
      },
      {
        text:'no',
        nextText: 6
      },
    ]
  },
  {
    id: 22,
    text: '....',
    options: [
      {
        text:'....',
        nextText: 23
      },
    ]
  },
  {
    id: 23,
    text: '...',
    options: [
      {
        text:'....',
        nextText: 24
      },
    ]
  },
  {
    id: 24,
    text: '..',
    options: [
      {
        text:'....',
        nextText: 25
      },
    ]
  },
  {
    id: 25,
    text: '.',
    options: [
      {
        text:'Hello?',
        nextText: 26
      },
    ]
  },
  {
    id: 26,
    text: '.',
    options: [
      {
        text:'Are you there?',
        nextText: 27
      },
    ]
  },
  {
    id: 27,
    text: '.',
    options: [
      {
        text:'Which way should we go?',
        nextText: 28
      },
    ]
  },
  {
    id: 28,
    text: '.',
    options: [
      {
        text:'Did you leave me behind?',
        nextText: 29
      },
    ]
  },
  {
    id: 29,
    text: '.',
    options: [
      {
        text:'I need to make a choice.',
        nextText: 30
      },
    ]
  },
  {
    id: 30,
    text: '.',
    options: [
      {
        text:'North',
        nextText: 31
      },
      {
        text:'South',
        nextText: 31
      },
      {
        text:'East',
        nextText: 31
      },
      {
        text:'West',
        nextText: 31
      },
    ]
  },
  {
    id: 31,
    text: '.',
    options: [
      {
        text:'East',
        nextText: 32
      },
      {
        text:'North',
        nextText: 32
      },
      {
        text:'West',
        nextText: 32
      },
      {
        text:'South',
        nextText: 32
      },
    ]
  },
  {
    id: 32,
    text: '.',
    options: [
      {
        text:'East',
        nextText: 33
      },
      {
        text:'West',
        nextText: 33
      },
      {
        text:'South',
        nextText: 33
      },
      {
        text:'North',
        nextText: 33
      },
    ]
  },
  {
    id: 33,
    text: '.',
    options: [
      {
        text:'South',
        nextText: 34
      },
      {
        text:'West',
        nextText: 34
      },
      {
        text:'North',
        nextText: 34
      },
      {
        text:'East',
        nextText: 34
      },
    ]
  },
  {
    id: 34,
    text: '.',
    options: [
      {
        text:'I dont think im going home',
        nextText: 36
      },
      {
        text:'Home',
        requiredState: (currentState) => currentState.compass,
        nextText: 35
      },
    ]
  },
  {
    id: 35,
    text: 'The creature sends its farewells. May you return home safely',
    options: [
      {
        text:'Farewell.',
        nextText: -1
      },
    ]
  },
  {
    id: 36,
    text: 'The lone traveller surcumbs to maddness in the isolation of the forest.',
    options: [
      {
        text:'I would like a friend',
        nextText: -1
      },
    ]
  },

]

startGame() 
