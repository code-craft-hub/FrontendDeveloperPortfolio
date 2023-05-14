import React from 'react';

const Heading = ({title,subtitle}) => {
  return (
    <>
      <div className='headding'>
        <h2>{title}</h2>
        <span>{subtitle}</span>
      </div>
    </>
  )
}

export default Heading;
