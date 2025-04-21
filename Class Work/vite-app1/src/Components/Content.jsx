function Content() {
  const article = {
    height: "90vh",
    width: "70%",
    backgroundColor: "blue",
    color: "white",
  };

  const paras = [
    {
      id: "01",
      line: "This is head 1",
      par: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident commodi nam doloribus excepturi architecto, voluptatem voluptate ipsam vitae molestias facilis asperiores cum ipsum explicabo harum at placeat quod aut quo autem. Suscipit necessitatibus a quas ipsum iusto ratione, officiis ipsa..",
    },
    {
      id: "02",
      line: "This is head 2",
      par: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident commodi nam doloribus excepturi architecto, voluptatem voluptate ipsam vitae molestias facilis asperiores cum ipsum explicabo harum at placeat quod aut quo autem. Suscipit necessitatibus a quas ipsum iusto ratione, officiis ipsa.",
    },
    {
      id: "03",
      line: "This is head 3",
      par: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident commodi nam doloribus excepturi architecto, voluptatem voluptate ipsam vitae molestias facilis asperiores cum ipsum explicabo harum at placeat quod aut quo autem. Suscipit necessitatibus a quas ipsum iusto ratione, officiis ipsa.",
    },
    {
      id: "04",
      line: "This is head 4",
      par: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident commodi nam doloribus excepturi architecto, voluptatem voluptate ipsam vitae molestias facilis asperiores cum ipsum explicabo harum at placeat quod aut quo autem. Suscipit necessitatibus a quas ipsum iusto ratione, officiis ipsa.",
    },
  ];
  const cont = paras.map((para) => (
    <p key={para.id}>
      <h1>{para.line}</h1>
      {para.par}
    </p>
  ));
  return (
    <>
      <div style={article}>{cont}</div>
    </>
  );
}

export default Content;
