import React, {useEffect, useRef, useState} from 'react';
import styles from './register.module.css';


const Register = () => {

    const [nameFocus , setNameFocus] = useState({focus:false, value: '',});
    const [emailFocus , setEmailFocus] = useState({focus:false, value: '',});
    const [passwordFocus , setPasswordFocus] = useState({focus:false, value: '',});
    const [cpasswordFocus , setCPasswordFocus] = useState({focus:false, value: '',});


    return (
        <div className={`container mt-3 text-light ${styles.registerBox}`}>
            <div className={"container-fluid"}>
                <div className={"row d-flex align-items-center justify-content-center"}>
                    <div className={`bg-dark rounded-2 shadow d-flex align-items-center justify-content-center flex-column py-3 ${styles.formBox}`}>
                        <h2>Register</h2>
                        <div className={styles.inputBox}>
                            <div className={styles.nameLabelBox}>
                                <label className={nameFocus.focus || nameFocus.value !== '' ? styles.nameLabelFocus : styles.nameLabelBlur}>Name</label>
                            </div>
                            <input type={"text"} className={`input-group-text w-100 bg-dark ${styles.nameInput}`} value={nameFocus.value} onChange={event => setNameFocus({...nameFocus , value:event.target.value})} onFocus={() => setNameFocus({...nameFocus ,focus:true})} onBlur={() => setNameFocus({...nameFocus , focus:false})}/>
                            <span>Name is required</span>
                        </div>

                        <div className={styles.inputBox}>
                            <div className={styles.nameLabelBox}>
                                <label className={emailFocus.focus || emailFocus.value !== '' ? styles.nameLabelFocus : styles.nameLabelBlur}>Email</label>
                            </div>
                            <input type={"email"} className={`input-group-text w-100 bg-dark ${styles.nameInput}`} value={emailFocus.value} onChange={event => setEmailFocus({...emailFocus , value:event.target.value})} onFocus={() => setEmailFocus({...emailFocus ,focus:true})} onBlur={() => setEmailFocus({...emailFocus , focus:false})}/>
                            <span>Email is required</span>
                        </div>

                        <div className={styles.inputBox}>
                            <div className={styles.nameLabelBox}>
                                <label className={passwordFocus.focus || passwordFocus.value !== '' ? styles.nameLabelFocus : styles.nameLabelBlur}>Password</label>
                            </div>
                            <input type={"password"} className={`input-group-text w-100 bg-dark ${styles.nameInput}`} value={passwordFocus.value} onChange={event => setPasswordFocus({...passwordFocus , value:event.target.value})} onFocus={() => setPasswordFocus({...passwordFocus ,focus:true})} onBlur={() => setPasswordFocus({...passwordFocus , focus:false})}/>
                            <span>Password is required</span>
                        </div>

                        <div className={styles.inputBox}>
                            <div className={styles.nameLabelBox}>
                                <label className={cpasswordFocus.focus || cpasswordFocus.value !== '' ? styles.nameLabelFocus : styles.nameLabelBlur}>Confirm Password</label>
                            </div>
                            <input type={"text"} className={`input-group-text w-100 bg-dark ${styles.nameInput}`} value={cpasswordFocus.value} onChange={event => setCPasswordFocus({...cpasswordFocus , value:event.target.value})} onFocus={() => setCPasswordFocus({...cpasswordFocus ,focus:true})} onBlur={() => setCPasswordFocus({...cpasswordFocus , focus:false})}/>
                            <span>ConfirmPassword is required</span>
                        </div>

                        <div className={`mt-3 ${styles.checkbox}`}>
                            <label className={"opacity-50"}>Accept All Law</label>
                            <input className={"form-check-input"} type={"checkbox"}/>
                        </div>
                        <span className={styles.span}>Law is required</span>

                        <div className={styles.inputBox}>
                            <button className={"m-auto d-block btn btn-success mt-5"}>Signin</button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;