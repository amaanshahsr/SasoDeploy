import React, { useEffect } from "react";
import { forEach } from "underscore";

function Leaf() {
  const arrs = [
    1, 2, 3, 45, 6, 7, 7, 8, 8, 8, 8, 8, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
    3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
  ];
  const random = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min)) + min;
  //     <Leaf leaf="fixed top-[50%] rotate-30  w-16 " />
  //     <Leaf leaf="fixed top-[10%] z-20 left-[20%] rotate-[65deg]  w-16 " />
  //     <Leaf leaf="fixed top-[78%] z-20 left-[20%] rotate-[20deg] rotate-30  w-16 " />
  //     <Leaf leaf="fixed top-[90%] z-20 left-[40%] rotate-[176deg] rotate-30  rotate-30  w-16 " />

  let typOfLeaf: number;
  let topPosition: number;
  let leftPosition: number;
  let rotatePosition: number;

  // useEffect(() => {
  //   typOfLeaf = random(1, 4);
  //   topPosition = random(0, 60);
  //   leftPosition = random(0, 100);
  //   console.log("kjkn", typOfLeaf, topPosition, leftPosition);
  // }, []);

  // const { leaf } = props;
  return (
    <>
      {arrs.map((node: number) => {
        typOfLeaf = random(1, 4);
        topPosition = random(10, window.innerHeight);
        leftPosition = random(0, 100);
        rotatePosition = random(0, 300);
        return (
          <>
            <img
              className={`absolute z-30 w-16 top-[${topPosition}%]  rotate-[${rotatePosition}deg]  left-[${leftPosition}%]`}
              src={`/public/leaf${typOfLeaf}.svg`}
              alt="Background Leaf"
            />
          </>
        );
      })}
    </>
  );
}

export default Leaf;
