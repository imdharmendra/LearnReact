import { useState } from "react";

function Toturial() {
  let data = "This is Toturial Website.";
  const [para, setPara] = useState(data);

  return (
    <>
      <div className="navs">
        <ul>
          <li
            onClick={() =>
              setPara(
                "Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript, a programming language"
              )
            }
          >
            HTML
          </li>
          <li
            onClick={() =>
              setPara(
                "Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript"
              )
            }
          >
            CSS
          </li>
          <li
            onClick={() =>
              setPara(
                "JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior. Web browsers have a dedicated JavaScript engine that executes the client code."
              )
            }
          >
            JAVASCRIPT
          </li>
          <li
            onClick={() =>
              setPara(
                "React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js. Because React is only concerned with the user interface and rendering components to the DOM, React applications often rely on libraries for routing and other client-side functionality.[9][10] A key advantage of React is that it only rerenders those parts of the page that have changed, avoiding unnecessary re-rendering of unchanged DOM elements. It was first launched on 29 May 2013"
              )
            }
          >
            REACT
          </li>
        </ul>
      </div>
      <div className="article">
        <h2>{para}</h2>
      </div>
    </>
  );
}

export default Toturial;
