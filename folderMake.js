import fs, { mkdirSync } from 'fs'
import path from 'path';


const weeks = 11; //KDT 몇주차인지 적음
const month = 4; //지정 달
const day = 10; //지정 일


const preFolderlocation = 'd:/KDT-2/'; //상위 경로
const dayNum = 5; //폴더를 연속 몇일짜리로 만들건지 정하면 됨

let parentFolder = '';


//parentfolder 생성
if(day>9){
  let FDN = `${weeks} week (0${month}-${day} ~ 0${month}-${day+dayNum-1})/`
  fs.mkdir(preFolderlocation + FDN, error => console.error(error))
  parentFolder = FDN
  console.log(`(상위폴더) 10일보다 큼`)
} else if(day < 10 && day+dayNum-1 < 10){
  let FDN = `${weeks} week (0${month}-0${day} ~ 0${month}-0${day+dayNum-1})/`
  fs.mkdir(preFolderlocation + FDN, error => console.error(error))
  parentFolder = FDN
  console.log(`(상위폴더) 10일보다 작음`)
} else if(day < 10 && day+dayNum-1 > 9){
  let FDN = `${weeks} week (0${month}-0${day} ~ 0${month}-${day+dayNum-1})/`
  fs.mkdir(preFolderlocation + FDN, error => console.error(error))
  parentFolder = FDN
  console.log(`(상위폴더) 10일보다 작고 10일보다 큼`)
}


//childfolder 생성
for(let i = 0; i<dayNum ; i++){
  if(day+i<10){
    try{
      fs.mkdirSync(path.join(preFolderlocation + parentFolder) + `0${month}-0${day+i}/`)
    } catch (error) {
      console.error(error)
    }
  } else {
    try{
      fs.mkdirSync(path.join(preFolderlocation + parentFolder) + `0${month}-${day+i}/`)
    } catch (error) {
      console.error(error)
    }
  }
}





//비동기 폴더 생성기
// fs.mkdir('d:/KDT-2/8 week (03-20 ~ 03-24)/' + folderName, (error) => console.error());

//동기 폴더 생성기
// try {
//   fs.mkdirSync(folderName);
// } catch (error) {
//   console.log(error)
// }

