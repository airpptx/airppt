#! /usr/bin/env node

//Set up our Parser
let { AirParser } = require("airppt-parser");
let { AirRenderer } = require("airppt-renderer");
const argv = require("optimist").default({ pos: "abs", slide: 1, output: "./airppt-output" }).argv;

let config = {
	GridSize: 12,
	PositionType: 1,
	DoNotRenderIDs: [],
	slideNumber: 1,
	inputPath: "",
	OutputDirectory: "",
	onlyReturnElements: false
};

//TO-DO: Input Validation

if (argv.help) {
	PrintCommandInformation();
	process.exit(1);
}

if (argv.pos === "abs") {
} else if (argv.pos === "grid") {
	config.PositionType = 0;
} else {
	throw Error("Invalid element positioning type in arguments");
}

if (argv.input || argv.i) {
	//TO-DO: validate input is actual Powerpoint File
	let input = argv.input || argv.i;
	if (!input.includes(".pptx" || ".pptm")) {
		PrintCommandInformation();
		throw Error("Not a valid input PPTX File");
	}
	config.inputPath = argv.input || argv.i;
} else {
	PrintCommandInformation();
	throw Error("Please provide a valid path to a powerpoint file");
}

if (argv.slide || argv.s) {
	//TO-DO: Check total number of slides and add input validation
	config.slideNumber = argv.s || argv.slide;
} else {
	throw Error("No slide number was given!");
}

if (argv.output || argv.o) {
	config.OutputDirectory = argv.output || argv.o;
}

if (argv.e || argv.element) {
	config.onlyReturnElements = true;
}

//TO-DO: Write test for each shape and slide number and confirm
let pptParser = new AirParser(config.inputPath);

waitForParsing();

async function waitForParsing() {
	let details = await pptParser.ParsePowerPoint(config.slideNumber);

	if (config.onlyReturnElements) {
		console.log(JSON.stringify(details));
		return;
	}

	let pptRenderer = new AirRenderer(details, {
		GridSize: 12,
		OutputDirectory: config.OutputDirectory,
		PositionType: 1,
		DoNotRenderIDs: []
	});

	//TO-DO: Assert Output Check
	let rendered = await pptRenderer.renderPage(true);
	console.log("Rendering complete see output Path");
}

function PrintCommandInformation() {
	console.log("Welcome to AirPPT. Go from PPTX to UI in seconds. Checkout the Github to file bugs and request features");
	console.log("-----------------------");
	console.log("--input [required] Pass in the path to the the PPTX file to parse and render");
	console.log();
	console.log("--slide [1] Slide number to render or parse in output");
	console.log();
	console.log("--output [airppt-output] Where the rendered elements will sit");
	console.log();
	console.log("--pos [abs] Can choose either 'abs' or 'grid' for element layout");
	console.log();
	console.log("--element [false] Do not render, only show parsed output. Useful for debugging.");
	console.log();
	console.log("@github:airpptx/airppt for help.");
}
