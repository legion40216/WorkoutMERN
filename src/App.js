import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from "react-router-dom"

//layout
import Rootlayout from "./layout/Rootlayout";
//pages
import Home from "./pages/Home";



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Rootlayout/>}>
        <Route index element={<Home />} />
    </Route>
    </> 
    ))

function App() {
  return (
    <div className="App">
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;
