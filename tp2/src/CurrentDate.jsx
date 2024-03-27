import React from "react";
import { useEffect, useState } from "react";

function CurrentDate() {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000)

        return () => {
            clearInterval(timer);
        }
    }, []);


    return (
        <h1> {date.getDay()}/ {date.getMonth()} /{date.getFullYear()}  </h1>
    );
} export default CurrentDate