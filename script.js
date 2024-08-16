document.getElementById('convertToFahrenheit').addEventListener('click', () => {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    
    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = (celsius * 9/5) + 32;
  
    fahrenheitInput.value = fahrenheit.toFixed(2);
  });
  
  document.getElementById('convertToCelsius').addEventListener('click', () => {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
  
    const fahrenheit = parseFloat(fahrenheitInput.value);
    const celsius = (fahrenheit - 32) * 5/9;
  
    celsiusInput.value = celsius.toFixed(2);
  });
  