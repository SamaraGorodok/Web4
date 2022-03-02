import {React, useEffect, useState} from "react";
import {ToastContainer, toast} from "react-toastify";
import {$} from "jquery"




import 'react-toastify/dist/ReactToastify.css'
// eslint-disable-next-line no-unused-vars
import AxesValues from "../../../Store/AxesValues"
import authAPI from "../../../API/authAPI";
import entriesAPI from "../../../API/entriesAPI";
import ArrayValues from "../../../Store/ArrayValues";
import {observer} from "mobx-react";
import Dots from "../Graphic/Dots";



const CheckModules = observer( function CheckModules(props, xVal) {
    // ArrayValues.values=entriesAPI.getEntriesRequest()
    // const AxesValues = new AxesValues
    const [yDirty, setyDirty] = useState(false)
    const [y, setY] = useState('')
    const [yError, setYError] = useState("y can't be empty")


    const notify = () => toast("Done! ✅ ")
    const clearNotif = () => toast("Cleared! ✅ ")
    // const ArrayX = [-2, -1.5, -1, , -0.5, 0, 0.5, 1, 1.5, 2]
    let i = -1


    const clear = () =>{
        clearNotif()
        entriesAPI.clearEntriesRequest()
    }


    // const arrayWorker = (i) => {
    //     i += 1
    //     return (
    //         <div>
    //             <input type="checkbox" id={i} value={ArrayX[i]}/>
    //             <label htmlFor={i}>{i}</label>
    //         </div>
    //
    //     )
    //
    // }

    const xChecker = (event) => {
        let x = (event.target.value)
        AxesValues.x = (event.target.value)
        console.log(x)
    }

    const yChecker = (event) => {
        setY(event.target.value)


        if (event.target.value < -3 || event.target.value > 5) {
            setYError("y is out of range")

        } else if (isNaN(event.target.value)) {
            setYError("y is not a number")
        } else {
            AxesValues.y = event.target.value
            console.log(AxesValues.y)
            setYError("")
        }
    }

    const rChecker = (event) => {
        let r = (event.target.value)
        AxesValues.r = (event.target.value)
        console.log(r)
    }


    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'y':
                setyDirty(true)
                break
        }
    }

    const sendData = () => {
        notify()
        entriesAPI.checkEntryRequest(AxesValues.x, AxesValues.y, AxesValues.r)
    }


    const allowUncheck = (e) => {
        try {


            if (this.previous) {
                this.checked = false
            }
            document.querySelectorAll(
                'input[type=radio][name=${this.name}]'
            ).forEach((elem) => {
                elem.previous = elem.checked;
            })
        }catch (e) {
            
        }
    }
    document.querySelectorAll(
        'input[type=radio][name=x_val]'
    ).forEach((elem) => {
        elem.addEventListener('click', allowUncheck)
        elem.previous = elem.checked
    })

    const allowUncheckR = (e) => {
        try{
        if (this.previous) {
            this.checked = false
        }
        document.querySelectorAll(
            'input[type=radio][name=${this.name}]'
        ).forEach((elem) => {
            elem.previous = elem.checked;
        })}
        catch (e){

        }

    }
    document.querySelectorAll(
        'input[type=radio][name=r_val]'
    ).forEach((elem) => {
        elem.addEventListener('click', allowUncheckR)
        elem.previous = elem.checked
    })
    let entries = [{id: 0, x: 0, y: 0, r: 1, inArea: "test", workTime: "test"}];

    function getentr() {
        return entries;
    }



    // let [entriesArr, setEntriesArr] = useState(entryAPI.getAll());
    // let updateEnt = (val)=>{
    //     setEntriesArr(val)
    // }


    let [entriesArr, setEntriesArr] = useState(ArrayValues.values);


    useEffect(() => {
        // console.log(ArrayValues.values)
        entriesAPI.getEntriesRequest(setEntriesArr, entriesArr)

    },[])


    let result = ArrayValues.values.slice().reverse().map((entr) => {
        return (
            <tr key={entr.id}>
                <td>{entr.x}</td>
                <td>{entr.y}</td>
                <td>{entr.r}</td>
                <td>{entr.inArea ? "yes" : "no"}</td>
                <td>{entr.workTime}</td>
            </tr>
        );
    });






    return (


        <div>
            <div className="xFields">
                <table>
                    <tbody>
                    <tr>
                        <td>
                            <h2>X</h2>
                        </td>
                        <td>
                            <div>
                                <input onClick={xChecker} name="x_val" type="radio" id="x-2" value="-2"/>
                                <label htmlFor="x-2">-2</label>

                                <input onClick={xChecker} name="x_val" type="radio" id="x-1.5" value="-1.5"/>
                                <label htmlFor="x-1.5">-1.5</label>

                                <input onClick={xChecker} name="x_val" type="radio" id="x-1" value="-1"/>
                                <label htmlFor="x-1">-1</label>

                                <br/>

                                <input onClick={xChecker} type="radio" name="x_val" id="x-0.5" value="-0.5"/>
                                <label htmlFor="x-0.5">-0.5</label>

                                <input onClick={xChecker} type="radio" name="x_val" id="x0" defaultChecked="defaultChecked" value="0"/>
                                <label htmlFor="x0">-0</label>

                                <input onClick={xChecker} type="radio" name="x_val" id="x0.5" value="-0.5"/>
                                <label htmlFor="x0.5">0.5</label>

                                <br/>

                                <input onClick={xChecker} type="radio" name="x_val" id="x1" value="1"/>
                                <label htmlFor="x1">1</label>

                                <input onClick={xChecker} type="radio" name="x_val" id="x1.5" value="1.5"/>
                                <label htmlFor="x1.5">1.5</label>

                                <input onClick={xChecker} type="radio" name="x_val" id="x2" value="2"/>
                                <label htmlFor="x2">2</label>
                                <br/>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>


            <div className="yFields">
                <table>
                    <tbody>
                    <tr>
                        <td>
                            <h2>Y</h2>
                        </td>
                        <td>
                            {(yDirty && yError) && <div style={{color: "red"}}>{yError}</div>}
                            <input onChange={e => (yChecker(e))} onBlur={e => blurHandler(e)} value={y} type="text"
                                   id="y" name="y" className="form-control" placeholder="-3...5"/>
                        </td>

                    </tr>
                    </tbody>
                </table>
            </div>

            <table>
                <tbody>
                <tr>
                    <td>
                        <h2>R</h2>
                    </td>
                    <td>
                        <div>
                            <input onClick={rChecker} name="r_val" type="radio" id="r-2" value="-2"/>
                            <label htmlFor="r-2">-2</label>

                            <input onClick={rChecker} name="r_val" type="radio" id="r-1.5" value="-1.5"/>
                            <label htmlFor="r-1.5">-1.5</label>

                            <input onClick={rChecker} name="r_val" type="radio" id="r-1" value="-1"/>
                            <label htmlFor="r-1">-1</label>

                            <br/>

                            <input onClick={rChecker} name="r_val" type="radio" id="r-0.5" value="-0.5"/>
                            <label htmlFor="r-0.5">-0.5</label>

                            <input onClick={rChecker} name="r_val" defaultChecked="defaultChecked" type="radio" id="r0" value="0"/>
                            <label htmlFor="r0">0</label>

                            <input onClick={rChecker} name="r_val" type="radio"  id="r0.5" value="0.5"/>
                            <label htmlFor="r0.5">0.5</label>

                            <br/>

                            <input onClick={rChecker} name="r_val" type="radio" id="r1" value="1"/>
                            <label htmlFor="r1">1</label>

                            <input onClick={rChecker} name="r_val" type="radio" id="r1.5" value="1.5"/>
                            <label htmlFor="r1.5">1.5</label>

                            <input onClick={rChecker} name="r_val" type="radio" id="r2" value="2"/>
                            <label htmlFor="r2">2</label>
                            <br/>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
            {/*<button onClick={function () {*/}
            {/*    console.log({entriesArr}*/}
            {/*    )}}>zxcxzc</button>*/}
            <button onClick={sendData}>Send</button>
            <button onClick={clear}>Clear</button>
            {/*<button onClick={entriesAPI.getEntriesRequest}>TEST</button>*/}
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>x</th>
                            <th>y</th>
                            <th>r</th>
                            <th>result</th>
                            <th>workTime</th>
                        </tr>
                    </thead>
                    <tbody>
                    {result}
                    </tbody>
                </table>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
})
export default CheckModules