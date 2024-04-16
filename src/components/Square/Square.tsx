import './Square.css'

interface SquareProps {
    color: string;
    row: number;
    column: number;
}

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

function Square(props: SquareProps) {

    return (
        <li className={props.color + " box"}>
            {/* <div className="dark-pawn-up"></div> */}
            <span className="identifier">{letters[props.row] + props.column}</span>

        </li>
    )
}

export default Square