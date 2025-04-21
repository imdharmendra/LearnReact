function Header() {
  const navs = [
    {
      id: 1,
      url: "/",
      urlName: "home",
    },
    {
      id: 2,
      url: "/page1",
      urlName: "Page One",
    },
    {
      id: 3,
      url: "/page2",
      urlName: "Page Two",
    },
    {
      id: 4,
      url: "/page3",
      urlName: "Page Three",
    },
    {
      id: 5,
      url: "/page4",
      urlName: "Page Four",
    },
  ];

  const list = navs.map((nav) => (
    <li key={nav.id}>
      <a href={nav.url}>{nav.urlName}</a>
    </li>
  ));

  return (
    <div className="head">
      <ul>{list}</ul>
    </div>
  );
}

export default Header;
