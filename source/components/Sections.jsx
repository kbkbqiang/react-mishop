import React from 'react';
import ReactSwipe from 'react-swipe'
import LazyLoad from 'react-lazy-load';
import css from "./css.sass"

export default class Sections extends React.Component {
         constructor(props) {
            super(props);
            }
    render() {
        var items=this.props.Sections.map((item,i)=>{
                  var items=item.body.items;
                  return  items.map(function(a,b){
                            return(<div className='item'>
                                        <div className='img'>
                                <LazyLoad height={762} offsetVertical={300}>
                                <img className='ico lazy' src={a.img_url} />
                                </LazyLoad>
                                <img  />
                            {
                            a.product_tag?<img className='tag lazy' src={a.product_tag} />:""
                            }
                                        </div>
                                        <div className='info'>
                                            <div className='name'>
                                                <p>{a.product_name}</p>
                                            </div>
                                             <div className='brief'>
                                                <p>{a.product_brief}</p>
                                            </div>
                                            <div className='price'>
                                                <p>{a.product_price}</p>
                                            </div>
                                        </div>
                                </div>)
                            })
                });
        return (
            <div className='list'>
                <div className='Sections'>
                    {items}
                </div>
            </div>
        );
    }
}
 
