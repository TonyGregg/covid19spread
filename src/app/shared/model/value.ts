export class Value {
    constructor(public value: number) {}
    static adapt(item: any): Value {
        return new Value(item.value);
    }
}
