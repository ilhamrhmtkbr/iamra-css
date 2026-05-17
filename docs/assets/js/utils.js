export function dedent(str) {
    const lines = str.split('\n');
    const nonEmpty = lines.filter(line => line.trim() !== '');
    const checkLines = nonEmpty.length > 1 ? nonEmpty.slice(1) : nonEmpty;
    const minIndent = Math.min(...checkLines.map(line => line.match(/^(\s*)/)[1].length));
    return lines
        .map(line => line.slice(minIndent))
        .join('\n')
        .trim();
}

export function escapeHtml(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}