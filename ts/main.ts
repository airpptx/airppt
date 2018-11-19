//Set up our Parser
let { AirParser } = require("airppt-parser");
let { AirRenderer } = require("airppt-renderer");
const argv = require("optimist").default({ pos: "abs", slide: 1 }).argv;

let config = {
	GridSize: 12,
	OutputDirectory: "./output",
	PositionType: 1,
	DoNotRenderIDs: [],
	slideNumber: 1,
	inputPath: ""
};

//TO-DO: Input Validation

if (argv.pos === "abs") {
} else if (argv.pos === "grid") {
	config.PositionType = 0;
} else {
	throw Error("Invalid element positioning type in arguements");
}

if (argv.input || argv.i) {
	//TO-DO: validate input is actual Powerpoint File
	config.inputPath = argv.input || argv.i;
} else {
	throw Error("No input argument with name of powerpoint file was given");
}

if (argv.slide || argv.s) {
	//TO-DO: Check total number of slides and add input validation
	config.slideNumber = argv.s || argv.slide;
} else {
	throw Error("No slide number was given!");
}

//TO-DO: Add output path option

let pptPath = "/Users/raviteja_lingineni/Documents/Projects/airppt-all/samples/apps.pptx";
//TO-DO: Write test for each shape and slide number and confirm
let pptParser = new AirParser(pptPath);

waitForParsing();

async function waitForParsing() {
	let details = await pptParser.ParsePowerPoint(config.slideNumber);

	let pptRenderer = new AirRenderer(details, {
		GridSize: 12,
		OutputDirectory: "../output",
		PositionType: 1,
		DoNotRenderIDs: []
	});

	//TO-DO: Assert Output Check
	let rendered = await pptRenderer.renderPage(true);
	console.log("Check Output");
}
