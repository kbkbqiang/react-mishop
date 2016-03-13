import React from 'react';
import ReactSwipe from 'react-swipe'
import css from "./css.sass"
class HeadSwiper extends React.Component {

     constructor(props) {
            super(props);
            this.state={
                selectindex:0,
                swipecount:this.props.swipedata.length
            }
        }
        swipechanges(e){
            var index=e%this.state.swipecount;
            this.setState({
                    selectindex:index
            })

        }
    render() {
        var swipes=[];
        var swipestyle={
            height:"3.6rem",
            width:"7.2rem"
        },
        swipeimg={
            width: "100%"
        };
        var navs=[];
        this.props.swipedata.forEach((i,b)=>{
            swipes.push(<div key={b} style={swipestyle}><img style={swipeimg} src={i.img} /></div>)
            navs.push(<li key={b} className={this.state.selectindex==b?"on":''}></li>);
        });
        return (
            <div className='HeadSwiper'>
                <ReactSwipe  transitionEnd={this.swipechanges.bind(this)} auto={4000} >
                    {swipes}
                </ReactSwipe>
                <ul className='swipe-nav'>
                    {navs}
                </ul>            
            </div>
            
        );
    }
}
 

export default HeadSwiper;