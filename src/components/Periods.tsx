import './Periods.css'
import Period from './Period'

interface period {
    name: string,
    start: string,
    end: string
}

function Periods(props: { schedule: period[]; }) {
    let periodsJSX = [];
    for (let i = 0; i<props.schedule.length; i++) {
        const period:period = props.schedule[i];
        periodsJSX.push(<Period name={period.name} start={period.start} end={period.end}/>)
    }
    return(
        <table>
            <tbody>
                <tr>
                    <th>Period</th>
                    <th>Start</th>
                    <th>End</th>
                    <th>Duration</th>
                </tr>
            {periodsJSX}
            </tbody>
        </table>
    )
}

export default Periods;