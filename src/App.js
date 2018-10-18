import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class VerbBox extends React.Component {
  render () {
    return (
      <div
        className="verb-bubble gradient"
        draggable
        onDragStart={(e) => this.props.onDragStart(e,this.props.id)}
        ><span className="verb-text">{this.props.verb}</span></div>
    )
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
class Sentence extends React.Component {
  state = {
    answered:false
  }
  answer = () => {this.setState({answered:true})}
  checkAnswer = (e) =>{
    if(this.props.onDrop(e,"complete",this.props.id)) {
      this.answer();
    }
  }
  durationClass = () => {
    return "dur" + (8- this.props.id);
  }
  answeredClass = () => {
    if (!this.state.answered){
      return "sentence-bubble slideDown  gradient-metal " + this.durationClass();
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
        className={this.answeredClass()}
        onDrop={(e)=>this.checkAnswer(e)}
        ><span className="sentence-text">{this.answeredText()}</span></div>
    )
  }
}

class Game extends React.Component {

state = {
  counter:0,
  data: [{
    id:0,
    sentence:"We’re ______________ our attic and giving away all the things we don’t need so come over and see if there’s anything you want.",
    answer:"We’re clearing out our attic and giving away all the things we don’t need so come over and see if there’s anything you want.",
    verb:"clear out",
    category:"unused"
  },
  {
    id:1,
    sentence:"He _________________ anyone who doesn’t have a University education.",
    answer:"He looks down on anyone who doesn’t have a University education.",
    verb:"look down on",
    category:"unused"
  },
  {
    id:2,
    sentence:"She’s not happy that I went out without her, but she’ll _____________ it.",
    answer:"She’s not happy that I went out without her, but she’ll get over it.",
    verb:"get over",
    category:"unused"
  },
  {
    id:3,
    sentence:"When I went home at Christmas I _____________ with my old friends.",
    answer:"When I went home at Christmas I caught up with my old friends.",
    verb:"catch up with",
    category:"unused"
  },
  {
    id:4,
    sentence:"She _____________ lots of dresses before she found one that she liked.",
    answer:"She tried on lots of dresses before she found one that she liked.",
    verb:"try on",
    category:"unused"
  },
  {
    id:5,
    sentence:"It isn't easy to _____________ children nowadays.",
    answer:"It isn't easy to bring up children nowadays.",
    verb:"bring up",
    category:"unused"
  },
  {
    id:6,
    sentence:"My brother borrowed my car. I have a feeling he's not about to _____________ it _____________.",
    answer:"My brother borrowed my car. I have a feeling he's not about to give it back.",
    verb:"give back",
    category:"unused"
  },
  {
    id:7,
    sentence:"The students ________________ their papers and left the room",
    answer:"The students handed in their papers and left the room",
    verb:"hand in",
    category:"unused"
  },
  {
    id:8,
    sentence:"_____________ this application form and mail it in.",
    answer:"Fill out this application form and mail it in.",
    verb:"fill out",
    category:"unused"
  }
]
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

    this.state.data.forEach ((d) => {
      options[d.category].push(<VerbBox
        id={d.id}
        verb={d.verb}
        onDragStart={this.onDragStart}
      />)

      options.sentences.push(<Sentence
        id={d.id}
        body={d.sentence}
        answeredText={d.answer}
        onDrop={this.onDrop}
      />)

    });

    return (
      <div className="container-drag">
        <div className="header-div flex"><h2 className="header">Phrasal Verb Game</h2><Logo /></div>
        <div className="container">
          <div className="unused gradient-black"
            onDragOver={(e)=>this.onDragOver(e)}
            onDrop={(e)=>{this.onDrop(e, "unused")}}>
            <div className="task-header"><h3>Unused</h3></div>
            <div className="flex">
              {options.unused}
            </div>
          </div>
          <div className="droppable" onDragOver={(e)=>this.onDragOver(e)}
            onDrop={(e)=>this.onDrop(e,"complete")}>
            <div className="task-header"><h3>Sentences</h3></div>
            {options.sentences}
          </div>
        </div>
      </div>
    );
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
