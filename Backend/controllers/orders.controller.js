import Order from "../model/order.model.js"


export const getSingleOrder = async (request, response) => {
    const { userId } = request.params

    const order = await Order.find({ userId })

    if (!order) {
        return response.status(404).send({ error: "Something is wrong" })
    }

    response.status(201).send(order)
}

export const getOrders = async (request, response) => {

    const orders = await Order.find()

    if (!orders) {
        return response.status(404).send({ error: "Orders is not found" })
    }


    return response.status(201).send(orders)
}

export const addOrder = async (request, response) => {
    const { totalPrice, orderItems, shippingAdress } = request.body
    const { _id: userİd } = request.user

    for (const value of Object.values(shippingAdress)) {
        console.log(value);
    }
}

