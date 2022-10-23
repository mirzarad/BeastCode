import React, {useState} from 'react'
import { difficultyColorCalculator } from '../../util/difficultyColorCalculator';
import Modal from '../Modal/Modal';
import './codelink.css'

const CodeLink = ({name, description, difficulty, solution}) => {
  const [openModal, setOpenModal] = useState(false)

  const difficultyColor = difficultyColorCalculator(difficulty)

  return (
    <div className='codelink-container'>
      <span>{name}</span>
      <span style={{color: difficultyColor}}>{'*'+difficulty+'*'}</span>
      <button 
        className="toggle-modal-button"
        style={{color: difficultyColor}}
        onClick={()=>{
          setOpenModal(!openModal);
        }}>View Solution</button>
      {openModal && <Modal closeModal={setOpenModal} description={description} solution={solution}/>}
    </div>
  )

}

export default CodeLink