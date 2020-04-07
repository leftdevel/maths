import React from "react";
import Multiplication from "./generators/Multiplication";
import Page from "./components/Page";
import MultiplicationComponent from "./components/Multiplication";
import "bulma";
import "./styles/site.scss";

const pages = [[2, 3, 4], [5, 6, 7], [8, 9, null]];

const App = () => (
  <>
    {pages.map((page, index) => (
      <Page key={`1_page_${index}`}>
        {page.map((number) => (
          <div key={`1_page_${index}_${number}`} className="column">
            {number && Multiplication.resolveListRandomly(
              Multiplication.generateListForNumber(number), 2,
            ).map((multiplication) => (
              <MultiplicationComponent
                key={multiplication.getId()}
                multiplicand={multiplication.baseNumber}
                multiplier={multiplication.modifier}
                result={multiplication.result}
              />
            ))}
          </div>
        ))}
      </Page>
    ))}
    {pages.map((page, index) => (
      <Page key={`2_page_${index}`}>
        {page.map((number) => (
          <div key={`2_page_${index}_${number}`} className="column">
            {number && Multiplication.shuffleList(
              Multiplication.resolveListRandomly(
                Multiplication.generateListForNumber(number),
                2,
              ),
            ).map((multiplication) => (
              <MultiplicationComponent
                key={multiplication.getId()}
                multiplicand={multiplication.baseNumber}
                multiplier={multiplication.modifier}
                result={multiplication.result}
              />
            ))}
          </div>
        ))}
      </Page>
    ))}
  </>
);

export default App;
