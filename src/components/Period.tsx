import Colortag from './Colortag'

function Period(props: { name: string; start: string; end: string; }) {

    return(
        <tr>
            <td><Colortag name={props.name}/>{props.name}</td>
            <td>{props.start}</td>
            <td>{props.end}</td>
        </tr>
    )
}

export default Period;