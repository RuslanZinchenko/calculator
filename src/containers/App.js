/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';
import styles from './App.module.css';

export default class App extends Component {
  state = {
    result: 0,
    firstNumber: [],
    plus: false,
    minus: false,
  };

  arr = [];

  handlePressAnyKey = e => {
    const { id } = e.target;
    this.arr.push(id);
    this.setState({
      result: this.arr,
    });
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

  handleEnter = () => {
    const { result, firstNumber, plus, minus } = this.state;
    if (plus) {
      const plusFunction =
        Number(firstNumber.join('')) + Number(result.join(''));
      this.setState({
        result: plusFunction,
      });
    } else if (minus) {
      const minusFunction =
        Number(firstNumber.join('')) - Number(result.join(''));
      this.setState({
        result: minusFunction,
      });
    }
  };

  render() {
    const { result } = this.state;
    const resultLength = result.length > 5 ? result.slice(0, 5) : result;

    return (
      <div className={styles.wrapper}>
        <h3 className={styles.title}>Calculator</h3>
        <div className={styles.display}>{resultLength}</div>
        <table className={styles.table}>
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
            <td className={styles.column} onClick={this.handleMinus} id="-">
              -
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
            <td className={styles.column} onClick={this.handlePlus} id="+">
              +
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
              id="enter"
            >
              enter
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
