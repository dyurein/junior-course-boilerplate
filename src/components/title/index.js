import React from 'react';
import s from './index.module.css';

const PageTitle = ({ title }) => {
  return (
    <h1 className={s.title}>{title}</h1>
  );
};

export default PageTitle;