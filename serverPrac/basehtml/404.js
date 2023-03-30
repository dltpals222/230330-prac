import tagMakeCall from '../modules/tagMakeCall.js'
import tagMakeFor from '../modules/tagMakeFor.js'

const root = document.getElementById('root')

tagMakeFor(root,'div',3)


root.children[2].innerText = "404-NotFound"

tagMakeCall(root.children[0],'form',function(element){
  element.setAttribute('action','/')
  element.setAttribute('id','404-form')
})

const Form404 = document.getElementById('404-form')

tagMakeCall(Form404,'input',function(element){
  element.setAttribute('value','되돌아가기')
  element.setAttribute('type','submit')
  element.setAttribute('id','404-btn')
})