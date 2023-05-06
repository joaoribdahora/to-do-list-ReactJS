import { useState } from 'react'
import { itemListType } from '../../types'
import * as C from './style'

type Props = {
    item: itemListType,
    onClickDelete: (id: number) => void
}

export const ListItem = ({item, onClickDelete}: Props) => {
    
    const [isCheck, setIsCheck] = useState(false);
    const [indexItem, setIndexItem] = useState({id: 0, title: '', done: false});


    const deleteItem = () => {
        onClickDelete(item.id);
    }

    return(
        <C.Container>
            <C.SectionOne checked={isCheck}>
                
                <input type='checkbox' checked={isCheck} onChange={e => setIsCheck(e.target.checked)} />

                <label>{item.title}</label>
            </C.SectionOne>
            <C.SectionTwo>
                <div className='button' onClick={deleteItem}>Remover</div>    
            </C.SectionTwo>
        </C.Container>
    )
}