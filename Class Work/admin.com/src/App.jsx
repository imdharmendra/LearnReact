import Aside from "./components/Aside";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <>
      <hr />
      <marquee>Welcome to the New Blog App using React.</marquee>
      <hr />

      <div className="aside">
        <Aside></Aside>

        <div className="article"> 
          <Routes>
            <Route
              path="Home"
              element={
                <Home
                  title="This is Home Page"
                  para="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos blanditiis facilis dicta esse commodi id, numquam officiis ullam nisi ipsa cum. Recusandae quod repellat, dolorem excepturi error fugiat, odio omnis officiis ea sint perferendis commodi pariatur. Cupiditate atque repellendus, aperiam odit possimus omnis doloribus, temporibus itaque iure voluptatem fugiat illum quibusdam fugit voluptates nobis? Suscipit libero saepe aliquam fuga! Modi tempora eligendi libero unde aperiam sit molestiae esse pariatur neque vel deleniti, quis fugit aut sint. Ipsum hic sed, maiores quas provident amet atque cupiditate. Atque, deserunt, ex quos modi eum culpa officia architecto totam, soluta recusandae ducimus aspernatur. Harum similique fugit quam magni voluptate ducimus iusto possimus deleniti provident, corrupti error dolores adipisci facilis labore architecto sed! Quia inventore minus repellat. Nobis exercitationem consectetur saepe rerum a sequi, delectus sed fugiat, veniam optio fugit, aperiam aspernatur consequatur natus quaerat maiores distinctio impedit debitis facere. Quibusdam unde velit libero corporis sunt numquam corrupti quae harum voluptate mollitia! Adipisci sunt error esse architecto officiis facilis, laboriosam minus, delectus unde odio minima commodi modi molestiae accusamus voluptate numquam mollitia quibusdam pariatur amet placeat accusantium deleniti maxime! Vero expedita esse ab pariatur, iusto repellat totam? Velit placeat, eius sequi at eum nesciunt dolor."
                />
              }
            >
              <Route
                path="image1"
                element={
                  <img
                    src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg"
                    alt=""
                    width="300px"
                    height="350px"
                  />
                }
              />

              <Route
                path="image2"
                element={
                  <img
                    src="https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg"
                    alt=""
                    width="300px"
                    height="350px"
                  />
                }
              />
            </Route>

            <Route
              path="Html"
              element={
                <Home
                  title="This is HTML page"
                  para="HTML Registration Form is a web-based form designed to collect user information such as name, email, password, and other details. It typically includes input fields, validation, and a submit button to register users on a website.On the site, source code examples with explanations are shown free of charge in English, most of which can also be edited and executed interactively in a live editor. Other important code elements are hidden so that the user can focus on the code shown (developer sandbox). The tutorials are divided into individual chapters on the development languages. In addition to the basics, application-related implementation options and examples, as well as a focus on individual elements of the programming language so-called references are documented. In addition, there is a YouTube channel, which takes up and explains certain topics in web development, and an Internet forum. Technologies such as"
                />
              }
            >
              <Route
                path="image1"
                element={
                  <img
                    src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg"
                    alt=""
                    width="300px"
                    height="350px"
                  />
                }
              />

              <Route
                path="image2"
                element={
                  <img
                    src="https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg"
                    alt=""
                    width="300px"
                    height="350px"
                  />
                }
              />
            </Route>

            <Route
              path="Css"
              element={
                <Home
                  title="This is CSS page"
                  para="Here we will show one HTML page displayed with four different stylesheets. Click on the Stylesheet 1, Stylesheet 2, Stylesheet 3, Stylesheet 4 links below to see the different styles:CSS stands for Cascading Style Sheet CSS describes how HTML elements are to be displayed on screen, paper, or in other media CSS saves a lot of work. It can control the layout of multiple web pages all at once External stylesheets are stored in CSS files are shown free of charge in English, most of which can also be edited and executed interactively in a live editor. Other important code elements are hidden so that the user can focus on the code shown (developer sandbox). The tutorials are divided into individual chapters on the development languages. In addition to the basics, application-related "
                />
              }
            >
              <Route
                path="image1"
                element={
                  <img
                    src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg"
                    alt=""
                    width="300px"
                    height="350px"
                  />
                }
              />

              <Route
                path="image2"
                element={
                  <img
                    src="https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg"
                    alt=""
                    width="300px"
                    height="350px"
                  />
                }
              />
            </Route>

            <Route
              path="Javascript"
              element={
                <Home
                  title="This is JAVASCRIPT page"
                  para="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos blanditiis facilis dicta esse commodi id, numquam officiis ullam nisi ipsa cum. Recusandae quod repellat, dolorem excepturi error fugiat, odio omnis officiis ea sint perferendis commodi pariatur. Cupiditate atque repellendus, aperiam odit possimus omnis doloribus, temporibus itaque iure voluptatem fugiat illum quibusdam fugit voluptates nobis? Suscipit libero saepe aliquam fuga! Modi tempora eligendi libero unde aperiam sit molestiae esse pariatur neque vel deleniti, quis fugit aut sint. Ipsum hic sed, maiores quas provident amet atque cupiditate. Atque, deserunt, ex quos modi eum culpa officia architecto totam, soluta recusandae ducimus aspernatur. Harum similique fugit quam magni voluptate ducimus iusto possimus deleniti provident, corrupti error dolores adipisci facilis labore architecto sed! Quia inventore minus repellat. Nobis exercitationem consectetur saepe rerum a sequi, delectus sed fugiat, veniam optio fugit, aperiam aspernatur consequatur natus quaerat maiores distinctio impedit debitis facere. Quibusdam unde velit libero corporis sunt numquam corrupti quae harum voluptate mollitia! Adipisci sunt error esse architecto officiis facilis, laboriosam minus, delectus unde odio minima commodi modi molestiae accusamus voluptate numquam mollitia quibusdam pariatur amet placeat accusantium deleniti maxime! Vero expedita esse ab pariatur, iusto repellat totam? Velit placeat, eius sequi at eum nesciunt dolor."
                />
              }
            >
              <Route
                path="image1"
                element={
                  <img
                    src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg"
                    alt=""
                    width="300px"
                    height="350px"
                  />
                }
              />

              <Route
                path="image2"
                element={
                  <img
                    src="https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg"
                    alt=""
                    width="300px"
                    height="350px"
                  />
                }
              />
            </Route>

            <Route
              path="React"
              element={
                <Home
                  title="This is REACT page"
                  para="Here we will show one HTML page displayed with four different stylesheets. Click on the Stylesheet 1, Stylesheet 2, Stylesheet 3, Stylesheet 4 links below to see the different styles:CSS stands for Cascading Style Sheet CSS describes how HTML elements are to be displayed on screen, paper, or in other media CSS saves a lot of work. It can control the layout of multiple web pages all at once External stylesheets are stored in CSS files are shown free of charge in English, most of which can also be edited and executed interactively in a live editor. Other important code elements are hidden so that the user can focus on the code shown (developer sandbox). The tutorials are divided into individual chapters on the development languages. In addition to the basics, application-relatedm aspernatur consequatur natus quaerat maiores distinctio impedit debitis facere. Quibusdam unde velit libero corporis sunt numquam corrupti quae harum voluptate mollitia! Adipisci sunt error esse architecto officiis facilis, laboriosam minus, delectus unde odio minima commodi modi molestiae accusamus voluptate numquam mollitia quibusdam pariatur amet placeat accusantium deleniti maxime! Vero expedita esse ab pariatur, iusto repellat totam? Velit placeat, eius sequi at eum nesciunt dolor."
                />
              }
            >
              <Route
                path="image1"
                element={
                  <img
                    src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg"
                    alt=""
                    width="300px"
                    height="350px"
                  />
                }
              />

              <Route
                path="image2"
                element={
                  <img
                    src="https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg"
                    alt=""
                    width="300px"
                    height="350px"
                  />
                }
              />
            </Route>

            <Route path="*" element={<Home />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
