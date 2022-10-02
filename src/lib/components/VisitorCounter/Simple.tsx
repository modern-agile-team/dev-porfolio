import React from 'react';
import styled from 'styled-components';
import {
  VisitorCounterPropsType,
  VisitorCounterStylePropsType,
} from '../../common/types/ComponentTypes/VisitorCounterType';

export const Simple = (props: VisitorCounterPropsType) => {
  const { todayTitle, todayVisitor, totalTitle, totalVisitor, size, todayBoldColor, totalBoldColor } = props;

  return (
    <Wrap size={size} todayBoldColor={todayBoldColor} totalBoldColor={totalBoldColor}>
      <span className="today">{todayTitle}</span>
      <span className="today-visitor">{todayVisitor}</span>
      <span className="total">{totalTitle}</span>
      <span className="total-visitor">{totalVisitor}</span>
    </Wrap>
  );
};

const Wrap = styled.div<VisitorCounterStylePropsType>`
  font-size: ${({ size }) => size ?? '14px'};
  span {
    padding: 3px;
  }
  .today-visitor {
    font-weight: bold;
    color: ${({ todayBoldColor }) => todayBoldColor ?? 'red'};
    ::after {
      content: '|';
      margin-left: 8px;
      font-weight: normal;
      color: black;
    }
  }
  .total-visitor {
    font-weight: bold;
    color: ${({ totalBoldColor }) => totalBoldColor ?? 'black'};
  }
`;