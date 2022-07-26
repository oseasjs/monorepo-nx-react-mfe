export const environment = {
  env: 'qa',
  remotes: {
    header: process.env['NX_MFE_HEADER_URL'],
    'react-module-1': process.env['NX_MFE_REACT_MODULE_1_URL'],
    'react-module-2': process.env['NX_MFE_REACT_MODULE_2_URL'],
  } as Record<string, string>,
};
