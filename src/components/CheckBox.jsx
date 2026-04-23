import React from 'react'

function CheckBox(props) {
    const { children, id, ...rest } = props
    return (
        <>					
            <input type="checkbox" id={`chk-${id}`} className='todo__check' {...rest} />
            <label htmlFor={`chk-${id}`} className='todo__label'>{children}</label>
        </>
    )
}

export default CheckBox