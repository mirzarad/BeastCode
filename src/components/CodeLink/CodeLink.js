import React, {useState} from 'react'
import { difficultyColorCalculator } from '../../util/difficultyColorCalculator';
import Modal from '../Modal/Modal';
import completeProblemClick from '../../util/sound/scifi-sfx-2.mp3'
import './codelink.css'

const CodeLink = ({name, description, difficulty, solution}) => {
  const [openModal, setOpenModal] = useState(false)

  const difficultyColor = difficultyColorCalculator(difficulty)

  const onCompleteProblemClick = () => {
    const hoverAudio = new Audio();
    hoverAudio.src = completeProblemClick
    hoverAudio.play()
  }

  return (
    <div className='codelink-container'>
      <span>{name}</span>
      <span style={{color: difficultyColor}}>{'*'+difficulty+'*'}</span>
      <input onClick={onCompleteProblemClick} className="complete-checkbox" type="checkbox"></input>
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