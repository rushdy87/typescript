"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
const matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
matchReader.load();
const summary = Summary_1.Summery.winsAnalyssisWithHtmlReport('Man City'); //winsAnalyssisWithHtmlReport static method
summary.buildAndPrintReport(matchReader.matches);
/*
// without using static method:
import { MatchReader } from "./MatchReader";
import { Summery } from "./Summary";
import { CsvFileReader } from "./CsvFileReader";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { HtmlReport } from "./reportTargets/HTMLReport";

// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');

// Create an instanse of MatchReader and pass in something satisfying
// the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
const summary = new Summery(new WinsAnalysis('Chelsea'), new HtmlReport());
summary.buildAndPrintReport(matchReader.matches);
*/ 
