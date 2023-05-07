import { Component } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <body class="p-3 m-0 border-0 bd-example bd-example-cols">
          <p className="fs-1">Department</p>

          <div class="container overflow-hidden text-center">
            <div class="row gy-5">
              <div class="col-sm-6">
                <div class="p-2">
                  <Link to="/cse-sem">
                    {" "}
                    B.E. Computer Science and Engineering
                  </Link>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="p-2">
                  <Link to="/it-sem">B.Tech. Information Technology</Link>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="p-2">
                  <Link to="/cce-sem">
                    B.E. Computer and Communication Engineering
                  </Link>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="p-2">
                  <Link to="/aids-sem">
                    B.Tech. Artificial Intelligence and Data Science
                  </Link>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="p-2">
                  <Link to="/csbs-sem">
                    B.Tech. Computer Science and Business Systems
                  </Link>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="p-2">
                  <Link to="/ece-sem">
                    B.E. Electronics and Communication Engineering
                  </Link>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="p-2">
                  <Link to="/ete-sem">
                    B.E. Electronics and Telecommunication Engineering
                  </Link>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="p-2">
                  <Link to="/csd-sem">B.E. Computer Science and Design</Link>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="p-2">
                  <Link to="/cyber-security-sem">
                    B.E. Computer Science and Engineering (Cyber Security)
                  </Link>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="p-2">
                  <Link to="/ai&ml-sem">
                    B.E. Computer Science and Engineering (AI and ML)
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </body>
      </>
    );
  }
}

export default Home;
