import { Component, OnInit } from '@angular/core';
import {IBook} from '../../model/ibook';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  book: IBook;
  id: number;

  constructor(private bookService: BookService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(resp => {
      this.id = Number(resp.get('id'));
    });
    this.bookService.getBookById(this.id).subscribe(data => {
      this.book =data;
    })
  }

  delete(){
    if (confirm("Bạn đã tự tin về quyết định của mình !")){
      this.bookService.deleteBookById(this.book.id).subscribe(data =>{
        this.router.navigate(['/']);
      })
    }
  }

}
