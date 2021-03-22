import React, { useState } from 'react';
import './App.css';
import Welcome from './components/textField/index';
import styles from './components/textField/style';
import Slider from './components/slider/index';
import global from './lib/util/math';
import constants from './configs/constants';
import WelcomeDemo from './pages/TextFieldDemo/index';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      valid : "",
      invalid : "",
      currentImage : 0,
      images : [
        `${constants.PUBLIC_IMAGE_FOLDER}/cloud.jpg`,
        `${constants.PUBLIC_IMAGE_FOLDER}/js.jpg`,
        `${constants.PUBLIC_IMAGE_FOLDER}/dns-server.png`,
      ],
      sports : [
                  { label: `${constants.SPORT_CRICKET.label}`, value: `${constants.SPORT_CRICKET.value}`},
                  { label: `${constants.SPORTS_FOOTBALL.label}` , value:`${constants.SPORTS_FOOTBALL.value}`}
               ],
      data : {
          name : "",
          sport : "",
          cricket : "",
          football : ""
        },
      options : [
          {
            label : "",
            value : ""
          },
       ]
    };


    

    this.handleChange = this.handleChange.bind(this);
    this.switchImage = this.switchImage.bind(this);
    this.handleSports = this.handleSports.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSports(event){
    this.state.options = [];
    console.log("selected sport:", event.target.value);
    this.state.data.sport = event.target.value;
    console.log(this.state.data);
    if(event.target.value==null || event.target.value== undefined){
      this.setState({ isSports : false})
    }
    else{
      this.setState({ isSports : true})
    }
    if(this.state.data.sport == "Cricket"){
      for(let i=0;i<constants.SPORT_CRICKET_OPTIONS.length;i++){
        this.state.options[i] = constants.SPORT_CRICKET_OPTIONS[i];
        // this.state.options[0].value =  constants.SPORT_CRICKET_OPTIONS[i].value;
      }
    }
    else if(this.state.data.sport == "Football"){
     for(let i=0;i<constants.SPORT_FOOTBALL_OPTIONS.length;i++){
        this.state.options[i] = constants.SPORT_FOOTBALL_OPTIONS[i];
        // this.state.options[0].value =  constants.SPORT_FOOTBALL_OPTIONS[i].value;
      }
    }
  }
  handleName(event){
    this.state.data.name = event.target.value;
    console.log(this.state.data);
  }
  handleSubmit(event){
    if(this.state.data.sport == "Cricket"){
      this.state.data.cricket = event.target.value;
      this.state.data.football = "";
    }
    if(this.state.data.sport == "Football"){
      this.state.data.football = event.target.value;
      this.state.data.cricket = "";
    }
    console.log(this.state.data);

  }
  switchImage(){
    let currentIndex = global.getRandomNumber(this.state.images.length);
    let updateCurrentIndex = global.getNextRoundRobin(this.state.images.length, currentIndex);
    this.setState({ currentImage : updateCurrentIndex});
  }

  componentDidMount(){
    setInterval(this.switchImage, 2000);
  }

  handleChange(event){
    this.setState({ [event.target.name] : event.target.value});
    this.isValid(this.state);
  }

  isValid(arg){
    arg.valid !== '' ? this.setState({ validClass : "success"}) : this.setState({ validClass : "error"});
    Number.isInteger(arg.invalid)>=0 && !isNaN(parseInt(arg.invalid)) ? this.setState({inValidClass : "success"}) : this.setState({inValidClass : "error"});
  }

  render(){
    return(
    <>
      {/* <Slider images={this.state.images} currentImage={this.state.currentImage}></Slider> */}
      {/* <Welcome validClass={this.state.validClass} valid={this.state.valid} invalid={this.state.invalid} inValidClass={this.state.inValidClass} onChange={this.handleChange} stylesheet={styles} ></Welcome> */}
    <WelcomeDemo stylesheet={styles} isSports={this.state.isSports} sports={this.state.sports} sportsOptions={this.state.options} onClick={this.handleSubmit} bmitCap onChange={this.handleSports} onSelect={this.handleName}></WelcomeDemo>
    </>
    );
  }
}
export default App;