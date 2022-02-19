import Body from "layouts/Body/Body";
import Footer from "layouts/Footer/Footer";
import Navbar from "layouts/Navbar/Navbar";
import { Provider } from "react-redux";
import { store } from "reduxFolder/store";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <Body />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
