'use client'
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const shapes = [
  { type: 'circle', color: 'bg-blue-500', size: 50 },
  { type: 'square', color: 'bg-green-500', size: 50 },
  { type: 'triangle', color: 'bg-red-500', size: 50 },
  { type: 'rhombus', color: 'bg-purple-500', size: 50 },
  { type: 'kite', color: 'bg-orange-500', size: 50 },
  { type: 'octagon', color: 'bg-pink-500', size: 50 },
];

const BouncingShapes = () => {
  const controls = shapes.map(() => useAnimation());

  useEffect(() => {
    const bounce = async () => {
      while (true) {
        await Promise.all(
          shapes.map(async (_, index) => {
            const direction = Math.random() < 0.5 ? -1 : 1; // Randomly choose left (-1) or right (1) direction
            const distance = Math.random() * 50 + 50; // Random distance between 50 and 100 pixels
            await controls[index].start({
              x: direction * distance,
              transition: { duration: 1, ease: 'easeInOut' },
            });
            await controls[index].start({
              x: 0,
              transition: { duration: 1, ease: 'easeInOut' },
            });
          })
        );
      }
    };

    bounce();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen relative">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          style={{
            width: shape.size,
            height: shape.size,
            backgroundColor: shape.color,
            borderRadius: shape.type === 'circle' ? '50%' : '0',
            clipPath:
              shape.type === 'triangle'
                ? 'polygon(50% 0%, 0% 100%, 100% 100%)'
                : shape.type === 'rhombus'
                ? 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
                : shape.type === 'kite'
                ? 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
                : shape.type === 'octagon'
                ? 'polygon(14% 0%, 86% 0%, 100% 14%, 100% 86%, 86% 100%, 14% 100%, 0% 86%, 0% 14%)'
                : 'none',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          animate={controls[index]}
        />
      ))}
    </div>
  );
};

export default BouncingShapes;
