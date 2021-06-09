const {Router} = require('express')
const router = Router()
const Graph = require('../models/graph')
const graphGenerator = require('ngraph.generators');
const generateGraph = require('./../graphGenerator');
const { createIndexes } = require('../models/graph');

router.get('/d3', async (req, res) => {
  try {
    // const graph = graphGenerator.balancedBinTree(7);
    // const graph = graphGenerator.complete(50);
    // const graph = graphGenerator.ladder(50);
    // const graph = graphGenerator.completeBipartite(30, 30);
    // const graph = graphGenerator.path(250);
    // const graph = graphGenerator.circularLadder(100);

    // const links = [];
    // const nodes = [];

    // graph.forEachNode(n => { nodes.push({ id: n.id}) });
    // graph.forEachLink(l => { links.push({sid: l.fromId, tid: l.toId}) });

    // const graphs = await Graph.find()

    const graph = generateGraph(10000);

    res.json({
      // graphs
      // graphs: [
      //   {
      //     nodes,
      //     links
      //   }
      // ]
      graphs: [graph]
    })
  } catch(e) {
    console.error(e)
    createIndexes.status = 500
    createIndexes.body = e
  }
})


router.get('/cytoscape', async (req, res) => {
  try {
    // const graph = graphGenerator.balancedBinTree(7);
    // const graph = graphGenerator.complete(50);
    // const graph = graphGenerator.ladder(50);
    // const graph = graphGenerator.completeBipartite(30, 30);
    // const graph = graphGenerator.path(250);
    // const graph = graphGenerator.circularLadder(100);

    // const links = [];
    // const nodes = [];

    // graph.forEachNode(n => { nodes.push({ id: n.id}) });
    // graph.forEachLink(l => { links.push({sid: l.fromId, tid: l.toId}) });

    // const graphs = await Graph.find()

    const graph = generateGraph(10000);

    const arr = [
      ...graph.nodes.map(({ id }) => ({data: {id}})),
      ...graph.links.map(g => ({data: { id: `${g.sid}${g.tid}${Math.random()}`, source: g.sid, target: g.tid}}))
    ]

    res.json({
      // graphs
      // graphs: [
      //   {
      //     nodes,
      //     links
      //   }
      // ]
      graphs: [arr]
    })
  } catch(e) {
    console.error(e)
    createIndexes.status = 500
    createIndexes.body = e
  }
})

router.get('/fusion', async (req, res) => {
  try {
    // const graph = graphGenerator.balancedBinTree(7);
    // const graph = graphGenerator.complete(50);
    // const graph = graphGenerator.ladder(50);
    // const graph = graphGenerator.completeBipartite(30, 30);
    // const graph = graphGenerator.path(250);
    // const graph = graphGenerator.circularLadder(100);

    const links = [];
    const nodes = [];

    // graph.forEachNode(n => { nodes.push({ id: n.id}) });
    // graph.forEachLink(l => { links.push({sid: l.fromId, tid: l.toId}) });

    // const graphs = await Graph.find()

    const graph = generateGraph(10000);

    graph.nodes.forEach(({ id }) => {
      nodes.push(              {
        id,
        x: `${Math.ceil(Math.random()*1000)}`,
        y: `${Math.ceil(Math.random()*1000)}`,
        alpha: '0',
        label: `${id}`,
        radius: '15',
        shape: 'CIRCLE',
      })
    }),
    graph.links.forEach(l => {
      links.push({
        from: `${l.sid}`,
        to: `${l.tid}`,
        color: '#1aaf5d',
        strength: '1',
        arrowatstart: '0',
        arrowatend: '0'
      })
    })

    res.json({
      // graphs
      graphs: [
        {
          nodes,
          links
        }
      ]
      // graphs: [arr]
    })
  } catch(e) {
    console.error(e)
    createIndexes.status = 500
    createIndexes.body = e
  }
})


router.get('/simpleflowchart', async (req, res) => {
  try {
    // const graph = graphGenerator.balancedBinTree(7);
    // const graph = graphGenerator.complete(50);
    // const graph = graphGenerator.ladder(50);
    // const graph = graphGenerator.completeBipartite(30, 30);
    // const graph = graphGenerator.path(250);
    // const graph = graphGenerator.circularLadder(100);

    const links = [];
    const nodes = [];

    // graph.forEachNode(n => { nodes.push({ id: n.id}) });
    // graph.forEachLink(l => { links.push({sid: l.fromId, tid: l.toId}) });

    // const graphs = await Graph.find()

    const graph = generateGraph(10000);

    graph.nodes.forEach(({ id }) => {
      nodes.push(              {
        id: id,
        x: Math.ceil(Math.random()*1000),
        y: Math.ceil(Math.random()*1000),
        label: `${id}`
      })
    }),
    graph.links.forEach(l => {
      links.push({
        from: l.sid,
        to: l.tid,
        id: +`${l.sid}${l.tid}${Math.random()}`
      })
    })

    res.json({
      // graphs
      graphs: [
        {
          nodes,
          links
        }
      ]
      // graphs: [arr]
    })
  } catch(e) {
    console.error(e)
    createIndexes.status = 500
    createIndexes.body = e
  }
})

router.get('/gochart', async (req, res) => {
  try {
    // const graph = graphGenerator.balancedBinTree(7);
    // const graph = graphGenerator.complete(50);
    // const graph = graphGenerator.ladder(50);
    // const graph = graphGenerator.completeBipartite(30, 30);
    // const graph = graphGenerator.path(250);
    // const graph = graphGenerator.circularLadder(100);

    const links = [];
    const nodes = [];

    // graph.forEachNode(n => { nodes.push({ id: n.id}) });
    // graph.forEachLink(l => { links.push({sid: l.fromId, tid: l.toId}) });

    // const graphs = await Graph.find()

    const graph = generateGraph(10000);

    graph.nodes.forEach(({ id }) => {
      nodes.push({ key: `${id}`, color: 'orange' })
    }),
    graph.links.forEach(l => {
      links.push({
        from: l.sid,
        to: l.tid,
        key: +`${l.sid}${l.tid}${Math.random()}`
      })
    })

    res.json({
      // graphs
      graphs: [
        {
          nodes,
          links
        }
      ]
      // graphs: [arr]
    })
  } catch(e) {
    console.error(e)
    createIndexes.status = 500
    createIndexes.body = e
  }
})

router.post('/', async (req, res) => {
  try {
    const graph = new Graph(req.body)

    await graph.save();

    res.json({
      msg: 'Success',
      graph
    })
  } catch (e) {
    console.error(e)
  }
})

module.exports = router