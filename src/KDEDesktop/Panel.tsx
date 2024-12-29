import { useState } from 'react';

import './Panel.css';

interface PanelProps {
	icons: string[],
	x: number,
	y: number,
	w: number,
	h: number,
	r: number,
	funcs: {(): void;} [],
}

const Panel: React.FC<PanelProps> = (props: PanelProps) => {
	return (
		<div className="kde-panel" style={ {left: `${props.x}px`, top: `${props.y}px`, width: `${props.w}px`, height: `${props.h}px`, borderRadius: `${props.r}%`} }>
			{props.icons.map( path => {
				return <img src={path} />
			})}	
		</div>
	);
};

export {Panel};
