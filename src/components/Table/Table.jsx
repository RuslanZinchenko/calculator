/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Table.module.css';

const Table = ({
  onPressAnyKey,
  onPlus,
  onMinus,
  onMultiply,
  onDivide,
  onClear,
  onBackspace,
  onEqually,
}) => (
  <table className={styles.table}>
    <tbody>
      <tr className={styles.row}>
        <td className={styles.column} onClick={onPlus}>
          <span className="material-icons">add</span>
        </td>
        <td className={styles.column} onClick={onMinus}>
          <span className="material-icons">remove</span>
        </td>
        <td className={styles.column} onClick={onMultiply}>
          <span className="material-icons">clear</span>
        </td>
        <td className={styles.column} onClick={onDivide}>
          /
        </td>
      </tr>
      <tr className={styles.row}>
        <td className={styles.column} onClick={onPressAnyKey} id="7">
          7
        </td>
        <td className={styles.column} onClick={onPressAnyKey} id="8">
          8
        </td>
        <td className={styles.column} onClick={onPressAnyKey} id="9">
          9
        </td>
        <td className={styles.column} onClick={onBackspace}>
          <span className="material-icons">keyboard_backspace</span>
        </td>
      </tr>
      <tr className={styles.row}>
        <td className={styles.column} onClick={onPressAnyKey} id="4">
          4
        </td>
        <td className={styles.column} onClick={onPressAnyKey} id="5">
          5
        </td>
        <td className={styles.column} onClick={onPressAnyKey} id="6">
          6
        </td>
        <td className={styles.column} onClick={onClear}>
          C
        </td>
      </tr>
      <tr className={styles.row}>
        <td className={styles.column} onClick={onPressAnyKey} id="1">
          1
        </td>
        <td className={styles.column} onClick={onPressAnyKey} id="2">
          2
        </td>
        <td className={styles.column} onClick={onPressAnyKey} id="3">
          3
        </td>
        <td className={styles.column} onClick={onEqually} rowSpan="2">
          =
        </td>
      </tr>
      <tr className={styles.row}>
        <td
          className={styles.column}
          onClick={onPressAnyKey}
          colSpan="3"
          id="0"
        >
          0
        </td>
      </tr>
    </tbody>
  </table>
);

Table.propTypes = {
  onPressAnyKey: PropTypes.func.isRequired,
  onPlus: PropTypes.func.isRequired,
  onMinus: PropTypes.func.isRequired,
  onMultiply: PropTypes.func.isRequired,
  onDivide: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  onBackspace: PropTypes.func.isRequired,
  onEqually: PropTypes.func.isRequired,
};

export default Table;
