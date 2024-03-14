import { Component } from '@angular/core';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';

import { AxiosService } from '../../../libs/axios.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  nome = new FormControl('');
  fullText = '';
  formData = new FormData();

  constructor(private apiService: AxiosService) {}

  updateFile(event: any) {
    const file = event.target.files[0];
    this.formData.append('file', file);
  }

  uploadData() {
    this.apiService.post({
      nome: this.nome.value ?? '',
      fullText: this.fullText,
    });
  }
}
