import { motion } from "motion/react";

const Header = () => {
  return (
    <motion.div className="header"
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: 'easeInOut', duration: 1, delay: 0.5 }}
    >
      <div className="header-inner">
        <div className="logo">Bambam</div>
        <nav className="nav">
          <li>
            <a href="/design">Film</a>
          </li>
          <li>
            <a href="/strategy">Work</a>
          </li>
          <li>
            <a href="/cases">Pricing</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/why">Why develop with us?</a>
          </li>
        </nav>
        <div className="contact">
          <a href="/contact">Lets keep in touch</a>
        </div>
        <div className="hamburger-menu">
          <span></span>
          <span></span>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
