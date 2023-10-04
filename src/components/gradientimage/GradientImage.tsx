import React from 'react';
import styles from './GradientImage.module.css';

const GradientImage = () => {
  return (
    <div className="relative overflow-hidden">
      <img
        src="/profilepic.jpeg"
        alt="Picture of the author"
        className="w-40 h-50 rounded-full"
      />
      <div
        className={`absolute top-0 left-0 w-full h-full opacity-0 ${styles['gradient-overlay']}`}
      ></div>
    </div>
  );
};

export default GradientImage;
