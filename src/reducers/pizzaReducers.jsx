export const getAllPizzasReducer = (state={pizzas: []}, action ) => {
    switch( action.type )
    {
        case 'GET_PIZZAS_REQUEST': return {
            loading: true,
            ...state
        }
        case 'GET_PIZZAS_SUCCESS': return {
            loading: false,
            pizzas: action.payload
        }
        case 'GET_PIZZAS_FAILED': return {
            error: action.payload ,
            loading: false
        }
        default: return state
    }
}

export  const editProductReducer = (state={}, action ) => {
    switch( action.type )
    {
        case 'EDIT_PRODUCT_REQUEST': return {
            loading: true
        }
        case 'EDIT_PRODUCT_SUCCESS': return {
            loading: false,
            success: true
        }
        case 'EDIT_PRODUCT_FAILED': return {
            
            loading: false,
            error: action.payload 
        }
        default: return state
    }
}

export  const deleteProductReducer = (state={}, action ) => {
    switch( action.type )
    {
        case 'DELETE_PRODUCT_REQUEST': return {
            loading: true
        }
        case 'DELETE_PRODUCT_SUCCESS': return {
            loading: false,
            success: true
        }
        case 'DELETE_PRODUCT_FAILED': return {
            
            loading: false,
            error: action.payload 
        }
        default: return state
    }
}