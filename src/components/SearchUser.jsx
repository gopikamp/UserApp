import React, { useState } from 'react'
import { NavBar } from './NavBar'

const SearchUser = () => {
    const [data, setData] = useState(
        {
            "id": ""
        }
    )
    const inputHamdler = (event) => {
        setData({ ...data, [event.target.name]: EventTarget.value })
    }
    const readvalue = () => {
        console.log(data)
    }
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className='form-label'>ID</label>
                                <input type="text" className='form-control' name="id" value={data.id} onChange={inputHamdler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readvalue}>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchUser