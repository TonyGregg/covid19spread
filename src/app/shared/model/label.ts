export class Label {
    constructor(public label: String) {}
    static adapt(item: any): Label {
        return new Label(item.label);
    }
}
