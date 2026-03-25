// Abstract SVG shape for extra hero background (copyright-free, public domain)
export const heroBgSvg = `
<svg width="700" height="700" viewBox="0 0 700 700" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_f_1_2)">
    <ellipse cx="350" cy="350" rx="220" ry="120" fill="#7F6BFF" fill-opacity="0.18"/>
    <ellipse cx="350" cy="350" rx="120" ry="220" fill="#38BDF8" fill-opacity="0.13"/>
  </g>
  <defs>
    <filter id="filter0_f_1_2" x="0" y="0" width="700" height="700" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur_1_2"/>
    </filter>
  </defs>
</svg>
`;
