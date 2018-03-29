import React, { Component } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Chocolates from '../ChocolatesInBox/Chocolates';

import HalfPoundBox from '../../../images/halfPound.jpg';
import '../chocolates.css';

class HalfPound extends Component {
    render(){
        return(
            <div className='wrapper'>
                <Header />
                <div className='product-body'>
                    <div className='product-info'>
                        <div className='product-description'>
                            <h1>Half Pound Box</h1>
                            <div className='product-add'>
                                <button>Add To Cart</button>
                                <input placeholder='1'/>
                                <h3>$14.95</h3>
                            </div>
                            <p>
                                Lahna’s Half Pound box of chocolates are a perfect gift for two,
                                or for one who really really loves chocolate. This box contains
                                3 Sea Salt Caramels, 3 Mint Truffles, 2 Almond Clusters,
                                2 Coconut Roughs, and 2 Pecan Turles.
                            </p>
                            <div className='product-ingredients'>
                                <h3>Ingredients</h3>
                                <p>
                                    Love, joy, sweat, tears, marshmollow, chocolate, sometimes blood,
                                    roasted pecans, snot from grandkids, and coconut. Contains lots of
                                    sugar, milk, nuts, a the taste of guilt-free self indulgence. Gluten-free.
                                </p>
                            </div>
                        </div>
                        <div className='product-picture'>
                            <img src={HalfPoundBox} alt='box of chocolates'/>
                        </div>
                    </div>
                    <Chocolates />
                </div>
                <Footer />
            </div>
        )
    }
}

export default HalfPound;