// import { TextField} from '@mui/material';
import React, { } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField } from '@mui/material';
import './App.css'

const App = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Email is required'),
            password: Yup.string().required('Password is required').min(6,'Use at least 6 characters'),
        }),
        onSubmit: (values) => {
            console.log("form summited",values);
        }
    });
    return (
        <div class='login-main-box'>
            <form id="login_l"  onSubmit={formik.handleSubmit}>
              <div class='lgl_'> <h1>Login</h1></div>
                      <div class="google-btnl_">
                   <div class="google-icon-wrapperl_">
                     <img class="google-iconl_" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                    </div>
                     <p class="btn-textl_">Sign up with Google</p>
                    </div>
                    <div class='orl_'> <ul>---------------------or----------------------</ul></div>
                     <div class='abl_'>
                    <TextField id="outlined-basic1l_" label="Email" variant="outlined"
                        name="email"
                        type='email'
                        size="small"
                        value={formik.values.email}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        // error={Boolean(formik.errors.email)}
                        // helperText={formik.errors.email}
                        helperText={formik.touched.email && formik.errors.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}/>
                 </div>
                 <div class='abl_'>

                    <TextField id="outlined-basic2l_" 
                    label="Password"
                    variant="outlined"
                    name="password"
                    type='password'
                    size="small"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password} 
                    />
                    </div>
                <input type="submit" value="Submit" />
                <div class='fogl_'><a href="#">Forgot password?</a></div>
                <div class="register-linkl_">
                 <p>Don't have an account? <a href="#">Register</a></p>
                 </div>
            </form >
        </div>
    )
}
export default App;