import React, { useEffect } from 'react';

function SignUpForm() {
    const handleSignUp = (event:any) => {
        event.preventDefault();
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const termsCheckbox = document.getElementById('termsCheckbox');

        // Kiểm tra độ dài mật khẩu
        const passwordLength = password.length;

        if (passwordLength < 5) {
            document.getElementById('passwordError').style.display = 'block';
            return; // Dừng xử lý tiếp theo nếu mật khẩu không đủ dài
        } else {
            document.getElementById('passwordError').style.display = 'none';
        }

        // Kiểm tra định dạng email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            document.getElementById('emailError').style.display = 'block';
            return; // Dừng xử lý tiếp theo nếu email không hợp lệ
        } else {
            document.getElementById('emailError').style.display = 'none';
        }

        if (firstName && lastName && email && password && termsCheckbox.checked) {
            if (email === 'admin@gmail.com') {
                alert('Email admin@gmail.com cannot be used.');
                return; // Dừng xử lý tiếp theo nếu email là admin@gmail.com
            }
            const formDataArray = JSON.parse(localStorage.getItem('formDataArray')) || [];
            const emailExists = formDataArray.some((data) => data.email === email);
            if (emailExists) {
                alert('Email đã tồn tại!');
            } else {
                const formData = {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password,
                    cart: [],
                    id: Math.floor(Math.random() * 9),
                    lock: 'no',
                };
                formDataArray.push(formData);
                localStorage.setItem('formDataArray', JSON.stringify(formDataArray));
                document.getElementById('message').innerText = 'Đăng kí thành công, chuyển tới trang đăng nhập';
            }
        } else {
            alert('Vui lòng điền đầy đủ thông tin và đảm bảo đồng ý với điều khoản!');
        }
    };

    return (
        <form className="square" onSubmit={handleSignUp}>
            <div className="container">
                <span className="material-symbols-outlined">lock</span>
                <a style={{ fontSize: '18px', marginBottom: '10px' }}>Sign up</a>
                <div>
                    <label htmlFor="firstName"></label>
                    <input className="input" type="text" id="firstName" name="firstName" placeholder="First name*" required />
                    <label htmlFor="lastName"></label>
                    <input className="input" type="text" id="lastName" name="lastName" placeholder="Last name*" required />
                </div>
                <div>
                    <label htmlFor="email"></label>
                    <input className="child" type="email" id="email" name="email" placeholder="Email Address*" required />
                    <p id="emailError" style={{ color: 'red', fontSize: '10px', display: 'none' }}>Email không hợp lệ!</p>
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <input className="child" type="password" id="password" name="password" placeholder="Password*" required />
                    <p id="passwordError" style={{ color: 'red', fontSize: '10px', display: 'none' }}>Mật khẩu phải có ít nhất 5 ký tự!</p>
                </div>
                <div className="box">
                    <div><input type="checkbox" id="termsCheckbox" required /></div>
                    <div>
                        <span className="text">Agree to terms and services</span><br />
                        <span className="text"></span>
                    </div>
                </div>
                <button type="submit" id="signUpButton" style={{ width: '220px', backgroundColor: 'rgb(69, 69, 247)' }}>
                    <span style={{ fontSize: '10px', color: 'white' }}>SIGN UP</span>
                </button>
                <a href="#">
                    <p id="message" style={{ fontSize: '10px', color: 'rgba(65, 65, 255, 0.63)', marginLeft: '75px' }}>Already have an account?Sign in</p>
                </a>
                <p style={{ fontSize: '10px' }}> Coppyright &copy; <a href="">YourWebsite</a> 2024.</p>
            </div>
        </form>
    );
}

export default SignUpForm;
