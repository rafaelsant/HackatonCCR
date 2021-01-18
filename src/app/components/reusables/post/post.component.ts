import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  constructor() { }

  @Input() imagem:String;
  @Input() textoPost:String;
  ngOnInit(): void {
  }

}
