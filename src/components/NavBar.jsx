import './navBar.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import img from '../assets/repo-dark-removebg.png';

export default function NavBar() {
  const ulVariant = {
    hidden: {
      y: '-100vw',
    },
    visible: {
      y: 0,
      transition: {
        type: 'tween',
        duration: 0.5,
        delay: 0.1,
        when: 'beforeChildren',
        staggerChildren: 0.4,
      },
    },
  };

  const liVariant = {
    hidden: {
      y: '-100vw',
    },
    visible: {
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.3,
      },
    },
  };

  return (
    <div className="nav">
      <div title="Go to React Query" className="tooltip">
        <a
          href="https://tanstack.com/query/v4/?from=reactQueryV3&original=https://react-query-v3.tanstack.com/"
          target="_blank"
          rel="noreferrer"
        >
          <motion.img
            src={img}
            alt="react-query-asset"
            initial={{
              opacity: 0,
              x: -500,
            }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                type: 'spring',
                bounce: 0.5,
                duration: 1,
                delay: 2,
              },
            }}
            whileHover={{
              scale: [1, 1.1, 1],

              transition: {
                repeat: Infinity,
              },
            }}
          />
        </a>
      </div>
      <motion.ul variants={ulVariant} initial="hidden" animate="visible">
        <motion.li
          variants={liVariant}
          whileHover={{
            scale: 1.5,
            rotate: 360,
            transition: {
              duration: 1,
            },
          }}
        >
          <Link to="/">Home</Link>
        </motion.li>
        <motion.li
          variants={liVariant}
          whileHover={{
            scale: 1.1,
            opacity: 0.2,
            transition: {
              duration: 0.5,
            },
          }}
        >
          <Link to="use-effect">Use Effect Example</Link>
        </motion.li>
        <motion.li
          variants={liVariant}
          whileHover={{
            scale: 1.1,

            transition: {
              duration: 0.5,
            },
          }}
        >
          <Link to="react-query">React Query Example</Link>
        </motion.li>
        <motion.li
          variants={liVariant}
          whileHover={{
            scale: 1.1,
          }}
        >
          <Link to="infinite-scroll">Infinite Scroll Example</Link>
        </motion.li>
      </motion.ul>
    </div>
  );
}
