import React, { Component } from 'react';
import './Body.css'
import promise from '../data/data';

export default class Body extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          id: '1',
          title: 'sdf'
        },
        {
          id: '2',
          title: 'asfsdf'
        },
        {
          id: '3',
          title: '34swefdf'
        }
      ]
    }
  }

  renderData = (item, idx) => {
    return (
      <div className="marketing-col" key={idx} >
        <h3>{ item.title }</h3>
        <p>{ item.text }</p>
        <p>{ item.footer }</p>
      </div>
    ) 
  }


  componentDidMount() {
    promise
      .then( res => res.data )
        .then( data => this.setState({ data: data.body })) 
          .catch( err => console.log(err));
    }

  render() {

    const { data } = this.state;

    return (
      <div className="Body">
        <div class="marketing-row container">
          {data.map(this.renderData)}
        </div>
      </div>
    );
  }
}