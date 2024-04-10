"use client";
import { FC, useRef, useEffect } from "react";
// 開発時のみコメントアウトを外す
// import scrollReveal from "scrollreveal";

const ScrollReveal = ({ children,move }) => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    async function scrollAnimate() {
      if (sectionRef.current){
        const sr = (await import("scrollreveal")).default
        sr().reveal(sectionRef.current, {
          duration: 1000,
          opacity: 0,
          reset: false,
          origin:
            move === "left"
              ? "left"
              : move === "right"
              ? "right"
              : move === "top"
              ? "top"
              : "bottom",
          distance: "60px"
        });
      }
    }
    scrollAnimate()
    // if (sectionRef.current)
    //   scrollReveal().reveal(sectionRef.current, {
    //     duration: 1000,
    //     opacity: 0,
    //     reset: false,
    //     origin:
    //       move === "left"
    //         ? "left"
    //         : move === "right"
    //         ? "right"
    //         : move === "top"
    //         ? "top"
    //         : "bottom",
    //     distance: "60px"
    //   });
  }, [sectionRef]);

  return <section ref={sectionRef}>{children}</section>;
};

export default ScrollReveal;