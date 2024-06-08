import { useState } from "react";

function Counter({initialCount})
{
    const iCount = initialCount > 0 ? initialCount : 0;
    const iRed = iCount < 11 ? false : true;

    let[count,setCount] = useState(iCount);
    let [isRed, setIsRed] = useState(iRed); 

    function toggleTextColor()
    {
        setIsRed(!isRed); 
        if(count == 0)
        {
            setIsRed(false);
        }
    }

    function incrementCount()
    {
        if(count < 20)
        {
            if(count == 10)
            {
                toggleTextColor();
            }
            setCount(prevCount => prevCount + 1);
            
        }
    }

    function decrementCount()
    {
        if(count > 0)
        {
            if(count == 11)
            {
                toggleTextColor();
            }
            setCount(prevCount => prevCount - 1);
        }
    }

    function resetCount()
    {
        setCount(iCount);
        toggleTextColor();
    }

    return(
        <div style={{margin:'50px'}}>
            <div>initialCount : {iCount} &nbsp;&nbsp;&nbsp;</div>
            <br></br>
            <button onClick={decrementCount}>-</button>
            <span style={{ color: isRed == true ? 'red' : 'black' }}>&nbsp;&nbsp;&nbsp;Current Value : {count} &nbsp;&nbsp;&nbsp;</span>
            <button onClick={incrementCount}>+</button>
            <button  onClick={resetCount} style={{display:(count == iCount ? "none" : ""),marginLeft:'50px'}}>Reset</button>
        </div>
       
    );
}

export default Counter;