import React, { useEffect, useState } from 'react'
import './Login.css'




interface Response {
    code: number
}


function Login() {
    const [username, ChangeUserName] = useState<string>('')
    const [password, ChangePassword] = useState<string>('')
    const [res, changeRes] = useState<Response | any>()
    const [color, changeColor] = useState<string>('transparent')
    async function sendData(username: string, password: string) {
        const user = {
            email: username,
            password: password
        }
        try {
            const response = await fetch('http://localhost:3500/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            if (response.ok) {
                const data = await response.json()
                return data
            } else {
                throw new Error('Network response was not OK');
            }
        }
        catch (error) {
            throw error
        }


    }



    function NameInput(e: string) {
        ChangeUserName(e)
    }
    function PasswordInput(e: string) {
        ChangePassword(e)
    }
    async function Login() {
        if (username.length > 0 && password.length > 0) {
            const data = await sendData(username, password)
            changeRes(data)

            if (!res) {
                console.log(res);
            } else {
                console.log("is this working ? ");

                if (res.code = 500) {
                    changeColor('#f10404');
                    setTimeout(() => {
                        changeColor('transparent')
                    }, 500);
                }
            }
        }
    }
    return (
        <div className='maxPage'>
            <div className='loginBox'>
                <div className='box1'>
                    <div className='text'>
                        <p style={{ color: '#FDFDFD', fontSize: '18px' }}>ha, Here you are again !</p>
                        <p style={{ color: '#B9BABD', fontSize: '15px' }}>We are so happy to see you</p>
                    </div>
                </div>
                <div className='box2'>
                    <div className='box22'>
                        <div style={{ margin: "0px" }}>
                            <p><b>email or phone number</b></p>
                            <input
                                style={{ borderColor: `${color}` }}
                                value={username}
                                className='input'
                                onChange={(e) => NameInput(e.target.value)}
                            />
                        </div>
                        <p><b>password</b></p>
                        <input
                            style={{ borderColor: `${color}` }}
                            value={password}
                            className='input'
                            type='password'
                            onChange={(e) => PasswordInput(e.target.value)

                            }
                        />
                        <a><p style={{ color: '#8395E7' }} className='pLast'>Forgot your password?</p></a>
                        <button className='button' onClick={Login} >
                            connection
                        </button>
                        <a><p >U dont have account ? <span style={{ color: '#8395E7' }} className='pLast'>register</span></p></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login

