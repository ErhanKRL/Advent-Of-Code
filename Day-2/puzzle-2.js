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
let allPowers = [];

let biggestNum = {
    green: 0,
    blue: 0,
    red: 0
}

let lines = input.map(line => line.split(';'));
let stringArray = lines.map(line =>line.join(','));
let game1Array = stringArray.map(line => line.split(' '));
let game2Array = game1Array.map(line => line.splice(2 ));
game2Array.forEach((item) => {
   
    for(let i=0; i<item.length; i++){
        if(item[i] === 'green,' || item[i] === 'green\r'){
            let greenNumber = parseInt(item[i-1], 10);
            if(greenNumber > biggestNum.green){
                biggestNum.green = greenNumber;
            }
        }
        if(item[i] === 'blue,' || item[i] === 'blue\r'){
            let blueNumber = parseInt(item[i-1], 10);
            if(blueNumber > biggestNum.blue){
                biggestNum.blue = blueNumber;
            }
        }
        if(item[i] === 'red,' || item[i] === 'red\r'){
            let redNumber = parseInt(item[i-1], 10);
            if(redNumber > biggestNum.red){
                biggestNum.red = redNumber;
            }
        }
    
    } 
    console.log(biggestNum)
    let power = biggestNum.red * biggestNum.blue * biggestNum.green
    allPowers.push(power);
    biggestNum = {
        green: 0,
        red: 0,
        blue: 0,
    }
})

const result =allPowers.reduce((sum, power) => sum + power)
console.log(result)



//game2Array.forEach(line=> {console.log((line))})