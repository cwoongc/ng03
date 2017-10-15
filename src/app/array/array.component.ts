import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent implements OnInit {

  fruits1;
  fruits2;
  nums1;
  nums2;

  constructor() { }

  ngOnInit() {

    let fruits1:string[] = ["apple","mango","banana"];
    this.fruits1 = fruits1;

    let fruits2:string[] = []
    fruits2.push("apple");
    fruits2.push("mango");
    fruits2.push("banana");
    this.fruits2 = fruits2;

    let nums1: Array<number> = [1,2,3];
    this.nums1 = nums1;

    let nums2: Array<number> = new Array<number>();
    nums2.push(1);
    nums2.push(2);
    nums2.push(3);
    this.nums2 = nums2;
  }

}
