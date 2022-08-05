import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { HtmlReport } from "./reportTargets/HTMLReport";

export interface Analyzer {
  run(matchs: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summery {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) { }

  static winsAnalyssisWithHtmlReport(team: string): Summery {
    return new Summery(new WinsAnalysis(team), new HtmlReport());
  }

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }

}