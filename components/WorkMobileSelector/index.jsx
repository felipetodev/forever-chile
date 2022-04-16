import { useState } from "react";
import { MobileLayout, Options, WorkSelect } from "./styles";
import { motion } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: ({ delay }) => ({
    opacity: 1,
    transition: {
      delay,
      duration: 0.5,
    },
  }),
};

const DEFAULT_OPTION = "All";

const WorkMobileSelector = ({ categories = [], workSection, onWorkSelection }) => {
  const [openMenu, setOpen] = useState(false);

  return (
    <MobileLayout>
      <WorkSelect>
        <div onClick={() => setOpen(!openMenu)}>{workSection || "All"}</div>
        {openMenu && (
          <Options>
            {[DEFAULT_OPTION, ...categories].map((item, idx) => (
              <motion.span
                layoutId={item}
                custom={{ delay: (idx + 1) * 0.08 }}
                initial="hidden"
                animate="visible"
                variants={variants}
                key={item}
                value={item}
                onClick={() => {
                  onWorkSelection(item?.toLowerCase())
                  setOpen(false)
                }}
              >
                {item}
              </motion.span>
            ))}
          </Options>
        )}
      </WorkSelect>
    </MobileLayout>
  );
};

export default WorkMobileSelector;
