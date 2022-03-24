import store from "./redux/store";
import { addProduct, removeProduct, updateProductDiscount } from './redux/productSlice'

store.subscribe(()=> {
    console.log('Store Changed!', store.getState())
})

store.dispatch(addProduct({
    name: "",
    price: 300
}))

store.dispatch(updateProductDiscount({
    productId: 2,
    discount: 15
}))

store.dispatch(removeProduct({
    productId: 1
}))
