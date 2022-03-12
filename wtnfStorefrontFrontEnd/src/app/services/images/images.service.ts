import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ConfigurationService } from '../configuration/configuration.service';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpClient, private config: ConfigurationService) { }

  upload(file: File) {//: Observable<HttpEvent<any>> {
    // TODO implement front end logic to upload an image to backend API
    // see https://www.bezkoder.com/angular-13-node-express-file-upload/#Nodejs_Express_Rest_APIs_for_File_Upload_038_Storage
  }
}
