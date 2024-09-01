import fs from 'fs';

const rawData = fs.readFileSync('questions.json', 'utf8');
const questions = JSON.parse(rawData);

export class QuestionModel {

    getRandomQuestion() {
        const keys = Object.keys(questions);
        const randomIndex = Math.floor(Math.random() * keys.length);
        const selectedQuestion = questions[keys[randomIndex]];

        return selectedQuestion;
    }
}