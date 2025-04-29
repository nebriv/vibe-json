/* src/components/VibeJSONConverter.jsx */
import React, { useState } from 'react';

const VibeJSONConverter = () => {
  const [input, setInput] = useState('{\n  "name": "John Doe",\n  "age": 30,\n  "isEmployed": true,\n  "skills": ["JavaScript", "React", "Node.js"],\n  "address": {\n    "street": "123 Main St",\n    "city": "Anytown",\n    "zipCode": "12345"\n  }\n}');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  
  const convertToVibeJSON = () => {
    setError('');
    try {
      // First, validate that the input is actually valid JSON
      const parsed = JSON.parse(input);
      
      // Convert the valid JSON to "vibe JSON" with deliberate problems
      const vibeJSON = makeVibeJSON(parsed);
      setOutput(vibeJSON);
    } catch (e) {
      setError('Input is not valid JSON. Fix it first before vibing it!');
    }
  };
  
  const makeVibeJSON = (obj) => {
    // Let's introduce some common "vibe coding" issues
    
    // Convert the object back to a string, but with vibe problems
    let vibeString = JSON.stringify(obj, null, 2);
    
    // Apply various transformations to make it "vibe JSON"
    
    // 1. Randomly remove some quotes around keys
    vibeString = vibeString.replace(/"([^"]+)":/g, (match, p1) => {
      return Math.random() > 0.7 ? `${p1}:` : match;
    });
    
    // 2. Sometimes add extra commas
    vibeString = vibeString.replace(/,\n/g, (match) => {
      return Math.random() > 0.8 ? ',,,\n' : match;
    });
    
    // 3. Sometimes remove necessary commas
    vibeString = vibeString.replace(/,\n/g, (match) => {
      return Math.random() > 0.8 ? '\n' : match;
    });
    
    // 4. Inconsistent spacing
    vibeString = vibeString.replace(/  /g, (match) => {
      const spaces = ["", " ", "    ", "\t", "      "];
      return spaces[Math.floor(Math.random() * spaces.length)];
    });
    
    // 5. Add random comments
    const comments = [
      "// this seems important",
      "// not sure what this does",
      "// FIXME",
      "// TODO: ask chat gpt about this later",
      "// the AI said to put this here",
      "/* vibing */",
      "// don't touch this part"
    ];
    
    vibeString = vibeString.replace(/\n/g, (match) => {
      return Math.random() > 0.85 
        ? `\n${comments[Math.floor(Math.random() * comments.length)]}\n` 
        : match;
    });
    
    // 6. Sometimes use single quotes instead of double quotes
    vibeString = vibeString.replace(/"/g, (match) => {
      return Math.random() > 0.7 ? "'" : match;
    });
    
    // 7. Add emoji because vibes
    const emojis = ["✨", "💫", "🚀", "🔥", "💅", "🧠", "🌈"];
    vibeString = vibeString.replace(/{/g, (match) => {
      return Math.random() > 0.7 
        ? `${match} ${emojis[Math.floor(Math.random() * emojis.length)]}` 
        : match;
    });
    
    // 8. Randomly capitalize some keys
    vibeString = vibeString.replace(/"([^"]+)":/g, (match, p1) => {
      if (Math.random() > 0.8) {
        // Randomly capitalize parts of the key
        const vibeCaps = p1.split('').map(char => 
          Math.random() > 0.5 ? char.toUpperCase() : char
        ).join('');
        return `"${vibeCaps}":`;
      }
      return match;
    });
    
    // 9. Occasionally add undefined values
    vibeString = vibeString.replace(/: ([^,\n{}[\]]+)/g, (match, p1) => {
      return Math.random() > 0.9 ? `: undefined /* was ${p1} */` : match;
    });
    
    // 10. Sometimes add unnecessary string conversions
    vibeString = vibeString.replace(/: (\d+)/g, (match, p1) => {
      return Math.random() > 0.8 ? `: "${p1}"` : match;
    });
    
    return vibeString;
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 p-6">
      <div className="mx-auto max-w-4xl w-full bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="p-6 bg-gray-800 text-white">
          <h1 className="text-3xl font-bold mb-2 text-center">✨ VibeJSON.io ✨</h1>
          <p className="text-center text-gray-300 mb-4">Convert boring professional JSON into fun vibe JSON that's impossible to debug</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <div className="flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold">Input (Valid JSON)</h2>
              <button 
                onClick={convertToVibeJSON}
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md hover:opacity-90 transition"
              >
                Convert to Vibe JSON ✨
              </button>
            </div>
            <textarea 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full h-96 p-4 font-mono text-sm border border-gray-300 rounded-md"
              placeholder="Paste your boring JSON here..."
            />
            {error && <div className="text-red-500 mt-2">{error}</div>}
          </div>
          
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold mb-2">Output (Vibe JSON)</h2>
            <textarea 
              value={output}
              readOnly
              className="w-full h-96 p-4 font-mono text-sm border border-gray-300 rounded-md bg-gray-50"
              placeholder="Your vibed JSON will appear here..."
            />
          </div>
        </div>
        
        <div className="p-6 bg-gray-100 border-t border-gray-200">
          <h3 className="font-semibold mb-2">What is Vibe JSON?</h3>
          <p className="text-gray-700">
            Vibe JSON is when you don't worry about the details and just go with the flow. 
            It's perfect for when you're "vibe coding" - relying on AI to generate code 
            without understanding how it works. This tool adds random errors, inconsistent formatting, 
            and other fun surprises to make your JSON impossible to debug!
          </p>
        </div>
      </div>
      
      <div className="mt-6 text-center text-white text-sm">
        <p>A parody site - Definitely not recommended for production use</p>
      </div>
    </div>
  );
};

export default VibeJSONConverter;
