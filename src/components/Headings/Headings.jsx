import "./styles.css";

export const H1 = (props) => (
  <h1
    className={`h1 text-3xl font-bold ${
      props.className ? props.className : ""
    }`}
  >
    {props.children}
  </h1>
);

export const H2 = (props) => (
  <h2
    className={`h2 text-lg font-bold ${props.className ? props.className : ""}`}
  >
    {" "}
    {props.children}
  </h2>
);
