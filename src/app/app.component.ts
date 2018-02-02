import { Component } from '@angular/core';
import { GavagaiService } from './services/gavagai.service';
import { NgModuleCompileResult } from '@angular/compiler/src/ng_module_compiler';
import { TonalityText } from './models/tonalityText';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'app';
  public chartA;
  public chartB;
  public showAnalysis = false;

  constructor(private _gavagaiService: GavagaiService) {}

  public analyze(event) {
    this.chartA = this._gavagaiService.mockAnalyzeTonality('Chart A', 'Body');
    this.chartB = this._gavagaiService.mockAnalyzeTonality('Chart B', 'Body');
    this.showAnalysis = true;
  }
}
