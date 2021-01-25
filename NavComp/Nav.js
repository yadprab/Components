import React from "react";
import { Img } from "./Img";
import { Title } from "./Title";
import { Link } from "react-router-dom";
const Nav = ({ img, title, source, navObj }) => {
  return (
    <>
      <nav>
        <section className="logo--section">
          <Link to="/">
            {img ? <Img img={source} /> : <Title title={title} />}
          </Link>
        </section>

        <ul className="desktop--nav">
          {navObj.map((links) => {
            return <Link to={links.path}>{links.navName}</Link>;
          })}
        </ul>
        <section className="button--section">
          <button aria-label="navigation button" id="nav--button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              {/*Font Awesome Free 5.15.0 by @fontawesome - https://fontawesome.com
License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)*/}
              <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
            </svg>
          </button>
        </section>
      </nav>
    </>
  );
};

export { Nav };
