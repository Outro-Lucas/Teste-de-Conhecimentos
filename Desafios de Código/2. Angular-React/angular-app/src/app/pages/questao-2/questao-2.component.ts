import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questao-2',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './questao-2.component.html',
  styleUrl: './questao-2.component.css'
})
export class Questao2Component implements OnInit {

  public form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]]
  });

  public submitted = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void { }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      // Aqui você pode enviar os dados para um serviço, salvar no banco de dados, etc.
      console.log('Formulário enviado com sucesso!');
      console.log('Nome:', this.form.value.name);
      console.log('Email:', this.form.value.email);
    }
  }

  public goToHome() {
    this.router.navigate([`/`]);
  }

}
