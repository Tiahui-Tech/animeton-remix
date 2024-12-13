import { createContext, useContext, useEffect, useState } from 'react';
import type { AppConfig } from '@shared/types/config';

interface ConfigContextType {
  config: AppConfig | null;
  getConfig: <T>(key?: string) => Promise<T>;
  setConfig: (key: string, value: any) => Promise<void>;
  updateConfig: (config: Partial<AppConfig>) => Promise<void>;
}

const ConfigContext = createContext<ConfigContextType | null>(null);

// Create dummy functions for server-side rendering
const dummyApi = {
  get: async () => null,
  set: async () => {},
  update: async () => {},
  onChange: {
    subscribe: () => {},
    unsubscribe: () => {},
  },
};

export function ConfigProvider({ children }: { children: React.ReactNode }) {
  const [config, setConfig] = useState<AppConfig | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    // Initial load
    window.api.config.get().then(setConfig);

    const handleConfigChange = (_, changes: Partial<AppConfig>) => {
      setConfig((prev) => prev ? { ...prev, ...changes } : null);
    };

    window.api.config.onChange.subscribe(handleConfigChange);

    return () => {
      window.api.config.onChange.unsubscribe(handleConfigChange);
    };
  }, [isClient]);

  const value = {
    config,
    getConfig: isClient ? window.api.config.get : dummyApi.get,
    setConfig: isClient ? window.api.config.set : dummyApi.set,
    updateConfig: isClient ? window.api.config.update : dummyApi.update,
  };

  return (
    <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>
  );
}

export function useConfig() {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }
  return context;
}
