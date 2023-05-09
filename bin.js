#!/usr/bin/env node

const sharp = require('sharp');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

// 
const argv = yargs(hideBin(process.argv))
  .usage('Usage: npx gen-color-preview --color <color> --output <fileName>')
  .option('color', {
    alias: 'c',
    describe: 'RGB color value (#D20F39)',
    demandOption: true,
    type: 'string',
    coerce: (color) => {
      const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
      if (!hexRegex.test(color)) throw new Error('Invalid color format. Please provide a valid hex color, e.g., "#D20F39"');
      return color;
    }
  })
  .option('output', {
    alias: 'o',
    describe: 'File name to save, without extension',
    demandOption: true,
    type: 'string'
  })
  .help('help')
  .alias('help', 'h')
  .argv;


const genColorPreview = async () => {
  const { color, output } = argv;

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

  const circleSVG = Buffer.from(`<svg><circle cx="${circleRadius}" cy="${circleRadius}" r="${circleRadius}" fill="${color}" /></svg>`);
  // generate the circle
  image.composite([{ input: circleSVG, blend: 'over' }]);
  // save
  image.toFile(`${output}.png`);
  console.log(`Image saved as ${output}.png`);
};

genColorPreview();