import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-erro',
  imports: [],
  templateUrl: './erro.component.html',
  styleUrl: './erro.component.scss'
})
export class ErroComponent implements OnInit {
  constructor() { }
  
    ngOnInit() {
        window.location.href = 'https://www.youtube.com/watch?v=qv3zfhKvqaI';
    }
}
