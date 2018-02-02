import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { v4 as uuid } from 'uuid';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Observable } from 'rxjs/Observable';
import { TonalityText } from '../models/tonalityText';

@Injectable()
export class GavagaiService {
  private baseApiUrl = 'https://api.gavagai.se/v3';
  private apiKey = 'f9ef60dc470c705043c4b75d084f3ffc';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  public analyzeTonality(title: string, body: string): Observable<TonalityText> {
    return this.http.post(
      `${this.baseApiUrl}/tonality?apiKey=${this.apiKey}`,
        {
          texts: [
          {
            body: body,
            title: title,
            id: uuid()
          }
        ],
        language: 'EN',
        includeSentences: false
      },
      this.httpOptions)
      .flatMap((response: any) => response.texts);
  }
  public randomNumber(): number {
    return Math.floor((Math.random() * 100) + 1);
  }

  public mockAnalyzeTonality(title: string, body: string): TonalityText {
    return {
      id: uuid(),
      tonality: [
        {
          tone: 'positivity',
          score: this.randomNumber(),
          normalizedScore: 0
        },
        {
          tone: 'hate',
          score: this.randomNumber(),
          normalizedScore: 0
        },
        {
          tone: 'violence',
          score: this.randomNumber(),
          normalizedScore: 0
        },
        {
          tone: 'negativity',
          score: this.randomNumber(),
          normalizedScore: 0
        },
        {
          tone: 'love',
          score: this.randomNumber(),
          normalizedScore: 0
        },
        {
          tone: 'fear',
          score: this.randomNumber(),
          normalizedScore: 0
        },
        {
          tone: 'skepticism',
          score: this.randomNumber(),
          normalizedScore: 0
        },
        {
          tone: 'desire',
          score: this.randomNumber(),
          normalizedScore: 0
        }
      ]
    };
  }
}
