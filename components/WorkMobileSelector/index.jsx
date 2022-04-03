import { useState } from "react";
import { MobileLayout, Options, WorkSelect } from "./styles";

const WorkMobileSelector = ({ menu = [], workSection, onWorkSelection }) => {
  const [openMenu, setOpen] = useState(false);

  return (
    <MobileLayout>
      <WorkSelect>
        <div onClick={() => setOpen(!openMenu)}>{workSection || "All"}</div>
        {openMenu && (
          <Options>
            {menu.map((item) => (
              <span
                key={item}
                value={item}
                onClick={() => {
                  onWorkSelection(item.toLowerCase())
                  setOpen(false)
                }}
              >
                {item}
              </span>
            ))}
          </Options>
        )}
      </WorkSelect>
    </MobileLayout>
  );
};

export default WorkMobileSelector;
