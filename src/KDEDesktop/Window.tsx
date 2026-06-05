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
        {props.title}
        <button className="window_button" style={{float: `right`}}>
          <img style={{filter: `invert(100%)`}} width={20} src='https://invent.kde.org/frameworks/breeze-icons/-/raw/master/icons/actions/16/window-close.svg?ref_type=heads'/>
        </button>
      </div>
    </div>
  );
};

export {Window};
