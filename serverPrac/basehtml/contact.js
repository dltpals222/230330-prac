import tagMakeCall from "../modules/tagMakeCall.js";
import tagMakeFor from "../modules/tagMakeFor.js";


const root = document.getElementById('root')

const rootChild = ['header','nav','main','footer']


for(let i=0 ; i<rootChild.length;i++){
  tagMakeCall(root, rootChild[i],function(element){
    element.style.border = '1px solid black'
    element.style.width = '100px'
    element.style.height = '100px'
  })
}


tagMakeCall(root,'form',function(element){
  element.setAttribute('action','/')
  element.setAttribute('id','contact-form')
})

const contactForm = document.getElementById('contact-form')

tagMakeCall(contactForm,'input',function(element){
  element.setAttribute('value','되돌아가기')
  element.setAttribute('type','submit')
  element.setAttribute('id','contact-btn')
})