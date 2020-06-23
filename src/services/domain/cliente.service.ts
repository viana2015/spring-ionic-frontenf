import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { ClienteDTO } from "../../models/cliente.dto";
import { API_CONFIG } from "../../config/api.config";
import { StorageService } from "../storage.service";
import { ImageUtilService } from "../image-util.service";

@Injectable()
export class ClienteService {

    constructor(
        public http: HttpClient, 
        public storage: StorageService,
        public imageUtilService: ImageUtilService) {

    }

    findById(id: String) {
        return this.http.get(`${API_CONFIG.baseUrl}/clientes/${id}`); // Passando o cabeçalho para requisição
    }

    findByEmail(email: String) {
        return this.http.get(`${API_CONFIG.baseUrl}/clientes/email?value=${email}`); // Passando o cabeçalho para requisição
    }

    getImageFromBucket(id : String) : Observable<any> {
        let url = `${API_CONFIG.bucketBaseUrl}/cp${id}.jpg`
        return this.http.get(url, {responseType : 'blob'});
    }

    cadastrar(obj : ClienteDTO) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/clientes`,
            obj,
            {
                observe: 'response',
                responseType: 'text'
            }
        );
    }
    
    uploadPicture(picture) {
       let pictureBlob = this.imageUtilService.dataUriToBlob(picture);
       let formData : FormData = new FormData();
       formData.set('file', pictureBlob, 'file.png');
        return this.http.post(
            `${API_CONFIG.baseUrl}/clientes/picture`,
            formData,
            {
                observe: 'response',
                responseType: 'text'
            }
      );
    }
}