import React from 'react';
import {useFormik} from "formik";
import userSchema from "./validators";

function Signup(props) {
    const formik = useFormik(
        {
            initialValues: {
                name: '',
                surname: '',
                password: '',
                confirmPassword: '',
            },
            onSubmit: (values) => {
                console.log(values)
            },
            validationSchema: userSchema,
        })
    return (
        <div>
            <h1>Signup Form</h1>
            <form onSubmit={formik.handleSubmit} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                <div className="block-display">
                    <label>Name:</label>
                    <input type="text" name='name' value={formik.values.name}/>
                    {formik.errors.name && formik.touched.name && (<div className="errors">{formik.errors.name}</div>)}
                </div>
                <div className="block-display">
                    <label>Surname:</label>
                    <input type="text" name='surname' value={formik.values.surname}/>
                    {formik.errors.surname && formik.touched.surname && (<div className="errors">{formik.errors.surname}</div>)}
                </div>
                <div className="block-display">
                    <label>Password:</label>
                    <input type="text" name='password' value={formik.values.password}/>
                    {formik.errors.password && formik.touched.password && (<div className="errors">{formik.errors.password}</div>)}

                </div>
                <div className="block-display">
                    <label>Confirm Password:</label>
                    <input type="text" name='confirmPassword' value={formik.values.confirmPassword}/>
                    {formik.errors.confirmPassword && formik.touched.confirmPassword && (<div className="errors">{formik.errors.confirmPassword}</div>)}

                </div>
                <button type="submit">Register</button>
            </form>
            <code>
                <pre>
                    {JSON.stringify(formik.values)}
                </pre>
            </code>
        </div>
    );
}

export default Signup;