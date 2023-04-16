import React from 'react';
import './post.css'
import Counter from './features/counter/Counter';
import Posts from './features/counter/Posts'

// importing routers and the compoenents 
import { createBrowserRouter , createRoutesFromElements , Route , Link , RouterProvider, Outlet} from 'react-router-dom'




function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path = "/" element = {<Root />}>
        <Route path = "/counter" element = {<Counter />} />
        <Route path = "/posts" element = {<Posts />} />
      </Route>
    )
  )

  return (
    <div className='App'>
      <RouterProvider router ={router} />
    </div>
  );
}

// defining the root component here 
const Root = () => {
  return(
    <>
    <div>
      <Link to = "/counter" >Counter</Link>
      <Link to = "/posts" >Posts</Link>
    </div>

    <div>
      <Outlet />
    </div>
    </>
  )
}

export default App;
