import React, { useState, useEffect } from 'react';

const VibeJSONConverter = () => {
  const [input, setInput] = useState('{\n  "name": "John Doe",\n  "age": 30,\n  "isEmployed": true,\n  "skills": ["JavaScript", "React", "Node.js"],\n  "address": {\n    "street": "123 Main St",\n    "city": "Anytown",\n    "zipCode": "12345"\n  }\n}');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  
  // Mode state - true for vibe mode, false for de-vibe mode
  const [vibeMode, setVibeMode] = useState(true);
  
  // Add state for easter eggs
  const [easterEggTriggered, setEasterEggTriggered] = useState(false);
  const [easterEggType, setEasterEggType] = useState('');
  
  // Generate a click count to trigger easter eggs
  const [clickCount, setClickCount] = useState(0);
  
  const convertJSON = () => {
    setError('');
    setClickCount(clickCount + 1);
    
    if (vibeMode) {
      // VIBE MODE - Convert normal JSON to vibe JSON
      
      // Easter egg triggers - check random chance
      const rng = Math.random();
      
      // 5% chance for Bacon Ipsum
      if (rng < 0.05) {
        setEasterEggTriggered(true);
        setEasterEggType('bacon');
        setOutput(generateBaconIpsum());
        return;
      }
      
      // 5% chance for Lorem Ipsum
      if (rng < 0.10) {
        setEasterEggTriggered(true);
        setEasterEggType('lorem');
        setOutput(generateLoremIpsum());
        return;
      }
      
      // 5% chance for Rickroll
      if (rng < 0.15) {
        setEasterEggTriggered(true);
        setEasterEggType('rickroll');
        setOutput(generateRickroll());
        return;
      }
      
      // Normal operation if no easter egg triggered
      try {
        // First, validate that the input is actually valid JSON
        const parsed = JSON.parse(input);
        
        // Convert the valid JSON to "vibe JSON" with deliberate problems
        const vibeJSON = makeVibeJSON(parsed);
        setOutput(vibeJSON);
        setEasterEggTriggered(false);
      } catch (e) {
        setError('Input is not valid JSON. Fix it first before vibing it!');
      }
    } else {
      // DE-VIBE MODE - Pretend to fix vibe JSON but always fail with funny messages
      deVibeJSON();
    }
  };
  
  // Easter Egg Generator Functions
  const generateBaconIpsum = () => {
    return 'Bacon ipsum dolor amet 🥓 short ribs brisket venison 🥩 rump drumstick pig\nsausage prosciutto chicken spare ribs salami picanha doner.\n\nKevin capicola sausage, buffalo bresaola venison turkey shoulder\npicanha ham pork tri-tip meatball meatloaf ribeye.';
  };
  
  const generateLoremIpsum = () => {
    return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor\nincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\nnostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore\neu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.';
  };
  
  const generateRickroll = () => {
    return '{\n  "message": "We\'re no strangers to bugs",\n  "author": "Rick Astley",\n  "vibes": ["never", "gonna", "give", "you", "up"],\n  "moreInfo": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"\n}';
  };
  
  const makeVibeJSON = (obj) => {
    // Convert the object back to a string first
    let vibeString = JSON.stringify(obj, null, 2);
    
    // Create a simpler vibe JSON with just a few focused transformations
    
    // 1. Add emoji decorations to object openings 
    const emojis = ["✨", "💫", "🚀", "🔥", "💅", "🧠", "🌈"];
    vibeString = vibeString.replace(/{/g, (match) => {
      return `${match} ${emojis[Math.floor(Math.random() * emojis.length)]}`;
    });
    
    // 2. Sometimes use single quotes instead of double quotes
    vibeString = vibeString.replace(/"/g, (match) => {
      return Math.random() > 0.6 ? "'" : match;
    });
    
    // 3. Word to emoji conversion
    const emojiMap = {
      "cat": "🐱",
      "dog": "🐶",
      "pizza": "🍕",
      "coffee": "☕",
      "happy": "😊",
      "sad": "😢",
      "house": "🏠",
      "car": "🚗",
      "phone": "📱",
      "love": "❤️",
      "star": "⭐",
      "book": "📚",
      "music": "🎵",
      "code": "👨‍💻",
      "json": "📋"
    };
    
    // Process string values
    Object.keys(emojiMap).forEach(word => {
      const pattern = new RegExp(`"([^"]*\\b${word}\\b[^"]*)"`, 'gi');
      vibeString = vibeString.replace(pattern, (match, content) => {
        return match.replace(new RegExp(`\\b${word}\\b`, 'gi'), `${emojiMap[word]}`);
      });
    });
    
    // 4. Sometimes remove quotes around keys (less aggressive)
    vibeString = vibeString.replace(/"([^"]+)":/g, (match, p1) => {
      return Math.random() > 0.8 ? `${p1}:` : match;
    });
    
    return vibeString;
  };
  
  // Fun function that pretends to fix vibe JSON but always fails with humorous messages
  const deVibeJSON = () => {
    // Array of funny error messages about why de-vibing failed
    const errorMessages = [
      "Error: Not enough vibes in your input. Please add more ✨ and try again.",
      "De-vibing failed: Your JSON is too far gone. It's living its best life now.",
      "Cannot de-vibe: The emojis have formed a union and are refusing to leave.",
      "De-vibe process crashed: Your JSON has ascended to a higher plane of existence.",
      "Error 418: I'm a teapot, not a de-vibifier. This JSON is staying vibey.",
      "Critical failure: Attempting to remove vibes from this JSON would violate the laws of physics.",
      "De-vibing cancelled: GitHub Copilot says your JSON is already perfect.",
      "Error: The AI has determined your JSON is happier this way. Who are we to judge?",
      "De-vibing interrupted: Your JSON is throwing a dance party and doesn't want to stop.",
      "Process terminated: Your JSON has developed sentience and prefers its current state."
    ];
    
    // Pick a random error message
    const randomError = errorMessages[Math.floor(Math.random() * errorMessages.length)];
    setError(randomError);
    setOutput(''); // Clear output when de-vibing fails
  };

  // Easter egg message component
  const EasterEggMessage = () => {
    if (!easterEggTriggered) return null;
    
    let message = '';
    let link = '';
    
    switch(easterEggType) {
      case 'bacon':
        message = 'You\'ve discovered Bacon Ipsum! Meat-themed lorem ipsum for your JSON vibes.';
        link = 'https://baconipsum.com/';
        break;
      case 'lorem':
        message = 'Classic Lorem Ipsum activated! Very professional, much wow.';
        link = 'https://loremipsum.io/';
        break;
      case 'rickroll':
        message = 'Never gonna give you up, never gonna JSON you down!';
        link = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
        break;
      default:
        return null;
    }
    
    return (
      <div className="mt-2 p-2 bg-purple-100 text-purple-800 rounded-md flex justify-between items-center">
        <span>{message}</span>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-purple-600 hover:text-purple-800 underline"
        >
          Learn more
        </a>
      </div>
    );
  };

  // Links to relevant vibe coding resources
  const vibeCodingResources = [
    {
      name: "GitHub Copilot",
      url: "https://github.com/features/copilot"
    },
    {
      name: "What is Vibe Coding?",
      url: "https://www.technologyreview.com/2025/04/16/1115135/what-is-vibe-coding-exactly/"
    },
    {
      name: "Awesome Vibe Coding Resources",
      url: "https://github.com/roboco-io/awesome-vibecoding"
    }
  ];
  
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 p-6">
      <div className="mx-auto max-w-4xl w-full bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="p-6 bg-gray-800 text-white">
          <h1 className="text-3xl font-bold mb-2 text-center">✨ VibeJSON.io ✨</h1>
          <p className="text-center text-gray-300 mb-4">Convert boring professional JSON into fun vibe JSON that's impossible to debug</p>
          
          {/* Mode toggle */}
          <div className="flex justify-center mt-2">
            <div className="inline-flex rounded-md shadow-sm">
              <button
                onClick={() => setVibeMode(true)}
                className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                  vibeMode ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300'
                }`}
              >
                Vibe JSON ✨
              </button>
              <button
                onClick={() => setVibeMode(false)}
                className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                  !vibeMode ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300'
                }`}
              >
                De-Vibe JSON 🔍
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <div className="flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold">
                {vibeMode ? 'Input (Valid JSON)' : 'Input (Vibe JSON)'}
              </h2>
              <button 
                onClick={convertJSON}
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md hover:opacity-90 transition"
              >
                {vibeMode ? 'Convert to Vibe JSON ✨' : 'De-Vibe JSON 🔍'}
              </button>
            </div>
            <textarea 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full h-96 p-4 font-mono text-sm border border-gray-300 rounded-md"
              placeholder={vibeMode ? "Paste your boring JSON here..." : "Paste your vibe JSON here..."}
            />
            {error && <div className="text-red-500 mt-2">{error}</div>}
          </div>
          
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold mb-2">
              {vibeMode ? 'Output (Vibe JSON)' : 'Output (Standard JSON)'}
            </h2>
            <textarea 
              value={output}
              readOnly
              className="w-full h-96 p-4 font-mono text-sm border border-gray-300 rounded-md bg-gray-50"
              placeholder={vibeMode 
                ? "Your vibed JSON will appear here..." 
                : "Your de-vibed JSON will appear here (if the vibes allow it)..."}
            />
            <EasterEggMessage />
          </div>
        </div>
        
        <div className="p-6 bg-gray-100 border-t border-gray-200">
          <h3 className="font-semibold mb-2">What is Vibe JSON?</h3>
          <p className="text-gray-700 mb-4">
            Vibe JSON is when you don't worry about the details and just go with the flow. 
            It's perfect for when you're "vibe coding" - relying on AI to generate code 
            without understanding how it works. This tool adds random errors, inconsistent formatting,
            and other fun surprises to make your JSON impossible to debug!
          </p>
          
        </div>
      </div>
      
      <div className="mt-6 text-center text-white text-sm">
        <p>A parody site - Definitely not recommended for production use</p>
        <p className="mt-1">Created with 100% AI-generated vibe code</p>
      </div>
    </div>
  );
};

export default VibeJSONConverter;
