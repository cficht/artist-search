import React from 'react';
import PropTypes from 'prop-types';

const Paging = ({ page, list, handlePage }) => (
  <>
    <button onClick={() => handlePage(-1)} disabled={page === 0}>Back</button>
    <button onClick={() => handlePage(1)} disabled={list.length < 25}>Forward</button>
  </>
);

Paging.propTypes = {
  page: PropTypes.number.isRequired,
  list: PropTypes.array.isRequired,
  handlePage: PropTypes.func.isRequired
};

export default Paging;
