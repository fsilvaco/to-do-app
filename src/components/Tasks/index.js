import styled from "styled-components";
import taskData from "../../datas";

const CompletedTask = styled.div``;

CompletedTask.Task = styled.div`
  margin: 10px 0;

  && p {
    color: #b9b9be;
    text-decoration: line-through;
  }
`;
const IncompletedTask = styled.div``;

IncompletedTask.Task = styled.div`
  margin: 10px 0;

  && p {
    color: #575767;
  }

  && span {
    color: #b9b9be;
    font-size: 14px;
  }
`;

function Tasks() {
  const completed = taskData.filter((e) => e.isChecked === true);
  const incompleted = taskData.filter((e) => e.isChecked === false);

  return (
    <>
      <IncompletedTask>
        <b>Incompleted</b>
        {incompleted.map((task, index) => (
          <IncompletedTask.Task key={index}>
            <p>{task.title}</p>
            <span>{task.category}</span>
          </IncompletedTask.Task>
        ))}
      </IncompletedTask>

      <CompletedTask>
        <b>Completed</b>
        {completed.map((task, index) => (
          <CompletedTask.Task key={index}>
            <p>{task.title}</p>
          </CompletedTask.Task>
        ))}
      </CompletedTask>
    </>
  );
}

export default Tasks;
