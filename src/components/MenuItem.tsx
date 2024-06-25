import { MenuItems } from "../types"

type MenuItemProps = {
    item: MenuItems
    addItem: (item:MenuItems) => void //! Esta función no retorna nada

}


export default function MenuItem({item,addItem}: MenuItemProps) {
    return (
        <button className="border-2 rounded-md border-teal-400 hover:bg-teal-200 w-full p-2 flex justify-between"
        onClick={()=>addItem(item)}
        >
        
        <p>{item.name}</p>
        <p className="font-black">${item.price}</p>
        
        </button>
    )
}
