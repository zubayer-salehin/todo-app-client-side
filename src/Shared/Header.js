import React from 'react';

const Header = () => {

    return (
        <div className='bg-purple-700'>
            <div className="w-10/12 mx-auto">
                <div className="navbar ">
                    <div className="navbar-start">
                        <a className="btn btn-ghost normal-case text-xl text-white">Todo App</a>
                    </div>
                    <div className="navbar-end">
                        <a className='btn btn-success'>Get Started</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;