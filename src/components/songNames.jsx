import { uniqueNamesGenerator, adjectives,names, colors, animals } from 'unique-names-generator';





const pronoun=[
    'When I ','If I ','Can I ','When You ','If You ','Can You ','Just ','I ','You ','Me ', '','She ', 'He ', 'They ', 'We ', '','','',''
]
const action=['Love','Ride','Ride For','Hate On','Hate','React','Commit','Adore','Fly','Call','Call On','Bang','See','Accept','Drill','Desire','Lie','Save','Go','Run','Reverse','Mix','Shoot','Shoot At','Lean On']
const subject=['Me','Us','Again','Him','Her','Time','Them','','','','Yourself','Life','Love','']

function generator(){
    const shortName = uniqueNamesGenerator({
        dictionaries: [adjectives], // colors can be omitted here as not used
        style: 'capital',
        separator: ' ',
        length: 1
      })
      return shortName
}
function songName(){
const p=pronoun[Math.floor(Math.random()*pronoun.length)]
const a=action[Math.floor(Math.random()*action.length)]
const s=subject[Math.floor(Math.random()*subject.length)]
return p+a+' '+s
}
const whichFormat=[songName,generator]


export default whichFormat