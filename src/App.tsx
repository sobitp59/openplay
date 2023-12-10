import { Provider } from "react-redux";
import "./App.css"
import Body from "./components/Body";
import Header from "./components/Header";
import { store } from "./store/store";

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
      <Body/>
    </Provider>
    
    </div>
  );
}

export default App;
