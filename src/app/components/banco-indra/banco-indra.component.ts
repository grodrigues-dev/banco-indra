import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-banco-indra',
  templateUrl: './banco-indra.component.html',
  styleUrls: ['./banco-indra.component.scss']
})
export class BancoIndraComponent implements OnInit {

  public text = '';
  public formLogin: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.typingText();
    this.iniciarForm();
  }

  private typingText(): void {
    const text = "Quer negociar com a gente?, Temos uma proposta para você!"
    let newText = "";
    setInterval(() => {
      if (text == newText) {
        newText = ""
      } else {
        newText = `${newText}${text.charAt(newText.length)}`
        this.text = newText;
      }
    }, 300)
  }

  private iniciarForm(): void {
    this.formLogin = this.fb.group({
      agencia: [null, Validators.required],
      conta: [null, Validators.required]
    })
  }

  validarConta(): void {
    console.log(this.formLogin.get('agencia').value, this.formLogin.get('conta').value);
    
  }

  public validaCampoTipoNumero(input: HTMLFormElement): void {
    const regex = /[^\d]+/g;
    if (input.value.length > input.maxLength) {
      input.value = input.value.slice(0, input.maxLength);
    }
    input.value = input.value.replace(regex, '');
  }

}
