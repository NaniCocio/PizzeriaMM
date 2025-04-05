import { createContext, useEffect, useState } from "react";

export const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/pizzas');
        if (!response.ok) throw new Error('Error al cargar las pizzas');
        const data = await response.json();
        setPizzas(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPizzas();
  }, []);

  return (
    <ContentContext.Provider value={{ pizzas, loading, error }}>
      {children}
    </ContentContext.Provider>
  );
};