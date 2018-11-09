import React, { Component } from 'react';
import './App.css';
import Container from './Container.js'
import Player from './Player.js'
import PlayerDropDown from './PlayerDropDown.js'

export default class AddDragDropDemo extends Component {
    state = {
        players: [
            {name:"Goal Keeper",category:"SquadList", bgcolor: "yellow"},
            {name:"Rooney", category:"SquadList", bgcolor:"pink"},
            {name:"Vue", category:"SquadList", bgcolor:"skyblue"},
            {name:"test", category:"SquadList", bgcolor:"grey"}
          ],
          numDefenders: 0,
          numMidfielders: 0,
          numAttackers: 0
    }

    calculatePositions = (props) =>{
      var positionArray = [];
      var start=50;
      for(var j = 0; j<props; j++){
        start-=(8-j);
      }
      var end = 55+start;
      var incr = (end-start)/props;
      for(var i = 0;i<props;i++){
        positionArray[i]=start+(incr*i);
      }
      return positionArray;
    }

    change = () =>{
      var numDefenders = parseInt(document.getElementById("defenders").value);
      var numMidfielders = parseInt(document.getElementById("midfielders").value);
      var numAttackers= parseInt(document.getElementById("attackers").value);
      var numPlayers= numDefenders+numMidfielders+numAttackers;

      if(numPlayers==10){


        var i = 2;
        while(i<numDefenders+2){
          var perc = this.calculatePositions(numDefenders)[i-2];
          alert(perc);
          document.getElementById("player"+i).style.top = 60+"%";
          document.getElementById("player"+i).style.left = perc+"%";
          document.getElementById("player"+i+"header").innerHTML = "defender";
        i++;
      }

      // start=50;
      // for(var j = 0; j<numMidfielders; j++){
      //   start-=(8-j);
      // }
      // end = 50+start;
      while(i<numDefenders+numMidfielders+2){
          var perc = 0+((57.5/numMidfielders)*(i- numDefenders-2));
          document.getElementById("player"+i).style.top = 35+"%";
          document.getElementById("player"+i).style.left = perc+"%";
          document.getElementById("player"+i+"header").innerHTML = "midfielder";
        i++;
      }
      //
      // start=50;
      // for(var j = 0; j<numAttackers; j++){
      //   start-=(8-j);
      // }
      // end = 50+start;
      while(i<numDefenders+numMidfielders+numAttackers+2){
        var perc = 0+((57.5/numAttackers)*(i-numDefenders-numMidfielders-2));
          document.getElementById("player"+i).style.top = 10+"%";
          document.getElementById("player"+i).style.left = perc+"%";
          document.getElementById("player"+i+"header").innerHTML = "attacker";
      i++;
      }
      }else{
        alert("invalid");
      }
    }

    componentDidMount() {
      document.getElementById("defenders").value =4;
      document.getElementById("midfielders").value =4;
      document.getElementById("attackers").value =2;
      {this.change()}
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDrop = (ev, cat) => {
       let id = ev.dataTransfer.getData("id");

       let players = this.state.players.filter((player) => {
          if(player.category == cat){
            player.category = "SquadList";
          }
           if (player.name == id) {
               player.category = cat;
           }
           return player;
       });
       this.setState({
           ...this.state,
           players
       });
    }

    render() {
        var pos = {
            SquadList: [],
            player1: [],
            player2: [],
            player3: [],
            player4: [],
            player5: [],
            player6: [],
            player7: [],
            player8: [],
            player9: [],
            player10: [],
            player11: []

        }

        this.state.players.forEach ((t) => {
            pos[t.category].push(
              <Player name={t.name} bgcolor={t.bgcolor} />
            );
        });
        return (
            <div className="container-drag">
                <h2 className="header">Team Selector</h2>

                <div className = "formation-container">
                <span className="task-header">Formation Selector</span>
                Defenders:<PlayerDropDown position={"defenders"}/>
                Midfielders:<PlayerDropDown position={"midfielders"}/>
                Attackers:<PlayerDropDown position={"attackers"}/>
                <button id = "change_formation" onClick={this.change}>Change Formation</button>
                </div>

                <div className="SquadList" id="SquadList"
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>this.onDrop(e, "SquadList")}>
                    <span className="task-header">Squad List</span>
                    {pos.SquadList}
                </div>

                <div className= "player" id = "player1"
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>this.onDrop(e, "player1")}>
                     <span className="task-header"id="player1header">Goal Keeper</span>
                     {pos.player1}
                </div>

                <div className="player" id = "player2"
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>this.onDrop(e, "player2")}>
                     <span className="task-header"id="player2header">player2</span>
                     {pos.player2}
                </div>

                <div className="player" id = "player3"
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>this.onDrop(e, "player3")}>
                     <span className="task-header"id="player3header">player3</span>
                     {pos.player3}
                </div>

                <div className="player" id = "player4"
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>this.onDrop(e, "player4")}>
                     <span className="task-header"id="player4header">player4</span>
                     {pos.player4}
                </div>

                <div className="player" id = "player5"
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>this.onDrop(e, "player5")}>
                     <span className="task-header"id="player5header">player5</span>
                     {pos.player5}
                </div>

                <div className="player" id = "player6"
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>this.onDrop(e, "player6")}>
                     <span className="task-header"id="player6header">player6</span>
                     {pos.player6}
                </div>

                <div className="player" id = "player7"
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>this.onDrop(e, "player7")}>
                     <span className="task-header"id="player7header">player7</span>
                     {pos.player7}
                </div>

                <div className="player" id = "player8"
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>this.onDrop(e, "player8")}>
                     <span className="task-header"id="player8header">player8</span>
                     {pos.player8}
                </div>

                <div className="player" id = "player9"
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>this.onDrop(e, "player9")}>
                     <span className="task-header"id="player9header">player9</span>
                     {pos.player9}
                </div>

                <div className="player" id = "player10"
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>this.onDrop(e, "player10")}>
                     <span className="task-header"id="player10header">player10</span>
                     {pos.player10}
                </div>

                <div className="player" id = "player11"
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>this.onDrop(e, "player11")}>
                     <span className="task-header"id="player11header">player11</span>
                     {pos.player11}
                </div>

            </div>
        );
    }
}
