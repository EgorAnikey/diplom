const generateGraph = (vertex = 1000) => {
  const randomCount = (vertex) => {
    return Math.round(Math.random() * vertex) + 1;
  }
  var nodes = [];
  for (let i = 1; i <= vertex; i++) {
    nodes.push(i);
  }

  var links = [];
  for (let i = 1; i <= nodes.length; i++) {
    var rand = (Math.round(Math.random() * 100) % nodes.length) + 1;
    if (links.findIndex(j => j[0] === i && j[1] === rand) < 0) {
      links.push([i, rand]);
    }
  }

  return {
    nodes: nodes.map(i => ({
      id: i
    })),
    links: links.map(i => ({
      sid: i[0],
      tid: i[1]
    }))
  };
}

module.exports = generateGraph;