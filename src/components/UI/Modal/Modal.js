import React, {Fragment} from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';


//a modal window is a graphical control element subordinate to an application's main window

const modal = (props) => (
  <Fragment>
    <Backdrop show={props.show} clicked={props.modalClosed} />
    <div 
      className={classes.Modal}
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
      }}
    >
      {props.children}
    </div>
  </Fragment>
);

export default modal;