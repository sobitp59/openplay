import { Provider } from "react-redux";
import "./App.css"
import Body from "./components/Body";
import Header from "./components/Header";
import { store } from "./store/store";
import { Routes, Route } from "react-router-dom";
import VideoContainer from "./components/VideoContainer";
import { WatchVideo } from "./components/WatchVideo";
import Results from "./components/Results";
import ErrorBoundary from "./components/Error";



function App() {


  return (
    <div className="w-full h-full relative">
    <Provider store={store}>
      <Header />
        <Routes>
          <Route path="/" element={<Body/>} >
            <Route path="/" element={<ErrorBoundary><VideoContainer/></ErrorBoundary>}/>
            <Route path="watch" element={<ErrorBoundary><WatchVideo/></ErrorBoundary>}/>
            <Route path="/results" element={<ErrorBoundary><Results/></ErrorBoundary> }/>
          </Route>
        </Routes>
      </Provider>
    
    </div>
  );
}

export default App;
