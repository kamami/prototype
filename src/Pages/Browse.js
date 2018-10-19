import React from "react";
import '../App.css';


import { extendObservable } from 'mobx';
import { observer }  from 'mobx-react';


class Browse extends React.Component{

  constructor() {
super();
   // extendObservable definiert die veränderbaren states
   // Könnte auf der Plattform also der Inhalt des Drops oder die ID für das Chatplugin sein
   // Klick verändert den state und die component rerendert automatisch


   extendObservable(this, {
     counter: 0,
     timer: 0,
     intervalId: setInterval(this.incrementTimer, 1000),
     test: 0,
      })
 }

 loadContent() {
     var requestUrl = this.props.url;
     fetch(requestUrl).then((response)=>{
         return response.json();
     }).then((data)=>{
         this.setState({data : data});
     }).catch((err)=>{
         console.log("There has been an error");
     });
 }
 componentDidMount() {
     if(this.props.url !== ''){
         this.loadContent();
         this.setState({mounted:true});

     }

 }


 onIncrement = () => {
   this.counter++;
 }

 onDecrement = () => {
   this.counter--;
 }

 incrementTimer = () => {
    this.timer += 1;
  }

  resetTimer = () => {
    this.timer = 0;
  }



  changeContentA = () => {
    this.test = 1;
  }

    changeContentB = () => {
      this.test = 2;
    }

    render() {



      let content;
 if (this.test === 1) {
   content = <span>Content A</span>;
 } else if (this.test === 2) {
   content = <span>Content B</span>;
 } else {
   content = <span>Neither</span>;
 }

        return (
          <div>
           {this.counter}

           <button onClick={this.onIncrement} type="button">Increment</button>
           <button onClick={this.onDecrement} type="button">Decrement</button>

             <p>timer: {this.timer}</p>
          <button onClick={this.resetTimer} type="button">Reset</button>

        <div>{content}</div>
          <button onClick={this.changeContentA} type="button">Change Content A</button>
            <button onClick={this.changeContentB} type="button">Change Content B</button>






         </div>

        );
    }
}

export default observer(Browse);
