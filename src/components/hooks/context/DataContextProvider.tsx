import { createContext, useContext, ReactNode, useState, useEffect, useMemo } from 'react';
import { Data } from '../../models/Content';

interface DataContextProps {
    data: Data | null;
    loading: boolean;
    error:  string;
}

const DataContext = createContext<DataContextProps | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useData = (): DataContextProps => {
    const context = useContext(DataContext);
    if (!context) {
      throw new Error('useData must be used within a DataProvider');
    }
    return context;
  };

function DataProvider({ children }: { children: ReactNode }){
    const [data, setData] = useState<Data | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await import('../../../assets/json/list.json');
          setData(response.default);
        } catch (e) {
          setError('Problem Loading Data');
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);

    const value = useMemo(() => ({ data, loading, error }), [data, loading, error]);
  
    return (
      <DataContext.Provider value={value}>
        {children}
      </DataContext.Provider>
    );
  }
  
  export default DataProvider;