import Order from "./Order";
import OrderItem from "./OrderItem";

export default class OrderBuilder {
    private _custormer: string;
    private _totalPrice: number;
    private _finalPrcie: number;
    private _createdAt: Date;
    private _deliveryAddress: string;
    private _state: string;
    private _items: Array<OrderItem>;
    private _order?: Order;

    private constructor(order?: Order) {
        this._order = order;
    }
    public static anOrder(order?: Order): OrderBuilder {
        return new OrderBuilder(order);
    }
    public withCustomer(customer: string): OrderBuilder {
        this._custormer = customer;
        return this;
    }
    public withAddress(deliveryAddress: string): OrderBuilder {
        this._deliveryAddress = deliveryAddress;
        return this;
    }

    public build(): Order {
        return new Order(
            this._custormer || this._order?.customer() as string,
            this._totalPrice || this._order?.totalPrice() as number,
            this._finalPrcie || this._order?.finalPrice() as number,
            this._createdAt || this._order?._createdAt() as Date,
            this._deliveryAddress || this._order?.deliveryAddress(),
            this._state || this._order?.state(),
            this._items || this._order?.items(),
        );
    }


}