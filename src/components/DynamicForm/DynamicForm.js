import React from 'react'


export default class DynamicForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      shareholders: [{ name: 'fdf' }],
    };
    this.handleAddShareholder= this.handleAddShareholder.bind(this);
    this.handleRemove= this.handleRemove.bind(this);
    this.handleShareholderNameChange= this.handleShareholderNameChange.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this)
  }

  handleRemove(idx) {

    this.setState({
      shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx)
    });
    console.log("....."+this.state.shareholders)
  }


  handleShareholderNameChange(idx){(evt) =>{
    console.log("+++++++++++")
    console.log(evt);
      // const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
      //   if (idx !== sidx) return shareholder;
      // //  return {shareholder, name: evt.target.value };
      // });
      //
      // this.setState({ shareholders: newShareholders });
}
  }

  handleSubmit (evt) {
    const { name, shareholders } = this.state;
    // alert(`Incorporated: ${name} with ${shareholders.length} shareholders`);
    console.log(this.state.shareholders)
  }

  handleAddShareholder() {

    this.setState({
      shareholders: this.state.shareholders.concat([{ name: '' }])
    });
    console.log(this.state.shareholders)
  }



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* ... */}
        <h4>Shareholders</h4>

        {this.state.shareholders.map((shareholder, idx) => (
          <div className="shareholder">
            <input
              type="text"
              placeholder={`Shareholder #${idx + 1} name`}

              onChange={this.handleShareholderNameChange(idx)}
              
            />
            <button type="button"   className="small">-</button>
          </div>
        ))}
        <button type="button" onClick={this.handleAddShareholder}  className="small">Add Shareholder</button>
        <button>Incorporate</button>
      </form>
    )
  }
}
