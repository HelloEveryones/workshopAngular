import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css']
})
export class ThemesListComponent implements OnInit{
constructor(private api:ApiserviceService){}
ngOnInit(): void {
  this.api.getThemes().subscribe(themes=>{
    console.log(themes);
    
  })
}
}
