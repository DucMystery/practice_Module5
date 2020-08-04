import { Injectable } from '@angular/core';
import {IBook} from '../model/ibook';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  bookList: IBook [] = [];
  url = 'http://localhost:3000/books';

  constructor(private http: HttpClient) { }

  getBookList(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.url);
  }

  getBookById(id: number): Observable<IBook> {
    return this.http.get<IBook>(this.url + '/' + id);
  }

  editBookById(id: number, book: Partial<IBook>): Observable<IBook> {
    return this.http.put<IBook>(this.url + '/' + id,book);
  }

  createBook(book: Partial<IBook>): Observable<IBook>{
    return this.http.post<IBook>(this.url,book);
  }

  deleteBookById(id: number){
    return this.http.delete(this.url+'/'+id);
  }


}
