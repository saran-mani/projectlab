import { Component } from "react";
import "./question.css";
import { Link } from "react-router-dom";
class GE3171 extends Component {
  state = {};
  render() {
    return (
      <>
        <p className="fs-3 text-center">
          GE3171-Problem Solving and Python Programming Laboratory
        </p>

        <div className="container ">
          <div className="row d-flex justify-content-center">
            <div className="col-10">
              1.Identification and solving of simple real life or scientific or
              technical problems, and developing flow charts for the same.
              (Electricity Billing, Retail shop billing, Sin series, weight of a
              motorbike, Weight of a steel bar, compute Electrical Current in
              Three Phase AC Circuit, etc.) <br />
              <Link to="GE3171-ans-1">
                <span className="ans-btn">An</span>
              </Link>
            </div>
            <div className="col-10">
              2.Python programming using simple statements and expressions
              (exchange the values of two variables, circulate the values of n
              variables, distance between two points).
              <br />
              <Link>
                <span className="ans-btn">Ans</span>
              </Link>
            </div>
            <div className="col-10">
              3.Scientific problems using Conditionals and Iterative loops.
              (Number series, Number Patterns, pyramid pattern)
              <br />
              <Link>
                <span className="ans-btn">Ans</span>
              </Link>
            </div>
            <div className="col-10">
              4.Implementing real-time/technical applications using Lists,
              Tuples. (Items present in a library/Components of a car/ Materials
              required for construction of a building –operations of list &
              tuples)
              <br />
              <Link>
                <span className="ans-btn">Ans</span>
              </Link>
            </div>
            <div className="col-10">
              5.Implementing real-time/technical applications using Sets,
              Dictionaries. (Language, components of an automobile, Elements of
              a civil structure, etc.- operations of Sets & Dictionaries)
              <br />
              <Link>
                <span className="ans-btn">Ans</span>
              </Link>
            </div>
            <div className="col-10">
              6.Implementing programs using Functions. (Factorial, largest
              number in a list, area of shape)
              <br />
              <Link>
                <span className="ans-btn">Ans</span>
              </Link>
            </div>
            <div className="col-10">
              7.Implementing programs using Strings. (reverse, palindrome,
              character count, replacing characters)
              <br />
              <Link>
                <span className="ans-btn">Ans</span>
              </Link>
            </div>
            <div className="col-10">
              8.Implementing programs using written modules and Python Standard
              Libraries (pandas, numpy. Matplotlib, scipy)
              <br />
              <Link>
                <span className="ans-btn">Ans</span>
              </Link>
            </div>
            <div className="col-10">
              9.Implementing real-time/technical applications using File
              handling. (copy from one file to another, word count, longest
              word)
              <br />
              <Link>
                <span className="ans-btn">Ans</span>
              </Link>
            </div>
            <div className="col-10">
              10.Implementing real-time/technical applications using Exception
              handling. (divide by zero error, voter’s age validity, student
              mark range validation) <br />{" "}
              <Link>
                <span className="ans-btn">Ans</span>
              </Link>
            </div>
            <div className="col-10">
              11.Exploring Pygame tool. <br />{" "}
              <Link>
                <span className="ans-btn">Ans</span>
              </Link>
            </div>
            <div className="col-10">
              12.Developing a game activity using Pygame like bouncing ball, car
              race etc.
              <br />
              <Link>
                <span className="ans-btn">Ans</span>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default GE3171;
