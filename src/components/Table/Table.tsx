import { useEffect, useState } from 'react';
import Square from '../Square/Square';
import './Table.css'

function Table() {

    const [squares, setSquares] = useState<JSX.Element[]>([])

    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

    useEffect(() => {
        const rows = [];

        // Monta as linhas da tabela
        for (let i = 0; i < 8; i++) {
            if ((i + 1) % 2 === 0) {
                rows.push(
                    <ul className="row" key={i}>
                        <Square color="white-box" column={i + 1} row={0} key={letters[0] + (i + 1)}></Square>
                        <Square color="black-box" column={i + 1} row={1} key={letters[1] + (i + 1)}></Square>
                        <Square color="white-box" column={i + 1} row={2} key={letters[2] + (i + 1)}></Square>
                        <Square color="black-box" column={i + 1} row={3} key={letters[3] + (i + 1)}></Square>
                        <Square color="white-box" column={i + 1} row={4} key={letters[4] + (i + 1)}></Square>
                        <Square color="black-box" column={i + 1} row={5} key={letters[5] + (i + 1)}></Square>
                        <Square color="white-box" column={i + 1} row={6} key={letters[6] + (i + 1)}></Square>
                        <Square color="black-box" column={i + 1} row={7} key={letters[7] + (i + 1)}></Square>
                    </ul>
                );
            } else {
                rows.push(
                    <ul className="row" key={i}>
                        <Square color="black-box" column={i + 1} row={0} key={letters[0] + (i + 1)}></Square>
                        <Square color="white-box" column={i + 1} row={1} key={letters[1] + (i + 1)}></Square>
                        <Square color="black-box" column={i + 1} row={2} key={letters[2] + (i + 1)}></Square>
                        <Square color="white-box" column={i + 1} row={3} key={letters[3] + (i + 1)}></Square>
                        <Square color="black-box" column={i + 1} row={4} key={letters[4] + (i + 1)}></Square>
                        <Square color="white-box" column={i + 1} row={5} key={letters[5] + (i + 1)}></Square>
                        <Square color="black-box" column={i + 1} row={6} key={letters[6] + (i + 1)}></Square>
                        <Square color="white-box" column={i + 1} row={7} key={letters[7] + (i + 1)}></Square>
                    </ul>
                );
            }
        }

        setSquares(rows.reverse());
    }, []);

    return (
        <>
            <div className="table">
                {squares}
            </div>
        </>
    )
}

export default Table;