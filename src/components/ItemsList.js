import React, { Component } from 'react';
import { connect } from 'react-redux';

class ItemsList extends Component {
  renderList() {
    return this.props.items.map((item) => {
      return (
        <div key={item.id}>
          <li>{item.item}</li>
        </div>
      );
    })
  }

  render() {
    return <div>{this.renderList()}</div>
  }
}

const mapStatToProps = (state) => {
  console.log(state.items)
  return {items: state.items}
}

export default connect(mapStatToProps)(ItemsList);
