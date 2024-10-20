async function queryServers(serverName, q) {
    const queryString = new URLSearchParams({ q }).toString();
  
    const urls = [
      getJSON(`/${serverName}?${queryString}`),
      getJSON(`/${serverName}_backup?${queryString}`),
    ];
  
    // Use Promise.race to return the fastest result
    return Promise.race(urls);
  }
  
  async function gougleSearch(q) {
    const servers = ["web", "image", "video"];
  
    const promises = servers.map((server) =>
      queryServers(server, q).catch(() => `Error fetching from ${server}`),
    );
  
    // Set a timeout for the entire operation
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("timeout")), 80),
    );
  
    try {
      const results = await Promise.race([Promise.all(promises), timeoutPromise]);
      return Object.fromEntries(
        servers.map((server, index) => [server, results[index]]),
      );
    } catch (error) {
        if (error.message === 'timeout') {
            throw error;
        }
       throw error;
    }
   
  }