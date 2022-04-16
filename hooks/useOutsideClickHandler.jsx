import { useEffect } from "react";

const no_op = () => {};

const useOutsideClickHandler = ({
  ref = null,
  onClick = no_op,
  includeEl = true,
}) => {
  useEffect(() => {
    const handleRef = ({ target }) => {
      const includeHtmlElem = (el) => {
        if (includeEl) return ref.current.contains(el);
        return !ref.current.contains(el);
      };

      if (ref.current && includeHtmlElem(target)) {
        onClick && onClick();
      }
    };
    document.addEventListener("click", handleRef, true);
    return () => {
      document.removeEventListener("click", handleRef, true);
    };
  }, [ref, onClick, includeEl]);
};

export default useOutsideClickHandler;
