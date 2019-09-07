import React, { Component, } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Checkbox } from '@material-ui/core';

class PayButton extends Component {

  state={
    open:false  //dialog 창이 열려있는지 유무
}

handleClickOpen= ()=> {
    this.setState({
      open: true  //Dialog 창을 열어준다
    });
  }

  handleClose= ()=> {
    this.setState({
      open: false  //Dialog 텍스트를 초기화 하고 닫아준다
    })
  }

 
  handleFormSubmit= (e)=> {
    e.preventDefault() //axios를 통하여 데이터를 넘겨주는 부분 구현해야 함
    this.setState({
      open: false
    })
  }


render() {

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                 결제하기
            </Button>
      <Dialog open={this.state.open} onClose={this.handleClose}>
        <DialogTitle>결제창</DialogTitle>
        <DialogContent>
          결제를 진행하시겠습니까?</DialogContent>
        <DialogContent>
       카카오페이<Checkbox />
       휴대폰결제<Checkbox />
       무통장입금<Checkbox />
            </DialogContent>
            <DialogActions>
            <Button variant="outlined" color="primary" onClick={this.handleFormSubmit}>예</Button>
          <Button variant="outlined" color="primary" onClick={this.handleClose}>아니오</Button>
        </DialogActions>
        </Dialog>
        </div>
    )
}
  }
export default PayButton;