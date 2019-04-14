import { Injectable } from "@angular/core";
import { AppService } from "../../shared/service/app.service";
import { HttpService } from "../../shared/service/http.service";
import { Props } from "../../constants/props";
// import { Storage } from "../../shared/utils/storage";
import * as decode from "jwt-decode";

@Injectable()
export class AuthService {
  props: Props = Props;
  private auth_url: string = "/auth";
  private access_menu_url = "/accessmenu";

  constructor(
    private http: HttpService,
    private appService: AppService,
    private navService: NavService
  ) {
    Storage.clearSession();
    this.appService.sessionClear();
  }

 

  getApp(): AppService {
    return this.appService;
  }

  showMessage(message: string) {
    this.appService.showMessage(message);
  }

  getParam(key: string): string {
    return this.navService.param(key);
  }

  signup(data: any) {
    let reqData = data;
    delete reqData.username;
    return this.http.post(this.auth_url + "/signup", { data: reqData }, true);
  }

  verifyEmail(data: any) {
    let reqData = data;
    return this.http.post(
      this.auth_url + "/verifyEmail",
      { data: reqData },
      true
    );
  }

  login(data: any) {
    let reqData = {
      username: data.userid,
      name: data.name,
      password: data.password,
      provider: data.provider
    };
    return this.http.post(this.auth_url, reqData, true);
  }
  forgotPassword(data: any) {
    let reqData = data;
    return this.http.get(
      this.auth_url,
      {
        data: { userid: reqData }
      },
      true
    );
  }
  resetPassword(data: any) {
    let reqData = {
      userid: data.userid,
      password: data.password,
      token: data.token
    };
    return this.http.put(this.auth_url, { data: reqData }, true);
  }
  storageSave(data: any) {
    if (data.access_token) {
      Storage.setJWT(data.access_token);
      data.user = decode(data.access_token).identity;
    }
    console.log(data);
    if (data.user) {
      Storage.setSessionUser(data.user);
      this.appService.sessionUserEmit(data.user);
    }
    if (data.menuList) {
      let menuList = this.validMenu(data.menuList);
      Storage.setMenuList(menuList);
      this.appService.menuEmit(menuList);
    } else {
      setTimeout(() => {
        let role = data.user.role;
        this.http
          .get(this.access_menu_url, { data: { role: role } }, true)
          .subscribe(respData => {
            if (respData) {
              let menuList = this.validMenu(respData);
              Storage.setMenuList(menuList);
              this.appService.menuEmit(menuList);
            }
          });
      }, 500);
    }
    if (data.branchId) {
      Storage.setBranch(data.branchId);
    }
  }

  validMenu(menus: any) {
    return menus.filter(function(item) {
      return item.active == true;
    });
  }
}
