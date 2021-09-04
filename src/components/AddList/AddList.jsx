import React, {useState} from 'react'
import List from '../List/List'
import './AddList.scss'
import Badge from '../Badge'
import closeSvg from '../../assets/img/close-btn.svg'


const AddList = ({colors}) => {
    const [state, setState] = useState(false)
    const [selectedColor, selectColor] = useState(colors[0].id)

    return (
        <div className="add-list">
            <List onClick={() => setState(true)} items={[
                {
                    className: "list__add-button",
                    icon: <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 1V11" stroke="#868686" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M1 6H11" stroke="#868686" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>,
                    name: "Добавить список"
                }
            ]} />
            {state && <div className="add-list__popup">
                <img onClick={() => setState(false)} src={closeSvg} alt="close btn" className="add-list__popup-close" />
                <input className="field" type="text" placeholder="Название папки" />
                <div className="add-list__popup-colors">                                            
                    {colors.map(color => <Badge 
                    onClick={() => selectColor(color.id)} 
                    key={color.id} 
                    color={color.name}
                    className={selectedColor === color.id && 'active'}
                    />)}
                </div>
                <button className="button">Добавить</button>
            </div>}
        </div>
    )
}

export default AddList;