function getURL(data) {
    const urlReg = /(https?:\/\/[^\s]+)/g;
    return data.match(urlReg) || [];
  }
  function greedyQuery(data) {
    const greedyReg = /(https?:\/\/[^\s]+\?[^\s]+(&[^\s]+){2,})/g;
    return data.match(greedyReg) || [];
  } 
  function notSoGreedy(data) {
    const urls = getURL(data);
    return urls.filter(url => {
      const queryParts = url.split('?')[1];
      if (!queryParts) return false;
      const paramCount = queryParts.split('&').length;
      return paramCount === 2 || paramCount === 3;
  });
 }