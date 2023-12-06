import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const currentModulePath = fileURLToPath(import.meta.url);
const absolutePath = resolve(dirname(currentModulePath), './puzzleInfo.txt');
const fileContent = readFileSync(absolutePath, 'utf-8');
const input = fileContent.split('\n');


const red= 12;
const green = 13;
const blue = 14; 
let sumOfArrayIds = 0;

let lines = input.map(line => line.split(';'));
let stringArray = lines.map(line =>line.join(','));
let game1Array = stringArray.map(line => line.split(' '));
let game2Array = game1Array.map(line => line.splice(2 ));
game2Array.forEach((item, index) => {
   let isPossible;
    for(let i=0; i<item.length; i++){
        if(item[i] === 'green,' || item[i] === 'green\r'){
            let greenNumber = parseInt(item[i-1], 10);
            if(greenNumber > green){
                isPossible = false;
                break;
            }else {
                isPossible = true;
            }
        }else if(item[i] === 'blue,' || item[i] === 'blue\r'){
            let blueNumber = parseInt(item[i-1], 10);
            if(blueNumber > blue){
                isPossible = false;
                break;
            }else{
                isPossible = true;
            }
        }else if(item[i] === 'red,' || item[i] === 'red\r'){
            let redNumber = parseInt(item[i-1], 10);
            if(redNumber > red){
                isPossible = false;
                break;
            }else{
                isPossible = true;
            }
        }else {
            isPossible;
        }
    }
    console.log(isPossible)
    
    if(isPossible === true){
        sumOfArrayIds += (index + 1)
        console.log(index + 1)
    }
   
})

console.log(sumOfArrayIds)

//game2Array.forEach(line=> {console.log((line))})