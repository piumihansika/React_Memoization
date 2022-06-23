//Child.js
import React from 'react';

const Child= ({value, child}) => {
    console.log('Render: ', child)
  
    return (
      <div>
        {child}: {value}
      </div>
    )
  }
  
  export default React.memo(Child)