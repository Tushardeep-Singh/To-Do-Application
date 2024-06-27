import { Fragment } from "react";
import "./heading.css";

export const Heading = ({ title }) => {
  return (
    <Fragment>
      <section className="heading">
        <h1>{title}</h1>
      </section>
    </Fragment>
  );
};
