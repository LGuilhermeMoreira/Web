const Temperatura = (props) => {
    const celsiusParaFahrenheit = (celsius) => (9 * celsius + 180) / 5;
    const fahrenheitParaCelsius = (fahrenheit) => (5 * fahrenheit - 180) / 9;
    const kelvin = (k) => ({ celsius: k - 273, fahrenheit: k * 1.8 - 459.4 });
  
    return (
      <div>
        <h1 style={{ color: "red" }}>Celsius: {props.celsius}</h1>
        <h1 style={{ color: "blue" }}>Fahrenheit: {props.fahrenheit}</h1>
        <h1 style={{ color: "green" }}>Kelvin: {props.kelvin}</h1>
        <h2>
          {props.celsius}°C = {celsiusParaFahrenheit(props.celsius)}°F
        </h2>
        <h2>
          {props.fahrenheit}°F = {fahrenheitParaCelsius(props.fahrenheit)}°C
        </h2>
        <h2>
          {props.kelvin}K = {kelvin(props.kelvin).celsius}°C
        </h2>
        <h2>
          {props.kelvin}K = {kelvin(props.kelvin).fahrenheit}°F
        </h2>
      </div>
    );
  };
  
  export default Temperatura;
  