import { Square, Triangle, Circle, Wrap } from "./styles";
import Image from "next/image";

const FormImage = () => {
  return (
    <Wrap>
      <h1>THE TIME IS NOW</h1>
      <Triangle className="triangle">
        <Image
          alt="triangle"
          src="/stickertriangle.png"
          layout="fill"
          objectFit="contain"
        />
      </Triangle>
      <Square className="square">
        <Image
          alt="square"
          src="/stickersquare.png"
          layout="fill"
          objectFit="contain"
        />
      </Square>
      <Circle className="circle">
        <Image
          alt="circle"
          src="/stickercircle.png"
          layout="fill"
          objectFit="contain"
        />
      </Circle>
    </Wrap>
  );
};

export default FormImage;
