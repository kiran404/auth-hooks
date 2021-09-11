import React, { useState } from "react";


export const Signin = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        success: false
    })
    const handleChange = (name) => (e) => {
        // change the states here

        setValues({ ...values, error: false, success: true, [name]: e.target.values })
    }
    return (
        <form className="container">
            <div className="form-group">
                Email: <input type="text" className="form-control" onChange={handleChange('name')} />
            </div>
            <div className="form-group">
                Password: <input type="password" className="form-control" onChange={handleChange('password')} />
            </div>
            <div className="form-group">
                <button className="btn btn-primary">Login</button>
            </div>
            {JSON.stringify(values)}
        </form>
    )
}