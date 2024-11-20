import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent{

  constructor(private router: Router){
  }

  createBookmarkPage() {
    this.router.navigate(['/create'])
  }

  refreshPage(){
    this.router.navigate([''])
  }

}
