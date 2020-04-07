import React from "react";
import Multiplication from "./generators/Multiplication";
import Page from "./components/Page";
import MultiplicationComponent from "./components/Multiplication";
import PageSeparator from "./components/PageSeparator";
import "bulma";
import "./styles/site.scss";

const pages = [[2, 3, 4], [5, 6, 7], [8, 9, null]];

const App = () => (
  <>
    {pages.map((page, index) => (
      <>
        <Page key={index}>
          {page.map((number) => (
            <div className="column">
              {number && Multiplication.resolveListRandomly(
                Multiplication.generateListForNumber(number), 2,
              ).map((multiplication) => (
                <MultiplicationComponent
                  key={multiplication.getId()}
                  multiplicand={multiplication.multiplicand}
                  multiplier={multiplication.multiplier}
                  result={multiplication.result}
                />
              ))}
            </div>
          ))}
        </Page>
        <PageSeparator />
      </>
    ))}
    {pages.map((page, index) => (
      <>
        <Page key={index}>
          {page.map((number) => (
            <div className="column">
              {number && Multiplication.shuffleList(
                Multiplication.resolveListRandomly(
                  Multiplication.generateListForNumber(number),
                  2,
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
          ))}
        </Page>
        <PageSeparator />
      </>
    ))}
  </>
);

export default App;
