import { render } from '@testing-library/react';
import { getValue } from '@testing-library/user-event/dist/utils';
import React, { Component } from 'react'

export default class MyForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         age:'',
      };
    }

     myChangehandler=(event)=>{
        let name=event.target.name;
        let val=event.target.value;
        this.setState({[name]:val})
    }

    render(){
        return (
            <div>
                <h2>Enter your detailes</h2>
                <h3>MY NAME IS <b>{this.state.username}</b> MY AGE IS <b>{this.state.age}</b></h3>
                <form>
                    <h1>Enter your name</h1>
                    <input type='text' name='username'value={this.state.username} onChange={this.myChangehandler}/>
                    <h1>Enter your age</h1>
                    <input type='text' name='age' value={this.state.age} onChange={this.myChangehandler}/>
                    <input type='submit' name='save'/>
                </form>
            </div>
          )
    }
}