import React from 'react';
import theme from '../../../themes/default';

const Dashboard = ({ active, size }) => {
  const color =
    active === true ? theme.palette.primary[3] : theme.palette.grayscale[2];
  return (
    <svg
      style={{ width: size + 'px', height: size + 'px' }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512.106 512.106"
      fill={color}
    >
      <path d="M127.686 37.216a12.578 12.578 0 0 0-16.486.128L76.853 68.081v-4.028c0-4.713-3.82-8.533-8.533-8.533s-8.533 3.82-8.533 8.533v19.311L45.561 96.096a8.534 8.534 0 0 0 11.383 12.715l62.575-56.013 62.575 56.013a8.534 8.534 0 1 0 11.383-12.715l-65.791-58.88zM170.72 119.52a8.533 8.533 0 0 0-8.533 8.533v59.733H76.853v-59.733c0-4.713-3.82-8.533-8.533-8.533s-8.533 3.82-8.533 8.533v65.152c.084 6.515 5.432 11.729 11.947 11.648h95.573c6.519.066 11.862-5.155 11.947-11.674v-65.126a8.535 8.535 0 0 0-8.534-8.533zM119.52 221.92c-32.99 0-59.733 26.744-59.733 59.733s26.744 59.733 59.733 59.733 59.733-26.744 59.733-59.733c-.038-32.974-26.759-59.696-59.733-59.733zm-42.667 59.733c.026-20.268 14.281-37.731 34.133-41.813v36.975L79.413 295.75a42.071 42.071 0 0 1-2.56-14.097zm11.354 28.729l29.99-17.994 24.815 24.815c-17.433 11.63-40.755 8.727-54.805-6.821zm66.871-5.245l-27.025-27.017v-38.28a42.592 42.592 0 0 1 27.025 65.297zM460.853 153.653v-29.21c-.005-7.43-6.027-13.452-13.457-13.457H423.11c-7.43.005-13.452 6.027-13.457 13.457v29.21h-17.067v-53.504c-.009-8.149-6.613-14.753-14.763-14.763h-21.675c-8.148.01-14.752 6.614-14.762 14.763v53.504H324.32V59.786c0-9.426-7.641-17.067-17.067-17.067h-17.067c-9.426 0-17.067 7.641-17.067 17.067v93.867h-8.533a8.533 8.533 0 0 1-8.533-8.533V42.72a8.533 8.533 0 0 0-17.066 0v102.4c0 14.138 11.461 25.6 25.6 25.6h196.267a8.534 8.534 0 0 0-.001-17.067zm-153.6 0h-17.067V59.786h17.067v93.867zm68.267 0h-17.067v-51.2h17.067v51.2zm68.266 0H426.72v-25.6h17.067v25.6zM460.853 324.32H264.586a8.533 8.533 0 0 1-8.533-8.533v-13.534l28.1-28.1a8.712 8.712 0 0 1 12.066 0l10.001 10.001c9.997 9.994 26.202 9.994 36.198 0l35.601-35.601a8.712 8.712 0 0 1 12.066 0l10.001 10.01c10.008 9.966 26.19 9.966 36.198 0l30.601-30.601a8.533 8.533 0 0 0-.104-11.962 8.533 8.533 0 0 0-11.962-.104l-30.601 30.592a8.534 8.534 0 0 1-12.066 0l-10.001-10.001c-10.13-9.668-26.069-9.668-36.198 0l-35.601 35.601a8.534 8.534 0 0 1-12.066 0l-9.992-10.001c-10.132-9.669-26.075-9.669-36.207 0l-16.034 16.034v-64.734a8.533 8.533 0 0 0-17.066 0v102.4c0 14.138 11.461 25.6 25.6 25.6h196.267a8.534 8.534 0 0 0-.001-17.067z" />
      <path d="M512.053 396.46V47.37C513.24 22.556 494.19 1.43 469.386.053H42.72C17.916 1.431-1.134 22.557.053 47.37v349.09c-1.191 24.817 17.859 45.948 42.667 47.326h136.533v17.067H145.12c-18.851 0-34.133 15.282-34.133 34.133v8.533a8.533 8.533 0 0 0 8.533 8.533h273.067a8.533 8.533 0 0 0 8.533-8.533v-8.533c0-18.851-15.282-34.133-34.133-34.133h-34.133v-17.067h136.533c24.807-1.377 43.857-22.509 42.666-47.326zm-145.067 81.46c9.426 0 17.067 7.641 17.067 17.067h-256c0-9.426 7.641-17.067 17.067-17.067h221.866zM196.32 460.853v-17.067h119.467v17.067H196.32zm273.066-34.133H42.72c-15.361-1.41-26.754-14.877-25.6-30.259V375.52h477.867v20.941c1.154 15.382-10.239 28.849-25.601 30.259zm25.6-379.35v311.083H17.12V47.37c-1.154-15.381 10.24-28.845 25.6-30.251h426.667c15.359 1.406 26.754 14.87 25.599 30.251z" />
    </svg>
  );
};

Dashboard.defaultProps = {
  active: false,
  size: 20,
};
export { Dashboard };
