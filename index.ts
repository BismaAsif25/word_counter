#! /usr/bin/env node

import inquirer from "inquirer";


const answers:{
    Sentence :string
} = await inquirer.prompt(
    [
        {
            name:"Sentence",
            type:"input",
            message:"Enter Your Sentencento count the words"
        }
    ]
)

const words = answers.Sentence.trim().split(" ")

console.log(words);

console.log(`Your Sentences word count is ${words.length}`);