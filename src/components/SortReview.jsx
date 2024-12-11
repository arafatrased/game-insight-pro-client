import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const SortReview = () => {
  return (
    <div className='App'>
      <h1
        style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}
      >
        Sight On {' '}
        <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Play', 'Games', 'Review', 'Insight!']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
    </div>
  )
}

export default SortReview;