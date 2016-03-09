import React from 'react';
import HeadSwiper from './HeadSwiper'
import Sections from './Sections'
import Footer from './Footer'
class Index extends React.Component {
      constructor(props) {
            super(props);
            this.state=this.props;
        }
    render() {
        return (
           <div className='indexpage'>
               <HeadSwiper {...this.state} />
               <Sections   {...this.state} />
               <Footer   />
           </div>
        );
    }
}
 

export default Index;
