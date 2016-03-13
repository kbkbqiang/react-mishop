import React from 'react';
import ReactSwipe from 'react-swipe'
import css from "./footer.sass"

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return ( < div className = 'footer' >
                    <ul>
                        <li>
                             <a >
                               <div className='nav'>
                                   <div className='ih ispr'>
                                   </div>
                                   <p>
                                   商城
                                   </p>
                               </div>
                            </a>
                        </li>
                        <li>
                            <a >
                               <div className='nav'>
                                   <div className='ic ispr'>
                                   </div>
                                   <p>
                                   分类
                                   </p>
                               </div>
                            </a>
                        </li>
                        <li>
                            <a >
                                   <div className='nav'>
                                       <div className='is ispr'>
                                       </div>
                                       <p>
                                       购物车
                                       </p>
                                   </div>
                            </a>
                        </li>
                        <li>
                            <a >
                                   <div className='nav'>
                                       <div className='if ispr'>
                                       </div>
                                       <p>
                                       服务
                                       </p>
                                   </div>
                            </a>
                        </li>
                    </ul>
                 < /div >
        );
    }
}