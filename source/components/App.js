import {} from '../sass/base.sass';
import React from 'react';
import Index from './Index'
import Data from '../test.js'
class App extends React.Component {
     constructor(props) {
            super(props);
            this.state=Data;
        }
    render() {
        return (
           <div>
              <Index {...this.state} />
           </div>
        );
    }
}
 

export default App;