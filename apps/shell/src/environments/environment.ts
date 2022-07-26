// This file can be replaced during build by using the `fileReplacements` array.
// When building for production, this file is replaced with `environment.prod.ts`.

export const environment = {
  env: 'local',
  remotes: {
    'header': 'http://localhost:8081',
    'react-module-1': 'http://localhost:8082',
    'react-module-2': 'http://localhost:8083',
  } as Record<string, string>,
};

