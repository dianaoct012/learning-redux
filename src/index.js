import store from "./redux/store";
import { addProduct, removeProduct, updateProductDiscount } from './redux/productSlice'
import { addToCart, removeFromCart } from './redux/cart'

store.subscribe(()=> {
    console.log('Store Changed', store.getState())
})

store.dispatch(addProduct({
    name: "",
    price: 300
}))

store.dispatch(removeProduct({
    productId: 1
}))

store.dispatch(changeUser({
    name: "diana"
}))
