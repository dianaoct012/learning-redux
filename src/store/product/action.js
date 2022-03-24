import * as actions from './actionTypes';

/**
 * 
 * @param {name, price, hasDiscount} product 
 * @returns 
 */
export function productAdded(product = {}){
    return {
        type: actions.ADD_PRODUCT,
        payload: {
            name: product.name ? product.name : null,
            price: product.price ? product.price : null
        }
    }
}

/**
* @param { id } params
* @returns
*/
export const productRemoved = params => ({
  type: actions.PRODUCT_REMOVED,
  payload: {
      id : params.id,
  }
  });
