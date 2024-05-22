import React, { useState } from 'react'

const Input = () => {
    const [checkedItems,setCheckedItems]=useState({})    
    const items=['b.tech','mba','bba','bca']
     const changeHandler=(event)=>{
        event.preventDefault()
        setCheckedItems({...checkedItems,[event.target.name]:event.target.checked})          
     }
  return (
    <>
    {items.map((data,key)=>(
        <label key={data}>
            <input type='checkbox' name={data} checked={!!checkedItems[data]} onChange={changeHandler}/>
            {data}
        </label>        
    ))}
    <div>
        {console.log('checkeditems',checkedItems)}
        <div>
        <h3>Selected Options:</h3>
        <ul>
          {Object.keys(checkedItems).map(
            (item) =>
              checkedItems[item] && (
                <li key={item}>{item}</li>
              )
          )}
        </ul>
      </div>
    </div>
    </>
  )
}

export default Input