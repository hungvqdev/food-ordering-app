import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';

const MenuItem = ({pizza}) => {
    const [ quantity, setQuanity ]  = useState(1)
    const [ varient, setVarient ]   = useState('small')

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div style={{margin: "30px"}} className='shadow-lg p-3 mb-5 bg-white rounded '>
        <div onClick={handleShow}>
            <p className='p__cormorant color_p text-center' style={{ color: '#222222'}}>{pizza.name}</p>
            <img src={pizza.image} alt={pizza.name} className="img-fluid app__wrapper_info" style={{height:"280px", width:"280px"}} />
        </div>
        <div className='d-flex'>
            <div className='w-100 m-1'>
            <p className="p__opensans mt-2 p__menuItem" style={{ color: '#222222'}}>Kích cỡ</p>
                <select className='form-select' value={varient} onChange={(e) =>{setVarient(e.target.value)}}>
                    {pizza.varients.map(varient => {
                        return (
                            <option value={varient}>{varient}</option>
                        )
                    })}
                </select>
                
            </div>
            <div className='w-100 m-1'>
                <p className="p__opensans mt-2 p__menuItem" style={{ color: '#222222'}}>Số Lượng</p>

                <select className='form-select' value={quantity} onChange={(e) =>{setQuanity(e.target.value)}}>
                    {[...Array(10).keys()].map((x , i) => {
                        return (
                            <option value={i+1}>{i+1}</option>
                        )
                    })}
                </select>
            </div>
        </div>
        <div className='d-flex justify-content-between'>
      
            <div className=' m-1'>
                <p className='p__cormorant color_p mt-2' style={{ color: '#222222'}}>Giá: {pizza.prices[0][varient] * quantity}đ</p>
            </div>

            <div className='  m-1'>
                <button className='custom__button'>Thêm vào giỏ</button>
            </div>
        </div>         
        
        <Modal show={show} onHide={handleClose} className="modal__Menuitem ">
      <Modal.Header closeButton>
        <Modal.Title><p className='p__cormorant color_p text-center' style={{ color: '#222222'}}>{pizza.name}</p></Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p className='text-center'><img src={pizza.image} alt={pizza.name} className="img-fluid app__wrapper_info" style={{height:"350px", width:"350px"}} /></p>
      
      </Modal.Body>
      <Modal.Footer>  
       <p className='p__opensans' style={{ color: '#222222'}}>{pizza.description}</p>
      </Modal.Footer>
    </Modal>                

    </div>
  )
}

export default MenuItem