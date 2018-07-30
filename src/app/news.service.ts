import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { News } from "./utility/models/news.model";

@Injectable()
export class NewsService {

    constructor(private http:HttpClient) {}

    getNews() {
        return this.http.get<News[]>('https://sdtde-f11f8.firebaseio.com/news.json').pipe(map(
            response => response)
        );
    }
}