import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
     
    }
  }
   


  render() {
    console.log(this)
    return(

  <div id="whole">

    <Container>
    <Row>
      <Col>
      
      
      
      
      
      <div className="App">
        <div className="Age-label">
         <img src={`images/dice${this.props.rolledDice}.png`}/>
        </div>
       <Button  disabled={this.props.disableSave} id="btn-start" onClick={this.props.reset}>START A NEW GAME</Button>
        <div>
        <Row className="new">
      <Col>
      { 
        this.props.winner2 === true ?
        <span id="player1-text" className="btr-lk"><b>BETTER LUCK <br/> NEXT TIME</b></span>
       :
        this.props.winner1 === true  ?
        <img id="winner" src="images/winner.png" />
      :
      <div>
      <div className="arrow bounce" >
      <a id="arrow1" className={`fa fa-arrow-down fa-2 ${this.props.classArrow1}`} href="#"></a>
      </div>
        <Button disabled={this.props.player1Disable} id="player1" onClick={this.props.roll}>Player1</Button>
        </div>
      }
        </Col>
      <Col>
      {
        this.props.winner1 === true ?
        <span id="player2-text" className="btr-lk"><b>BETTER LUCK <br/> NEXT TIME</b></span>
       :
        this.props.winner2 === true ?
        <img id="winner" src="images/winner.png"/>
       
       :
       <div>
       <div className="arrow bounce" >
       <a  id="arrow2" className={`fa fa-arrow-down fa-2 ${this.props.classArrow2}`} href="#"></a>
       </div>
       <Button disabled={this.props.player2Disable} id="player2" onClick={this.props.roll}>Player2</Button>
        </div>
      }
        </Col> 
        
        </Row>
        </div>
        <Row>
      <Col>
        <Button id="btn-savescore" disabled={this.props.disableSave} onClick={this.props.saveMyScore}>Save my score</Button>
        <p><span id="btn-session-score"><b>Your Score For The Session :</b></span> {this.props.score}</p>
        <p><span id="player1-text"><b>Player 1 :</b></span> {this.props.savedscore1}</p>
        <p><span id="player2-text"><b>Player 2 :</b></span> {this.props.savedscore2}</p>
        </Col>
        </Row>
      </div>
     
      
      
    </Col>      
    </Row>
    </Container>

    </div>
    
    );
  }
}

const mapStateToProps = state => {
  return {
    rolledDice: state.rolledDice,
    currentplayer:state.currentplayer,
    score:state.score,
    savedscore1:state.savedScore1,
    savedscore2:state.savedScore2,
    player1Disable:state.player1Disable,
    player2Disable:state.player2Disable,
    winner1:state.winner1,
    winner2:state.winner2,
    disableSave:state.disableSave,
    classArrow1:state.classArrow1,
    classArrow2:state.classArrow2
  };
};

const mapDispachToProps =dispatch => {
  //console.log(currentplayer)
  return {

    roll: () => dispatch({ type: "rolled"  }),
    saveMyScore: () =>{ 
       dispatch({ type: "savemyscore"})
      },
      reset:()=>dispatch({type:"reset"})
  
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps,
  
)(App);
