import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <div>
    <span className={css.statisticsItem}>Good: {good}</span>
    <span className={css.statisticsItem}>Neutral: {neutral}</span>
    <span className={css.statisticsItem}>Bad: {bad}</span>
    <span className={css.statisticsItem}>Total: {total}</span>
    <span className={css.statisticsItem}>
      Positive feedback: {positivePercentage}%
    </span>
  </div>
);
Statistics.prpTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
