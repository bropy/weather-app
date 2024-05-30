import React from 'react';
import '../styles/Weather.css';

export default function Weather(props) {
    return (
        <div className='weather-box'>
            <h3>Current weather information</h3>
            <hr />
            {props.city && (
                <div className='data-list'>
                    <img src={props.icon} alt="Weather Icon" />
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Parameter</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1.</td>
                                <td>Country</td>
                                <td>{props.country}</td>
                            </tr>
                            <tr>
                                <td>2.</td>
                                <td>City</td>
                                <td>{props.city}</td>
                            </tr>
                            <tr>
                                <td>3.</td>
                                <td>Time</td>
                                <td>{props.localTime}</td>
                            </tr>
                            <tr>
                                <td>4.</td>
                                <td>Time zone</td>
                                <td>{props.timezone}</td>
                            </tr>
                            <tr>
                                <td>5.</td>
                                <td>Temperature</td>
                                <td>{props.temperature}</td>
                            </tr>
                            <tr>
                                <td>6.</td>
                                <td>Visibility</td>
                                <td>{props.visibility}</td>
                            </tr>
                            <tr>
                                <td>7.</td>
                                <td>Wind direction</td>
                                <td>{props.windDirection}</td>
                            </tr>
                            <tr>
                                <td>8.</td>
                                <td>Wind speed</td>
                                <td>{props.windSpeed}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
