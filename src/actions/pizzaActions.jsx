import axios from "axios";

export const getAllPizzas = () => async dispatch => {
    dispatch({type: 'GET_PIZZAS_REQUEST'})

    try {
        const response = await axios.get('http://localhost:8000/api/pizza/allpizza')
        console.log(response)
        dispatch({type: 'GET_PIZZAS_SUCCESS', payload: response.data})
    } catch (error) {
        dispatch({type: 'GET_PIZZAS_FAILED', payload: error})
    }
}

//admin: pizza => product

// export const editProduct = (product, productId) => async dispatch => {
//     dispatch({type: 'EDIT_PRODUCT_REQUEST'})
//     console.log(product, productId)
//     try {
//         await axios.patch(`http://localhost:8000/api/admin/editproduct/${productId}`,
//             product
//         )
//         dispatch({type: 'EDIT_PRODUCT_SUCCESS'})
        
//     } catch (error) {
//         console.log(error)
//         dispatch({type: 'EDIT_PRODUCT_FAILED', payload: error})
//     }
// }


// export const deleteProduct = (productId) => async dispatch => {
//     dispatch({type: 'DELETE_PRODUCT_REQUEST'})

//     try {
//         await axios.delete(`http://localhost:8000/api/admin/deleteproduct/${productId}`)
//         dispatch({type: 'DELETE_PRODUCT_SUCCESS'})
        
//     } catch (error) {
//         console.log(error)
//         dispatch({type: 'DELETE_PRODUCT_FAILED', payload: error})
//     }
// }

// export const addProduct = (product) => async dispatch => {
//     dispatch({type: 'ADD_PRODUCT_REQUEST'})

//     try {
//         await axios.post('http://localhost:8000/api/admin/addproduct', product)
//         dispatch({type: 'ADD_PRODUCT_SUCCESS'})
        
//     } catch (error) {
//         console.log(error)
//         dispatch({type: 'ADD_PRODUCT_FAILED', payload: error})
//     }
// }