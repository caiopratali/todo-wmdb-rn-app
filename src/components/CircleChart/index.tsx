import React from 'react';
import Svg, { Circle } from 'react-native-svg';

import { Container, Percentage } from './styles';

export function CircleChart({ percentage }) {
  const radius = 36;
  const strokeWidth = 10;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <Container>
        <Svg height={radius * 2} width={radius * 2}>
            <Circle
                stroke="#8D8E92"
                fill="none"
                cx={radius}
                cy={radius}
                r={normalizedRadius}
                strokeWidth={strokeWidth}
            />
            <Circle
                stroke="#FFFFFF"
                fill="none"
                cx={radius}
                cy={radius}
                r={normalizedRadius}
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                rotation="-90"
                origin={radius}
            />
        </Svg>

        <Percentage>{percentage}%</Percentage>
    </Container>
  );
};