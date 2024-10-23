import { useEffect, useState } from "react";
import Header from "../components/Header";
import { emailAuth, verifyToken } from "../appwrite/authentication";
import db from "../appwrite/databases";
import { useCode } from "../contexts/CodeContext";
import { useNavigate } from "react-router-dom";

export default function Verify() {

    const { codeObj, setShareUrl, canShare } = useCode();

    useEffect(() => {
        if (!canShare) {
            navigate("/");
        }
    }, []);

    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [userId, setUserId] = useState("");

    const navigate = useNavigate();

    async function sendOTP(e) {
        e.preventDefault();
        console.log("Email: ", email);
        const emailRegex = /^[a-zA-Z0-9._-]{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email.");
            return;
        }
        console.log("Sending OTP...")
        const userId = await emailAuth(email);
        console.log("OTP sent.");
        setUserId(userId);
    }

    async function verifyOTP(e) {
        e.preventDefault();
        const otpRegex = /^[0-9]{6}$/;
        if (!otpRegex.test(otp)) {
            alert("Invalid OTP");
            return;
        }
        const response = await verifyToken(userId, otp);
        if (!response) {
            alert("Invalid OTP");
            return;
        }
        generateShareUrl();
    }

    async function generateShareUrl() {
        const response = await db.shareCode.createDocument(codeObj);
        if (!response) {
            alert("Error generating share link. Try again after sometime.");
        } else {
            const shareUrl = `${window.location.origin}/share/${response.$id}`;
            setShareUrl(shareUrl);
            console.log("Share_URL=", shareUrl);
        }
        navigate("/");
    }

    return (
        <>
            <Header />
            <div className="w-full h-[80vh] flex flex-col items-center justify-center p-5">
                <div className="bg-blue-50 rounded-lg p-5 text-center w-full md:w-[400px]">
                    <h2 className="font-bold">Verify to generate sharable link</h2>
                    <div className="flex flex-col bg-black/10 rounded-lg shadow-lg p-5 px-2 m-5 text-sm md:text-base">
                        <form className="flex flex-col" onSubmit={sendOTP}>
                            <input
                                autoFocus
                                className="my-2 rounded-lg outline-none px-4 py-1 font-sans"
                                spellCheck="false"
                                type="email"
                                placeholder="example@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button
                                className="bg-blue-300 disabled:bg-blue-200 rounded-lg py-1"
                            >Send OTP</button>
                        </form>
                        <form className="flex flex-col" onSubmit={verifyOTP}>
                            <input
                                className="my-2 rounded-lg outline-none px-4 py-1 font-sans tracking-widest"
                                spellCheck="false"
                                type="number"
                                placeholder="000000"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                            />
                            <button
                                // disabled={otp.length < 6}
                                className="bg-blue-300 disabled:bg-blue-200 rounded-lg py-1"
                            >Verify and generate link</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}