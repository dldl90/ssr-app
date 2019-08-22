import Contentstack from 'contentstack';

export const navigationStack = {
  prod: {
    api_key: 'blt6444b9076ec27f02',
    access_token: 'cs1a9f7493ebc95bee270e3755',
    environment: 'live',
  },
  preview: {
    api_key: 'blt6444b9076ec27f02',
    access_token: 'cs32921c345201a090417b8a63',
    environment: 'preview',
  },
  qa: {
    api_key: 'blt6444b9076ec27f02',
    access_token: 'cs61a1b6b4cd96389fcad2440e',
    environment: 'qa',
  },
};

const getStackEnv = (isQa = false, isPreviewMode = false) => {
  if (isPreviewMode) return navigationStack.preview;
  if (isQa) return navigationStack.qa;
  return navigationStack.prod;
};

const navigationFetcher = async (isQa = false, isPreview = false) => {
  const stackEnv = getStackEnv(isQa, isPreview);
  const stack = await Contentstack.Stack(stackEnv);

  const navData = await stack
    .ContentType('navigation')
    .Entry('blt5faae31fa34df2d9')
    .toJSON()
    .fetch()
    .catch(() => []);

  return navData;
};

export default navigationFetcher;
