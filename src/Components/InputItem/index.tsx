import { ChangeEvent, InputHTMLAttributes, useState } from 'react';
import * as C from './style';
import { keyboardKey } from '@testing-library/user-event';

type Props = {
    onEnter: (name: string) => void
}
export const InputItem = ({onEnter}: Props) => {

    const [inputValue, setInputValue] = useState('');

    const inputInfo = (e: keyboardKey) => {
        if( e.code === "Enter" && inputValue !== ''){
            onEnter(inputValue);
            setInputValue('');
        }
    }

    const getInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    return(
    <C.Container>
        <div className='icon'> + </div>
        <input type='text' placeholder='Adicione uma tarefa...' value={inputValue} onChange={getInputValue} onKeyUp={inputInfo}/>
    </C.Container>);

}
