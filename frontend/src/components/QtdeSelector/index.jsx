import { useEffect, useState } from 'react';

import { Container } from "./styles";

import { FiPlus, FiMinus } from 'react-icons/fi';

export function QtdeSelector ({getQtdeFromSelector}) {
    const [qtde, setQtde] = useState(1);

    function handlePlusClick () {
        setQtde((prevState) => prevState + 1);
    };

    function handleMinusClick () {
        if (qtde === 1) {
            return;
        } else {
            setQtde((prevState) => prevState - 1);  
        }
    }

    useEffect(() => {
        getQtdeFromSelector(qtde)
    }, [qtde])

    return (
        <Container>
            <button onClick={handleMinusClick}>
                <FiMinus size={24}/>
            </button>
            
            <span>
                {qtde < 10 ? `0${String(qtde)}` : String(qtde)}
            </span>

            <button onClick={handlePlusClick}>
                <FiPlus size={24}/>
            </button>
        </Container>
    )
}