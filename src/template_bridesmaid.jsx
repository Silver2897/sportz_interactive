import React, { useState, useEffect, useRef } from 'react';

const CardGenerator = () => {
  const [recipientName, setRecipientName] = useState('Sarah');
  const [senderName, setSenderName] = useState('Samantha');
  const canvasRef = useRef(null);

  const scriptFont = 'Alex Brush';
  const displayFont = 'Cinzel';

  // Path to your base template image without placeholder text, 
  // or use the base image and overlay canvas over it.
  const BACKGROUND_IMAGE_SRC = '/images/template.jpg';

  const drawCard = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const img = new Image();

    const drawHollowHeart = (x, y, size) => {
      const half = size / 2;

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(x, y + half);
      ctx.bezierCurveTo(
        x - size * 0.95, y - size * 0.1,
        x - size * 0.55, y - half,
        x, y - size * 0.15
      );
      ctx.bezierCurveTo(
        x + size * 0.55, y - half,
        x + size * 0.95, y - size * 0.1,
        x, y + half
      );
      ctx.strokeStyle = '#71805b';
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.stroke();
      ctx.restore();
    };

    const drawDivider = (y) => {
      const center = canvas.width / 2;
      const lineWidth = 108;
      const gap = 34;

      ctx.save();
      ctx.strokeStyle = '#8b9678';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(center - gap - lineWidth, y);
      ctx.lineTo(center - gap, y);
      ctx.moveTo(center + gap, y);
      ctx.lineTo(center + gap + lineWidth, y);
      ctx.stroke();
      drawHollowHeart(center, y, 25);
      ctx.restore();
    };

    const drawTrackedText = (text, x, y, tracking) => {
      const characters = [...text];
      const widths = characters.map((character) => ctx.measureText(character).width);
      const textWidth = widths.reduce((total, width) => total + width, 0)
        + tracking * Math.max(characters.length - 1, 0);
      let currentX = x - textWidth / 2;

      characters.forEach((character, index) => {
        ctx.fillText(character, currentX + widths[index] / 2, y);
        currentX += widths[index] + tracking;
      });
    };

    img.crossOrigin = 'anonymous';
    img.src = BACKGROUND_IMAGE_SRC;

    img.onload = () => {
      // Set canvas resolution to image dimensions
      canvas.width = img.width;
      canvas.height = img.height;

      // 1. Draw Background Image
      ctx.drawImage(img, 0, 0);

      // Text styling configurations
      const oliveColor = '#4B5E38';
      const darkColor = '#222222';

      ctx.textAlign = 'center';

      // 2. Recipient Name: "Dear [Name]"
      ctx.font = `82px "${scriptFont}", cursive`;
      ctx.fillStyle = oliveColor;
      ctx.fillText(`Dear ${recipientName || ''}`, canvas.width / 2, 260);
      drawHollowHeart(canvas.width / 2, 300, 26);

      // 3. Middle Static Text
      ctx.font = `600 30px "${displayFont}", serif`;
      ctx.fillStyle = darkColor;
      drawTrackedText("I CAN'T SAY", canvas.width / 2, 375, 5);

      ctx.font = `88px "${scriptFont}", cursive`;
      ctx.fillStyle = oliveColor;
      ctx.fillText('“I Do”', canvas.width / 2, 500);

      ctx.font = `600 30px "${displayFont}", serif`;
      ctx.fillStyle = darkColor;
      drawTrackedText('WITHOUT YOU', canvas.width / 2, 575, 5);
      drawDivider(630);

      drawTrackedText('WILL YOU BE MY', canvas.width / 2, 715, 5);

      ctx.font = `88px "${scriptFont}", cursive`;
      ctx.fillStyle = oliveColor;
      ctx.fillText('Bridesmaid?', canvas.width / 2, 835);
      drawHollowHeart(canvas.width / 2, 885, 26);

      // 4. Sender Name: "Love, [Name]"
      ctx.font = `68px "${scriptFont}", cursive`;
      ctx.fillStyle = oliveColor;
      ctx.fillText(`Love, ${senderName || 'Samantha'}`, canvas.width / 2, 970);
    };
  };

  useEffect(() => {
    // Ensure Google Fonts are fully loaded before rendering canvas text
    Promise.all([
      document.fonts.load(`88px "${scriptFont}"`),
      document.fonts.load(`600 30px "${displayFont}"`)
    ]).then(drawCard);
  }, [recipientName, senderName]);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    const imageURI = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = `Bridesmaid_Card_${recipientName || 'Custom'}.png`;
    link.href = imageURI;
    link.click();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', padding: '20px' }}>
      <h2>Bridesmaid Card Generator</h2>
      
      {/* Input Controls */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', flexWrap: 'wrap', gap: '15px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Recipient Name:</label>
          <input
            type="text"
            value={recipientName}
            onChange={(e) => setRecipientName(e.target.value)}
            placeholder="Enter name"
            style={{ padding: '8px', fontSize: '16px' }}
          />
        </div>

        {/* <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Sender Name:</label>
          <input
            type="text"
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
            placeholder="Enter your name"
            style={{ padding: '8px', fontSize: '16px' }}
          />
        </div> */}

        <button
          onClick={handleDownload}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#4B5E38',
            color: '#FFF',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Download Image
        </button>
      </div>

      {/* Rendered Canvas Preview */}
      <canvas
        ref={canvasRef}
        style={{ border: '1px solid #ccc', maxWidth: '100%', height: 'auto', maxHeight: '600px' }}
      />

    </div>
  );
};

export default CardGenerator;