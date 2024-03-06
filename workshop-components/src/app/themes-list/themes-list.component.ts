import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Theme } from '../types/theme';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css'],
})
export class ThemesListComponent implements OnInit {
  themes: Theme[] | null = [];
  isLoading: boolean = true;
  constructor(private api: ApiserviceService) {}
  ngOnInit(): void {
    this.api.getThemes().subscribe((themes) => {
      this.themes = themes;
      console.log(themes);
      this.isLoading = false;
    });
  }
}
