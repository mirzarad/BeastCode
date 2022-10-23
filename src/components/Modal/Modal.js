import React from 'react'
import './modal.css'

const Modal = ({ closeModal, description, solution }) => {

  return (
    <div>
      <div className="modal-background">
        <div className="modal-container">
          <div className="modal-close-button">
              <button 
                onClick={() => closeModal(false)} 
                className="exit-modal-button">
              X
              </button>
          </div>
          <div className="modal-description">{}</div>
          <div className="modal-body">
            <img className="solution-image" src={solution} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal