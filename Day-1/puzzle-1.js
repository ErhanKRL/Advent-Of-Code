import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const currentModulePath = fileURLToPath(import.meta.url);
const absolutePath = resolve(dirname(currentModulePath), './puzzleInfo.txt');
const fileContent = readFileSync(absolutePath, 'utf-8');
//const input = fileContent.split('\n');

const input = ['two1nine',
    'eightwothree',
    'abcone2threexyz',
    'xtwone3four',
    '4nineeightseven2',
    'zoneight234',
    '7pqrstsixteen']

const numbersArray = [];


function convertItem(string) {
    
    const replacementObjects = {one:'1', two:'2', three:'3', four:'4', five:'5', six:'6', seven:'7', eight:'8', nine:'9'}

    const arrayOfKeys = Object.keys(replacementObjects)
    const arrayOfValues = Object.values(replacementObjects)
    let index = 0;
    for(let i in string) {
        if(arrayOfValues.includes(string[i])){
            index += 1;
        }
        else if (arrayOfKeys.includes(string.substring(index, i))){
            let subString = string.substring(index, i);
            string = string.replace(subString, replacementObjects[subString]);
            index = 0
            convertItem(string)
        } 
    }

    // arrayOfStringNumbers.forEach(number => {
    //    string = string.replace(number, replacementObjects[number])
    // })
    return string
}




input.map(item => {
    const convertedItem = convertItem(item)
    let matches = []
    for (let i in convertedItem){
        if(convertedItem[i].match(/\d+/g)){
            matches.push(convertedItem[i]);
        }
    }
    let newArr = []
    if(matches.length >= 2) {
         newArr = [matches[0], matches[matches.length -1]]
    }
    if(matches.length === 1) {
         newArr = [matches[0], matches[0]]
    }
    
    let newMatches = newArr.join('')
    
    numbersArray.push(parseInt(newMatches));
 })

 const sumOfAll = numbersArray.reduce((acc, curr) => acc + curr)
 console.log(numbersArray)
 console.log(sumOfAll)
