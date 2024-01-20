import '../styles/Hero.css';
import { motion } from "framer-motion"

export const Hero = () => {
    return (
        <div className="container">
            <motion.div 
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="topic">
                <p>Dualshock 4</p>
            </motion.div>
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="description">
                <p>
                    Amet minim molit non deserunt uliamco est sit
                    aliqua dolor do amet sint Velt officia consequat
                    duis enim velit molit. Exercitation veniam
                    consequat sunt nostrud amet. Dolor do amet sint velt.
                </p>
            </motion.div>
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.75 }}
            className="Buttons">
                <div className="Buy-btn">Buy</div>
                <div className="More-btn">More</div>
            </motion.div>
        </div>
    );
}