import { useState } from "react";
import { MobileLayout, Options, WorkSelect } from "./styles";
import { AnimatePresence, motion } from "framer-motion";

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

const SVGDropdownIcon = ({ openMenu }) => {
  const transform = openMenu ? { transform: "rotate(180deg)" } : {};
  return (
    <svg
      style={{ position: "relative", zIndex: 5, ...transform }}
      height={20}
      width={20}
      fill="#e6e6e6"
      focusable="false"
      viewBox="0 0 24 24"
    >
      <path d="m7 10 5 5 5-5z"></path>
    </svg>
  );
};

const DEFAULT_OPTION = "All";

const WorkMobileSelector = ({
  categories = [],
  workSection,
  onWorkSelection,
}) => {
  const [openMenu, setOpen] = useState(false);

  return (
    <MobileLayout>
      <WorkSelect onClick={() => setOpen(!openMenu)}>
        <div>
          {workSection || "All"} <SVGDropdownIcon openMenu={openMenu} />
        </div>
        <AnimatePresence>
          {openMenu && (
            <Options>
              {[DEFAULT_OPTION, ...categories].map((item, idx) => (
                <motion.span
                  custom={{ delay: (idx + 1) * 0.08 }}
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                  layoutId={item}
                  key={item}
                  value={item}
                  onClick={() => {
                    onWorkSelection(item?.toLowerCase());
                    setOpen(false);
                  }}
                >
                  {item}
                </motion.span>
              ))}
            </Options>
          )}
        </AnimatePresence>
      </WorkSelect>
    </MobileLayout>
  );
};

export default WorkMobileSelector;
