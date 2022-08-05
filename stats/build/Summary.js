"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summery = void 0;
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
const HTMLReport_1 = require("./reportTargets/HTMLReport");
class Summery {
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    static winsAnalyssisWithHtmlReport(team) {
        return new Summery(new WinsAnalysis_1.WinsAnalysis(team), new HTMLReport_1.HtmlReport());
    }
    buildAndPrintReport(matches) {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}
exports.Summery = Summery;
