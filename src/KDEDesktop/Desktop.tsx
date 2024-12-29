import { useState } from 'react';

import './Desktop.css';

interface SelectionSquareProps {
	x:      number;
	y:      number;
	width:  number;
	height: number;
}

const SelectionSquare: React.FC = (props: SelectionSquareProps) => {
	return ( <div className="desktop_select" style={{display: `block`, position: `absolute`, left: `${props.x}px`, top: `${props.y}px`, width: `${props.width}px`, height: `${props.height}px`, zIndex: `10` }} /> );
};

const Desktop = () => {

	const [selectWidth, setSelectWidth] = useState(0);
	const [selectHeight, setSelectHeight] = useState(0);
	const [selectX, setSelectX] = useState(0);
	const [selectY, setSelectY] = useState(0);
	const [selectComponent, setSelectComponent] = useState(<SelectionSquare />);
	const [mouseDown, setMouseDown] = useState(false);

	const mouseMove = (e: ReactEvent) => {
		setSelectWidth((e.clientX - e.target.offsetLeft) - selectX);
		setSelectHeight((e.clientY - e.target.offsetTop) - selectY);
		setSelectComponent(<SelectionSquare x={selectX} y={selectY} width={selectWidth} height={selectHeight} />);
	}

	const isMouseDown = (e: ReactEvent) => {
		setMouseDown(true);
		setSelectX(e.clientX - e.target.offsetLeft);
		setSelectY(e.clientY - e.target.offsetTop);
		setSelectComponent(<SelectionSquare x={selectX} y={selectY} width={0} height={0} />);
	}

	const mouseUp = (e: ReactEvent) => {
		setMouseDown(false);
	}

	return ( <div className="kde_desktop" onMouseMove={mouseMove} onMouseDown={isMouseDown} onMouseUp={mouseUp}>

					   {mouseDown ? selectComponent : <></>}	

					 </div>
				 );
};

export {Desktop};
