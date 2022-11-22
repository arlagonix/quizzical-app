import styled from "styled-components";
import { StyledOptionProps } from "./index.types";
import { useAppSelector } from "../../app/reduxHooks";

const animation = `
  transition: .2s ease-in-out;

  &:hover {
    translate: 0 -2px;
  }

  // &: active {
  //   scale: .95;
  //   translate: 0 0;
  // }
`;

export const StyledOption = styled.div<StyledOptionProps>`
  color: ${(props) => props.theme.violet};
  border: 1px solid ${(props) => props.theme.violet};
  padding: 8px 16px;
  border-radius: 8px;
  line-height: 100%;

  ${({ theme, correctOptionID, selectedOptionID, optionID }) => {
    const quizState = useAppSelector((state) => state.quizState);

    const isOptionCorrect = optionID === correctOptionID;
    const isOptionSelected = optionID === selectedOptionID;
    const isQuizFinished = quizState === "finished";

    if (!isQuizFinished && isOptionSelected)
      return `
        cursor: pointer;
        background: ${theme.paleViolet};
        color: ${theme.black};
        ${animation}
      `;

    if (!isQuizFinished && !isOptionSelected)
      return `
        cursor: pointer;
        ${animation}
      `;

    if (isQuizFinished && isOptionCorrect)
      return `
        background-color: ${theme.green};
        color: ${theme.black};
        border-color: ${theme.grayOne};
        pointer-events: none;
      `;

    if (isQuizFinished && isOptionSelected && !isOptionCorrect)
      return `
        background-color: ${theme.red};
        color: ${theme.grayOne};
        border-color: ${theme.grayOne};
        text-decoration: line-through;
        pointer-events: none;
      `;

    if (isQuizFinished && !isOptionSelected && !isOptionCorrect)
      return `
        opacity: 0.5;
        pointer-events: none;
      `;

    return `
      cursor: pointer;
      ${animation}
    `;
  }}
`;

interface StyledSkeletonOptionProps {
  /** Custom width of a skeleton option */
  width?: string;
}

export const StyledSkeletonOption = styled.div<StyledSkeletonOptionProps>`
  color: ${(props) => props.theme.violet};
  border: 1px solid ${(props) => props.theme.violet};
  padding: 8px 16px;
  border-radius: 8px;
  line-height: 100%;
  width: ${(props) => ("width" in props ? props.width : "100px")};
`;
