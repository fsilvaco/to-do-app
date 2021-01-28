import styled from "styled-components";
import taskData from "../../datas";

const Text = styled.p`
  color: #575767;
  margin: 15px 0;
`;

function Overview() {
  const completed = taskData.filter((e) => e.isChecked === true);
  const incompleted = taskData.filter((e) => e.isChecked === false);
  return (
    <Text>
      {incompleted.length} incomplete, {completed.length} completed
    </Text>
  );
}

export default Overview;
