import React from "react";
import { motion } from "framer-motion";
import { AiFillIeCircle } from "react-icons/ai";

const Services = () => {
  return (
    <div id="services">
      <h2>Services</h2>
      <section>
        <motion.div className="servicesBox1">
          <h3>+2</h3>
          <h5>Years Experience</h5>
        </motion.div>
        <motion.div className="servicesBox2">
          <AiFillIeCircle />
          <h5>Web Development</h5>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
