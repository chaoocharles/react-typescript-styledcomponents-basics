import * as React from "react";
import styled from "styled-components";
import Button from "./components/common/Button";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

function App() {
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");

  const handleDate = () => {
    const currentDate = new Date();
    setDate(currentDate.toDateString());
  };

  const handleTime = () => {
    const currentDate = new Date();

    setTime(
      `${currentDate.getHours()} : ${currentDate.getMinutes()} : ${currentDate.getSeconds()}`
    );
  };

  return (
    <Container>
      <h2>
        Date: {date} <br /> Time: {time}
      </h2>
      <Button
        btnText={"Show Current Date"}
        variant={"outlined"}
        margin={"0 0 5px 0"}
        onClick={() => handleDate()}
      />
      <Button
        btnText={"Show Current Time"}
        variant={"contained"}
        onClick={() => handleTime()}
      />
    </Container>
  );
}

export default App;
