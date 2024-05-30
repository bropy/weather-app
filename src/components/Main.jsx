import '../styles/Main.css'

export default function Main(props){
    return (
    <div className='main-box'>
        <form onSubmit={props.submitHadnler}>
            <label htmlFor="city">City name</label>
            <br/>
            <input 
            id='city'
            type="text" 
            name='city'
            placeholder='Enter city name to get weather there'
            required
            />
            <br/>
            <button id='run' type='submit'>
                Get weather
            </button>
        </form>
    </div>
    )
}
