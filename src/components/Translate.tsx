import { Box, BoxProps } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

export interface TranslateProps {
  children: React.ReactNode;
  beforeClass?: string;
  afterClass?: string;
  props?: BoxProps;
}

export default function Translate({
  children,
  beforeClass = "before-translate",
  afterClass = "after-translate",
  props,
}: TranslateProps) {
  const eleRef = useRef<HTMLDivElement>(null);

  const [inViewport, setInViewport] = useState(false);

  useEffect(() => {
    let observer: IntersectionObserver;

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target === eleRef.current) {
          setInViewport(true);

          observer.disconnect();
        }
      });
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.9,
    };

    observer = new IntersectionObserver(observerCallback, options);

    if (eleRef.current) {
      observer.observe(eleRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Box
      ref={eleRef}
      className={`${beforeClass} ${inViewport ? afterClass : ""}`}
      sx={props?.sx}
    >
      {children}
    </Box>
  );
}
