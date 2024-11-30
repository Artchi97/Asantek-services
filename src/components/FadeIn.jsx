import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";
import "../styles/FadeIn.css";

export default function FadeIn({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`fade-in ${inView ? "in-view" : ""}`}>
      {children}
    </div>
  );
}

FadeIn.propTypes = {
  children: PropTypes.node.isRequired,
};
