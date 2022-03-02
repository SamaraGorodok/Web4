import {makeAutoObservable} from "mobx";


class ArrayValues{

    values = []
    constructor() {
        makeAutoObservable(this)
    }

    set(values2){
        this.values=values2
    }
    push(value) {
        this.values.push(value)
    }


}
const DataValue = new ArrayValues()
export default DataValue
