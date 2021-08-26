import * as Styles from "./PageProvider.styles";

const PageProvider = ({ children }) => {
  return <Styles.PageWraper>{children}</Styles.PageWraper>;
};

export default PageProvider;
