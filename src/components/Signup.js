import React, { useState } from 'react';

export const Signup = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    })
    const handleChange = name => e => {
        // change the state here
        setValues({ ...values, error: false, success: true, [name]: e.target.value })
    }
    return (
        <form className="container">
            <div className="form-group">
                Name: <input type="text" className="form-control" onChange={handleChange('name')} />
            </div>
            <div className="form-group">
                Email: <input type="text" className="form-control" onChange={handleChange('email')} />
            </div>
            <div className="form-group">
                Password: <input type="password" className="form-control" onChange={handleChange('password')} />
            </div>
            <div className="form-group">
                <button className="btn btn-warning">Submit</button>
            </div>
            {JSON.stringify(values)}
        </form>
    )
}