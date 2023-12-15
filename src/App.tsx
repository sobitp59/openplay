import { Provider } from "react-redux";
import "./App.css"
import Body from "./components/Body";
import Header from "./components/Header";
import { store } from "./store/store";
import { Routes, Route } from "react-router-dom";
import VideoContainer from "./components/VideoContainer";
import { WatchVideo } from "./components/WatchVideo";
import Results from "./components/Results";



function App() {


  return (
    <div className="w-full h-full">
    {/* 
      Header
      Body
        MainContainer
          - Sidebar
            - MenuItems
          - ButtonsCategory
          - VideosContainer
            - VideoCard 
    
    */}
    <Provider store={store}>
      <Header />

        <Routes>
          <Route path="/" element={<Body/>} >
            <Route path="/" element={<VideoContainer/>}/>
            <Route path="watch" element={<WatchVideo/>}/>
            <Route path="/results" element={<Results/>}/>
          </Route>
        </Routes>
      </Provider>
    
    </div>
  );
}

export default App;
