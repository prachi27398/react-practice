import React from 'react'

const StyleButton = () => {
    const isDisabled =  false;
  return (
    <div>
      <h1>Welcome to CSS page in React</h1>
      <button disabled={isDisabled} style={{borderStyle:"none",background:"gray",padding:"12px",borderRadius:"3px"}} className='refresh-button'>Refresh</button>
    </div>
  )
}

export default StyleButton
