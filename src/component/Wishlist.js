import React from 'react';
import {useSelector} from "react-redux";
import WishlistCard from "./WishlistCard";

const Wishlist = () => {
    const {Wishlist} = useSelector(s => s)

    return (
        <div>
            <div className="flex flex-row flex-wrap wishlist_shop">
                {
                    Wishlist.map(el => (
                        <div className="wishlist_shops">
                            <WishlistCard product={el} key={el.id}/>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default Wishlist;