import { Component } from '@angular/core';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';

import { AxiosService } from '../../../libs/axios.service';
import { GetTextFromPDF } from '../../../utils/extractTextFromPDF';

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
  file: FileList | null = null;

  constructor(private apiService: AxiosService) {}

  updateFile(event: any) {
    const file: FileList = event.target.files[0];
    this.file = file;
  }

  uploadData() {
    const { link, fullText } = GetTextFromPDF(this.file);
    // this.apiService.post({
    //   nome: this.nome.value ?? '',
    //   fullText: this.fullText,
    // });
  }
}
