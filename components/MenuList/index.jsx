import Layout from "../Layout";
import { Navigation } from "./styles";

const DEFAULT_OPTION = "All";

const MenuList = ({ categories = [], workSection, setWorkSection }) => {
  return (
    <Layout>
      <Navigation className="_1">
        {[DEFAULT_OPTION, ...categories].map((item) => (
          <li
            key={item}
            className={item?.toLowerCase() === workSection ? "active" : null}
            onClick={() => setWorkSection(item?.toLowerCase())}
          >
            {item}
          </li>
        ))}
      </Navigation>
      <div className="_3"></div>
    </Layout>
  );
};

export default MenuList;
