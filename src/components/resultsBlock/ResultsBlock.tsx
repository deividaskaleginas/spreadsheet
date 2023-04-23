import { FC, ReactNode } from "react";
import { CellTypes } from "../../types/dataTypes";
import { alphabet } from "../../utils/alphabet";
import "./ResultsBlockStyles.css";

interface ResultsBlockProps {
  data?: CellTypes[][];
}

export const ResultsBlock: FC<ResultsBlockProps> = ({ data }) => {
  const columns = [...alphabet, data];

  const cellsNumber =
    data === undefined ? alphabet.length : alphabet.length - data.length;

  return (
    <div>
      <div className="row">
        <div className="columnNumber"></div>
        <div className="rowHeaterDiv">
          {alphabet?.map((alphabet, index) => {
            return (
              <div key={index} className="rowHeaderCell cell">
                {alphabet}
              </div>
            );
          })}
        </div>
      </div>
      <div className="row">
        <div>
          {columns?.map((colums, index) => {
            return (
              <>
                <div key={index + 1} className="columnNumber">
                  <span className="numbers">{index + 1}</span>
                </div>
              </>
            );
          })}
        </div>
        <div>
          {data?.map((cell, index) => {
            return (
              <div key={index + 2} className="flexWrapper">
                {cell.map((item, index) => (
                  <div key={index} className="cell borderBottom">
                    {item.toString()}
                  </div>
                ))}
                {[...Array(alphabet.length - cell.length)].map((div, index) => (
                  <div key={index} className="cell borderBottom"></div>
                ))}
              </div>
            );
          })}
          {[...Array(cellsNumber + 1)].map((div, index) => (
            <div key={index + 3} className="flexWrapper">
              {[...Array(alphabet.length)].map((div, index) => (
                <div key={index} className="cell borderBottom"></div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
