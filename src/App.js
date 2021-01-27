import "./App.css";
import React, { useState } from "react";
import { Message, Title, Page } from "./styles";
import PlayButton from "./Components/PlayButton";
import InputArea from "./Components/InputArea";
let number = 0; //Math.round(Math.random() * 100);
function App() {
  const [submission, setSubmission] = useState();
  const [output, setOutput] = useState("");
  const [count, setCount] = useState(0);
  const [play, setPlay] = useState(null);

  const changeOver = () => {
    if (play === null) {
      number = Math.round(Math.random() * 100);
      return (
        <PlayButton
          setPlay={setPlay}
          setCount={setCount}
          count={count}
          setOutput={setOutput}
        />
      );
    } else {
      return (
        <InputArea
          setSubmission={setSubmission}
          submit={submit}
          count={count}
          submission={submission}
        />
      );
    }
  };

  console.log("submission=", number);

  const guess = parseInt(submission);

  const submit = () => {
    setCount(count - 1);
    if (guess === number) {
      setOutput(
        <button
          onClick={() => setPlay(null)}
          type="button"
          class="btn btn-warning"
        >
          🎉Winner Winner🎉, want to play asgain?
        </button>
      );
      setSubmission("");
    } else if (guess > number) setOutput("Try Lower value");
    else if (guess < number) setOutput("Try Higher value");
    console.log(count);
    if (count < 1) {
      setOutput(
        <button
          type="button"
          class="btn btn-warning btn-lg"
          data-bs-toggle="button"
          autocomplete="off"
          onClick={() => setPlay(null)}
        >
          {" "}
          U Failed 😛, play again?
        </button>
      );

      setCount(0);
    }
  };

  return (
    <Page className="App">
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
        crossorigin="anonymous"
      ></link>
      <header>
        <Title>The Guessing Game</Title>

        <div>{changeOver()}</div>
        <h2>{count} Attempts</h2>
        <Message>{output}</Message>
      </header>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossorigin="anonymous"
      ></script>
    </Page>
  );
}

export default App;
