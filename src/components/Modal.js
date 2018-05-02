import React, { Component } from 'react';

class Modal extends Component {

  render() {
    const { data, clickModal } = this.props;

    return(
      <div className="modal-wrap" onClick={clickModal}>
        <div className="modal">
          <div className="modal-body">
            <h2 className="modal-head">低密度脂蛋白胆固醇</h2>
            <div className="modal-content">
              低密度脂蛋白胆固醇低密度111111111111222脂蛋白胆固醇
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Modal;
