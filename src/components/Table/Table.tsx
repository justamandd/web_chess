import { useEffect, useState } from 'react';
import Square from '../Square/Square';
import './Table.css'

function Table() {

    const [squares, setSquares] = useState<JSX.Element[]>([])

    useEffect(() => {
        const rows = [];

        // Monta as linhas da tabela
        for (let i = 0; i < 8; i++) {
            if ((i + 1) % 2 === 0) {
                rows.push(
                    <ul className="row" key={i}>
                        <Square color="white-box" column={i + 1} row={0}></Square>
                        <Square color="black-box" column={i + 1} row={1}></Square>
                        <Square color="white-box" column={i + 1} row={2}></Square>
                        <Square color="black-box" column={i + 1} row={3}></Square>
                        <Square color="white-box" column={i + 1} row={4}></Square>
                        <Square color="black-box" column={i + 1} row={5}></Square>
                        <Square color="white-box" column={i + 1} row={6}></Square>
                        <Square color="black-box" column={i + 1} row={7}></Square>
                    </ul>
                );
            } else {
                rows.push(
                    <ul className="row" key={i}>
                        <Square color="black-box" column={i + 1} row={0}></Square>
                        <Square color="white-box" column={i + 1} row={1}></Square>
                        <Square color="black-box" column={i + 1} row={2}></Square>
                        <Square color="white-box" column={i + 1} row={3}></Square>
                        <Square color="black-box" column={i + 1} row={4}></Square>
                        <Square color="white-box" column={i + 1} row={5}></Square>
                        <Square color="black-box" column={i + 1} row={6}></Square>
                        <Square color="white-box" column={i + 1} row={7}></Square>
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