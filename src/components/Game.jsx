import { Button, Container, Col, Row } from "react-bootstrap";
import { useState } from "react";
import Winner from "./Winner";

export default function Game() {
  const [shape, setShape] = useState("x");
  const [winner, setWinner] = useState(null);
  const [arr, setArr] = useState(Array(9).fill(null));

  const checkIsWinner = () => {
    var cnt = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) {
        cnt++;
      }
    }
    const allSituations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8]
    ];
    for (let i = 0; i < allSituations.length; i++) {
      if (
        arr[allSituations[i][0]] &&
        arr[allSituations[i][0]] === arr[allSituations[i][1]] &&
        arr[allSituations[i][0]] === arr[allSituations[i][2]]
      ) {
        return arr[allSituations[i][0]];
      }
    }
    if(cnt===9){
      alert('draw')
      newGame();
    }
    return null;
  };

  const nextTurn = (num) => {
    if (arr[num]) {
      alert("A busy place");
      return;
    }
    let newArr = arr;
    newArr[num] = shape;
    setArr(newArr);
    setShape((prev) => (prev === "x" ? "o" : "x"));
    setWinner(checkIsWinner());
  };
  const Square = ({ num }) => {
    return <Button onClick={() => nextTurn(num)}>{arr[num]}</Button>;
  };
  const newGame = () => {
    setWinner(null);
    setArr(Array(9).fill(null));
  };
  return (
    <>
      {winner ? (
        <>
          <Winner value={winner} />
          <Button className="restart" variant="success" onClick={newGame}>
            Restart
          </Button>
        </>
      ) : (
        <Container>
          Turn of:{shape}
          <Row>
            <Col>
              <Square num={0} />
              <Square num={1} />
              <Square num={2} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Square num={3} />
              <Square num={4} />
              <Square num={5} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Col>
                <Square num={6} />
                <Square num={7} />
                <Square num={8} />
              </Col>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}
