import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IBook} from '../../model/ibook';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {


  editBookForm : FormGroup;
  book: IBook;
  id: number;
  constructor(private bookService: BookService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(resp => {
      this.id = Number(resp.get('id'));
    });
    this.editBookForm = this.fb.group({
      title: ['',[Validators.required]],
      author: ['',[Validators.required]],
      description: ['',[Validators.required]]
    });

    this.bookService.getBookById(this.id).subscribe( data => {
      this.book = data;
      this.editBookForm.patchValue(data);
    })
  }

  submit(){
    if (this.editBookForm.valid){
      const currentBook = this.editBookForm.value;
      this.bookService.editBookById(this.book.id,currentBook).subscribe(data => {
        this.editBookForm.reset('');
      },
        error => {
        alert(error);
        });
      this.router.navigate(['/']);
    }
  }

}
