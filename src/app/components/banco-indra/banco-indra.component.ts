import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banco-indra',
  templateUrl: './banco-indra.component.html',
  styleUrls: ['./banco-indra.component.scss']
})
export class BancoIndraComponent implements OnInit {

  public text = '';
  constructor() { }



  ngOnInit(): void {
    this.typingText();
  }

  typingText(): void {
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

}
