import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";


// framer motion to change color of PK LOGO
// pass in link component 
const MotionLink = motion(Link)

// most of the time we can just use div.m
//motion.div
const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      {/* when someone clicks on the Logo, it redirects them to the home page */}
      {/* this is the PK LOGO */}
      <MotionLink
        href="/"
        className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold border border-solid dark:border-light"
        // This makes the scales the logo bigger.
        whileHover={{ 
          backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
          transition: {duration:1, repeat: Infinity}
        }}
      >
        PK
      </MotionLink>
    </div>
  );
};

export default Logo;
