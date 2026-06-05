import { useState } from 'react';

import { Panel } from './Panel.tsx';
import { Window } from './Window.tsx';
import { Clock } from './PanelComponents/Clock.tsx';

import './Desktop.css';

interface SelectionSquareProps {
	x:      number;
	y:      number;
	width:  number;
	height: number;
}

const SelectionSquare: React.FC = (props: SelectionSquareProps) => {
	return ( <div className="desktop_select" style={{display: `block`, position: `absolute`, left: `${props.x}px`, top: `${props.y}px`, width: `${props.width}px`, height: `${props.height}px`, zIndex: `0` }} /> )
};

const Desktop = () => {

	const [selectWidth, setSelectWidth] = useState(0);
	const [selectHeight, setSelectHeight] = useState(0);
	const [selectX, setSelectX] = useState(0);
	const [selectY, setSelectY] = useState(0);
	const [clickX, setClickX] = useState(0);
	const [clickY, setClickY] = useState(0);
	const [selectComponent, setSelectComponent] = useState(<SelectionSquare />);
	const [mouseDown, setMouseDown] = useState(false);

	const mouseMove = (e: ReactEvent) => {
                var x = e.clientX; 
                var y = e.clientY;
                if (mouseDown && e.button === 0) {
                  if (x < clickX) {
                    setSelectX(x);
                    setSelectWidth(clickX-x);
                  } else {
                    setSelectWidth(x-clickX);
                    setSelectX(clickX);
                  }

                  if (y < clickY) {
                    setSelectY(y);
                    setSelectHeight(clickY-y);
                  } else {
                    setSelectHeight(y-clickY);
                    setSelectY(clickY);
                  }
                }

                setSelectComponent(<SelectionSquare x={selectX} y={selectY} width={selectWidth} height={selectHeight} />);
	}

	const isMouseDown = (e: ReactEvent) => {
                if (e.button === 0 && e.target.className === "kde_desktop") {
                    setMouseDown(true);
                    var x = e.clientX - e.target.offsetLeft;
                    var y = e.clientY - e.target.offsetTop;
                    setClickX(x);
                    setClickY(y);
                    setSelectX(x);
                    setSelectY(y);
                    setSelectWidth(0);
                    setSelectHeight(0);
                    setSelectComponent(<SelectionSquare x={selectX} y={selectY} width={selectWidth} height={selectHeight} />);
                }
	}

	const mouseUp = (e: ReactEvent) => {
                if (e.button === 0) {
                    setMouseDown(false);
                    setSelectX(0);
                    setSelectY(0);
                    setSelectWidth(0);
                    setSelectHeight(0);
                    setSelectComponent(<SelectionSquare x={selectX} y={selectY} width={selectWidth} height={selectHeight} />);
                }
	}

	return ( <div className="kde_desktop" onMouseMove={mouseMove} onMouseDown={isMouseDown} onMouseUp={mouseUp}>

                    <Window x={174} y={44} w={800} h={450} title="Introduction"/>

						 <Panel w="750" h="32" icons={[
                                                   'https://invent.kde.org/frameworks/breeze-icons/-/raw/master/icons/places/96/start-here-kde.svg?ref_type=heads',
                                                   'https://invent.kde.org/frameworks/breeze-icons/-/raw/master/icons/apps/48/systemsettings.svg?ref_type=heads',
                                                   'https://invent.kde.org/frameworks/breeze-icons/-/raw/master/icons/apps/48/muondiscover.svg?ref_type=heads',
                                                   'https://invent.kde.org/frameworks/breeze-icons/-/raw/master/icons/apps/64/system-file-manager.svg?ref_type=heads',
                                                 ]}></Panel>
					   {mouseDown ? selectComponent : <></>}	

					 </div>
				 );
};

export {Desktop};
