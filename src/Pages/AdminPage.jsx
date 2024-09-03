import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar/Sidebar";
import MainContent from "../Components/MainContent/MainContent";

function Adminpage() {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default Adminpage;
