


const Sidebar = () => {
  return (
    <div className="navcontainer">
      <nav className="nav">
        <div className="nav-upper-options">
          <div className="nav-option option1">
            <img 
              src="https://media.geeksforgeeks.org/wp-content/uploads/20221210182148/Untitled-design-(29).png"
              className="nav-img" 
              alt="dashboard"
            />
            <h3>Dashboard</h3>
          </div>
          <div className="option2 nav-option">
            <img 
              src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/9.png"
              className="nav-img" 
              alt="articles"
            />
            <h3>Articles</h3>
          </div>
          {/* Add other nav options similarly */}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
