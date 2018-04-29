# Repository has been updated - 2018/04/29

This repostory is contain every resources file that related to the session that happend University of colombo school of computing - 2018/04/25


# Team Building App
 workshop repo

1. 'with-pure-js' folder contain of small application that created using Vanilla Javascript.
2. 'without-redux' this folder contain the team building app without using any state handling libs.
3. 'with-redux' same application in above (2.) created using Redux  

# Ref

1. [NodeJS](https://nodejs.org/en/)
2. [Eslint](https://eslint.org/)
3. [Babel](https://babeljs.io/)
4. [Promises](https://ponyfoo.com/articles/understanding-javascript-async-await)
5. [Npm stats](https://www.npmjs.com/npm/the-state-of-javascript-frameworks-2017-part-3-back-end-frameworks)
6. [Pwa React](https://preactjs.com/guide/progressive-web-apps)
7. [Javascript frameworks](http://www.dotnetcurry.com/javascript/1359/javascript-frameworks-aspnet-mvc-developer)
8. [Reconciliation](https://reactjs.org/docs/reconciliation.html)
9. [Flex](https://facebook.github.io/flux/docs/in-depth-overview.html)




## Helper Tools Links 

1. VsCode [Download](https://code.visualstudio.com/download)
2. Nodejs [Download Node](https://nodejs.org/en/download/)
3. Git [Download git](https://git-scm.com/downloads)

## Simple Team Build application using Vanilla JavaScript

1. create `index.html` , style.css and script.js file
2. then add style.css and script.js file into the html file.

```
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" type="text/css" href="./style.css">
  <title>Team Build</title>
</head>

<body>
  <div class="center-screen">
    <input type="text" placeholder="Enter the character name">
    <button class="btn" type="button">
      <span>Add A Character</span>
    </button>
    <div class="results">
      <ul></ul>
    </div>
  </div>

  <script src="./script.js"></script>
</body>

</html>
```

3. In the `script.js` get ref for input, button and ul tag by calling DOM and also addEventListener to the button. 


```
var inputEl = document.querySelector('input');
var buttonEl = document.querySelector('button');
var ulEl = document.querySelector('ul');

buttonEl.addEventListener('click', addTeam);
```

4. Then create two function for add and remove team members from the teams array

```
var teams = [];

function addTeam() {
	var userInput = inputEl.value;
  if (userInput.trim() == '') {
  	return;
  }
  var newTeam = { id: Math.random(), value: userInput };
  teams.push(newTeam);
	var teamLi = document.createElement('LI');
  teamLi.textContent = userInput;
  teamLi.addEventListener('click', removeTeam);
  teamLi.dataset.id = newTeam.id;
  ulEl.appendChild(teamLi);
  console.log(teams);
}

function removeTeam(event) {
	var clickedLi = event.target;
  var itemId = clickedLi.dataset.id;
  for (var i = 0; i < teams.length; i++) {
  	if (teams[i].id == itemId) {
    	teams.splice(i, 1);
      break;
    }
  }
  clickedLi.parentNode.removeChild(clickedLi);
    console.log(teams);
}
```

5. go and check style.css file in `with-pure-js`, if you need better style on the app.  

## Setup For React
### Step 1 - React for react cli

1. Install create-react-app globally `npm install -g create-react-app`
2. Create the app `create-react-app my-app-name`
3. go to the app `cd my-app-name`
4. Check if all the package are install otherwise install them by `npm install`
5. Start the application `npm start`
---
 
### Setp 2 - Setup git

Install git if you are not already instaled it 

1. `git init` setup git
2. `git remote add origin <REPO_URL>` add remote
3. `git remote -v` check
4. get `git pull`
5. `git pull origin master`
6. add chnage to git `git add .`
7. commit the added chnages `git commit -m 'init'`
8. push local changers to remote `git push origin master`

---

## Team Builder App Without Redux

1. remove existing `src`.
2. Create src folder on root, then create assets, components, styles, data, web-services and index.js in src file root
3. add this code snipts to the index.js this will render your application to the root div and then run it through terminal by using `npm start`

```
import React from 'react'
import ReactDOM from 'react-dom';

ReactDOM.render(<h1>Hellow</h1>, document.getElementById('root'))
```

4. and then craete `style.css` in style folder, ` App.js` in components folder and crete api.js file isde of web-services folder
5. add this code snipts to `app.js`

```
import React, { Component } from 'react'
import '../styles/index.css';

class App extends Component {
    render(){
        return(
            <h1>Hellow</h1>
        )
    }
}
```

6. add these css to the use style.css

```
body {
    background-color: #1abc9c;
    height: 100%;
}

.App {
    text-align: center;
    padding: 5%;
}

.right-button {
    cursor: pointer;
    float: right;
}

.list-item {
    display: inline-block;
}
```

7. now import `app.js` into the index.js

```
...
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));

```

8. now get the json file form resources folder and put it into the data folder that inside of src

9. lets get data with the delay , fot that import characters.json form data file into api.js and esport them.

```
import _characters from '../data/characters.json';

const TIMEOUT = 100;

const characters = (cb, timeout) => setTimeout(() => cb(_characters), timeout || TIMEOUT);

export default {
    characters
}
```

10. Befor get the characters from api we have to create varibale to store them, lest create state for that in `App.js`

```
 state = {
        characters: [],
    }
```

Now we can store characters data form api using `setState`

11. lets get data into app.js using `componentDidMount` form react life-cycle, inside of `App.js`

```
import api from '../web-services/api';
    ....

    componentDidMount() {
        api.characters(characters => {
            this.setState({ characters: characters })
        })
    }

    .....
```

12. print the `this.state.characters` inside of the render method to see the data.

13. lets fixd our view for put these data into 3 separeate sections. one for Character List other two for Hero List and Stats List

```
            <div className="App">
                <h2>Build Your Team</h2>
                <div>
                    <div>
                        <h2>Character List</h2>
                    </div>
                    <div>
                        <h2>Hero List</h2>
                    </div>
                    <div>
                        <h4>Team Stats</h4>
                    </div>
                </div>
            </div>
```
14. Lest Add bootstrap to your application goto the bootstrap web site and get the CDN link and then go to the public folder and add that link under head tag

`<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
    crossorigin="anonymous">`

15. Lets add put the three section into cols

```
    <div className="App">
        <h2>Build Your Team</h2>
        <div >
            <div className="col-md-4">
                <h2>Character List</h2>
            </div>
            <div className="col-md-4">
                <h2>Hero List</h2>
            </div>
            <div className="col-md-4">
                <h4>Team Stats</h4>
            </div>
        </div>
    </div>
```

16. Now load the Characters in to character list

```
...
<div className="col-md-4">
        <h2>Character List</h2>
        <ul className="list-group">
        {
            this.state.characters.map((character, i) => {
                return (
                 <li key={character.id} class="list-group-item">
                        <div className="list-item">{character.name}</div>
                    </li>
                )
            })
        }
    </ul>
</div>
....
```

17. Let's create function to add character into `hero` array using character id

```
...

state = {
        characters: [],
        heroes: []
    }
...

 addCharactersById(id, i) {
        this.setState(prevState => ({
            characters: this.state.characters.filter(function (character) {
                return character.id !== id
            }),
            heroes: [...prevState.heroes, this.state.characters[i]]
        }))
    }
....

```

18. lets create `onClick` on ui list div to call `addCharactersById`

```
...

<li key={character.id} class="list-group-item">
    <div className="list-item">{character.name}</div>
    <div className="lsit-item right-button" onClick={() => this.addCharactersById(character.id, i)}>    +
    </div>
</li>

...
```

19. add these heros into heros list

```
<div className="col-md-4">
    <h2>Hero List</h2>
    <ul className="list-group">
        {
            this.state.heroes.map((character, i) => {
                return (
                    <li key={character.id} className="list-group-item">
                        <div className="list-item">{character.name}</div>
                        <div className="lsit-item right-button" onClick={() => this.removeHerosById(character.id, i)}>
                            x
                    </div>
                    </li>
                )
            })
        }
    </ul>
</div>
```

20. Like we did with `addCharactersById`, lets remove heros form hero list using `removeHerosById` function

```
removeHerosById(id, i) {
    this.setState(prevState => ({
        heroes: this.state.heroes.filter(function (character) {
            return character.id !== id
        }),
        characters: [...prevState.characters, this.state.heroes[i]]
    }))
}

```

21. lets create 3 function for get stats data into stats list

```
...

strengthCalculate() {
    let strength = 0;
    this.state.heroes.forEach(hero => strength += hero.strength);
    return strength
}

intelligenceCalculate() {
    let intelligence = 0;
    this.state.heroes.forEach(hero => intelligence += hero.intelligence);
    return intelligence
}

speedCalculate() {
    let speed = 0;
    this.state.heroes.forEach(hero => speed += hero.speed);
    return speed
}
...
```

22. Lets bind them with html

```
...

<div className="col-md-4">
    <h4>Team Stats</h4>
    <ul className="list-group">
        <li className="list-group-item">
            <b>Overall Strength:</b> {this.strengthCalculate()}
        </li>
        <li className="list-group-item">
            <b>Overall Intelligence:</b> {this.intelligenceCalculate()}
        </li>
        <li className="list-group-item">
            <b>Overall Speed:</b> {this.speedCalculate()}
        </li>
    </ul>
</div>

...
```

---

## Team Builder App With Redux

### Step 1 - Add redux to package 

1. `npm install --save redux react-redux`
2. Add Redux folders to the 'app/src' `mkdir reducers data actions`
3. And then add `characters.json` into a data folder

### Step 2 - Setup reducer 

1. create `index.js` inside of the reducers folder
2. import data `import _characters from '../data/characters.json';`
2. the create first reducer function for characters
```
function characters(state = _characters, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default characters;
```

### Step 3 - Add Store to the app

1. Go to the root of the render method of Dom
2. Access the rootReducer by importing `import rootReducers from './reducers'`
3. `import { Provider } from 'react-redux';` Importing Provider we can use <Provider />. <Provider /> is the higher-order component provided by React Redux that lets you bind Redux to React (see Usage with React).

4. Then import createStore for create a store `import { createStore } from 'redux';`
5. `const store = createStore(rootReducers);` 
6. Wrap the provider around the App

```
<Provider store={store}>
    <App />
</Provider>
```

7. check the whole state by calling initial state of the store `console.log('store.getState() ', store.getState());`

### Step 4 - Create actions

1. Go to actions and create a `index.js`
2. Create action constant `export const ADD_CHARACTOR = 'ADD_CHARACTOR';`
3. export acction by setting type and data

```
export function addCharacterById(id) {
    const action = {
        type: ADD_CHARACTOR,
        id
    }
    return action;
}
```

### Step 5 - set action with reducers

1. import action to reducer `import { ADD_CHARACTOR } from '../actions'`
2. update reducer 

```
function characters(state = _characters, action) {
    switch (action.type) {
        case ADD_CHARACTOR: 
            let characters = state.filter(item => item.id !== action.id);
            return characters;
        default:
            return state;
    }
}

```

3. To catch every changes in store lets add subscribe to it `store.subscribe(() => console.log('store ', store.getState()))`
4. Lets tell store to Dispatch one action `store.dispatch(addCharacterById(2))` 

### Step 6 - Add second reducer

1. update reducer

```
function heroes(state= [], action){
    switch (action.type) {
        case ADD_CHARACTOR:
            
        default:
            return state;
    }
}
```

2. For create cracter we going to create helper function 

```
function createCharacter(id) {
    let character = _characters.find(c => c.id === id);
    return character;
}
```

3. Then add that to heroes 

```
function heroes(state= [], action){
    switch (action.type) {
        case ADD_CHARACTOR:
            let heroes = [...state, createCharacter(action.id)]
            return heroes;
        default:
            return state;
    }
}
```

4. Now we have to bind these two reducers, For that we can use combineReducers form redux `import { combineReducers } from 'redux';`
5. export the root reducer by binding them

```
const rootReducer = combineReducers({
    characters,
    heroes
});

export default rootReducer;
```
6. If you neeed this in more structural way you can separet reducers by thire uniqueness

### Step 7 - Map state and props in to component

1. Create Separate Component in Components `CharacterList.js`
2. Export it and add that to App.js `import CharacterList from './CharacterList';`

```
import React, { Component } from 'react'

class CharacterList extends Component {

    render() {
        return (
            <div>
                <h2>Character List</h2>
            </div>
        )
    }
}

export default CharacterList;
```

3. Connect with redux first add connect from react-redux `import { connect } from 'react-redux';`

```
...
export default connect()(CharacterList);
```

4. Map State to props

```
...
function mapStateToProps(state) {
    return {
        characters: state.characters
    };
}

export default connect(mapStateToProps, null)(CharacterList);
```

### Step 8 - Map Dispatch to Props

1. For that we have to first bind action by importing `import { bindActionCreators } from 'redux';`
2. And also we have to get the function from actiomn by importing `import { addCharacterById } from '../actions';`
3. Now bind them connect with component

```
function mapDispatchToProps(dispatch){
    return bindActionCreators({addCharacterById}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
```

4. For check it lets call it from them component 

```
...
{
    this.props.characters.map((character, i) => {
        return (
            <li key={character.id} className="list-group-item">
                <div className="list-item">{character.name}</div>
                    <div className="lsit-item right-button" onClick={() => this.props.addCharacterById(character.id, i)}>                            +
                    </div>
            </li>
            )
        })
    }
...
```

4. check the props is comming properly  by adding console.log inside render `console.log('this.props ', this.props)`
5. short cut, remove mapDispatchToProps from connect and directly add addCharacterById as a object

### Step 9 - Lets Add Second Action

1. Add new acction const `export const REMOVE_CHARACTOR = 'REMOVE_CHARACTOR';`
2. Lets add remove characters function

```
export function removeCharacterById(id) {
    const action = {
        type: REMOVE_CHARACTOR,
        id
    }
    return action;
}
```

3. add const to heroes `import { ADD_CHARACTOR, REMOVE_CHARACTOR } from '../actions'`
4. add new remove case type to heroes function

```
...
case REMOVE_CHARACTOR: 
    heroes = state.filter(item => item.id !== action.id)
    return heroes;
...
```

5. new create add characters case again to `characters_reducer.js`

```
case REMOVE_CHARACTOR: 
    characters = [...state, createCharacter(action.id)]
    return characters;
```

6. thn connect with HeroList component like we did before!
