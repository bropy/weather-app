export default function Header(){
    const divstyle={
        font: 'italic 13pt "Trebuchet MS"'
    };
    const h2style={
        marginBottom: '0px',
        color:'purple'
    };
    const h3style={
        marginTop: '0px',
        color:'darkCyan'
    };
    return(
        <div style={divstyle}>
            <h2 style={h2style}>Weather Informer</h2>
            <h3 style={h3style}>Get weather by city name</h3>
            <hr/>
        </div>
    );
}