import React, { Component } from "react";
import { getCurrentYear } from "../../lib/helper";

class DefaultFooter extends Component {
  render() {
    return (
      <div className="footer p-3">
        <div className="container">
          <div className="row">
            <div className="col mx-auto text-left">
              <span>
                &copy; {getCurrentYear()}

                  admin

                . All rights reserved.
              </span>
            </div>
            <div className="col-lg-3 col-sm">
              <div>
                  <i
                    className="fa fa-facebook-official fa-2x pr-3"
                    aria-hidden="true"
                    style={{ color: "white" }}
                  />
                  <i
                    className="fa fa-twitter fa-2x pr-3"
                    aria-hidden="true"
                    style={{ color: "white" }}
                  />
                  <i
                    className="fa fa-instagram fa-2x pr-3"
                    aria-hidden="true"
                    style={{ color: "white" }}
                  />
                <i
                  className="fa fa-youtube-play fa-2x pr-3"
                  aria-hidden="true"
                  style={{ color: "white" }}
                />
                  <i
                    className="fa fa-linkedin-square fa-2x pr-3"
                    aria-hidden="true"
                    style={{ color: "white" }}
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DefaultFooter;
