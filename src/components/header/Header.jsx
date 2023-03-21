import React from 'react'

export const Header = () => {
    return (
        <div className='app'>
            <div className="header">
                <div className="logo">
                    logo
                </div>
                <div className="inp">
                    <input placeholder='поиск фильмов...' />
                </div>
                <div className='right-header'>
                    <div className="favorite">
                        fav
                    </div>
                    <div className="user">
                        user
                    </div>
                    <div className="cart">
                        cart
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
