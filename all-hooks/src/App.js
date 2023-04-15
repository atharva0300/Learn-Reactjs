import './App.css';

// importing the hooks here
import UseStateHook from './components/UseStateHook';

import UseReducerHook from './components/UseReducerHook';

import UseEffectHook from './components/UseEffectHook';
import UseRefHook from './components/UseRefHook';
import UseLayoutEffect from './components/UseLayoutEffect';
import UseImperativeHandle from './components/UseImperativeHandleHook';
import ParentImperativeHandle from './components/ParentImperativeHandle';
import UseContextHook from './components/UseContextHook';
import UseMemoHook from './components/UseMemoHook';
import UseCallbackHook from './components/UseCallbackHook';

import Redux from './redux/Redux'


function App() {
  return (
    <div className="App">
      {/*<UseStateHook />*/}
      {/*<UseReducerHook />*/}
      {/*<UseEffectHook />*/}
      {/*<UseRefHook />*/}
      {/*<UseLayoutEffect />*/}
      {/*<UseImperativeHandle />*/}
      {/*<ParentImperativeHandle />*/}
      {/*<UseContextHook />*/}
      {/*<UseMemoHook />*/}
      {/*<UseCallbackHook />*/}


      {/*   REDUX      */}
      <Redux />
    </div> 
  );
}

export default App;
