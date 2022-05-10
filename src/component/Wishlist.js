import React from 'react';
import {useSelector} from "react-redux";
import WishlistCard from "./WishlistCard";

const Wishlist = () => {
    const {Wishlist} = useSelector(s => s)

    return (
        <div>
            <div className="flex flex-row flex-wrap  ">
                {
                    Wishlist.map(el => (
                        <WishlistCard product={el} key={el.id}/>
                    ))
                }
            </div>

        </div>
    );
};

export default Wishlist;