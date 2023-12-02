import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const currentModulePath = fileURLToPath(import.meta.url);
const absolutePath = resolve(dirname(currentModulePath), './puzzleInfo.txt');
const fileContent = readFileSync(absolutePath, 'utf-8');
const input = fileContent.split('\n');

const numbersArray = [];





input.map(item => {
    let matches = []
    for (let i in item){
        if(item[i].match(/\d+/g)){
            matches.push(item[i]);
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

 console.log(sumOfAll)
