import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BookService} from '../../service/book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createBookForm: FormGroup;

  constructor(private bookService: BookService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.createBookForm = this.fb.group({
      title: ['',[Validators.required]],
      author: ['',[Validators.required]],
      description: ['',[Validators.required]],
    })
  }


  submit(){
    if (this.createBookForm.valid){
      const currentBook =this.createBookForm.value;
      this.bookService.createBook(currentBook).subscribe( data =>{
        this.createBookForm.reset;
        this.router.navigate(['/']);
      },
        error => {
        alert('Lỗi rồi bạn ưi !');
        })
    }
  }

}
