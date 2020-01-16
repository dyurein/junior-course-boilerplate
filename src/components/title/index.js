import React from 'react';
import pt from 'prop-types';
import s from './index.module.css';

const PageTitle = ({ title }) => {
  return (
    <h1 className={s.title}>{title}</h1>
  );
};

PageTitle.propTypes = {
  title: pt.node.isRequired
};

export default PageTitle;