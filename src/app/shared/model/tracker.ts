import { Label } from "./label";
import { Value } from "./value";

export class Tracker {
    constructor(public labels: Label[], public cumulativeValues: Value[], public newValues: Value[]) { }
    static adapt(item: any): Tracker {
        return new Tracker(item.labels, item.cumulativeValues, item.newValues);
    }
}
