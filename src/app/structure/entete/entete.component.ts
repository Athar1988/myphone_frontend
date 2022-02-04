import { Component, OnInit } from '@angular/core';
import { OwlOptions,SlidesOutputData } from 'ngx-owl-carousel-o';
import {CategoriesService} from '../../services/categories.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-entete',
  templateUrl: './entete.component.html',
  styleUrls: ['./entete.component.css']
})
export class EnteteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
