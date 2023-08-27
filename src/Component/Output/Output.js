import React, { useEffect, useState } from 'react'
import 'react-redux'
import { useSelector } from 'react-redux'
function Output() {
    let outPut = useSelector((y) => y)
    const [Res, setRes] = useState(0)
    const [QNo, setQNO] = useState(25)
    useEffect(() => {
        outPut.map((item) => setRes(item.C))
        setQNO(outPut.length)
    }, [])
    return (
        <div>
            <div className="text-center h1 bg-success text-white ">Your Result:{` 
            ${Res}
            out of ${QNo}`}
            </div>
            {
                outPut.map((item) =>
                    <div className="card m-2 border p-3 bg-danger ">

                        <div className="card-title shadow border ">
                            Question: {item.Q}
                        </div>
                        <div className="card-text ">
                            Selected: {item.S}
                        </div>
                        <div className="card-text">
                            Output: {item.R}
                        </div>
                    </div>
                )
            }
        </div>
    )
}
export default Output
