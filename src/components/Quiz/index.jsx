import React from 'react'
import './Quiz.scss'
import Test from './Test/Test';

function Quiz() {

    return (
        <>
            <div className='quiz' style={{ marginTop: '60px' }}>
                <p> Историческое личности</p>
                <hr />
                <Test />
                <div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div>
            </div>
            <div className='quiz'>
                <p> Историческое памятники</p>
                <hr />
  <div className="card"></div>
  <div className="card"></div>
            </div>
        </>
    )
}

export default Quiz;