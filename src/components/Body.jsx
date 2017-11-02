import React, { Component } from 'react';
import Marketing from './Marketing';
import './Body.css'

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
        }
      ]
    }
  }

  renderData = (item, idx) => {
    return <Marketing key={idx} item={item} />
  }

  render() {

    const { data } = this.state;

    return (
      <div className="Body">
        <div class="marketing-row">
          {data.map(this.renderData)}
        </div>
      </div>
    );
  }
}