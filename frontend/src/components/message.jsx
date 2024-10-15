import { Alert } from "react-bootstrap";

/* const Message = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>;
};

Message.defaultProps = {
  variant: "info",
};

export default Message; */

const Message = ({ variant = "info", children }) => {
  return <div className={`Alert Alert-${variant}`}>{children}</div>;
};

export default Message;

