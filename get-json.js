async function getJSON(path, params = {}) {
    // Build URL with query parameters
    const url = `${path}?${Object.keys(params)
      .map(
        (key) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(params[key]).replace(/%20/g, '+')}`
      )
      .join('&')}`;
  
    // Fetch the URL and handle the response
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const res = await response.json();
    if (res.error) {
      throw new Error(res.error);
    }
    return res.data;
  }