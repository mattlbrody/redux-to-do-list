import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions';

const ItemInput = (props) => {
  console.log(props)
  return (
    <div>
      <form onSubmit={() => props.addItem('test')}>
        <input 
          placeholder="addItem"
        />
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { addItem: state.addItem };
}

export default connect(mapStateToProps)(ItemInput);