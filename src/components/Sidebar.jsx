import React from 'react'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div>
                <h1>Категории</h1>
                <nav>
                    <ul className='list'>
                        <li>Фантастика</li>
                        <li>Триллеры</li>
                        <li>Комедии</li>
                        <li>Детективы</li>
                        <li>Новинки</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Sidebar
