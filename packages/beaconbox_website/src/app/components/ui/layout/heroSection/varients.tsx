export const backgroundVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 2.0,
      ease: 'easeOut',
    },
  },
};

export const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.5, // Delay to allow background to fade in first
      staggerChildren: 0.2,
    },
  },
  hover: {
    scale: 1.05,
    rotate: [0, 5, -5, 0],
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
};

export const textVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const iconHoverVariants = {
  hover: {
    x: [0, 10, -10, 0],
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
};

export const titleVariants = {
  hidden: { opacity: 0, y: -50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};
