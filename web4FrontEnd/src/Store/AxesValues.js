import {makeAutoObservable} from "mobx";


class AxesValues{
    x = 0
    y = 0
    r = 0
    constructor() {
        makeAutoObservable(this)
    }
    setX(x){
        this.x = x
    }
    setY(y){
        this.y = y
    }
    setR(r){
        this.r = r
    }

}
const DataValue = new AxesValues()
export default DataValue
