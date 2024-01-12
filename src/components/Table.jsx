

const Table = ({data}) => {
    return (
        <div className="weather">
            {
                JSON.stringify(data) ==='{}'
                ? ''
                : <table>
                    <tr>
                        <td>temp</td>
                        <td>{(data.main.temp - 273.15).toFixed(2)}C</td>
                    </tr>
                    <tr>
                        <td>description</td>
                        <td>{data.weather[0].description}</td>
                    </tr>
                   <tr>
                    <td>osh</td>
                    <td>{data.name}, {data.sys.country}</td>
                   </tr>
                </table>
            }
        </div>
    );
}

export default Table;
