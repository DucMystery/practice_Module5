import { Component, OnInit } from '@angular/core';
import {IBook} from '../../model/ibook';
import {BookService} from '../../service/book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  book: IBook;
  id: number;

  constructor(private bookService: BookService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(resp => {
      this.id = Number(resp.get('id'));
    });
    this.bookService.getBookById(this.id).subscribe(data => {
      this.book = data;
    })
  }

}
