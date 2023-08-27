
import './home.css'
import { useState } from 'react'
import JsQ25 from '../Questions/JavaScriptQuesion.json'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { JsQ } from '../Redux/Action'
import { useNavigate } from 'react-router-dom'
function JsHome() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [QNo, SetQ] = useState(0)
    const [Correct, SetCorrect] = useState(0)
    const [CurrQ, SetCurrQ] = useState(JsQ25[0])
    // Selected
    const [SelectOut, SetSelectOut] = useState("")
    const [StoreQ, SetStoreQ] = useState([])
    useEffect(() => {
        if (QNo == JsQ25.length) {
            dispatch(JsQ(StoreQ))
            navigate('/output')
        }
        if (QNo <= 0) {
            SetCurrQ(JsQ25[0])
            SetQ(0)
        }
        else if (QNo >= JsQ25.length - 1) {
            SetCurrQ(JsQ25[JsQ25.length - 1])
            SetQ(JsQ25.length - 1)
        }
        else {
            SetCurrQ(JsQ25[QNo])
        }
    }, [QNo])
    const Selected = (ans) => {

        if (ans == CurrQ.Currect) {
            SetCorrect(Correct + 1)

            SetSelectOut(ans)

        } else {
            SetSelectOut(ans)

        }

    }

    // const Submit = () => {
    //     dispatch(JsQ(StoreQ))
    //     navigate('/output')
    // }

    const NextBtn = () => {
        SetStoreQ([...StoreQ, {
            Q: CurrQ.Question,
            S: SelectOut,
            R: CurrQ.Currect,
            C: Correct
        }])
    }
    return (
        <div>
            <div className="container-md">
                <header className='d-flex justify-content-between align-items-center bg-primary p-3 text-white '  >
                    <div>JS Quiz</div>
                    <div> Question: {QNo + 1} Of 25 </div>
                </header>
                <div className=" question-area h1">
                    <div className="h1"> {CurrQ.Question} </div>
                </div>
                <div className="output bg-warning p-3 ">
                    <div className='select-ans' onClick={() => {
                        {
                            Selected(CurrQ.Opt[0])
                            // SetQ(QNo + 1)
                            // NextBtn()
                        }
                    }}   >{CurrQ.Opt[0]}</div>
                    <div className='select-ans' onClick={() => {
                        Selected(CurrQ.Opt[1])
                        // SetQ(QNo + 1)
                        // NextBtn()
                    }}    >{CurrQ.Opt[1]}</div>
                    <div className='select-ans' onClick={() => {
                        Selected(CurrQ.Opt[2])
                        // SetQ(QNo + 1)
                        // NextBtn()
                    }}    >{CurrQ.Opt[2]}</div>
                    <div className='select-ans' onClick={() => {
                        Selected(CurrQ.Opt[3])
                        // SetQ(QNo + 1)
                        // NextBtn()
                    }}    >{CurrQ.Opt[3]}</div>
                </div>
            </div>
            <div className="text-center ">
                {/* <div className="btn btn-outline-danger m-1" onClick={() => Submit()} >Submit Now!</div> */}
                <div className="btn btn-outline-success m-1" onClick={() => {
                    SetQ(QNo + 1)
                    NextBtn()
                }
                }>Next</div>
            </div>
        </div >
    )
}
export default JsHome