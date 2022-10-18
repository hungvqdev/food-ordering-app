import React from 'react'
import { data } from '../../constants'
import { SubHeading, MenuItem } from '../../components';

const Menu = () => {
  return (
    <div className='app__bg section__padding ' id="menu">
        <div className="app__Menu-title  flex__center text-center">
            <div className=''>
            <SubHeading title="Thực đơn phù hợp với bạn" />
           <h1 className="headtext__cormorant">Today&apos;s Special</h1>
            </div>
           
        </div>
        <div className='row'>
            {data.pizzas.map(pizza => {
                return (
                    <div className='col-lg-4 col-md-6 col-sm-12'>            
                    <MenuItem pizza={pizza}/>
                    </div>
                )
                
            })}
        </div>    
    </div>
  )
}

export default Menu