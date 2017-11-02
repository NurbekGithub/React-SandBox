import React, { Component } from 'react';
import './Form.css'
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

export default class FormGet extends Component {
    // constructor(props) {
    //     super(props);
       
    // }

        

  render() {
    return (
      <form className="Form" >
          
        

        <RaisedButton 
            type="submit" 
            label="Получить" 
            style={style}
             />
      </form>
    );
  }
}