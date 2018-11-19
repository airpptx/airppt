declare let AirParser: any;
declare let AirRenderer: any;
declare const argv: any;
declare let config: {
    GridSize: number;
    OutputDirectory: string;
    PositionType: number;
    DoNotRenderIDs: any[];
    slideNumber: number;
    inputPath: string;
};
declare let pptPath: string;
declare let pptParser: any;
declare function waitForParsing(): Promise<void>;
