import './App.css';

// importing the hooks here
import UseStateHook from './components/UseStateHook';

import UseReducerHook from './components/UseReducerHook';

import UseEffectHook from './components/UseEffectHook';
import UseRefHook from './components/UseRefHook';



function App() {
  return (
    <div className="App">
      {/*<UseStateHook />*/}
      {/*<UseReducerHook />*/}
      {/*<UseEffectHook />*/}
      <UseRefHook />
    </div>
  );
}

export default App;
