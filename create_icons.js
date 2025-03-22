const fs = require('fs');
const { createCanvas } = require('canvas');

function createIcon(size) {
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext('2d');
    
    // Draw outer circle (LinkedIn blue)
    ctx.fillStyle = '#0a66c2';
    ctx.beginPath();
    ctx.arc(size/2, size/2, size/2 - 2, 0, Math.PI * 2);
    ctx.fill();
    
    // Draw inner white circle
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(size/2, size/2, size/2 - 4, 0, Math.PI * 2);
    ctx.fill();
    
    // Draw clock face
    ctx.fillStyle = '#0a66c2';
    ctx.beginPath();
    ctx.arc(size/2, size/2, size/2 - 6, 0, Math.PI * 2);
    ctx.fill();
    
    // Draw clock hands
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = size/16;
    ctx.lineCap = 'round';
    
    // Hour hand
    ctx.beginPath();
    ctx.moveTo(size/2, size/2);
    ctx.lineTo(size/2 + size/4, size/2 + size/6);
    ctx.stroke();
    
    // Minute hand
    ctx.beginPath();
    ctx.moveTo(size/2, size/2);
    ctx.lineTo(size/2, size/4);
    ctx.stroke();
    
    // Center dot
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(size/2, size/2, size/24, 0, Math.PI * 2);
    ctx.fill();
    
    return canvas.toBuffer();
}

// Create 48x48 icon
fs.writeFileSync('icon48.png', createIcon(48));

// Create 128x128 icon
fs.writeFileSync('icon128.png', createIcon(128)); 