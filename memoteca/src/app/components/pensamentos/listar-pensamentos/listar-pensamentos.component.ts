import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {

  listaPensamentos =[

    // {
    //   conteudo: 'comunicação entre os componentes',
    //   autoria: 'Angular',
    //   modelo: 'modelo3'
    // },
    // {
    //   conteudo: 'Passo informações para o componente filho',
    //   autoria: 'componente filho',
    //   modelo: 'modelo1'
    // }
  ]



  constructor() { }

  ngOnInit(): void {
  }

}
