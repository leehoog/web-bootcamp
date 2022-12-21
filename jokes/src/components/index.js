import { useState, React } from "react"
import "../orderForm.css"


const option = [
    {
        label: "Rice",
        value: "rice"
    },
    {
        label: "Applepie",
        value: "applePie"
    }
]

const INITIALSTATE = { orderNumber: "", customerName: "", dish: option[0].value }

export const OrderForm = () => {
    const [newOrder, setNewOrder] = useState(INITIALSTATE);
    const [orders, setOrders] = useState([])
    console.log(newOrder)
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("submit")
        setOrders((prevState) => prevState.concat(newOrder))
        // Lägg till valideering
    }
    console.log(orders)
    const handleInputOnchange = (event) => {
        setNewOrder((prevState) => ({ ...prevState, [event.target.name]: event.target.value }))
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="orderNumberInput">Order number</label>
                <input
                    required
                    id="orderNumberInput"
                    value={newOrder.orderNumber}
                    name="orderNumber"
                    onChange={handleInputOnchange} />
                name="orderNumber"
                <label htmlFor="orderNumberInput">Customer namer</label>
                <input
                    id="orderNumberInput"
                    value={newOrder.customerName}
                    onChange={handleInputOnchange} />
                <label htmlFor="orderNumberInput">Dish</label>
                <input
                    id="orderNumberInput"
                    value={newOrder.dish}
                />
                <label htmlFor="orderNumberInput">Order number</label>
                <select id="orderNumberInput">
                    {option.map(
                        (option) => <option key={option.value} value={option.value}>{option.label}</option>
                    )}
                </select>
                <button type="submit">Save</button>
            </form>
            {orders.map(order => <div>{order.orderNumber}</div>)}
        </div>

    )
}