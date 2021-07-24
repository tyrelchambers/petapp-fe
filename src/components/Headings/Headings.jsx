export const H1 = (props) => (
  <h1
    className={` text-3xl font-bold ${props.className ? props.className : ""}`}
  >
    {props.children}
  </h1>
);
