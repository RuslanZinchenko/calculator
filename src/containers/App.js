/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';
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

  handleEnter = () => {
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
      <div className={styles.wrapper}>
        <h3 className={styles.title}>Calculator</h3>
        <div className={styles.display}>{result}</div>
        <table className={styles.table}>
          <tr className={styles.row}>
            <td className={styles.column} onClick={this.handlePlus}>
              <span className="material-icons">add</span>
            </td>
            <td className={styles.column} onClick={this.handleMinus}>
              <span className="material-icons">remove</span>
            </td>
            <td className={styles.column} onClick={this.handleMultiply}>
              <span className="material-icons">clear</span>
            </td>
            <td className={styles.column} onClick={this.handleDivide}>
              /
            </td>
          </tr>
          <tr className={styles.row}>
            <td
              className={styles.column}
              onClick={this.handlePressAnyKey}
              id="7"
            >
              7
            </td>
            <td
              className={styles.column}
              onClick={this.handlePressAnyKey}
              id="8"
            >
              8
            </td>
            <td
              className={styles.column}
              onClick={this.handlePressAnyKey}
              id="9"
            >
              9
            </td>
            <td className={styles.column} onClick={this.handleBackspace}>
              <span className="material-icons">keyboard_backspace</span>
            </td>
          </tr>
          <tr className={styles.row}>
            <td
              className={styles.column}
              onClick={this.handlePressAnyKey}
              id="4"
            >
              4
            </td>
            <td
              className={styles.column}
              onClick={this.handlePressAnyKey}
              id="5"
            >
              5
            </td>
            <td
              className={styles.column}
              onClick={this.handlePressAnyKey}
              id="6"
            >
              6
            </td>
            <td className={styles.column} onClick={this.handleClear}>
              C
            </td>
          </tr>
          <tr className={styles.row}>
            <td
              className={styles.column}
              onClick={this.handlePressAnyKey}
              id="1"
            >
              1
            </td>
            <td
              className={styles.column}
              onClick={this.handlePressAnyKey}
              id="2"
            >
              2
            </td>
            <td
              className={styles.column}
              onClick={this.handlePressAnyKey}
              id="3"
            >
              3
            </td>
            <td
              className={styles.column}
              onClick={this.handleEnter}
              rowSpan="2"
            >
              =
            </td>
          </tr>
          <tr className={styles.row}>
            <td
              className={styles.column}
              onClick={this.handlePressAnyKey}
              colSpan="3"
              id="0"
            >
              0
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
