import { ExpressionManager, OrderingManager, HuffmanManager, DijkstraManager } from "./helpers";

/**
 * 
 * @param {string} input 
 */
export default function textProcessing(input) {
    input = input.trim();
    let exp = '';
    let out = '';
    if (input.toLowerCase().startsWith("solve") || input.toLowerCase().startsWith("evaluate")) {
        if (input.toLowerCase().startsWith("evaluate")) {
            exp = input.substring(9).trim().replaceAll(' ', '');            
        } else {
            exp = input.substring(6).trim().replaceAll(' ', '');            
        }
        let postfix = ExpressionManager.infixToPostfix(exp);
        out = ExpressionManager.evaluatePostfix(postfix); 
    } else if (input.toLowerCase().startsWith("prefix")) {
        exp = input.substring(7).trim().replaceAll(' ', '');
        out = ExpressionManager.infixToPrefix(exp);

    } else if (input.toLowerCase().startsWith("postfix")) {
        exp = input.substring(8).trim().replaceAll(' ', '');
        out = ExpressionManager.infixToPostfix(exp);        
    } else if (input.toLowerCase().startsWith("order")) {
        exp = input.substring(6).trim();
        let arr = exp.split(' ');
        arr = OrderingManager.isNumeric(arr);
        arr = OrderingManager.quickSort(arr);
        out = arr.toString().replaceAll(',', ' ').replace('[', '').replace(']', '');
    } else if (input.toLowerCase().startsWith("huffman") || input.toLowerCase().startsWith("zip")) {
        if (input.toLowerCase().startsWith("huffman")) {
            exp = input.substring(8).trim();
        } else {
            exp = input.substring(4).trim();
        }
        const { encodedText, huffmanCodes, root } = HuffmanManager.encodeHuffman(exp);
        out = encodedText + "\n";
        Object.keys(huffmanCodes).forEach(k => {
            out += `${k} => ${huffmanCodes[k]}\n`;
        })
    } else if (input.toLowerCase().startsWith("shortest path") || input.toLowerCase().startsWith("djikstra")) {
        if (input.toLowerCase().startsWith("shortest path")) {
            exp = input.substring(14).trim();
        } else {
            exp = input.substring(9).trim();
        }
        exp = exp.replaceAll(' ', '')
        const graph = DijkstraManager.parseGraphFromText(exp.substring(0, exp.indexOf('from')))
        const from = exp.substring(exp.indexOf('from')+4, exp.indexOf('from')+5)
        const to = exp.substring(exp.indexOf('to')+2)
        const path = DijkstraManager.findShortestPath(graph, from, to)
        out = path
        exp = ''
        Object.keys(graph).forEach(n => {
            exp += n + ` => [`;
            for (let i = 0; i < graph[n].length; i++) {
                exp += `{${graph[n][i].node}:${graph[n][i].weight}}`
            }
            exp += ']\n'
        })
        exp += `From ${from} to ${to}`
    }

    return [exp, out].includes('') ? {} : {
        'input' : exp,
        'output' : out
    };
}