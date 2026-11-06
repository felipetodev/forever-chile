import coreWebVitals from "eslint-config-next/core-web-vitals";
import prettier from "eslint-config-prettier/flat";

const eslintConfig = [...coreWebVitals, prettier];

export default eslintConfig;
