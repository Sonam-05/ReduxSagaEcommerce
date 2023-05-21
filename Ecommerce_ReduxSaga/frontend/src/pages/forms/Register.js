import React, { useState, useEffect } from 'react'
import '../../styles/register.css'
// import { message } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
// import { addUser } from '../../redux/action';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout';
import { addUser } from '../../redux/allActions/action';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [contact, setContact] = useState("");
    const [address, setAddress] = useState("");
    const [sport, setSport] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const data = useSelector((state) => state.userReducer);

    //functions start
    //submitFunc
    const submitFunc = (e) => {
        e.preventDefault();
        dispatch(addUser({ name, email, password, contact, address, sport }));
        afterSubmit();
    }

    function afterSubmit() {
        if (data) {
            console.log(data);
            if (data?.message) {
                // message.success(data.message)
                alert(data?.message);
                navigate('/login');
            } else {
                alert(data?.message);
            }
        }
    }

    useEffect(() => {
        afterSubmit();
    }, [data])

    return (
        <Layout>
            <div className='registerBigContainer'>
                {/* {data && console.log(data)} */}
                <form className='registerForm' onSubmit={submitFunc} >
                    <div className="commonInputContainer">
                        <label className='commonLabelClass' htmlFor="userName">UserName : </label>
                        <input className="commonInputClass" type="text" name="name" id="userName" value={name} onChange={(e) => { setName(e.target.value) }} required />
                    </div>
                    <br />

                    <div className="commonInputContainer">
                        <label className='commonLabelClass' htmlFor="userEail">Email : </label>
                        <input className="commonInputClass" type="email" name="" id="userEail" value={email} onChange={(e) => { setEmail(e.target.value) }} required />
                    </div>
                    <br />

                    <div className="commonInputContainer">
                        <label className='commonLabelClass' htmlFor="userPassword">Password : </label>
                        <input className="commonInputClass" type="password" name="" id="userPassword" value={password} onChange={(e) => { setPassword(e.target.value) }} required />
                    </div>
                    <br />

                    <div className="commonInputContainer">
                        <label className='commonLabelClass' htmlFor="userContact">Contact : </label>
                        <input className="commonInputClass" type="text" name="" id="userContact" value={contact} onChange={(e) => setContact(e.target.value)} required />
                    </div>
                    <br />

                    <div className="commonInputContainer">
                        <label className='commonLabelClass' htmlFor="userAddress">Address : </label>
                        <input className="commonInputClass" type="text" name="" id="userAddress" value={address} onChange={(e) => { setAddress(e.target.value) }} required />
                    </div>
                    <br />

                    <div className="commonInputContainer">
                        <label className='commonLabelClass' htmlFor="userSport">Favourite Sport : </label>
                        <input className="commonInputClass" type="text" name="" id="userSport" value={sport} onChange={(e) => { setSport(e.target.value) }} required />
                    </div>
                    <br />

                    <div className="submitContainer">
                        <button className='btn btn-primary' type="submit">Submit</button>
                        <Link to={'/login'}>Already a user | SignIn</Link>
                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default Register
