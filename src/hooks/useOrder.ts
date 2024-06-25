import { useState } from "react"
import type { MenuItems, OrderItems } from "../types"


export default function useOrder() {

    const [order,setOrder]=useState<OrderItems[]>([])
    const [tip, setTip]=useState(0)
    


    //Añadir items
const addItem=(item : MenuItems) => {
    
    const itemExist = order.find(orderItem => orderItem.id === item.id)

    if (itemExist) {
        const updateOrder = order.map ( orderItem => orderItem.id === item.id ?
            {...orderItem,quantity:orderItem.quantity+1} : 
            orderItem)
        setOrder(updateOrder)
    }else{
        const newItem = {...item, quantity:1}
        setOrder([...order, newItem])
    }


}

const removeItem=(id: MenuItems['id']) =>{
    setOrder(order.filter(item=> item.id != id))
}

const placeOrder=()=>{
setOrder([])
setTip(0)
}

return {
    order,
    tip,
    setTip,
    addItem,
    removeItem,
    placeOrder,
}
}
