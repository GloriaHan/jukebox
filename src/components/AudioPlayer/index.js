import React, { Component } from 'react'

export default class AudioPlayer extends Component {
  audioElement = new Audio();
  state = {status: true}
  Control=()=>{
    this.setState({status: !this.state.status})
  }
  componentDidMount(){
    this.audioElement.src = this.props.audioURL;
    this.audioElement.autoplay = true;
  }
  componentDidUpdate(prevProps){
    this.state.status?this.audioElement.play():this.audioElement.pause();
    if(prevProps.audioURL!==this.props.audioURL){
      this.audioElement.src = this.props.audioURL;
      this.audioElement.autoplay = true;
    }
  }

  componentWillUnmount(){
    this.audioElement.pause();
  }

  render() {
    return (
      <div>
        <p>Playing {this.props.audioURL}</p>
        <button onClick={this.Control}>{this.state.status?"Pause":"Play"}</button>
      </div>
    );
  }
}
