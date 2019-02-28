import React from 'react';
import ReactDOM from 'react-dom';
//styles
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
//service
import * as serviceWorker from './serviceWorker';

import { ContentImageBlock } from './components/ContentImageBlock';

class App extends React.Component {
  render() {
    return (
      <div className="App">       
        <ContentImageBlock />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
