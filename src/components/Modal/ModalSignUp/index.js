import React, { forwardRef } from 'react';
import {
  Dialog,
  DialogActions,
  DialogTitle,
  Button,
  Slide,
} from '@material-ui/core/';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction={props.transition || 'down'} ref={ref} {...props} />;
});

const modal = ({ message, button, open, onClose = () => {}, transition }) => (
  <Dialog
    disableBackdropClick
    disableEscapeKeyDown
    open={open}
    TransitionComponent={Transition}
    onClose={() => onClose(false)}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
      {message || 'Conta criada com sucesso!'}
    </DialogTitle>
    <DialogActions>
      <Button onClick={() => onClose(false)} color="primary" autoFocus>
        {button || 'ok'}
      </Button>
    </DialogActions>
  </Dialog>
);

export default modal;
