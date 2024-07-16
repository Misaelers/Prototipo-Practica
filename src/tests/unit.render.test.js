/*import { render } from '@testing-library/react';
import { performance } from 'perf_hooks'; // Importa performance desde perf_hooks
import App from '../App'; // Importa tu componente principal aquí
 
test('renders App component without performance issues', () => {
  // Inicia la medición del rendimiento
  performance.mark('start-render');
 
  // Renderiza tu componente
  render(<App />);
 
  // Detiene la medición del rendimiento
  performance.mark('end-render');
  performance.measure('App render', 'start-render', 'end-render');
 
  // Obtiene las mediciones de rendimiento
  const measurements = performance.getEntriesByName('App render');
 
  // Imprime el registro de rendimiento
  console.log(measurements);
 
  // Mide el tiempo de rendimiento
  const renderTime = measurements[0].duration;
  const threshold = 100; // Define tu umbral aquí (en milisegundos)
 
  expect(renderTime).toBeLessThan(threshold);
 
  // Limpia las marcas y medidas
  performance.clearMarks();
  performance.clearMeasures();
});
*/