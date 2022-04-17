export const SVGDropdownIcon = ({ openMenu }) => {
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
