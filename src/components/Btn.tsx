import React from "react";
import Container from "./container";
import { Button } from "./ui/button";

type btnType = {
  popUp: React.Dispatch<React.SetStateAction<boolean>>;
};

const Btn = (props: btnType) => {
  return (
    <Container>
      <Button
        onClick={() => props.popUp(true)}
        className="rounded-r-2xl rounded-tl-3xl rounded-bl-none text-lg p-5">
          
        Get citation
      </Button>
    </Container>
  );
};

export default Btn;
