import * as React from "react";
import * as PropTypes from "prop-types";
import { theme } from "styled-tools";
import callAll from "../_utils/callAll";
import hoist from "../_utils/hoist";
import styled from "../styled";
import use from "../use";
import Box, { BoxProps } from "../Box";
import { StepContainerSelectors, StepContainerActions } from "./StepContainer";

export interface StepNextProps extends BoxProps {
  next: StepContainerActions["next"];
  hasNext?: StepContainerSelectors["hasNext"];
  loop?: boolean;
  onClick?: React.MouseEventHandler;
}

const StepNextComponent = ({ onClick, ...props }: StepNextProps) => (
  <Box
    onClick={callAll(props.next, onClick)}
    disabled={!props.loop && props.hasNext && !props.hasNext()}
    {...props}
  />
);

const StepNext = styled(hoist(StepNextComponent, Box))`
  ${theme("StepNext")};
`;

// @ts-ignore
StepNext.propTypes = {
  next: PropTypes.func.isRequired,
  hasNext: PropTypes.func,
  loop: PropTypes.bool,
  onClick: PropTypes.func
};

export default use(StepNext, "button");
