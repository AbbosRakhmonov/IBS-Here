import React, {useState} from 'react'
import {map, uniqueId} from 'lodash'

function ReadMore({children}) {
    const text = children
    const [isReadMore, setIsReadMore] = useState(() => {
        return text[0]?.length > 150 || text[1]?.length > 150
    })
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore)
    }
    return (
        <p className="text-base font-open-sans text-text-inactive pr-[1.3rem]">
            {isReadMore ? text[0].slice(0, 150) + '...' : map(text, (item) => <span key={uniqueId('desc_')}
                                                                                    className={`${text.length > 1 ? 'inline-block mb-[1rem]' : ''}`}>{item}</span>)}
            <span onClick={toggleReadMore}
                  className="cursor-pointer text-button-green text-sm">
        {isReadMore ? ' read more' : ' show less'}
      </span>
        </p>
    )
}

export default ReadMore