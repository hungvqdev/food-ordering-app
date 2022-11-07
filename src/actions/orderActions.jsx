import axios from "axios";
export const placeOrder=(token , totalCart)=>async (dispatch , getState)=>{


    dispatch({type:'PLACE_ORDER_REQUEST'})
    const currentUser = getState().loginUserReducer.currentUser
    const cartItems = getState().cartReducer.cartItems
    
    try {

       const response = await axios.post('http://localhost:8000/api/pizza/placeorder' , {token , totalCart , currentUser , cartItems})
       dispatch({type:'PLACE_ORDER_SUCCESS'})
       localStorage.removeItem('cartItems')
       window.location.href='/ordersuccess'
       console.log(response);
        
    } catch (error) {
      dispatch({type:'PLACE_ORDER_FAILED'})
        console.log(error);
        
    }
}

export const getUserOrders = () => async (dispatch, getState) => {
  const currentUser = getState().loginUserReducer.currentUser
    dispatch({type: 'GET_USER_ORDERS_REQUEST'})

    try {
        const response = await axios.post('http://localhost:8000/api/pizza/userorders', {userId: currentUser._id})
        console.log(response)
        dispatch({type: 'GET_USER_ORDERS_SUCCESS', payload: response.data})
    } catch (error) {
        dispatch({type: 'GET_USER_ORDERS_FAILED', payload: error})
    }
}
