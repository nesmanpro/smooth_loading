import { motion } from "motion/react";
import Image from "./Image";

// variants
const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [.6, .01, .05, .95],
      duration: 1.6
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const itemMain = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, .01, .05, 0.95],
      duration: 1.6
    }
  }
}

const Loader = ({ setLoading }) => {


  return (
    <div className='loader'>
      <motion.div className='loader-inner'
        variants={container}
        initial='hidden'
        animate='show'
        exit='exit'
        onAnimationComplete={() => setLoading(false)}
      >

        <ImageBlock variants={item} id='image-1' />
        <motion.div className='transition-image'
          variants={itemMain}>
          <motion.img
            src={`${import.meta.env.BASE_URL}images/image-2.jpg`}
            alt='random alt'
            layoutId="main-image-1"
          />
        </motion.div>
        <ImageBlock variants={item} id='image-3' />
        <ImageBlock variants={item} id='image-4' />
        <ImageBlock variants={item} id='image-5' />
      </motion.div>
    </div>
  );
};

export const ImageBlock = ({ id, variants }) => {
  return (
    <motion.div
      className={`image-block ${id}`}
      variants={variants}
    >
      <Image
        src={`${import.meta.env.BASE_URL}images/${id}.webp`}
        fallback={`${import.meta.env.BASE_URL}images/${id}.jpg`}
        alt={id}
      />
    </motion.div>
  );
};
export default Loader;
