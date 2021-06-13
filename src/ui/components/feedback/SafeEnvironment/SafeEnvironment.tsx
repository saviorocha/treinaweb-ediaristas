import React from "react";
import { SafeEnvironmentContainer } from "./SafeEnvironment.style";
import { Container } from "@material-ui/core";

function SafeEnvironment() {
  return (
    <SafeEnvironmentContainer>
      <Container>
        Ambiente seguro <i className={"twf-lock"} />
      </Container>
    </SafeEnvironmentContainer>
  );
}

export default SafeEnvironment;
