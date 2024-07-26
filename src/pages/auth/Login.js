import React, { useState } from 'react';
import logo from '../../assets/images/logo.svg'
import logoDark from '../../assets/images/logohorizontal.svg'
import Textinput from '../../components/inputs/Textinput';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import IconInput from '../../components/inputs/IconInput';
import { useNavigate } from 'react-router-dom';
import logoBg from '../../assets/images/loginBg.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    function handleSubmit() {
        localStorage.setItem('token', "thisisatoken");
        navigate('/')
    }
    return (
        <div className='h-screen w-full flex flex-row'>
            <div className={`bg-green-500 h-full w-[50%] xl:w-[50%] flex items-center justify-center `}
                style={{ backgroundImage: `url(${logoBg})`,backgroundSize:'contain', backgroundRepeat:'no-repeat', backgroundPosition: "center" }}
            >
                <div className='w-full h-full flex items-center justify-center'>
                    <img src={logo} alt='Athlink' className='w-[261px] h-[155px]' />
                </div>
            </div>
            <div className='h-full w-[50%] xl:w-[50%] flex items-center justify-center'>
                <div className='w-full xl:w-[80%]  px-12'>
                    <img src={logoDark} alt='Athlink log' className='w-40 h-12' />
                    <div className=' py-8 w-full mx-auto'>
                        <h1 className='font-bold text-3xl my-2'>Sign In to your Account</h1>
                        <p className='text-base text-[#808D9E]'>Welcome back! please enter your detail</p>
                        <div className=' flex flex-col gap-5 pt-8 pb-4 '>
                            <Textinput placeholder={'Email'} onchange={setEmail} stateValue={email} />
                            <IconInput placeholder={'Password'} onchange={(value) => { setPassword(value) }} stateValue={password} />
                        </div>
                        <div className=' flex flex-row gap-4 ps-1 items-center mb-5'>
                            <input type='checkbox' className='w-5 h-5' />
                            <h1 className='font-medium text-sm '>Remember me</h1>
                        </div>
                        <div>
                            <PrimaryButton title={'Login'} round={'full'} width={'100%'} fill={true} fillColor={'blue'} onclick={handleSubmit} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
