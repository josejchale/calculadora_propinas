import { useCallback } from "react"
import { OrderItems } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order: OrderItems[]
    tip: number,
    placeOrder: ()=>void
}

export default function OrderTotals({ order, tip, placeOrder}: OrderTotalsProps) {


    const subtotalAmount = useCallback(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])
    const tipAmount = useCallback(() => subtotalAmount() * tip, [tip, order])
    const totalAmount = useCallback(() => subtotalAmount() + tipAmount(), [tip, order])


    return (
        <>
            <div className="space-y-2">

                <h2 className="font-black">Totales y Propina:</h2>
                <p>
                    Subtotal a pagar: {''}
                    <span className="font-bold">{formatCurrency(subtotalAmount())}</span>
                </p>

                <p>
                    Propina: {''}
                    <span className="font-bold">{formatCurrency(tipAmount())}</span>
                </p>

                <p>
                    Total a pagar: {''}
                    <span className="font-bold">{formatCurrency(totalAmount())}</span>
                </p>


            </div>
            <button
            className="w-full bg-black p-3 uppercase text-white font-bold mt-10
            disabled:opacity-10 rounded-lg"
            disabled={totalAmount() === 0}
            onClick={placeOrder}
            >
                Guardar orden
            </button>
        </>
    )
}
