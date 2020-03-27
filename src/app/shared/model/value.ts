export class Value {
    constructor(public value: String) {}
    static adapt(item: any): Value {
        return new Value(item.value);
    }
}
