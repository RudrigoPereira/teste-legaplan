"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "./logo.svg";
import styles from "./header.module.scss";

const formatDate = () => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("pt-BR", {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    });

    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
};

export default function Header() {
    const [userName, setUserName] = useState("Visitante");

    useEffect(() => {
        const storedName = localStorage.getItem("userName");

        if (!storedName) {
            const userNamePrompt = prompt("Qual é o seu nome?");
            if (userNamePrompt) {
                localStorage.setItem("userName", userNamePrompt); 
                setUserName(userNamePrompt); 
            }
        } else {
            setUserName(storedName); 
        }
    }, []);

    return (
        <header className={styles.header}>
            <Image
                src={logo}
                alt="Next.js logo"
                width={150}
                height={36}
            />
            <h1>Bem-vindo de volta, {userName}</h1>
            <p>{formatDate()}</p>
        </header>
    )
}