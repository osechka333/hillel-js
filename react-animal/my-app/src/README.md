Details about the lifting state
https://reactjs.org/docs/lifting-state-up.html 
It means - lifting the shared state up to their closest common ancestor

steps:
- replace this.state.temperature with this.props.temperature in the TemperatureInput component 
it means the removed the local state from it:
-     Before: const temperature = this.state.temperature 
-     Now: const temperature = this.props.temperature;
- replace the method to change the data in the component: setState()
-     Before: this.setState({temperature: e.target.value});
-     Now: this.props.onTemperatureChange(e.target.value); - provided function by another component
- update the parent/another component:
-     this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
-     this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
-     this.state = {temperature: '', scale: 'c'};
-     handleCelsiusChange(temperature) {
-     this.setState({scale: 'c', temperature});
-     }
-     handleFahrenheitChange(temperature) {
-     this.setState({scale: 'f', temperature});
-     }
-     render() {
-     const scale = this.state.scale;
-     const temperature = this.state.temperature;
-     const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
-     const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;