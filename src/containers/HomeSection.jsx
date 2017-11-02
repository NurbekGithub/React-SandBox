import React from 'react';

// import Example from '../components/HomeSection/Example'
import promise from '../data/data';

export default class HomeSection extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tableData: [
        {
          "id": 0,
          "name": "Food - 0",
          "caloricity": 466,
          "price": 80.02417314100644,
          "hasFallenInPrice": true
        }
      ]
    }

  }

  renderTableRow = (item, idx) => {
    // return <Example key={idx} item={item}/>
    return (
      <tr key={idx}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.caloricity}</td>
        <td>{Number(item.price).toFixed(4) + '$'}</td>
        <td>{String(item.hasFallenInPrice)}</td>
      </tr>
    )
  }

  componentDidMount() {
    promise
      .then( res => res.data )
        .then( data => this.setState({ tableData: data.gridData })) 
          .catch( err => console.log(err));
    }

  render() {

    console.log('re-rendered');

    const { tableData } = this.state;

    return (
      <div className='HomeSection container'>
        <h2>TableData</h2>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>caloricity</th>
              <th>price</th>
              <th>hasFallenInPrice</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map(this.renderTableRow)}
          </tbody>
        </table>
      </div>
    )

  }


}