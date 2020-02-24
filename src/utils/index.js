/* eslint-disable */

export const fontFace = (name, src, fontWeight = 'normal', fontStyle = 'normal') =>
  ` @font-face{
            font-family: "${name}";
            src: url(${require(`./${src}`)}) format("truetype"),
            font-style: ${fontStyle};
            font-weight: ${fontWeight};
        }
    `;
