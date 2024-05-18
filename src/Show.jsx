import { quiz } from "./quiz.js";
import "./App.css";

const Show = () => {
  const options = [];
  const { questions } = quiz;
  for (var i = 0; i < questions.length; i++) {
    options.push(
      <ul>
        <li>{i}</li>
        <li>{questions[i].question}</li>
        <li>{questions[i].choices}</li>
        <li>{questions[i].correctAnswer}</li>
      </ul>
    );
  }
  return <div>{options}</div>;
};
export default Show;
