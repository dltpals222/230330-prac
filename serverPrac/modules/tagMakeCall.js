export default function tagMakeCall (parentName, tagName, callback) {
  let element = document.createElement(tagName)
  parentName.appendChild(element)
  callback(element)
}