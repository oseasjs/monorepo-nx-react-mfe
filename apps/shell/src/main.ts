import { environment } from './environments/environment';
import { setRemoteDefinitions } from './utils/dynamic-mfe';

Promise.resolve(setRemoteDefinitions(environment.remotes))
  .then(() => import('./bootstrap'))
  .catch((err) => console.log('error loading app', err));
