var newLine = 0;
function takeANumber(line, newName) { line.push(`${newName}`); return `Welcome, ${newName}. You are number ${newLine} in line.` } 
function nowServing(line) { if (line.length === 0) { return "There is nobody waiting to be served!" } else { return `Currently serving ${line.shift()}.` } } 
function currentLine(line) { var array = []; if (line.length === 0) { return "The line is currently empty." } else { for (let i = 0, l = line.length; i < line.length; i++) { array.push(`${i + 1}. ${line[i]}`) } return `The line is currently: ${array.join(', ')}` } }  