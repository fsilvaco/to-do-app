import moment from "moment";
import styled from "styled-components";

const DateNow = styled.h1`
  color: #0e0e11;
  margin: 15px 0;
`;

function Date() {
  const date = moment().format("MMMM D, YYYY");

  return <DateNow>{date}</DateNow>;
}

export default Date;
