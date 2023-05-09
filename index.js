#!/usr/bin/env ts-node

const sharp = require('sharp');
const fs = require('fs');

const [_, __, color, fileName] = process.argv;

const genColorPreview = async () => {
  const circleSize = 64;
  const circleRadius = circleSize / 2;

  // properties
  const image = await sharp({
    create: {
      width: circleSize,
      height: circleSize,
      channels: 4, // rgba
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  });

  const circleSVG = Buffer.from(`<svg><circle cx="${circleRadius}" cy="${circleRadius}" r="${circleRadius}" fill="#${color}" /></svg>`);
  // generate the circle
  image.composite([{ input: circleSVG, blend: 'over' }]);
  // save
  image.toFile(`${fileName}.png`);
};

genColorPreview();