import React from 'react'

const ProgressBar = ({totalPoints, completedPoints}) => {
    const progressPercentage = totalPoints > 0 
    ? Math.round((completedPoints / totalPoints) * 100) 
    : 0;
  return (
    <div className="progress-bar-wrapper">
      <p>{completedPoints} out of {totalPoints} done!</p>
      <div className="progress-bar">
        <div
          className="progress"
          style={{
            width: `${progressPercentage}%`,
            backgroundColor: 'green',
            height: '15px',
          }}
        ></div>
      </div>
    </div>
  )
}

export default ProgressBar