@import url('https://fonts.googleapis.com/css?family=Anonymous+Pro');
.App{
    width: 30em;
    height: 45em;
    max-width: 100vw;
    max-height: 150vw;
    margin:auto;
}
.App-header{
    text-align: center;
    color: #8d8383;
    font-weight: bolder;
}
.Block{
    height:6.6%;
    width: 31%;
    background: darkcyan;
    border: 2px outset #599e9e;
    display: inline-block;
    position: relative ;
    font-weight: 700;
    color:#efefef;
    text-align: center;
    bottom:0  ;
}
.block-screen{
    height:85%;
    width:100%;
}
.Button{
    top:75%;
    position: relative;
    display: inline-block;
    background: red;
    height: 6em;
    width: 6em;
    border-radius: 100%;
    box-shadow: inset 0 0.3em 0.3em rgba(255,255,255,0.5), inset 0 -0.3em 0.3em rgba(0,0,0,0.5)
}
.btn-holder.left{
    left:5%;
}
.btn-holder.right{
    left:40%;
}
.btn-holder.function-button{
    left:15%;
    bottom:2em;
}
.btn-holder.reset{
    left:22.5%;
    bottom:2em;
}
.btn-holder.start{
    left:30%;
    bottom:2em;
}
.btn-holder{
    display: inline-block;
    position: relative;
}
.btn-tag{
    display: block;
    font-weight: 700;
    color: #8d8383;
    text-align: center;
}
.func{
    margin-left: -0.5em;
}
.btn-inner {
    height: 5em;
    width: 5em;
    box-shadow: inset 0px 18px 65px 7px rgba(244, 110, 110,0.8), inset 0px -18px 65px 7px rgba(101, 1, 1,0.8);
    background: red;
    border-radius: 100%;
    top: 0.5em;
    left: 0.5em;
    position: relative;
}
.btn-inner:active {
    background: #c70303;
    box-shadow: inset 0px 0.3em 1em 7px rgba(0, 0, 0,0.2), inset 0px -0.3em 1em 7px rgba(0, 0, 0,0.2);
}
.function-button{
    height:1.5em;
    width:1.5em;
    border: 1px outset;
    margin:auto;
    border-radius: 100%;
    background: ivory;
}
.function-button:active {
    border: 1px inset;
    background: #efefef;
}
.Game{
    background-color: #ddd;
    border: 4px outset #c6c6c6;
    border-radius: 20px;
    height: 99%;
    width: 96%;
}
.game-over {
    position: absolute;
    z-index: 2;
    margin-left: 23%;
    margin-top: 10%;
    background: rgba(255,255,255,0.8);
    padding: 1em 2em;
    font-family: monospace;
    border-radius: 20px;
    border: 2px solid black;
    text-align: center;
}
.half-width {
    height:100%;
    width: 50%;
    display: inline-block;
}
.Screen {
    height:75%;
    width:80%;
    background: #efefef;
    margin:1% 10% 5%;
    border: 3px inset;
    border-radius: 10px;
    padding: 0% 1.5%;
}
.social {
    text-align: center;
    font-size: 1.3em;
    font-weight: bold;

}
.soc-icon {
    height:2em;
    width:2em;
    margin:0.5em;
}
.stats{
    bottom:0;
    width:95%;
    border-top: 1px solid black;
    position: relative;
    height:15%;
    font-size:1em;
    text-align: right;
    font-family: 'Anonymous Pro', monospace;
    padding:0.5em;
}
.stats-text {
    display: block;
}
.stats-text.digit {
    text-align: center;
}
.wrong{
    background: darkred;
    border: 2px outset #e4361a;
}
.answered-correctly-left{
    animation-name: shoot-off-left;
    animation-duration: 1s;
}
.answered-correctly-right{
    animation-name: shoot-off-right;
    animation-duration: 1s;
}
@keyframes shoot-off-left {
    from{
        left:0px;
        opacity: 1;
    }
    50%{
        left:100px;
        opacity: 0;
    }
    to{
        left:100px;
        opacity: 0;
    }
}
@keyframes shoot-off-right {
    from{
        left:0px;
        opacity: 1;
    }
    50%{
        left:-100px;
        opacity: 0;
    }
    to{
        left:-100px;
        opacity: 0;
    }

}
@media only screen and (max-width: 600px) {
    .Block{
        font-size: 0.8em;
    }
    .Button{
        height:4.8em;
        width:4.8em;
    }

    .btn-holder.right {
        left: 40%;
    }
    .btn-inner{
        height:4em;
        width:4em;
        top:0.4em;
        left:0.4em;
        box-shadow:inset 0px 9px 30px 7px rgba(244, 110, 110,0.8), inset 0px -9px 30px 7px rgba(101, 1, 1,0.8);
    }
    .btn-tag{
        font-size: 0.8em;
    }
    .social{
        margin-top:1.5em;
    }
    .stats{
        font-size: 0.9em;
    }
}
@media only screen and (max-width: 400px) {
    .Button{
        height:3.5em;
        width:3.5em;
    }
    .btn-inner{
        height:3em;
        width:3em;
        top:0.25em;
        left:0.25em;
        box-shadow:inset 0px 9px 30px 7px rgba(244, 110, 110,0.8), inset 0px -9px 30px 7px rgba(101, 1, 1,0.8);
    }
    .btn-tag{
        font-size: 0.7em;
    }
    .btn-holder.right{
        left:42%;
    }
    .function-button{
        height:1em;
        width:1em;
        border: 1px outset;
        margin:auto;
        border-radius: 100%;
        background: ivory;
    }
}
