import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { VeiculoService } from './../veiculo.service';
import { AuthService } from 'src/app/security/auth.service';
import { MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-imagem',
  templateUrl: './imagem.component.html',
  styleUrls: ['./imagem.component.css']
})
export class ImagemComponent {
  veiculos = [];
  veiculo_id = this.route.snapshot.params[`id`];
  constructor(
    private httpClient: HttpClient,
    private veiculoService: VeiculoService,
    private auth: AuthService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private errorHandler: ErrorHandlerService,
    ){ }

    selectedFile!: File;
    retrievedImage: any;
    base64Data: any;
    retrieveResonse: any;
    message!: string;
    imageName: any;

  ngOnInit(): void {
    this.getImage();
    this.title.setTitle('Imagem');
  }

  getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get('http://localhost:8080/image/get/' + this.veiculo_id)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  }


}


