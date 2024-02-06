import React, { useState, useEffect, useRef } from "react";
import { Button } from "../ui/button"; // Adjust this import path to match your project structure

interface CarouselSlide {
  id: number;
  backgroundImage: string;
  title: string;
  link: string;
  customStyles?: React.CSSProperties;
}

const CarouselData: CarouselSlide[] = [
  {
    id: 1,
    backgroundImage: "/Slider/mideval.png",
    title: "Welcome new sign-up and get 20% off on selected games",
    link: "/",
    customStyles: {
      backgroundPosition: "center",
    },
  },
  {
    id: 2,
    backgroundImage: "/Slider/Japan-winter.png",
    title: "Season Clearance Sale for 20th Year Anniversary!!!",
    link: "/store",
    customStyles: {
      backgroundPosition: "center",
    },
  },
  {
    id: 3,
    backgroundImage: "/Slider/Africa.png",
    title: "Sign up to our Game Tournament! Play RAWG.io Now!!",
    link: "/game",
    customStyles: {
      backgroundPosition: "center",
    },
  },
];

const Carousel: React.FC = () => {
  const [Index, SetIndex] = useState<number>(0);
  const intervalRef = useRef<number | null>(null);

  const startSlideShow = () => {
    if (intervalRef.current !== null) return; // Prevent multiple intervals from being set
    intervalRef.current = window.setInterval(() => {
      SetIndex((prevIndex: number) => (prevIndex + 1) % CarouselData.length);
    }, 5000);
  };

  const stopSlideShow = () => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startSlideShow(); // Start the slideshow on component mount
    return () => stopSlideShow(); // Clear the interval on component unmount
  }, []);

  const handleDotClick = (dotIndex: number) => {
    SetIndex(dotIndex);
  };

  return (
    <div className="relative h-fit bg-gray-100 rounded-3xl shadow-lg my-5">
      <div
        className="flex flex-col md:flex-row items-stretch rounded-3xl"
        style={{
          backgroundImage: `url(${CarouselData[Index].backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          ...CarouselData[Index].customStyles,
        }}
        onMouseEnter={stopSlideShow}
        onMouseLeave={startSlideShow}
      >
        <div className="text-white w-full h-[400px] md:h-[600px] px-5 flex flex-col items-center py-10 gap-5 justify-start text-3xl text-center font-mono">
          <div className="bg-gray-700/30 p-8 rounded-lg border border-solid border-yellow-300 flex flex-col gap-5 backdrop-blur-sm">
            <div>{CarouselData[Index].title}</div>
            <div className="h-fit">
              <Button variant="default" className="w-[200px] text-xl py-6">
                Click
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 w-full left-0 py-2">
        <div className="flex gap-2 items-center justify-center">
          {CarouselData.map((_, dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => handleDotClick(dotIndex)}
              aria-label={`Go to slide ${dotIndex + 1}`}
              className={`h-3 w-3 ${
                Index === dotIndex ? "bg-gray-300/90" : "bg-gray-300/60"
              } rounded-full`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
