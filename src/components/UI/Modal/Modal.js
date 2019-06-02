import React from 'react';
import classes from './Modal.module.css';

//a modal window is a graphical control element subordinate to an application's main window

const modal = (props) => (
  <div className={classes.Modal}>
    {props.children}
  </div>
);

export default modal;