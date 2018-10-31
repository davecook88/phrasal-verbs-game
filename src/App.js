import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const questionData = [
    [
        {
            "id":0,
            "sentence":"We’re ______________ our attic and giving away all the things we don’t need so come over and see if there’s anything you want.",
            "answer":"We’re clearing out our attic and giving away all the things we don’t need so come over and see if there’s anything you want.",
            "verb":"clear out",
            "category":"unused"
        },
        {
            "id":1,
            "sentence":"He _________________ anyone who doesn’t have a University education.",
            "answer":"He looks down on anyone who doesn’t have a University education.",
            "verb":"look down on",
            "category":"unused"
        },
        {
            "id":2,
            "sentence":"She’s not happy that I went out without her, but she’ll _____________ it.",
            "answer":"She’s not happy that I went out without her, but she’ll get over it.",
            "verb":"get over",
            "category":"unused"
        },
        {
            "id":3,
            "sentence":"When I went home at Christmas I _____________ with my old friends.",
            "answer":"When I went home at Christmas I caught up with my old friends.",
            "verb":"catch up with",
            "category":"unused"
        },
        {
            "id":4,
            "sentence":"She _____________ lots of dresses before she found one that she liked.",
            "answer":"She tried on lots of dresses before she found one that she liked.",
            "verb":"try on",
            "category":"unused"
        },
        {
            "id":5,
            "sentence":"It isn't easy to _____________ children nowadays.",
            "answer":"It isn't easy to bring up children nowadays.",
            "verb":"bring up",
            "category":"unused"
        },
        {
            "id":6,
            "sentence":"My brother borrowed my car. I have a feeling he's not about to _____________ it _____________.",
            "answer":"My brother borrowed my car. I have a feeling he's not about to give it back.",
            "verb":"give back",
            "category":"unused"
        },
        {
            "id":7,
            "sentence":"The students ________________ their papers and left the room",
            "answer":"The students handed in their papers and left the room",
            "verb":"hand in",
            "category":"unused"
        },
        {
            "id":8,
            "sentence":"_____________ this application form and mail it in.",
            "answer":"Fill out this application form and mail it in.",
            "verb":"fill out",
            "category":"unused"
        }
    ],

        [
            {
                "id": 9,
                "sentence": "Your radio is driving me crazy! Please turn it down.",
                "verb": "turn down",
                "answer": "Your radio is driving me crazy! Please turn it down.",
                "category": "unused"
            },
            {
                "id": 10,
                "sentence": "You've misspelled this word again. You'd better look it up.",
                "verb": "look up",
                "answer": "You've misspelled this word again. You'd better look it up.",
                "category": "unused"
            },
            {
                "id": 11,
                "sentence": "You left out the part about the police chase down Asylum Avenue.",
                "verb": "leave out",
                "answer": "You left out the part about the police chase down Asylum Avenue.",
                "category": "unused"
            },
            {
                "id": 12,
                "sentence": "We turned off the lights before anyone could see us.",
                "verb": "turn off",
                "answer": "We turned off the lights before anyone could see us.",
                "category": "unused"
            },
            {
                "id": 13,
                "sentence": "We ___________ __________ money for our retirement. She put away the cereal boxes.",
                "verb": "put away",
                "answer": "We put away money for our retirement. She put away the cereal boxes.",
                "category": "unused"
            },
            {
                "id": 14,
                "sentence": "We have serious problems here. Let's talk them over like adults.",
                "verb": "talk over",
                "answer": "We have serious problems here. Let's talk them over like adults.",
                "category": "unused"
            },
            {
                "id": 15,
                "sentence": "We asked the boss to ___________ __________ the meeting until tomorrow. (Please put it off for another day.)",
                "verb": "put off",
                "answer": "We asked the boss to put off the meeting until tomorrow. (Please put it off for another day.)",
                "category": "unused"
            },
            {
                "id": 16,
                "sentence": "Turn on the CD player so we can dance.",
                "verb": "turn on",
                "answer": "Turn on the CD player so we can dance.",
                "category": "unused"
            }
        ],
        [
            {
                "id": 17,
                "sentence": "Three masked gunmen held up the Security Bank this afternoon.",
                "verb": "hold up",
                "answer": "Three masked gunmen held up the Security Bank this afternoon.",
                "category": "unused"
            },
            {
                "id": 18,
                "sentence": "They called off this afternoon's meeting",
                "verb": "call off",
                "answer": "They called off this afternoon's meeting",
                "category": "unused"
            },
            {
                "id": 19,
                "sentence": "These are your instructions. Write them down before you forget.",
                "verb": "take down",
                "answer": "These are your instructions. Write them down before you forget.",
                "category": "unused"
            },
            {
                "id": 20,
                "sentence": "There were three men in the line-up. She picked out the guy she thought had stolen her purse.",
                "verb": "pick out",
                "answer": "There were three men in the line-up. She picked out the guy she thought had stolen her purse.",
                "category": "unused"
            },
            {
                "id": 21,
                "sentence": "The terrorists tried to ___________ __________ the railroad station.",
                "verb": "blow up",
                "answer": "The terrorists tried to blow up the railroad station.",
                "category": "unused"
            },
            {
                "id": 22,
                "sentence": "The students handed in their papers and left the room.",
                "verb": "hand in",
                "answer": "The students handed in their papers and left the room.",
                "category": "unused"
            },
            {
                "id": 23,
                "sentence": "The lawyers looked over the papers carefully before questioning the witness. (They looked them overcarefully.)",
                "verb": "look over",
                "answer": "The lawyers looked over the papers carefully before questioning the witness. (They looked them overcarefully.)",
                "category": "unused"
            },
            {
                "id": 24,
                "sentence": "The gang members used up all the money and went out to rob some more banks.",
                "verb": "use up",
                "answer": "The gang members used up all the money and went out to rob some more banks.",
                "category": "unused"
            }
        ],
        [
            {
                "id": 25,
                "sentence": "The firefighters ___________ __________ the house fire before it could spread. (They put it out quickly.)",
                "verb": "put out",
                "answer": "The firefighters put out the house fire before it could spread. (They put it out quickly.)",
                "category": "unused"
            },
            {
                "id": 26,
                "sentence": "The filling station was giving away free gas.",
                "verb": "give away",
                "answer": "The filling station was giving away free gas.",
                "category": "unused"
            },
            {
                "id": 27,
                "sentence": "The crane picked up the entire house. (Watch them pick it up.)",
                "verb": "pick up",
                "answer": "The crane picked up the entire house. (Watch them pick it up.)",
                "category": "unused"
            },
            {
                "id": 28,
                "sentence": "That's a lot of money! Don't just throw it away.",
                "verb": "throw away",
                "answer": "That's a lot of money! Don't just throw it away.",
                "category": "unused"
            },
            {
                "id": 29,
                "sentence": "She tried on fifteen dresses before she found one she liked.",
                "verb": "try on",
                "answer": "She tried on fifteen dresses before she found one she liked.",
                "category": "unused"
            },
            {
                "id": 30,
                "sentence": "She knew she was in trouble, so she made up a story about going to the movies with her friends.",
                "verb": "make up",
                "answer": "She knew she was in trouble, so she made up a story about going to the movies with her friends.",
                "category": "unused"
            },
            {
                "id": 31,
                "sentence": "She hung up the phone before she hung up her clothes.",
                "verb": "hang up",
                "answer": "She hung up the phone before she hung up her clothes.",
                "category": "unused"
            },
            {
                "id": 32,
                "sentence": "She filled up the grocery cart with free food.",
                "verb": "fill up",
                "answer": "She filled up the grocery cart with free food.",
                "category": "unused"
            }
        ],
        [
            {
                "id": 33,
                "sentence": "My wife ___________ __________ the living room exactly the way she wanted it. She set it up.",
                "verb": "set up",
                "answer": "My wife set up the living room exactly the way she wanted it. She set it up.",
                "category": "unused"
            },
            {
                "id": 34,
                "sentence": "My sister found out that her husband had been planning a surprise party for her.",
                "verb": "find out",
                "answer": "My sister found out that her husband had been planning a surprise party for her.",
                "category": "unused"
            },
            {
                "id": 35,
                "sentence": "My mother brought up that little matter of my prison record again.",
                "verb": "bring up",
                "answer": "My mother brought up that little matter of my prison record again.",
                "category": "unused"
            },
            {
                "id": 36,
                "sentence": "My brother borrowed my car. I have a feeling he's not about to give it back.",
                "verb": "give back",
                "answer": "My brother borrowed my car. I have a feeling he's not about to give it back.",
                "category": "unused"
            },
            {
                "id": 37,
                "sentence": "It was so hot that I had to ___________ __________ my shirt.",
                "verb": "take off",
                "answer": "It was so hot that I had to take off my shirt.",
                "category": "unused"
            },
            {
                "id": 38,
                "sentence": "It was a disgusting movie. It really turned me off.",
                "verb": "turn off (2)",
                "answer": "It was a disgusting movie. It really turned me off.",
                "category": "unused"
            },
            {
                "id": 39,
                "sentence": "It isn't easy to ___________ __________ children nowadays.",
                "verb": "bring up",
                "answer": "It isn't easy to bring up children nowadays.",
                "category": "unused"
            },
            {
                "id": 40,
                "sentence": "I tried out four cars before I could find one that pleased me.",
                "verb": "try out",
                "answer": "I tried out four cars before I could find one that pleased me.",
                "category": "unused"
            }
        ],
        [
            {
                "id": 41,
                "sentence": "I ___________ __________ the homework, but couldn't make any sense of it.",
                "verb": "read over",
                "answer": "I read over the homework, but couldn't make any sense of it.",
                "category": "unused"
            },
            {
                "id": 42,
                "sentence": "I ___________ __________ a sweater and a jacket. (I put them on quickly.)",
                "verb": "put on",
                "answer": "I put on a sweater and a jacket. (I put them on quickly.)",
                "category": "unused"
            },
            {
                "id": 43,
                "sentence": "I hate to ___________ __________ the meeting, but I have to go to the bathroom.",
                "verb": "hold up",
                "answer": "I hate to hold up the meeting, but I have to go to the bathroom.",
                "category": "unused"
            },
            {
                "id": 44,
                "sentence": "He was so far away, we really couldn't ___________ __________ what he was saying.",
                "verb": "make out",
                "answer": "He was so far away, we really couldn't make out what he was saying.",
                "category": "unused"
            },
            {
                "id": 45,
                "sentence": "He applied for a promotion twice this year, but he was turned down both times.",
                "verb": "turn down (2)",
                "answer": "He applied for a promotion twice this year, but he was turned down both times.",
                "category": "unused"
            },
            {
                "id": 46,
                "sentence": "Grandpa couldn't hear, so he turned up his hearing aid.",
                "verb": "turn up",
                "answer": "Grandpa couldn't hear, so he turned up his hearing aid.",
                "category": "unused"
            },
            {
                "id": 47,
                "sentence": "Fill out this application form and mail it in.",
                "verb": "fill out",
                "answer": "Fill out this application form and mail it in.",
                "category": "unused"
            },
            {
                "id": 48,
                "sentence": "Do this homework over.",
                "verb": "do over",
                "answer": "Do this homework over.",
                "category": "unused"
            }
        ]
    ]

const getSelected = (obj) => {
    for (let key in Object.keys(obj)){
        if(obj[key] === true){
            return key; //HERE IS THE PROBLEM
        }
    }
}

const checkAnswer = (oClicked) => {
    const options = oClicked.unused;
    const answers = oClicked.sentences;
    console.log("------------Check answer------------------");
    console.log("------------Options------------------");
    console.log(options);
    console.log("------------answers------------------");
    console.log(answers);
    if (Object.keys(options).length === 0 || Object.keys(answers).length === 0) return "continue";
    const selectedOption = getSelected(options);
    const selectedAnswer = getSelected(answers);
    const response = false;
    if (selectedAnswer === null || selectedOption === null) return "continue";
    if (selectedAnswer === selectedOption) return true;
    return response;

}

class Box extends React.Component {
    state = {
        answered:false,
    }

    selectedClass = () => {
        if (this.props.selected === true){
            return " selected";
        } else {
            return ""
        }
    }

}

class VerbBox extends Box {
    classNames = () => {
        return "gradient verb-bubble" + this.selectedClass();
    }
    render () {
        return (
            <div
                className={this.classNames()}
                draggable
                onDragStart={(e) => this.props.onDragStart(e,this.props.id)}
                onClick={(e) => this.props.onClick(e,this.props.id,"unused")}
            ><span className="verb-text">{this.props.verb}</span></div>
        )
    }
}

class Sentence extends Box {

    answer = () => {this.setState({answered:true})}

    componentWillReceiveProps(nextProps){
        this.setState({answered:nextProps.answered })
    }

    checkAnswer = (e) =>{
        if(this.props.onDrop(e,"complete",this.props.id)) {
            this.answer();
        }
    }
    durationClass = () => {
        return " dur" + (8 - this.props.id);
    }
    classNames = () => {
        if (!this.state.answered){
            return "sentence-bubble slideDown  gradient-metal " + this.selectedClass() + this.durationClass() ;
        } else {
            return "sentence-bubble  answered"
        }
    }
    answeredText = () => {
        if (!this.state.answered){
            return this.props.body;
        } else {
            return this.props.answeredText;
        }
    }

    render () {
        return (
            <div
                className={this.classNames()}
                onDrop={(e)=>this.checkAnswer(e)}
                onClick={(e) => this.props.onClick(e,this.props.id,"sentences")}
            ><span className="sentence-text">{this.answeredText()}</span></div>
        )
    }
}

class Game extends React.Component {
    constructor(){
        super();
        this.state = {
            data: questionData,
            clickSelected: {
                unused: {},
                sentences: {},
            },
            counter:0,
            level:1,
        }
    }

    clearSelected = (type) => {
        let oSelected = this.state.clickSelected[type];
        for(let k in this.state.data[this.state.level]) {
            let id = this.state.data[this.state.level][k].id;
            oSelected[id] = false;
        }
        this.setState({...this.state.clickSelected[type], oSelected});
        return oSelected
    }

    onClick = (ev, id, type) => {
        console.log(this.state.clickSelected[type]);
        console.log("---------Clicked---------------");
        console.log(`id:${id}, type${type}`);
        let oSelected = this.clearSelected(type);
        oSelected[id] = true;
        console.log(`oSelected:`);
        console.log(oSelected);
        console.log(this.state.clickSelected[type]);
        this.setState({...this.state.clickSelected[type], oSelected});
        let matched = checkAnswer(this.state.clickSelected);
        if (matched === "continue") return;
         if (matched){
             let options = this.state.data[this.state.level].filter((d) => {
                 if (d.id==id){
                     d.category = "complete";
                 }
                 return d;
             });
             this.setState({...this.state, options });
             this.clearSelected(type);
         } else {
         }
    }



    onDragStart = (ev, id) => {
        console.log("dragstart",id);
        ev.dataTransfer.setData("id",id);
    }
    onDragOver = (ev) => {
        ev.preventDefault();
    }
    onDrop = (ev,cat,answerElementId) => {
        let id = ev.dataTransfer.getData("id");
        if (id == answerElementId){
            let options = this.state.data.filter((d) => {
                if (d.id==id){
                    d.category = cat;
                }
                return d;
            });
            this.setState({...this.state, options });
            return true;
        }

    }

    render () {
        let options = {
            unused:[],
            complete:[],
            sentences:[],
        }
        console.log("Render function - clickSelected:");
        console.log(this.state.clickSelected);
        console.log(this.state.clickSelected);
        this.state.data[this.state.level].forEach ((d) => {
            options[d.category].push(<VerbBox
                answered={this.state.clickSelected.unused[d.id]}
                id={d.id}
                verb={d.verb}
                onClick={this.onClick}
                onDragStart={this.onDragStart}
                selected={this.state.clickSelected.unused[d.id]}
            />)

            options.sentences.push(<Sentence
                id={d.id}
                body={d.sentence}
                answered={d.category === "complete"}
                answeredText={d.answer}
                onClick={this.onClick}
                onDrop={this.onDrop}
                selected={this.state.clickSelected.sentences[d.id]}
            />)

        });

        return (
            <div className="container-drag">
                <div className="header-div flex"><h2 className="header">Phrasal Verb Game</h2><Logo /></div>
                <div className="container">
                    <div className="unused gradient-black"
                         onDragOver={(e)=>this.onDragOver(e)}
                         onDrop={(e)=>{this.onDrop(e, "unused")}}>
                        <div className="flex">
                            {options.unused}
                        </div>
                    </div>
                    <div className="droppable" onDragOver={(e)=>this.onDragOver(e)}
                         onDrop={(e)=>this.onDrop(e,"complete")}>
                        {options.sentences}
                    </div>
                </div>
            </div>
        );
    }
}
class Logo extends React.Component {
    render () {
        return (
            <div className="margin-auto"><img
                alt="United English logo"
                src="https://static1.squarespace.com/static/500b7040e4b0e4a250259640/t/5b7d93776d2a73f5469015b6/1534956409128/UE+Logo+with+MR+Trans.png"
                className="logo"></img></div>
        )
    }
}
class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Game />
            </div>

        );
    }
}

export default App;
