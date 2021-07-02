export const H1 = (props) => (
  <h1 className={`${props.className ? props.className : ""}`}>
    {props.children}
  </h1>
);
