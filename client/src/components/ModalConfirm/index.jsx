import React from 'react';
import Button from '../Button';


import styles from './styles.module.css'

function ModalConfirm({ title, onConfirm, onCancel, showModal }) {

  return (
    <div className={ showModal ? `${styles.modal} ${styles.active}` : styles.modal }>
      <div className={ showModal ? `${styles.modal_content} ${styles.active}` : styles.modal_content}>

        <h1>{title}</h1>

        <div className={ styles.modal_actions }>
          <Button className={ styles.btn } onClick={onConfirm}>Yes</Button>
          <Button className={ styles.btn } onClick={onCancel}>No</Button>
        </div>

      </div>
    </div>
  );
}

export default ModalConfirm;