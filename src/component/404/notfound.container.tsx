import { useEffect, useRef } from "react";
import NotFoundUI from "./notfound.presenter";

export default function NotFound() {
  const number0Ref = useRef<any>(document!.getElementById("number-0"));
  const UFOBeamRef = useRef<any>(document!.getElementById("UFO-beam"));

  useEffect(() => {
    if (!document) return;
    else {
      const setZeroAndBeamAppear = () => {
        if (!number0Ref.current) return;
        else {
          number0Ref.current!.removeEventListener(
            "animationend",
            setZeroAndBeamAppear
          );
        }

        number0Ref.current!.setAttribute("id", "number-0");
        UFOBeamRef.current!.setAttribute("id", "UFO-beam");

        number0Ref.current!.addEventListener(
          "animationend",
          setZeroAndBeamDisappear
        );
      };

      const setZeroAndBeamDisappear = () => {
        number0Ref.current!.removeEventListener(
          "animationend",
          setZeroAndBeamDisappear
        );

        number0Ref.current!.setAttribute("id", "number-0-soaking");
        UFOBeamRef.current!.setAttribute("id", "UFO-beam-disappearing");

        number0Ref.current!.addEventListener(
          "animationend",
          setZeroAndBeamAppear
        );
      };

      number0Ref.current!.addEventListener(
        "animationend",
        setZeroAndBeamDisappear
      );
    }
  });

  return (
    <NotFoundUI number0Ref={number0Ref} UFOBeamRef={UFOBeamRef}></NotFoundUI>
  );
}
