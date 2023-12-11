import { Provider } from "react-redux";
import "./App.css"
import Body from "./components/Body";
import Header from "./components/Header";
import { store } from "./store/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import VideoContainer from "./components/VideoContainer";
import { WatchVideo } from "./components/WatchVideo";

const appRouter = createBrowserRouter([{
  path : '/',
  element : <Body />,
  children : [
    {
      path : '/',
      element : <VideoContainer/>
    },
    {
      path : 'watch',
      element : <WatchVideo/>
    },
  ]
}])


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
      <RouterProvider router={appRouter} />
    </Provider>
    
    </div>
  );
}

export default App;
