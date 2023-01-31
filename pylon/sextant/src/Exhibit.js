import './Exhibit.css';


const TableHeaderRow = () => {
    return <tr><th>ID</th><th>IP</th><th>location</th><th>info</th></tr>;
}

const TableRow = ({ data }) => {
    return data.map((data) =>
        <tr key={data.ID}>
            <td>{data.ID}</td><td>{data.IP}</td><td>{data.location}</td><td>{data.info}</td>
        </tr>
    );
}

function Exhibit({ data }) {
    return (
        <table>
            <tbody>
                <TableHeaderRow />
                <TableRow data={data} />
            </tbody>
        </table>
    );
}

export default Exhibit;