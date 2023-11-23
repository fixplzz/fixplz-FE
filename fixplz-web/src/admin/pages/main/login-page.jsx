import React, { useState } from "react";
import axios from "axios";
import "../../../admin/assets/scss/login-page.scss"

const LoginPage = () => {
    const [adminId, setAdminId] = useState("");
    const [adminPassword, setAdminPassword] = useState("");

    const handleInputChange = (e) => {
        if (e.target.name === "adminId") {
            setAdminId(e.target.value);
        }
        if (e.target.name === "adminPassword") {
            setAdminPassword(e.target.value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8080/admin/login", {
                adminId: adminId,
                adminPassword: adminPassword,
            });
            console.log(response.data);
            alert("로그인 성공!");
        } catch (error) {
            console.error(error);
            alert("로그인 실패: ");
        }
    };

    return (
        <>
            <div className="logo-container">
                <div className="logo">
                    <img src="/assets/imgs/whitelogo.png" alt="메인로고" width="300px" />
                </div>
            </div>
            <div className="container">
                <div className="login-container">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="아이디를 입력해 주세요"
                            name="adminId"
                            value={adminId}
                            onChange={handleInputChange}
                        />
                        <input
                            type="password"
                            placeholder="비밀번호를 입력해 주세요"
                            name="adminPassword"
                            value={adminPassword}
                            onChange={handleInputChange}
                            autoComplete="off"
                        />
                        <button className="opacity" type="submit">
                            로그인
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
