/* eslint-disable @typescript-eslint/ban-ts-comment */
let remoteUrlDefinitions: Record<string, string>;
let resolveRemoteUrl: string;
const remoteModuleMap = new Map();
const remoteContainerMap = new Map();
let initialSharingScopeCreated = false;

export const setRemoteDefinitions = (definitions: Record<string, string>) => {
  remoteUrlDefinitions = definitions;
};

export const setRemoteUrlResolver = (remoteUrl: string) => {
  resolveRemoteUrl = remoteUrl;
};

const loadModule = async (url: string) =>
  Promise.resolve(url).then(() => import(/* webpackIgnore:true */ url));

export const loadRemoteContainer = async (remoteName: string) => {
  if (!resolveRemoteUrl && !remoteUrlDefinitions) {
    throw new Error(
      'Call setRemoteDefinitions or setRemoteUrlResolver to allow Dynamic Federation to find the remote apps correctly.'
    );
  }

  if (!initialSharingScopeCreated) {
    initialSharingScopeCreated = true;
    //@ts-ignore
    await __webpack_init_sharing__('default');
  }

  const remoteUrl = remoteUrlDefinitions[remoteName];

  const containerUrl = `${remoteUrl}${
    remoteUrl.endsWith('/') ? '' : '/'
  }remoteEntry.js`;

  const container = await loadModule(containerUrl);

  //@ts-ignore
  await container.init(__webpack_share_scopes__.default);

  remoteContainerMap.set(remoteName, container);

  return container;
};

export const loadRemoteModule = async (
  remoteName: string,
  moduleName: string
) => {
  const remoteModuleKey = `${remoteName}:${moduleName}`;

  if (remoteModuleMap.has(remoteModuleKey)) {
    return remoteModuleMap.get(remoteModuleKey);
  }

  const container: string = remoteContainerMap.has(remoteName)
    ? remoteContainerMap.get(remoteName)
    : await loadRemoteContainer(remoteName);

  //@ts-ignore
  const factory = await container.get(moduleName);
  const Module = factory();
  remoteModuleMap.set(remoteModuleKey, Module);
  return Module;
};
