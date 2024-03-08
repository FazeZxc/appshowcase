import { Button } from "./Button";

export function Info() {
  return ( <div className="bg-black flex flex-col justify-center items-center h-dvh">
    <div className=" flex justify-center">
      <p className="text-white w-[1000px] text-2xl">
        Software Engineer/ Frontend Developer based in India. Always
        exploring, forever crafting, and continuously challenging myself.
        <br />
        Proficient in JavaScript and its frameworks with 2 years of industry
        <span className="text-red-500"> experience</span>. 
        <br />
        I love developing the web and doodling.
      </p>
    </div>
    <br />
    <Button>more about me </Button>
  </div>
  );
}
