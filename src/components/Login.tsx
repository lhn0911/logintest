import React, { useState } from 'react';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    const handleSignInClick = () => {
        setShowLogin(true);
    };

    const handleSignIn = (event) => {
        event.preventDefault();
        // Code xử lý đăng nhập giữ nguyên
        // Simulate login success for demonstration purposes
        setTimeout(() => {
            setErrorMessage('');
            setSuccessMessage(true);
        }, 1000);
    };

    const handleHomeRedirect = () => {
        window.location.href = 'index.html';
    };

    return (
        <div
            style={{
                backgroundImage: 'url(https://phunugioi.com/wp-content/uploads/2020/03/hinh-anh-doremon-cute.jpg)',
                backgroundSize: 'cover',
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {/* Overlay */}
            {showLogin && (
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Màu đen với độ mờ 0.5 (có thể điều chỉnh)
                        zIndex: 1000, // Đảm bảo overlay nằm dưới bảng đăng nhập
                    }}
                ></div>
            )}

            {!showLogin && (
                <button
                    onClick={handleSignInClick}
                    style={{
                        padding: '10px 20px',
                        fontSize: '16px',
                        backgroundColor: '#45b6fe',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        zIndex: 1001, // Đảm bảo nút đăng nhập luôn hiển thị trên overlay
                    }}
                >
                    Đăng nhập
                </button>
            )}

            {showLogin && !successMessage && (
                <form
                    className="square"
                    onSubmit={handleSignIn}
                    style={{
                        padding: '20px',
                        borderRadius: '10px',
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        zIndex: 1001, // Đảm bảo bảng đăng nhập luôn hiển thị trên overlay
                    }}
                >
                    <div className="container">
                        <span className="material-symbols-outlined">lock</span>
                        <a style={{ fontSize: '18px', marginBottom: '10px' }}>Sign in</a>
                        <div>
                            <label htmlFor="email"></label>
                            <input
                                className="child"
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email Address*"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password"></label>
                            <input
                                className="child"
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password*"
                                required
                            />
                        </div>
                        <div className="box">
                            <div>
                                <input type="checkbox" id="rememberMe" />
                            </div>
                            <div>
                                <span className="text">Remember me</span>
                            </div>
                        </div>
                        <button
                            id="signInButton"
                            type="submit"
                            style={{
                                width: '280px',
                                backgroundColor: '#4545f7',
                                padding: '10px',
                                border: 'none',
                                borderRadius: '5px',
                                color: 'white',
                                fontSize: '16px',
                                cursor: 'pointer',
                            }}
                        >
                            SIGN IN
                        </button>
                        <div className="item">
                            <a href="./password.html">
                                <p id="message" style={{ fontSize: '10px', color: 'rgba(65, 65, 255, 0.63)' }}>
                                    Forgot password
                                </p>
                            </a>
                            <a href="./register.html">
                                <p
                                    id="message"
                                    style={{
                                        fontSize: '10px',
                                        color: 'rgba(65, 65, 255, 0.63)',
                                        marginLeft: '65px',
                                    }}
                                >
                                    Don't have an account? Sign up
                                </p>
                            </a>
                        </div>
                        {errorMessage && <p style={{ fontSize: '10px', color: 'red' }}>{errorMessage}</p>}
                    </div>
                </form>
            )}

            {successMessage && (
                <div
                    className="success-message"
                    id="successMessage"
                    style={{
                        textAlign: 'center',
                        backgroundColor: 'white',
                        padding: '20px',
                        borderRadius: '10px',
                        zIndex: 1001, // Đảm bảo thông báo thành công luôn hiển thị trên overlay
                    }}
                >
                    <p>Đăng nhập thành công!</p>
                    <button
                        className="home-button"
                        id="homeButton"
                        onClick={handleHomeRedirect}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: '#4545f7',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            marginTop: '10px',
                        }}
                    >
                        Home
                    </button>
                </div>
            )}
        </div>
    );
};

export default LoginPage;