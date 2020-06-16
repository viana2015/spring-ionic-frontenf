import { LocalUser } from "../models/local_user";
import { Injectable } from "@angular/core";
import { STORA_KEYS } from "../config/storage_keys.config";
import { Cart } from "../models/cart";

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

    getCart() : Cart { //obter a chave do usuario
        let str = localStorage.getItem(STORA_KEYS.cart);
        if (str != null) {
            return JSON.parse(str);
        }
        else {
            return null;
        }
    }

    setCart(obj : Cart) { //Armazena a chave
        if (obj != null) {
          localStorage.setItem(STORA_KEYS.cart, JSON.stringify(obj));
        }
        else {
           localStorage.removeItem(STORA_KEYS.cart);
        }

    }
}