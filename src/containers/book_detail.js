import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component{
  render(){
    return(
        <div>Details for:</div>
    );
  }
}
function mapStateToProps(state){
    return{
      book: state.activeBook
    }
}
