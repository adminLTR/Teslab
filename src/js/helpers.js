class ExpressionManager {
    static precedence(op) {
        if (op === '+' || op === '-') return 1;
        if (op === '*' || op === '/') return 2;
        if (op === '^') return 3;
        return 0;
    }

    static isOperator(c) {
        return ['+', '-', '*', '/', '^'].includes(c);
    }

    static tokenize(expr) {
        return expr.match(/(\d+|[a-zA-Z]+|[+\-*/^()])/g);
    }

    static reverseExpression(tokens) {
        return tokens.reverse().map(token => {
            if (token === '(') return ')';
            if (token === ')') return '(';
            return token;
        });
    }

    static infixToPrefix(expression) {
        let tokens = ExpressionManager.tokenize(expression);
        let reversedTokens = ExpressionManager.reverseExpression(tokens);
        let operators = [];
        let output = [];

        for (let token of reversedTokens) {
            if (/[a-zA-Z0-9]+/.test(token)) {
                output.push(token);
            } else if (token === '(') {
                operators.push(token);
            } else if (token === ')') {
                while (operators.length && operators[operators.length - 1] !== '(') {
                    output.push(operators.pop());
                }
                operators.pop();
            } else if (ExpressionManager.isOperator(token)) {
                while (
                    operators.length &&
                    ExpressionManager.precedence(operators[operators.length - 1]) > ExpressionManager.precedence(token)
                ) {
                    output.push(operators.pop());
                }
                operators.push(token);
            }
        }

        while (operators.length) {
            output.push(operators.pop());
        }

        return output.reverse().join(" ");
    }

    static infixToPostfix(expression) {
        let tokens = ExpressionManager.tokenize(expression);
        let output = [];
        let operators = [];

        for (let token of tokens) {
            if (/[a-zA-Z0-9]+/.test(token)) {
                output.push(token);
            } else if (token === '(') {
                operators.push(token);
            } else if (token === ')') {
                while (operators.length && operators[operators.length - 1] !== '(') {
                    output.push(operators.pop());
                }
                operators.pop();
            } else if (ExpressionManager.isOperator(token)) {
                while (
                    operators.length &&
                    ExpressionManager.precedence(operators[operators.length - 1]) >= ExpressionManager.precedence(token)
                ) {
                    output.push(operators.pop());
                }
                operators.push(token);
            }
        }

        while (operators.length) {
            output.push(operators.pop());
        }

        return output.join(" ");
    }

    static evaluatePostfix(expression) {
        let tokens = ExpressionManager.tokenize(expression);
        let stack = [];

        for (let token of tokens) {
            if (/\d+/.test(token)) {
                stack.push(parseFloat(token));
            } else if (ExpressionManager.isOperator(token)) {
                let b = stack.pop();
                let a = stack.pop();
                switch (token) {
                    case '+': stack.push(a + b); break;
                    case '-': stack.push(a - b); break;
                    case '*': stack.push(a * b); break;
                    case '/': stack.push(a / b); break;
                    case '^': stack.push(Math.pow(a, b)); break;
                }
            }
        }
        return stack.pop();
    }

    static evaluatePrefix(expression) {
        let tokens = ExpressionManager.tokenize(expression).reverse();
        let stack = [];

        for (let token of tokens) {
            if (/\d+/.test(token)) {
                stack.push(parseFloat(token));
            } else if (ExpressionManager.isOperator(token)) {
                let a = stack.pop();
                let b = stack.pop();
                switch (token) {
                    case '+': stack.push(a + b); break;
                    case '-': stack.push(a - b); break;
                    case '*': stack.push(a * b); break;
                    case '/': stack.push(a / b); break;
                    case '^': stack.push(Math.pow(a, b)); break;
                }
            }
        }
        return stack.pop();
    }
}

class OrderingManager {
    static quickSort(arr) {
        if (arr.length <= 1) return arr; // Caso base: si el array tiene 0 o 1 elemento, ya está ordenado.
    
        let pivot = arr[Math.floor(arr.length / 2)]; // Se elige el pivote (puede ser cualquier elemento).
        let left = [], right = [], equal = [];
    
        for (let num of arr) {
            if (num < pivot) left.push(num); // Menores al pivote
            else if (num > pivot) right.push(num); // Mayores al pivote
            else equal.push(num); // Elementos iguales al pivote
        }
    
        return [...OrderingManager.quickSort(left), ...equal, ...OrderingManager.quickSort(right)]; // Recursión en subarrays
    }

    static isNumeric(arr) {
        const narr = [];
        for (let i = 0; i < arr.length; i++) {
            if (isNaN(parseFloat(arr[i]))) {
                return arr;
            }
            narr.push(parseFloat(arr[i]));
        }
        return narr;
    }
}

class HuffmanNode {
    constructor(char, freq) {
        this.char = char;
        this.freq = freq;
        this.left = null;
        this.right = null;
    }
}
class HuffmanManager {
    static buildHuffmanTree(text) {
        if (!text) return null;
    
        let freqMap = new Map();
        for (let char of text) {
            freqMap.set(char, (freqMap.get(char) || 0) + 1);
        }
    
        let nodes = Array.from(freqMap, ([char, freq]) => new HuffmanNode(char, freq));
        nodes.sort((a, b) => a.freq - b.freq);
    
        while (nodes.length > 1) {
            let left = nodes.shift();
            let right = nodes.shift();
            let newNode = new HuffmanNode(null, left.freq + right.freq);
            newNode.left = left;
            newNode.right = right;
            nodes.push(newNode);
            nodes.sort((a, b) => a.freq - b.freq);
        }
    
        return nodes[0];
    }
    
    static buildHuffmanCodes(node, prefix = "", codeMap = {}) {
        if (!node) return;
    
        if (node.char !== null) {
            codeMap[node.char] = prefix;
        }
    
        HuffmanManager.buildHuffmanCodes(node.left, prefix + "0", codeMap);
        HuffmanManager.buildHuffmanCodes(node.right, prefix + "1", codeMap);
    
        return codeMap;
    }
    
    static encodeHuffman(text) {
        let root = HuffmanManager.buildHuffmanTree(text);
        let huffmanCodes = HuffmanManager.buildHuffmanCodes(root);
        
        let encodedText = text.split("").map(char => huffmanCodes[char]).join("");
    
        return { encodedText, huffmanCodes, root };
    }
    
    static decodeHuffman(encodedText, root) {
        let decodedText = "";
        let node = root;
    
        for (let bit of encodedText) {
            node = bit === "0" ? node.left : node.right;
    
            if (node.char !== null) {
                decodedText += node.char;
                node = root;
            }
        }
    
        return decodedText;
    }
}

class DijkstraManager {
    /**
     * Encuentra las distancias más cortas desde el nodo origen a todos los demás.
     * @param {Object} graph - Un objeto donde cada clave es un nodo y su valor es un array de vecinos con pesos: { A: [{node: B, weight: 5}, ...], ... }
     * @param {string} start - El nodo de inicio
     * @param {string} emd - El nodo de fin
     * @returns {Object} - Un objeto con las distancias mínimas desde el nodo de inicio
     */
    static findShortestPath(graph, start, end) {
        const distances = {};
        const previous = {};
        const visited = new Set();
        const priorityQueue = new MinPriorityQueue();
    
        for (let node in graph) {
            distances[node] = Infinity;
            previous[node] = null;
        }
    
        distances[start] = 0;
        priorityQueue.enqueue(start, 0);
    
        while (!priorityQueue.isEmpty()) {
            const { element: currentNode } = priorityQueue.dequeue();
            if (visited.has(currentNode)) continue;
            visited.add(currentNode);
    
            if (currentNode === end) break;
    
            for (let neighbor of graph[currentNode]) {
                const { node: nextNode, weight } = neighbor;
                const newDist = distances[currentNode] + weight;
    
                if (newDist < distances[nextNode]) {
                    distances[nextNode] = newDist;
                    previous[nextNode] = currentNode;
                    priorityQueue.enqueue(nextNode, newDist);
                }
            }
        }
    
        // Reconstruir el camino de 'end' a 'start'
        let path = [];
        let current = end;
        while (current !== null) {
            path.unshift(current);
            current = previous[current];
        }
    
        // Si el primer nodo no es el start, significa que no hay camino
        if (path[0] !== start) return `No hay camino de ${start} a ${end}`;
    
        return path.join(' - ');
    }
    
    static parseGraphFromText(text) {
        const graph = {};
    
        const matches = text.match(/\(([A-Za-z]),\s*([A-Za-z]),\s*(\d+)\)/g);
    
        if (!matches) return graph;
    
        for (let match of matches) {
            const [, from, to, weight] = match.match(/\(([A-Za-z]),\s*([A-Za-z]),\s*(\d+)\)/);
    
            if (!graph[from]) graph[from] = [];
            if (!graph[to]) graph[to] = []; 
    
            graph[from].push({ node: to, weight: parseInt(weight) });
        }
    
        return graph;
    }
}

class MinPriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(element, priority) {
        this.queue.push({ element, priority });
        this.queue.sort((a, b) => a.priority - b.priority); // orden ascendente
    }

    dequeue() {
        return this.queue.shift();
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

export { 
    ExpressionManager, 
    OrderingManager,
    HuffmanManager,
    DijkstraManager,
};
