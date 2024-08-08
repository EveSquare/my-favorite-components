import { motion, isValidMotionProp } from "framer-motion";
import { forwardRef, chakra } from "@chakra-ui/react";

const MotionBox = motion(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return <chakra.div ref={ref} {...chakraProps} />;
  })
);

export default MotionBox;
