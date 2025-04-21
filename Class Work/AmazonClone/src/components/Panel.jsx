function Panel() {
  return (
    <>
      <div className="panel">
        <a href="/">
          <div className="panel-all">
            <i className="fa-solid fa-bars"></i>
            All
          </div>
        </a>
        <div className="panel-ops">
          <a href="/">Todays Deals</a>
          <a href="/">Customer Service</a>
          <a href="/">Registry</a>
          <a href="/">Gift Cards</a>
          <a href="/">Sell</a>
        </div>
        <a href="/">
          <div className="panel-deals">Shop deals in Electronics</div>
        </a>
      </div>
    </>
  );
}

export default Panel;
