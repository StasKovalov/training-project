import { css } from 'styled-components';
import { maxSizes, minSizes } from '../constants/styles';

export const min = Object.keys(minSizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${minSizes[label]}px) {
      ${css(args)}
    }
  `;

  return acc;
}, {});

export const max = Object.keys(maxSizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${maxSizes[label]}px) {
      ${css(args)}
    }
  `;

  return acc;
}, {});
