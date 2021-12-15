import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {AuthService} from "./authservice";
import {Observable} from "rxjs";

@Injectable()
export class EstaLogeadoGuard implements CanActivate{
  //Inyeccion de dependencias-> importando servicio en servicio para utilizar metodos
  constructor(private readonly _authService:AuthService) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this._authService.estaLogeado;//boolean
  }

}
