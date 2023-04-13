import React, {useState} from 'react'


const Accordion = ({question, answer}) => {

const[isActive, setIsActive] = useState(false)

  return (
    <div>
        <div className='accordion-item '>
    <div className="accordion-question d-flex justify-content-between" onClick={()=> setIsActive(!isActive)}>
      <div className='fw-bold'>{question}</div>
      <div className='active'>{isActive ? "-" : "+"}</div>
    </div>
    {isActive && <div className="accordion-answer">
      <div className='text-secondary'>{answer}</div>
    </div> }

  </div>
    </div>
  )
}

export default Accordion