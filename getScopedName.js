const incstr = require("incstr");
const path = require("path");
//const normalizePath = require("normalize-path"); //the package from css-loader

const createUniqueIdGenerator = () => {
  const uniqIds = {};

  const generateNextId = incstr.idGenerator({
    alphabet: "abcefghijklmnopqrstuvwxyzABCEFGHJKLMNOPQRSTUVWXYZ" //ignore 'ad' for avoiding advertisment-error purpose
  });

  return name => {
    if (!uniqIds[name]) {
      uniqIds[name] = generateNextId();
    }

    return uniqIds[name];
  };
};

const localNameIdGenerator = createUniqueIdGenerator();
const componentNameIdGenerator = createUniqueIdGenerator();

module.exports = (loaderContext, _localIdentName, localName, options) => {
  //const request = normalizePath(path.relative(options.context || "", loaderContext.resourcePath));
  const request = path.relative(options.context || "", loaderContext.resourcePath);
  return `${componentNameIdGenerator(request)}_${localNameIdGenerator(localName)}`;
};
