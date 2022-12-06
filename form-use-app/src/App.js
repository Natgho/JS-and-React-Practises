import logo from './logo.svg';
import './App.css';
import {useFormik} from "formik";

function App() {
    const formik = useFormik(
        {
            initialValues: {
                firstName: '',
                lastName: '',
                email: '',
                checked: [],
            },
            onSubmit: values => {
                console.log(values)
            }
        }
    )
    return (
        <div className="App">
            <h1>Sign Up</h1>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    placeholder="Jane"/>
                <br/>
                <br/>

                <label htmlFor="lastName">Last Name</label>
                <input
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    placeholder="Doe"/>
                <br/>
                <br/>

                <label htmlFor="email">Email</label>
                <input
                    name="email"
                    placeholder="jane@acme.com"
                    type="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
                <div role="group" aria-labelledby="checkbox-group">
                    <label>
                        <input type="checkbox" name="checked" value="One" onChange={formik.handleChange}/>
                        One
                    </label>
                    <label>
                        <input type="checkbox" name="checked" value="Two" onChange={formik.handleChange}/>
                        Two
                    </label>
                    <label>
                        <input type="checkbox" name="checked" value="Three" onChange={formik.handleChange}/>
                        Three
                    </label>
                </div>
                <br/>
                <br/>
                <button type="submit">Submit</button>
                <br/>
                <br/>
                <code>
                    <pre>
                        {JSON.stringify(formik.values)}
                    </pre>
                </code>
            </form>
        </div>
    );
}

export default App;
