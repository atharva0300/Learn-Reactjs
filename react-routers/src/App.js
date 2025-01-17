import './App.css';

import {createBrowserRouter , createRoutesFromElements , Route , Link , Outlet, RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import {Data , dataLoader} from './components/Data'
import Content from './components/Content'

function App() {

  const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path = "/" element = {<Root />}>
            <Route index element = {<Home />} />
            <Route path = "/data" element = {<Data />} loader = {dataLoader} />
            <Route path = "/content" element = {<Content />} />
        </Route>

      )
  )
  return (
    <div className="App">
      <RouterProvider router = {router} />
    </div>
  );
}

const Root = () => {
  // defining the root component here

  return <>
    <div>
      <Link to = "/">  Home  </Link><br/>
      <Link to = "/data">  Data  </Link><br/>
      <Link to = "/content">  Content  </Link>
    </div>

    <div>
      <Outlet />
    </div>

  </>
}

export default App;
