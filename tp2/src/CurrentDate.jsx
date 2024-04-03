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
        <div class="container text-center">
        <div class="row">
          <div class="col">
          <i class="arrow left"></i>
          </div>
          <div class="col">
          <h1> {date.getDay()}/ {date.getMonth()} /{date.getFullYear()}  </h1>
          </div>
          <div class="col">
          <i class="arrow right"></i>
          </div>
        </div>
      </div>
    );
} export default CurrentDate