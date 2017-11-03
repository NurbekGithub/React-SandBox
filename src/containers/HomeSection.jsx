import React from 'react';

// import Example from '../components/HomeSection/Example'
import promise from '../data/data';

export default class HomeSection extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tableData: [],
      nameFilter: '',
      caloricityFilter: '',
      hasFallenInPriceFilter: false
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

  _data;

  componentWillMount() {
    promise
      .then( res => res.data )
        .then( data => {
          this._data = data.gridData;
          this.setState({ tableData: this._data });
        }) 
          .catch( err => console.log(err));
    }

  Filter = (event) => {
    const { value } = event.target;

    switch(event.target.id) {
      case 'nameFilter': {
        this.setState({ nameFilter: value});
        break;
      }
      case 'caloricityFilter': {
        this.setState({ caloricityFilter: value});
        break;
      }
      case 'hasFallenInPriceFilter': {
        this.setState({ hasFallenInPriceFilter: !this.state.hasFallenInPriceFilter });
        break;
      }
      default: break;
    }



    // }

    // let tableData = this._data;
    // const tableData = this._data.filter( item => {
    //         return item.name.toLowerCase().indexOf(value.toLowerCase()) >= 0;
    //       });
    

    // switch(event.target.id) {
    //   case 'nameFilter':
    //     {
    //       tableData = this._data.filter( item => {
    //         return item.name.toLowerCase().indexOf(value.toLowerCase()) >= 0;
    //       });
    //       break;
    //     }
    //   case 'caloricityFilter': 
    //     {
    //         tableData = this._data.filter( item => {
    //           return value ? item.caloricity < value : true;
    //         });
          
    //       break;
    //     }
    //   case 'hasFallenInPriceFilter':
    //     {
    //       console.log(value);
    //       break;
    //     }
    //   default: break;
    // }

    // this.setState({ tableData });
    
  }

  render() {
    const { tableData, nameFilter, caloricityFilter, hasFallenInPriceFilter }  = this.state;
    console.log(caloricityFilter);
    const filteredData = tableData.filter(item => {
      return (item.name.toLowerCase().indexOf(nameFilter.toLowerCase()) >= 0 && 
              (caloricityFilter ? caloricityFilter >= item.caloricity : true) && 
              (!hasFallenInPriceFilter ? true : String(item.hasFallenInPrice) === 'true')
            );
    });

    return (
      <div className='HomeSection container'>
        <h2>TableData</h2>
        <div className='HomeSection__filter'>
          <span> 
            <label htmlFor="nameFilter"> name: </label> 
            <input type="text" id='nameFilter' placeholder='search' onChange={this.Filter} value={this.state.nameFilter} /> 
          </span>
          <span> 
            <label htmlFor="caloricityFilter"> caloricity is under: </label> 
            <input type="number" id='caloricityFilter' onChange={this.Filter} value={this.state.caloricityFilter} /> 
          </span>
          <span> 
            <label htmlFor="hasFallenInPriceFilter"> hasFallenInPriceFilter: </label> 
            <input type="checkbox" id='hasFallenInPriceFilter' onChange={this.Filter} value={this.state.hasFallenInPriceFilter} /> 
          </span>
        </div>
        <div className="HomeSection__table">
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
              {filteredData.map(this.renderTableRow)}
            </tbody>
          </table>
        </div>
      </div>
    )

  }


}