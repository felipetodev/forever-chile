import { Container } from "./styles";

const Layout = ({ children, isFounders, ...props }) => {
  return (
    <Container isFounders={isFounders} {...props}>
      {children}
    </Container>
  );
};

export default Layout;
