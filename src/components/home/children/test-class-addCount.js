import React from 'react';
class AddCount1 extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      list: []
    }
  }

  addCount1 = () => {
    // console.log('this', this.state);
    let newCount = this.state.count;
    this.setState({
      count: newCount += 1
    })
  }

  render() {
    return (
      <div>
        <p>简单得计数器: </p>
        <p>{this.state.count}</p>
        <button onClick={this.addCount1}> count ++</button>
      </div>
    )
  }

}

export default AddCount1;