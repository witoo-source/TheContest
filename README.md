# TheContest

![contestlogo](https://github.com/user-attachments/assets/ed6f09fc-95c9-42b2-8e95-991ecda0db8f)


## What's "The Contest"

The Contest is a OBS's web source that provides a Graphical 
<br>
User Interface Contest-Like, Interact with your audience 
<br>
and let them show up their knowledges in your streams 🙈

## How to install:

First, made sure you have installed a JS Runtime like Node.js or Bun.js 

[Node.js install](https://nodejs.org/en "Node.js Official Website")

[Bun.js install](https://bun.sh)

### then:

#### Open your terminal and:

```bash
# Clone this git repository by

git clone https://github.com/witoo-source/TheContest
```
### Install dependencies

```bash
cd TheContest
```
```bash
# (Node.js)
npm i .
```

#### or

```bash
# (Bun.js)
bun i .
```

### Now run
```bash
# (Node.js)
node index.js
```

#### or

```bash
# (Bun.js)
bun index.js
```

-----

## Note: 

You have to use `node index.js` / `bun index.js` command every time you want to use 'The Contest'

-----

## How to use

#### 1- [Click here to open SEND Page](http://localhost:3000/send)
#### 2- Open OBS and add Browser source
#### 3- Then in the URL Parameter put `http://localhost:3000/get`
#### 4- Now you can click Get Question button in [Send Page](http://localhost:3000/send) and see how the question is showed in the OBS's preview

-----

## More notes:

- There are 20 questions, you cand add more questions by editing the `questions.json` file (you can use ChatGPT for this thing)
- Questions are in Spanish, if your language is not Spanish and you want to put the questions in your language, you could follow the first note
- In next version, i will add a user interface to changue language questions and an easy instalation which will not require a JS Runtime installed  
