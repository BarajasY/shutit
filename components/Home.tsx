"use client"
import React, { useState, useEffect } from "react";
import style from "../styles/home.module.css";
import { invoke } from "@tauri-apps/api/tauri";

const Home: React.FC = () => {

  const [Hours, setHours] = useState(0);
  const [Minutes, setMinutes] = useState(0);
  const [Seconds, setSeconds] = useState(0);
  const [Active, setActive] = useState(false);

  useEffect(() => {
    {
      Active
        ? setTimeout(() => {
            if (Seconds === 0 && Minutes !== 0) {
              setSeconds(59);
              setMinutes(Minutes - 1);
            } else if (Seconds === 0 && Minutes === 0 && Hours !== 0) {
              setSeconds(59);
              setMinutes(59);
              setHours(Hours - 1);
            } else {
              setSeconds(Seconds - 1);
            }
            if (Seconds === 0 && Minutes === 0 && Hours === 0) {
              setActive(!Active);
              invoke('shut_down');
            }
          }, 1000)
        : null;
    }
  }, [Hours, Minutes, Seconds, Active]);

  return (
    <div className={style.homeContainer}>
      <h1>Set time interval</h1>
      <div className={style.setTimeContainer}>
        <section>
          <h1>Hours</h1>
          <input
            type="text"
            pattern="[0-9]*"
            onChange={(e) => setHours(Number(e.target.value))}
          />
        </section>
        <section>
          <h1>Minutes</h1>
          <input
            type="text"
            pattern="[0-9]*"
            onChange={(e) => setMinutes(Number(e.target.value))}
          />
        </section>
        <section>
          <h1>Seconds</h1>
          <input
            type="text"
            pattern="[0-9]*"
            onChange={(e) => setSeconds(Number(e.target.value))}
          />
        </section>
      </div>
      <button onClick={() => setActive(!Active)}>Start</button>
      <section className={style.timerCountdown}>
        <article>
          <h1>{Hours<10 ? `0${Hours}` : Hours}:{Minutes<10 ? `0${Minutes}` : Minutes}:{Seconds<10 ? `0${Seconds}` : Seconds}</h1>
        </article>
      </section>
    </div>
  );
};

export default Home;