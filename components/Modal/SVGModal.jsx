const CloseModalIcon = ({ height, width, ...props }) => (
  <svg
    height={height || "116.207"}
    width={width || "27.577"}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 27.577 116.207"
    {...props}
  >
    <g
      id="Componente_28_2"
      data-name="svg-close-modal"
      transform="translate(0.707 0.707)"
    >
      <text
        className="close-text"
        transform="translate(20.581 115.5) rotate(-90)"
        fill="#e6e6e6"
        fontSize="20"
        fontFamily="HelveticaNeue, Helvetica Neue"
      >
        <tspan x="0" y="0">
          CLOSE
        </tspan>
      </text>
      <line
        id="Línea_24"
        data-name="Línea 24"
        x2="37"
        transform="rotate(45)"
        fill="none"
        stroke="#e6e6e6"
        strokeWidth="2"
      />
      <line
        id="Línea_25"
        data-name="Línea 25"
        x2="37"
        transform="translate(0 26.163) rotate(-45)"
        fill="none"
        stroke="#e6e6e6"
        strokeWidth="2"
      />
    </g>
  </svg>
);

export default CloseModalIcon;
