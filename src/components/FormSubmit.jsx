import React, { Component } from 'react';
import './Form.css'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

export default class FormSubmit extends Component {
    constructor(props) {
        super(props);

        this.submit = this.submit.bind(this);
    }

    submit() {
        console.log('submit', this.testInput.value);
    }
    

  render() {
    return (
      <form className="Form">
          
        <TextField
            floatingLabelText="Имя"
            ref={(input) => { this.testInput = input; }}
            /><br />
        
        <TextField
            floatingLabelText="Фамилия"
            /><br />

        <RaisedButton 
            label="Добавить" 
            type="button"
            primary={true} 
            style={style}
            onClick={this.submit.bind(this)}
             />
      </form>
    );
  }
}