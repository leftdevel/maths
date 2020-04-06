import React from "react";
import Multiplication from "./generators/Multiplication";
import Page from "./components/Page";
import MultiplicationComponent from "./components/Multiplication";
import "bulma";
import "./styles/site.scss";

const App = () => (
  <>
    <Page>
      <div className="column">
        {Multiplication.shuffleList(
          Multiplication.resolveListRandomly(
            Multiplication.generateListForNumber(2),
            3,
          ),
        ).map((multiplication) => (
          <MultiplicationComponent
            key={multiplication.getId()}
            multiplicand={multiplication.multiplicand}
            multiplier={multiplication.multiplier}
            result={multiplication.result}
          />
        ))}
      </div>
      <div className="column">
        {Multiplication.shuffleList(
          Multiplication.resolveListRandomly(
            Multiplication.generateListForNumber(3),
            3,
          ),
        ).map((multiplication) => (
          <MultiplicationComponent
            key={multiplication.getId()}
            multiplicand={multiplication.multiplicand}
            multiplier={multiplication.multiplier}
            result={multiplication.result}
          />
        ))}
      </div>
      <div className="column">
        {Multiplication.shuffleList(
          Multiplication.resolveListRandomly(
            Multiplication.generateListForNumber(4),
            3,
          ),
        ).map((multiplication) => (
          <MultiplicationComponent
            key={multiplication.getId()}
            multiplicand={multiplication.multiplicand}
            multiplier={multiplication.multiplier}
            result={multiplication.result}
          />
        ))}
      </div>
    </Page>
    <div className="page-gutter" />
    <Page>
      <div className="column">
        {Multiplication.shuffleList(
          Multiplication.resolveListRandomly(
            Multiplication.generateListForNumber(5),
            3,
          ),
        ).map((multiplication) => (
          <MultiplicationComponent
            key={multiplication.getId()}
            multiplicand={multiplication.multiplicand}
            multiplier={multiplication.multiplier}
            result={multiplication.result}
          />
        ))}
      </div>
      <div className="column">
        {Multiplication.shuffleList(
          Multiplication.resolveListRandomly(
            Multiplication.generateListForNumber(6),
            3,
          ),
        ).map((multiplication) => (
          <MultiplicationComponent
            key={multiplication.getId()}
            multiplicand={multiplication.multiplicand}
            multiplier={multiplication.multiplier}
            result={multiplication.result}
          />
        ))}
      </div>
      <div className="column">
        {Multiplication.shuffleList(
          Multiplication.resolveListRandomly(
            Multiplication.generateListForNumber(7),
            3,
          ),
        ).map((multiplication) => (
          <MultiplicationComponent
            key={multiplication.getId()}
            multiplicand={multiplication.multiplicand}
            multiplier={multiplication.multiplier}
            result={multiplication.result}
          />
        ))}
      </div>
    </Page>
    <div className="page-gutter" />
    <Page>
      <div className="column">
        {Multiplication.shuffleList(
          Multiplication.resolveListRandomly(
            Multiplication.generateListForNumber(8),
            3,
          ),
        ).map((multiplication) => (
          <MultiplicationComponent
            key={multiplication.getId()}
            multiplicand={multiplication.multiplicand}
            multiplier={multiplication.multiplier}
            result={multiplication.result}
          />
        ))}
      </div>
      <div className="column">
        {Multiplication.shuffleList(
          Multiplication.resolveListRandomly(
            Multiplication.generateListForNumber(9),
            3,
          ),
        ).map((multiplication) => (
          <MultiplicationComponent
            key={multiplication.getId()}
            multiplicand={multiplication.multiplicand}
            multiplier={multiplication.multiplier}
            result={multiplication.result}
          />
        ))}
      </div>
    </Page>
  </>
);

export default App;
