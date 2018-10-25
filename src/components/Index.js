import React, { Component } from "react";

class Index extends Component {
  render() {
    const { profile } = this.props;
    return (
      <main id="home">
        <h1 className="lg-heading">
          {profile.name}{" "}
          <span className="text-secondary">{profile.surname}</span>
        </h1>
        <h2 className="sm-heading">{profile.desc}</h2>
        <div className="icons">
          {profile.mail ? (
            <a href={`mailto:${profile.mail}`}>
              <i className="fas fa-envelope fa-2x" />
            </a>
          ) : null}

          {profile.linkedin ? (
            <a
              href={`https://www.linkedin.com/in/${profile.linkedin}/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin fa-2x" />
            </a>
          ) : null}
          {profile.github ? (
            <a
              href={`https://github.com/${profile.github}/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github fa-2x" />
            </a>
          ) : null}
        </div>
      </main>
    );
  }
}

export default Index;
