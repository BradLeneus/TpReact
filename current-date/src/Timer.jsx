import React from "react";
import { useEffect, useState } from "react";

function CurrentTime() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setCount((count) => count + 1);
        }, 1000)

        return () => {
            clearInterval(timer);
        }
    }, []);


    return (
        <h1>Current date : {count.getSeconds()} ,{count.getDay},{count.getFullYear()}  </h1>
    );
} export default CurrentTime