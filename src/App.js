import useMediaQuery from "hooks/useMediaQuery";
import Body from "layouts/Body/Body";
import Footer from "layouts/Footer/Footer";
import Navbar from "layouts/Navbar/Navbar";
import { Provider } from "react-redux";
import { store } from "reduxFolder/store";
import "./App.css";

function App() {
  const isBellow600px = useMediaQuery("(max-width : 600px)");

  return (
    <div className="App">
      <Provider store={store}>
        <div className="CONTENT">
          <Navbar />
          <div className={`${isBellow600px ? "mb-50px" : ""} BODY`}>
            <Body />
          </div>
          <Footer />
        </div>
      </Provider>
    </div>
  );
}

export default App;
