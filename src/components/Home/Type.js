import React from "react";
import Typewriter from "typewriter-effect";
import String from "../../Assets/string.json";

function Type() {
  return (
    <Typewriter
      options={{
        strings: String.mySkills,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
