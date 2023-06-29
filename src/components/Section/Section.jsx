import PropTypes from 'prop-types';
import css from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <>
      <h2 className={css.heading}>{title}</h2> {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
