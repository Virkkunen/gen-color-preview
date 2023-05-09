#!/usr/bin/env ts-node

const sharp = require('sharp');

const [_, __, color, fileName] = process.argv;

const genColorPreview = async () => {
  const circleSize = 64;
  const circleRadius = circleSize / 2;

  // properties
  const image = sharp({
    create: {
      width: circleSize,
      height: circleSize,
      channels: 4, // rgba
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  });

  // draw image
  image
    .composite([
      {
        input: Buffer.from(
          `<svg><circle cx="${circleRadius}" cy="${circleRadius}" r="${circleRadius}" fill="#${color}" /></svg>`
        ),
        blend: 'dest-in',
      },
    ])
    .toFile(`${fileName}.png`);
};

genColorPreview();