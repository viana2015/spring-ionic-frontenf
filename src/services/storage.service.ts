import { LocalUser } from "../models/local_user";
import { Injectable } from "@angular/core";
import { STORA_KEYS } from "../config/storage_keys.config";

@Injectable()
export class StorageService {

    getLocalUser() : LocalUser { //obter a chave do usuario
        let usr = localStorage.getItem(STORA_KEYS.localUser);
        if (usr == null) {
            return null;
        }
        else {
            return JSON.parse(usr);
        }
    }

    setLocalUser(obj : LocalUser) { //Armazena a chave
        if (obj == null) {
          localStorage.removeItem(STORA_KEYS.localUser)  ;
        }
        else {
           localStorage.setItem(STORA_KEYS.localUser, JSON.stringify(obj)) ;
        }

    }
}