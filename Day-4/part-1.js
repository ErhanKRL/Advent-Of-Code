import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const currentModulePath = fileURLToPath(import.meta.url);
const absolutePath = resolve(dirname(currentModulePath), './puzzleInfo.txt');
const fileContent = readFileSync(absolutePath, 'utf-8');
let input = fileContent.split('\n');

//input = input.split(' ')

const inputArr = input.map(str => {
    let innerArr = []
    str = str.split('\r')
    //arr.length = arr.length-1;
    //arr.pop();
    //arr = arr.slice(10).filter(item => item !== ' ').filter(item => item !== '|')
    const inner1 = str[0].split(' ').splice(2).filter(item => item !== '')
    const inner2 = inner1.splice(0, inner1.indexOf('|'))
    const inner3 = inner1.splice(inner1.indexOf('|') + 1)
    innerArr.push(inner2)
    innerArr.push(inner3)
    return innerArr
})

const pileNumbersArray = [];
function findWinningNumber(array){
    let winningNumbers = [];
    array[1].forEach(element => {
        if(array[0].indexOf(element) !== -1){
            winningNumbers.push(element)
        }
    })
    
   const numberOfWinners = winningNumbers.length;
   let pile;
   numberOfWinners !== 0 ? pile = 2 ** (numberOfWinners - 1) : pile = 0;
   return pile     
}

inputArr.forEach(item => {
    const pileNumber = findWinningNumber(item)
    pileNumbersArray.push(pileNumber)
}) 

const point = pileNumbersArray.reduce((acc, curr) => acc + curr)

console.log(point)