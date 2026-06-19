import { useState } from 'react';
import {WindowHandler} from './WindowHandler.tsx';
import './Window.css';

interface WindowProps {
  x:     number,
  y:     number,
  w:     number,
  h:     number,
  title: string,
  id:    string,
  onfocus: (handler: WindowHandler) => void, 
};

const Window: React.FC<WindowProps> = (props: WindowProps) => {
  const [maximized, setMaximized] = useState(false);

  const [mouseDown, setMouseDown] = useState(false);
  const [mouseDownPos, setMouseDownPos] = useState([]);

  const [oldPos, setOldPos] = useState([props.x, props.y]);
  const [oldSize, setOldSize] = useState([props.w, props.h]);

  const [pos, setPos] = useState([props.x, props.y]);
  const [size, setSize] = useState([props.w, props.h]);

  function onMax() {
    if (maximized) {
      onMin();
    } else {
      setMaximized(true);
      setPos([0,0]);
      setSize(["100%", "100%"]);
    }
  }

  function onMin() {
    if (maximized) {
      setPos(oldPos);
      setSize(oldSize);
      setMaximized(false);
    } else {
      // TODO: hide window
    }
  }

  function onExit() {
    if (document.getElementById(props.id) != null)
      document.getElementById(props.id).remove();
  }

  function onTitleMouseUp(e: ReactEvent) {
    if (e.button === 0)
      setMouseDown(false);
  }

  function onTitleMouseDown(e: ReactEvent) {
    if (e.button === 0) {
      setMouseDown(true);
      setMouseDownPos([e.clientX, e.clientY]);
    }
  }

  function onTitleMouseMove(e: ReactEvent) {
    if (mouseDown) {
      var x = pos[0]+e.movementX;
      var y = pos[1]+e.movementY;
      if (x < 0)
        x = 0;
      if (y < 0)
        y = 0;
      
      setPos([x, y]); 
      setOldPos([x, y]); 
    }
  }

  function onTitleMouseLeave(e: ReactEvent) {
    setMouseDown(false);
  }

  return (
    <div id={props.id} className="window" style={ {left: `${pos[0]}px`, top: `${pos[1]}px`, width: `${size[0]}`, height: `${size[1]}` }} onMouseDown={() => props.onfocus(props.id)}>
      <div className="window_title" onMouseLeave={onTitleMouseLeave} onMouseDown={onTitleMouseDown} onMouseUp={onTitleMouseUp} onMouseMove={onTitleMouseMove}>
        <button className="window_button" onClick={onExit} style={{top: `0px`, float: `right`}}>
          <img style={{filter: `invert(100%)`}} width={20} src='https://invent.kde.org/frameworks/breeze-icons/-/raw/master/icons/actions/16/window-close.svg?ref_type=heads'/>
        </button>
        <button className="window_button" onClick={onMax} style={{top: `0px`, float: `right`}}>
          <img style={{filter: `invert(100%)`}} width={20} src='./window_maximize.svg' />
        </button>
        <button className="window_button" onClick={onMin} style={{top: `0px`, float: `right`}}>
          <img style={{filter: `invert(100%)`}} width={20} src='./window_minimize.svg'/>
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

export { WindowProps, Window};
