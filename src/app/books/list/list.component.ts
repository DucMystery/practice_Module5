import { Component, OnInit } from '@angular/core';
import {IBook} from '../../model/ibook';
import {BookService} from '../../service/book.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  bookList: IBook[] = [];
  count: number ;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.bookService.getBookList().subscribe((data: IBook[]) => {
      this.bookList = data;
      this.count = this.bookList.length;
    } )
  }

}
