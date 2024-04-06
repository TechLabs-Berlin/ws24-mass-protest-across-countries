import React from "react";
import Container from "react-bootstrap/Container";

const AnalyticsPage = () => {
  return (
    <Container>
      <h1 className="text-danger text-center my-5"> FIND MY PROTEST</h1>
      <h2 className="text-secondary text-center">Data Science</h2>

      <p>
        The Protest Analytics tool has been developed by the Find My Protest
        team to cater to those who are eager to delve deeper into the
        intricacies and fascinating details surrounding past protests. Whether
        you're a researcher, an activist, or simply someone curious about the
        dynamics of social movements, this platform offers a wealth of insights
        and information. From understanding the factors influencing protest
        outcomes to uncovering patterns in protester demographics, the Protest
        Analytics tool provides a comprehensive and illuminating view of
        historical protests. Join us as we explore the rich tapestry of past
        activism and gain valuable insights into the dynamics of social change.
      </p>

      <img
        fluid
        src="classes.jpg"
        alt="classes"
        className="justify-content-center img-thumbnail"
      />
    </Container>
  );
};

export default AnalyticsPage;
