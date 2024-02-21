import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { AxiosService } from '../libs/axios.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'boto-web';
  joke: string = '';

  constructor(private apiService: AxiosService) {}

  getResumes() {
    this.apiService
      .getResumes()
      .then((response) => {
        console.log(response.data);
        this.joke = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
