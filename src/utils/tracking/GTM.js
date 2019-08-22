const pushToDataLayer = event => {
  if (window && window.dataLayer && Array.isArray(window.dataLayer)) {
    window.dataLayer.push(event);
  }
};

export default pushToDataLayer;
