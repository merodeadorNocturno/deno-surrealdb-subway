interface Edge {
    to: string;
    weight?: number;
}

class DirectedWeightedGraph {
    private adjacencyList: Map<string, Edge[]> = new Map();

    addVertex(vertex: string): void {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    addEdge(from: string, to: string, weight?: number): void {
        if (!this.adjacencyList.has(from)) {
            this.addVertex(from);
        }
        if (!this.adjacencyList.has(to)) {
            this.addVertex(to);
        }
        this.adjacencyList.get(from)!.push({ to, weight });
    }

    getEdges(vertex: string): Edge[] | undefined {
        return this.adjacencyList.get(vertex);
    }

    printGraph(): void {
        for (const [vertex, edges] of this.adjacencyList.entries()) {
            console.log(`${vertex} -> ${edges.map(edge => `${edge.to} (weight: ${edge.weight ?? 'N/A'})`).join(", ")}`);
        }
    }

    toJSON(): object {
        const graph: {[key: string]: unknown} = {};
        for (const [vertex, edges] of this.adjacencyList.entries()) {
            graph[vertex] = edges.map(edge => ({ to: edge.to, weight: edge.weight }));
        }
        return graph;
    }
}


const jsonData = [
    {
        "connected_stations": ["Talismán", "Consulado"],
        "name": "Bondojito"
    },
    {
        "connected_stations": ["Consulado", "Morelos"],
        "name": "Canal del Norte"
    },
    {
        "connected_stations": ["Candelaria", "Morelos", "Fray Servando"],
        "name": "Candelaria"
    },
    {
        "connected_stations": ["Consulado", "Canal del Norte", "Bondojito"],
        "name": "Consulado"
    },
    {
        "connected_stations": ["Jamaica", "Candelaria"],
        "name": "Fray Servando"
    },
    {
        "connected_stations": ["Santa Anita", "Fray Servando", "Jamaica"],
        "name": "Jamaica"
    },
    {
        "connected_stations": ["Talismán"],
        "name": "Martín Carrera"
    },
    {
        "connected_stations": ["Candelaria", "Morelos", "Canal del Norte"],
        "name": "Morelos"
    },
    {
        "connected_stations": ["Jamaica", "Santa Anita"],
        "name": "Santa Anita"
    },
    {
        "connected_stations": ["Martín Carrera", "Bondojito"],
        "name": "Talismán"
    }
];

const graph = new DirectedWeightedGraph();

for (const station of jsonData) {
    const { name, connected_stations } = station;
    graph.addVertex(name);
    for (const connectedStation of connected_stations) {
        graph.addEdge(name, connectedStation);
    }
}

graph.printGraph();

// Convert graph to JSON
const graphJson = graph.toJSON();
console.log(JSON.stringify(graphJson, null, 2));
