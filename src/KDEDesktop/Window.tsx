import { useState } from 'react';
import './Window.css';

interface WindowProps {
  x: number,
  y: number,
  w: number,
  h: number,
  title: string,
};

const Window: React.FC<WindowProps> = (props: WindowProps) => {
  return (
    <div className="window" style={ {left: `${props.x}px`, top: `${props.y}px`, width: `${props.w}px`, height: `${props.h}px` }} >
      <div className="window_title">
        <button className="window_button" style={{top: `0px`, float: `right`}}>
          <img style={{filter: `invert(100%)`}} width={20} src='https://invent.kde.org/frameworks/breeze-icons/-/raw/master/icons/actions/16/window-close.svg?ref_type=heads'/>
        </button>
        <p>{props.title}</p>
      </div>

      <div className="window_surface">
        <p>

          Hello, my name is Alison Rasnic. I am an aspiring Java Backend/Full-stack software engineer with 15+ years of personal hobby-ist experience. Currently, I work at McDonald's to pay the bills and in my free time, I work on keeping up my programming skills and recreationally programming for fun. I primarily use HTML, HTML5, CSS, JavaScript, TypeScript, React, Tailwind, Spring & Spring Boot, MySQL or PostgreSQL, Redis, GCS, Docker & Kubernetes, Windows and Linux.
          <br />This is my KDE Plasma Desktop-based portfolio to highlight my 15+ year journey up to now. Have fun!

        </p>
      </div>
    </div>
  );
};

export {Window};
