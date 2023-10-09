import React from 'react'
import list from '../data'
import './cart.css'
import Cards from './Cards'

const Amazon = ({handleClick}) => {
  return (
    <div>
    <section>
    {
        list.map((item) => (
            <Cards item={item} key={item.id} handleClick={handleClick}/>
        ))
    }
    </section>
    </div>
  )
}

export default Amazon