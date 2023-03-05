import React, {useEffect, useState} from 'react';
import styles from '../Register/register.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {validata} from "../elements/validate";


const Login = () => {


    const [data , setData] = useState({
        email:'',
        password:'',
    });

    const [focus , setFocus] = useState({
        email: false,
        password: false,
    })

    const [active , setActive] = useState({
        email: false,
        password: false,
    })

    const [errors , setErrors] = useState({})

    const valueHandeler = (event) => {
            setData({...data , [event.target.name] : event.target.value})
    }

    const focusHandeler = (event) => {
        setFocus({...focus , [event.target.name] : true})
    }

    const blurHandeler = (event) => {
        setFocus({...focus , [event.target.name] : false})
        setActive({...active , [event.target.name] : true})
    }


    const formHandeler = (e) => {
        e.preventDefault()
        const validate = Object.keys(errors)
        if (validate.length > 1){
            setActive({
                email: true,
                password: true,
            })
            toast.error('Signing Filed', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });

        }else {
            toast.success('Signing successful', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }



    useEffect(() => {
        setErrors(validata(data , "login"))
    } , [data])


    return (
        <div className={`container mt-3 text-light ${styles.registerBox}`}>
            <div className={"container-fluid"}>
                <div className={"row d-flex align-items-center justify-content-center"}>
                    <form onSubmit={formHandeler} className={`bg-dark rounded-4 shadow d-flex align-items-center justify-content-center flex-column py-3 ${styles.formBox}`}>
                        <h2>Login</h2>

                        <div className={styles.inputBox}>
                            <div className={styles.nameLabelBox}>
                                <label className={focus.email || data.email !== '' ? styles.nameLabelFocus : styles.nameLabelBlur}>Email</label>
                            </div>
                            <input type={"text"} name={"email"} className={`input-group-text w-100 bg-dark ${styles.nameInput}`} value={data.email} onChange={valueHandeler} onFocus={focusHandeler} onBlur={blurHandeler}/>
                            {errors.email && active.email ? <span>{errors.email}</span> : ''}
                        </div>

                        <div className={styles.inputBox}>
                            <div className={styles.nameLabelBox}>
                                <label className={focus.password || data.password !== '' ? styles.nameLabelFocus : styles.nameLabelBlur}>Password</label>
                            </div>
                            <input type={"password"} name={"password"} className={`input-group-text w-100 bg-dark ${styles.nameInput}`} value={data.password} onChange={valueHandeler} onFocus={focusHandeler} onBlur={blurHandeler}/>
                            {errors.password && active.password ? <span>{errors.password}</span> : ''}
                        </div>

                        <div className={styles.inputBox}>
                            <button className={"m-auto d-block btn btn-success mt-5"}>Login</button>
                        </div>

                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>

    );
};

export default Login;