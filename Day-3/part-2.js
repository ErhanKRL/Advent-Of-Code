import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const currentModulePath = fileURLToPath(import.meta.url);
const absolutePath = resolve(dirname(currentModulePath), './puzzleInfo.txt');
const fileContent = readFileSync(absolutePath, 'utf-8');
const input = fileContent.split('\n');

const inputArr = input.map(item => {
    const arr = (Array.from(item));
    arr.length = arr.length-1;
    return arr
})

const numAsString =['1', '2', '3', '4', '5', '6', '7', '8','9', '0']
const signedNumbers = [];

const newArr = inputArr.map(item => {
    const newItem = item.map(arrItem => {
        if (numAsString.indexOf(arrItem) !== -1) {
            return arrItem = +arrItem
        }else{
            return arrItem
        }
    })
    return newItem;
})
newArr.forEach((item, index) => {
    item.forEach((arrItem, arrIndex) => {
        let gearCandidate = [];
        if (arrItem === '*') {
            if(typeof(newArr[index-1][arrIndex-1]) === 'number' && (newArr[index-1][arrIndex]) === '.' ){
                //console.log(newArr[index-1][arrIndex-1], [index-1,arrIndex-1])
                gearCandidate.push([index-1, arrIndex-1])
                if(typeof(newArr[index-1][arrIndex+1]) === 'number'){
                    //console.log(newArr[index-1][arrIndex], [index-1,arrIndex])
                    gearCandidate.push([index-1, arrIndex+1])
                }
            }
            if(typeof(newArr[index+1][arrIndex-1]) === 'number' && (newArr[index+1][arrIndex]) === '.'){
                //console.log(newArr[index+1][arrIndex-1], [index+1,arrIndex-1])
                gearCandidate.push([index+1, arrIndex-1])
                if(typeof(newArr[index+1][arrIndex+1]) === 'number'){
                    //console.log(newArr[index-1][arrIndex], [index-1,arrIndex])
                    gearCandidate.push([index+1, arrIndex+1])
                }
            }
            if(typeof(item[arrIndex -1]) === 'number') {
                //console.log(item[arrIndex - 1], [index, arrIndex-1] )
                gearCandidate.push([index, arrIndex-1])
            }
            if(typeof(item[arrIndex +1]) === 'number') {
                //console.log(item[arrIndex + 1], [index, arrIndex+1] )
                gearCandidate.push([index, arrIndex+1])
            }
            if(typeof(newArr[index-1][arrIndex]) === 'number' ){
                //console.log(newArr[index-1][arrIndex], [index-1,arrIndex])
                gearCandidate.push([index-1, arrIndex])
            }
            if(typeof(newArr[index+1][arrIndex]) === 'number'){
                //console.log(newArr[index+1][arrIndex], [index+1,arrIndex])
                gearCandidate.push([index+1, arrIndex])
            }
            if(typeof(newArr[index-1][arrIndex +1]) === 'number' && newArr[index-1][arrIndex] === '.' && newArr[index-1][arrIndex-1] === '.'){
                //console.log(newArr[index-1][arrIndex+1], [index-1,arrIndex+1])
                gearCandidate.push([index-1, arrIndex+1])
            }
            if(typeof(newArr[index+1][arrIndex +1]) === 'number' && newArr[index+1][arrIndex] === '.' && newArr[index+1][arrIndex-1] === '.'){
                //console.log(newArr[index+1][arrIndex+1], [index+1,arrIndex+1])
                gearCandidate.push([index+1, arrIndex+1])
            }else{
                console.log('hata var!!!!!!!!')
            }
        }
        if(gearCandidate.length === 2){
            signedNumbers.push(gearCandidate)
        }
    })
})
const gearRatiosArr = []
function findGearRatio(myArray){
    let gearRatioArray =[];
myArray.forEach(number => {
    newArr.forEach((lineItem, LineIndex) => {
        lineItem.forEach((item, itemIndex) => {
            if(LineIndex === number[0] && itemIndex === number[1]){
                let arrChar = []
                let beforeIndex = itemIndex
                let afterIndex = itemIndex + 1
                //console.log([LineIndex, itemIndex])
                while(typeof(lineItem[beforeIndex]) === 'number'){
                    arrChar.push(lineItem[beforeIndex])
                    beforeIndex -= 1
                }
                arrChar.reverse();
                while(typeof(lineItem[afterIndex]) === 'number'){
                    arrChar.push(lineItem[afterIndex])
                    afterIndex += 1
                }
                arrChar = +arrChar.join('');
                gearRatioArray.push(arrChar);

            }
        })
    })
})
const gearRatio = gearRatioArray.reduce((acc, curr) => acc * curr);
return gearRatio;
}
signedNumbers.forEach((signedNumber) =>{
    const gearRatio = findGearRatio(signedNumber);
    gearRatiosArr.push(gearRatio);
})
//console.log(enginePartsArr)
//console.log(enginePartsArr)


const sum = gearRatiosArr.reduce((acc, item)=>acc + item)
console.log(sum)
console.log('eleman',newArr[2][2])


// inputArr.forEach(item => {
//     console.log(item);
// })