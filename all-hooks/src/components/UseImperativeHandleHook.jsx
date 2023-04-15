import React, { useImperativeHandle, useState } from 'react'



import { forwardRef } from 'react'
// the forwardref allows it to accept a reference from a parent

const UseImperativeHandleHook = forwardRef((props , ref ) => {
    // the ref is the reference from the parent element
    // the props are the resources from the parent element
    const [toggle , setToggle] = useState(false)


    useImperativeHandle(ref , () => ({
        // returns an object

        alterToggle(){
            setToggle(!toggle);
        },
    }));

    /*
    useImperativeHandle hook changes the state of the child state 
    when the state is defined in the child compoenent 
    */

    /* the reference will be able to be called from the parent component */


    return (
        <div>   
            <button>Button from Child</button>
            {toggle && <h2>This is a text</h2>}
        </div>
    )
})

export default UseImperativeHandleHook
