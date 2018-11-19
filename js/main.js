var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
if (argv.pos === "abs") {
}
else if (argv.pos === "grid") {
    config.PositionType = 0;
}
else {
    throw Error("Invalid element positioning type in arguements");
}
if (argv.input || argv.i) {
    //TO-DO: validate input it actual Powerpoint
    config.inputPath = argv.input || argv.i;
}
else {
    throw Error("No input argument with name of powerpoint file was given");
}
if (argv.slide || argv.s) {
    config.slideNumber = argv.s || argv.slide;
}
else {
    throw Error("No slide number was given!");
}
let pptPath = "/Users/raviteja_lingineni/Documents/Projects/airppt-all/samples/apps.pptx";
//TO-DO: Write test for each shape and slide number and confirm
let pptParser = new AirParser(pptPath);
waitForParsing();
function waitForParsing() {
    return __awaiter(this, void 0, void 0, function* () {
        let details = yield pptParser.ParsePowerPoint(config.slideNumber);
        let pptRenderer = new AirRenderer(details, {
            GridSize: 12,
            OutputDirectory: "../output",
            PositionType: 1,
            DoNotRenderIDs: []
        });
        //TO-DO: Assert Output Check
        let rendered = yield pptRenderer.renderPage(true);
        console.log("Check Output");
    });
}
