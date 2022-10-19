import OrderItem from './OrderItem';

export default class Order {
    private _custormer: string;
    private _totalPrice: number;
    private _finalPrcie: number;
    private _createdAt: Date;
    private _deliveryAddress: string;
    private _state: string;
    private _items: Array<OrderItem>;

    constructor(customer: string, totalPrice: number, finalPrice: number, createdAt: Date, deliveryAddress, state: string, items: Array<OrderItem>) {
        this._custormer = customer
        this._totalPrice = totalPrice
        this._finalPrcie = finalPrice
        this._createdAt = createdAt
        this._deliveryAddress = deliveryAddress
        this._state = state
        this._items = items
    }

    public customer(): string {
        return this._custormer;
    }

    public totalPrice(): number {
        return this._totalPrice;
    }

    public finalPrcie(): number {
        return this._finalPrcie;
    }
    public createdAt(): Date {
        return this._createdAt;
    }
    public deliveryAddress(): string {
        return this._deliveryAddress;
    }
    public state(): string {
        return this._state;
    }
    public items(): Array<OrderItem> {
        return this._items;
    }

    public cancel(): void {
        this._state = "cancel";
    }

}
