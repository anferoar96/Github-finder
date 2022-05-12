import React from 'react'
import Spinner from './assets/spinner.gif'

function spinner() {
  return (
    <div className='w-100 mt-20'>
      <img  width={180} 
            src={Spinner} 
            className="text-center mx-auto"
            alt="Loading ..." />
    </div>
  )
}

export default spinner
