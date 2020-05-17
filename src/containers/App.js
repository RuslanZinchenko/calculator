import React, { Component } from 'react';
import Table from '../components/Table/Table';
import styles from './App.module.css';

export default class App extends Component {
  state = {
    result: 0,
    firstNumber: [],
    plus: false,
    minus: false,
    multiply: false,
    divide: false,
    enter: false,
  };

  arr = [];

  handlePressAnyKey = e => {
    const { id } = e.target;
    if (this.arr.length < 5) {
      if (this.arr[0] === '0') {
        this.arr = [];
        this.setState({
          result: 0,
          enter: false,
        });
      } else {
        this.arr.push(id);
        this.setState({
          result: this.arr,
          enter: false,
        });
      }
    }
  };

  handlePlus = () => {
    this.setState({
      firstNumber: this.arr,
      plus: true,
    });
    this.arr = [];
  };

  handleMinus = () => {
    this.setState({
      firstNumber: this.arr,
      minus: true,
    });
    this.arr = [];
  };

  handleMultiply = () => {
    this.setState({
      firstNumber: this.arr,
      multiply: true,
    });
    this.arr = [];
  };

  handleDivide = () => {
    this.setState({
      firstNumber: this.arr,
      divide: true,
    });
    this.arr = [];
  };

  handleClear = () => {
    this.arr = [];
    this.setState({
      result: 0,
      firstNumber: [],
      plus: false,
      minus: false,
      multiply: false,
      divide: false,
      enter: false,
    });
  };

  handleBackspace = () => {
    const { enter } = this.state;
    if (!enter && this.arr.length > 1) {
      this.arr.pop();
      this.setState({
        result: this.arr,
      });
    } else if (!enter && this.arr.length === 1) {
      this.arr = [];
      this.setState({
        result: 0,
      });
    }
  };

  handleEqually = () => {
    const { result, firstNumber, plus, minus, multiply, divide } = this.state;
    if (plus) {
      const plusFunction =
        Number(firstNumber.join('')) + Number(result.join(''));
      this.setState({
        result: plusFunction,
        enter: true,
      });
    } else if (minus) {
      const minusFunction =
        Number(firstNumber.join('')) - Number(result.join(''));
      this.setState({
        result: minusFunction,
        enter: true,
      });
    } else if (multiply) {
      const multiplyFunction =
        Number(firstNumber.join('')) * Number(result.join(''));
      this.setState({
        result: multiplyFunction,
        enter: true,
      });
    } else if (divide) {
      const divideFunction =
        Number(firstNumber.join('')) / Number(result.join(''));
      this.setState({
        result: divideFunction,
        enter: true,
      });
    }
  };

  render() {
    const { result } = this.state;

    return (
      <div
        style={{ marginTop: (window.visualViewport.height - 408) / 2 }}
        className={styles.wrapper}
      >
        <h3 className={styles.title}>Calculator</h3>
        <div className={styles.display}>{result}</div>
        <Table
          onPressAnyKey={this.handlePressAnyKey}
          onPlus={this.handlePlus}
          onMinus={this.handleMinus}
          onMultiply={this.handleMultiply}
          onDivide={this.handleDivide}
          onClear={this.handleClear}
          onBackspace={this.handleBackspace}
          onEqually={this.handleEqually}
        />
      </div>
    );
  }
}
