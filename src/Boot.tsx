import './Boot.css';
import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

import { Desktop } from './KDEDesktop/Desktop.tsx';

const Boot: React.FC<> = ({}) => {
    
    var timer = 0.0;
		const navigate = useNavigate();
    const boot_texts = [
	":: running early hook [Custom]",
	"Starting version 2024.12.01-arch",
	":: running hook [udev]",
	":: triggering uevents...",
	":: performing fsck on '/dev/nvme0n1p3'",
	"'/dev/nvme0n1p3': clean, 1032533/18354608 files, 1232135/3458752 blocks",
	":: mounting ':/dev/nvme0n1p3'on real root",
	":: running cleanup hook [udev]",
	" ", "Welcome to Arch Linux!", " ",
	" ", "[    OK    ] Created slice Slice /system/gettg",
	"[    OK    ] Created slice Slice /system/modprobe",
	"[    OK    ] Created slice Slice /system/netctl",
	"[    OK    ] Created slice Slice /system/systemd-fsck",
	"[    OK    ] Created slice User and Session Slice",
	"[    OK    ] Started Dispatch Password Requests to Console Directory Watch",
	"[    OK    ] Started Forward Password Requests to Wall Directory Watch",
	"[    OK    ] Set up automount Arbitrary Executable File Formats File System Automount Point",
	"[    OK    ] Reached target Local Encrypted Volumes",
	"[    OK    ] Reached target Remote File Systems",
	"[    OK    ] Reached target Slice Units",
	"[    OK    ] Reached Local Varity Protected Volumes",
	"[    OK    ] Listening on Device-mapper event daemon FIF0s",
	"[    OK    ] Listening on LIM2 poll daemon socket",
	"[    OK    ] Listening on Process Core Dump Socket",
	"[    OK    ] Listening on Journal Audit Socket",
	"[    OK    ] Listening on Journal Socket (/dev/log)",
	"[    OK    ] Listening on Journal Socket",
	"[    OK    ] Listening on udev Control Socket",
	"[    OK    ] Listening on udev Kernel Socket",
	"             Mounting Huge Pages File System",
	"             Mounting POSIX Message Daemon File System",
	"             Mounting Kernel Debug File System",
	"             Mounting Kernel Trace File System",
	"             Starting Create List of Static Device Modes",
	"             Starting Monitoring of LVM2 mirrors, snapshots etc. using dsysct.d or program policy",
	"             Starting Load Kernel Module configfs",
	"             Starting Kernel Module fuse",
	"             Starting Journal Service"
     ];

    const process = () => {
    
      timer += 100;

			console.log("timer += 100");
			if (timer >= 7000) {
				navigate("home");
			}
    }


    useEffect(() => {
	
      const interval = setInterval(() => process(), 100);

      return () => clearInterval(interval);

    }, []);


    return (
      <div className="content">
        <p className="boot-text">Starting Linux linux...</p>
        <p className="boot-text-1">Starting ramdisk...</p>
					{ boot_texts.map(function(text, i) {
	    			const time = 2.0 + ((i+(Math.random()*0.5))/10);
           		return <p className="boot-text-1" style={{animationDuration: `${time}s` }}>{text}</p>
	    			})
        	}
      </div>
  	);
};

export {Boot};
