!function(){"use strict";function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function e(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}(self.webpackChunkngx_admin=self.webpackChunkngx_admin||[]).push([[701],{6701:function(n,o,a){a.r(o),a.d(o,{AuthModule:function(){return b}});var i,c=a(38583),l=a(39407),r=a(3679),g=a(82846),p=a(99763),f=a(37716),x=a(92340),s=a(91841),d=((i=function(){function n(e){t(this,n),this.http=e}return e(n,[{key:"register",value:function(t){return this.http.post("".concat(x.N.apiUrl,"/v1/api_register_shop"),t)}},{key:"login",value:function(t){return this.http.post("".concat(x.N.apiUrl,"/v1/api_login"),t)}}]),n}()).\u0275fac=function(t){return new(t||i)(f.LFG(s.eN))},i.\u0275prov=f.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i),u=a(94362),m=a(38932),_=function(){var n=function(){function n(e,o,a,i,c,l,g,p){t(this,n),this.router=e,this.authService=o,this.authenticateService=a,this.dataService=i,this.fb=c,this.windowService=l,this.dialogService=g,this.toastrService=p,this.loadingMediumGroup=!1,this.loginForm=this.fb.group({email:["",r.kI.required],password:["",r.kI.required]})}return e(n,[{key:"ngOnInit",value:function(){}},{key:"onSubmit",value:function(){var t=this;this.loadingMediumGroup=!0,this.authService.login({data:{email:this.loginForm.value.email,password:this.loginForm.value.password}}).subscribe(function(n){t.toastrService.success("Operation succesfull","Success"),t.loadingMediumGroup=!1,localStorage.setItem("user",JSON.stringify(n.data)),localStorage.setItem("userid",n.data.id),localStorage.setItem("vendor",n.data.vendor),t.router.navigate(["pages/dashboard"]),t.authenticateService.setUser(n.data)},function(n){t.toastrService.danger("Operation failed",n.message),t.loadingMediumGroup=!1})}}]),n}();return n.\u0275fac=function(t){return new(t||n)(f.Y36(p.F0),f.Y36(d),f.Y36(u.i),f.Y36(m.k),f.Y36(r.qu),f.Y36(l.eJ1),f.Y36(l.Gln),f.Y36(l.quB))},n.\u0275cmp=f.Xpm({type:n,selectors:[["ngx-login"]],decls:28,vars:1,consts:[[1,"fxt-template-animation","fxt-template-layout20"],[1,"fxt-content"],[1,"fxt-header"],["src","assets/images/logo/logo.png","width","250"],[1,"fxt-style-line"],[1,"fxt-form"],[3,"formGroup"],[1,"form-group"],[1,"fxt-transformY-50","fxt-transition-delay-1"],["type","email","formControlName","email","name","email","placeholder","Email Address","required","required",1,"form-control"],[1,"fxt-transformY-50","fxt-transition-delay-2"],["type","password","formControlName","password","name","password","placeholder","Password","required","required",1,"form-control"],[1,"fxt-transformY-50","fxt-transition-delay-3"],[1,"fxt-checkbox-area"],[1,"checkbox"],["id","checkbox1","type","checkbox"],["for","checkbox1"],["href","#",1,"switcher-text"],[1,"fxt-transformY-50","fxt-transition-delay-4"],["type","submit",1,"fxt-btn-fill",3,"click"]],template:function(t,n){1&t&&(f.TgZ(0,"section",0),f.TgZ(1,"div",1),f.TgZ(2,"div",2),f._UZ(3,"img",3),f.TgZ(4,"div",4),f.TgZ(5,"h2"),f._uU(6,"Login With Email"),f.qZA(),f.qZA(),f.qZA(),f.TgZ(7,"div",5),f.TgZ(8,"form",6),f.TgZ(9,"div",7),f.TgZ(10,"div",8),f._UZ(11,"input",9),f.qZA(),f.qZA(),f.TgZ(12,"div",7),f.TgZ(13,"div",10),f._UZ(14,"input",11),f.qZA(),f.qZA(),f.TgZ(15,"div",7),f.TgZ(16,"div",12),f.TgZ(17,"div",13),f.TgZ(18,"div",14),f._UZ(19,"input",15),f.TgZ(20,"label",16),f._uU(21,"Keep me logged in"),f.qZA(),f.qZA(),f.TgZ(22,"a",17),f._uU(23,"Forgot Password"),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.TgZ(24,"div",7),f.TgZ(25,"div",18),f.TgZ(26,"button",19),f.NdJ("click",function(){return n.onSubmit()}),f._uU(27,"Log in"),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.qZA()),2&t&&(f.xp6(8),f.Q6J("formGroup",n.loginForm))},directives:[r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u,r.Q7],styles:['.fxt-template-layout20[_ngcontent-%COMP%]{min-height:100%;display:flex;align-items:center;justify-content:space-between}@media only screen and (max-width: 991px){.fxt-template-layout20[_ngcontent-%COMP%]{padding:15px}}@media only screen and (min-width: 1380px){.fxt-template-layout20[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{max-width:1350px}}.fxt-template-layout20[_ngcontent-%COMP%]   .fxt-checkbox-area[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-bottom:40px;flex-wrap:wrap}.fxt-template-layout20[_ngcontent-%COMP%]   .fxt-bg-color[_ngcontent-%COMP%]{background-color:#fff;width:100%;padding:0}.fxt-template-layout20[_ngcontent-%COMP%]   .fxt-bg-img[_ngcontent-%COMP%]{width:100%;background-repeat:no-repeat;background-position:center center;background-size:cover;margin:0;padding:0;border-radius:15px 0 0 15px}.fxt-template-layout20[_ngcontent-%COMP%]   .fxt-content[_ngcontent-%COMP%]{border-radius:0 15px 15px 0;padding:100px 50px 70px;width:100%;box-shadow:3px 0 79px rgba(0,0,0,.08)}@media only screen and (max-width: 1199px){.fxt-template-layout20[_ngcontent-%COMP%]   .fxt-content[_ngcontent-%COMP%]{padding:100px 35px 70px 50px}}@media only screen and (max-width: 991px){.fxt-template-layout20[_ngcontent-%COMP%]   .fxt-content[_ngcontent-%COMP%]{padding:100px 70px 70px}}@media only screen and (max-width: 767px){.fxt-template-layout20[_ngcontent-%COMP%]   .fxt-content[_ngcontent-%COMP%]{padding:80px 50px 50px}}@media only screen and (max-width: 575px){.fxt-template-layout20[_ngcontent-%COMP%]   .fxt-content[_ngcontent-%COMP%]{padding:60px 30px 30px}}@media only screen and (max-width: 479px){.fxt-template-layout20[_ngcontent-%COMP%]   .fxt-content[_ngcontent-%COMP%]{padding:50px 20px 20px}}.fxt-template-layout20[_ngcontent-%COMP%]   .fxt-header[_ngcontent-%COMP%]{text-align:center}.fxt-template-layout20[_ngcontent-%COMP%]   .fxt-logo[_ngcontent-%COMP%]{display:block;margin-bottom:50px;margin-left:auto;margin-right:auto;max-width:40vw}.fxt-template-layout20[_ngcontent-%COMP%]   .fxt-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{position:relative;z-index:1}.fxt-template-layout20[_ngcontent-%COMP%]   .fxt-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{min-height:50px;box-shadow:none;border:1px solid #e7e7e7;padding:10px 15px;color:#111}.fxt-template-layout20[_ngcontent-%COMP%]   .fxt-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#a1a1a1;font-size:15px;font-weight:300}.fxt-template-layout20[_ngcontent-%COMP%]   .fxt-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{color:#a1a1a1;font-size:15px;font-weight:300}.fxt-template-layout20[_ngcontent-%COMP%]   .fxt-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-moz-placeholder{color:#a1a1a1;font-size:15px;font-weight:300}.fxt-template-layout20[_ngcontent-%COMP%]   .fxt-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder{color:#a1a1a1;font-size:15px;font-weight:300}.fxt-template-layout20[_ngcontent-%COMP%]   .fxt-btn-fill[_ngcontent-%COMP%]{font-family:"Roboto",sans-serif;cursor:pointer;display:inline-block;font-size:17px;font-weight:500;box-shadow:none;outline:none;border:0;color:#fff;border-radius:3px;background-color:#ff6e2e;padding:10px 36px;margin-bottom:10px;width:100%;transition:all .3s ease-in-out}.fxt-template-layout20[_ngcontent-%COMP%]   .fxt-btn-fill[_ngcontent-%COMP%]:hover{background-color:#ff002a;border-color:#ff002a}.fxt-template-layout20[_ngcontent-%COMP%]   .fxt-btn-fill[_ngcontent-%COMP%]:focus{outline:none}.fxt-template-layout20[_ngcontent-%COMP%]   .switcher-text[_ngcontent-%COMP%]{color:#ff002a;font-size:15px;margin-bottom:5px;display:block;transition:all .3s ease-in-out}.fxt-template-layout20[_ngcontent-%COMP%]   .switcher-text[_ngcontent-%COMP%]:hover{color:#000}.fxt-template-layout20[_ngcontent-%COMP%]   .switcher-text2[_ngcontent-%COMP%]{color:#ff002a;font-size:15px;display:inline-block;transition:all .3s ease-in-out}.fxt-template-layout20[_ngcontent-%COMP%]   .switcher-text2.inline-text[_ngcontent-%COMP%]{margin-left:3px}.fxt-template-layout20[_ngcontent-%COMP%]   .switcher-text2[_ngcontent-%COMP%]:hover{color:#000}.fxt-template-layout20[_ngcontent-%COMP%]   .fxt-style-line[_ngcontent-%COMP%]{overflow:hidden;text-align:center}.fxt-template-layout20[_ngcontent-%COMP%]   .fxt-style-line[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center;font-weight:300;margin-bottom:30px;font-size:20px;color:#a4a4a4;display:inline-block;position:relative;padding:0 25px;z-index:1}.fxt-template-layout20[_ngcontent-%COMP%]   .fxt-style-line[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:before{display:inline-block;content:"";height:1px;width:100%;background-color:#ebebeb;left:100%;top:50%;transform:translateY(-50%);position:absolute;z-index:1}.fxt-template-layout20[_ngcontent-%COMP%]   .fxt-style-line[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after{display:inline-block;content:"";height:1px;width:100%;background-color:#ebebeb;right:100%;top:50%;transform:translateY(-50%);position:absolute;z-index:1}.fxt-template-layout20[_ngcontent-%COMP%]   ul.fxt-socials[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;margin-right:-5px;margin-left:-5px;margin-bottom:20px}.fxt-template-layout20[_ngcontent-%COMP%]   ul.fxt-socials[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{max-width:100%;flex:0 0 33.33333%;padding-left:5px;padding-right:5px;margin-bottom:10px}@media only screen and (max-width: 575px){.fxt-template-layout20[_ngcontent-%COMP%]   ul.fxt-socials[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{flex:0 0 50%}}@media only screen and (max-width: 350px){.fxt-template-layout20[_ngcontent-%COMP%]   ul.fxt-socials[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{flex:0 0 100%}}.fxt-template-layout20[_ngcontent-%COMP%]   ul.fxt-socials[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{border-radius:2px;display:flex;align-items:center;justify-content:flex-start;font-size:14px;height:45px;color:#fff;transition:all .3s ease-in-out}.fxt-template-layout20[_ngcontent-%COMP%]   ul.fxt-socials[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{border-radius:2px 0 0 2px;display:flex;align-items:center;justify-content:center;width:45px;height:45px}.fxt-template-layout20[_ngcontent-%COMP%]   ul.fxt-socials[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{height:100%;width:100%;display:flex;align-items:center;justify-content:center;flex:1}.fxt-template-layout20[_ngcontent-%COMP%]   ul.fxt-socials[_ngcontent-%COMP%]   li.fxt-facebook[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background-color:#3b5998}.fxt-template-layout20[_ngcontent-%COMP%]   ul.fxt-socials[_ngcontent-%COMP%]   li.fxt-facebook[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{background-color:#4867aa}.fxt-template-layout20[_ngcontent-%COMP%]   ul.fxt-socials[_ngcontent-%COMP%]   li.fxt-facebook[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#5676bb}.fxt-template-layout20[_ngcontent-%COMP%]   ul.fxt-socials[_ngcontent-%COMP%]   li.fxt-twitter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background-color:#00acee}.fxt-template-layout20[_ngcontent-%COMP%]   ul.fxt-socials[_ngcontent-%COMP%]   li.fxt-twitter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{background-color:#3cf}.fxt-template-layout20[_ngcontent-%COMP%]   ul.fxt-socials[_ngcontent-%COMP%]   li.fxt-twitter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#3dc5f3}.fxt-template-layout20[_ngcontent-%COMP%]   ul.fxt-socials[_ngcontent-%COMP%]   li.fxt-google[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background-color:#c33}.fxt-template-layout20[_ngcontent-%COMP%]   ul.fxt-socials[_ngcontent-%COMP%]   li.fxt-google[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{background-color:#db4437}.fxt-template-layout20[_ngcontent-%COMP%]   ul.fxt-socials[_ngcontent-%COMP%]   li.fxt-google[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#e75042}.fxt-template-layout20[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]{padding-left:5px;margin-right:30px;margin-bottom:5px}.fxt-template-layout20[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{padding-left:20px;color:#a4a4a4;margin-bottom:0;font-size:15px;position:relative}.fxt-template-layout20[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:before{content:"";position:absolute;width:16px;height:16px;top:4px;left:0;margin-left:-5px;border:1px solid;border-color:#dcdcdc;border-radius:3px;background-color:#fff;transition:border .15s ease-in-out,color .15s ease-in-out}.fxt-template-layout20[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:after{position:absolute;margin-left:-20px;padding-left:3px;font-size:10px;color:#555}.fxt-template-layout20[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{display:none}.fxt-template-layout20[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:after{font-family:"Font Awesome 5 Free";content:"\\f00c";font-weight:900;color:#fff;left:15px;top:4px}.fxt-template-layout20[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:before{background-color:#ff002a;border-color:#ff002a}.fxt-template-layout20[_ngcontent-%COMP%]   .fxt-footer[_ngcontent-%COMP%]{text-align:center}']}),n}();function C(t,n){if(1&t&&(f.TgZ(0,"nb-option",36),f._uU(1),f.qZA()),2&t){var e=n.$implicit;f.s9C("value",e.id),f.xp6(1),f.Oqu(e.name)}}var O=function(){return["/auth/login"]},M=function(){var n=function(){function n(e,o,a,i,c,l){t(this,n),this.authService=e,this.dataService=o,this.fb=a,this.windowService=i,this.dialogService=c,this.toastrService=l,this.loadingMediumGroup=!1,this.rows=[],this.specialities=[],this.shopForm=this.fb.group({name:["",[r.kI.required]],city:["",r.kI.required],phone:["",r.kI.required],phone2:["",r.kI.required],address:["",r.kI.required],address2:["",r.kI.required],country:["",r.kI.required],countrycode:["",r.kI.required],speciality:["",r.kI.required],email:["",r.kI.required],password:["",r.kI.required]})}return e(n,[{key:"ngOnInit",value:function(){var t=this;this.dataService.rides_lists().subscribe(function(n){t.specialities=n.data})}},{key:"openWithoutBackdrop",value:function(t){this.dialogService.open(t,{context:"Add category",closeOnBackdropClick:!1})}},{key:"onSubmit",value:function(){var t=this;this.loadingMediumGroup=!0,this.authService.register({data:{name:this.shopForm.value.name,email:this.shopForm.value.email,password:this.shopForm.value.password,speciality:this.shopForm.value.speciality,country:this.shopForm.value.country,countrycode:this.shopForm.value.country,address2:this.shopForm.value.address2,address:this.shopForm.value.address,phone2:this.shopForm.value.phone2,phone:this.shopForm.value.phone,city:this.shopForm.value.city,id:null}}).subscribe(function(n){t.toastrService.success("Operation succesfull","Success"),t.loadingMediumGroup=!1},function(n){t.toastrService.danger("Operation failed",n.message),t.loadingMediumGroup=!1})}}]),n}();return n.\u0275fac=function(t){return new(t||n)(f.Y36(d),f.Y36(m.k),f.Y36(r.qu),f.Y36(l.eJ1),f.Y36(l.Gln),f.Y36(l.quB))},n.\u0275cmp=f.Xpm({type:n,selectors:[["ngx-register"]],decls:65,vars:4,consts:[[1,"fxt-template-animation","fxt-template-layout20"],[1,"fxt-content"],[1,"fxt-header"],[1,"fxt-style-line"],["src","assets/images/logo/logo.png","width","250"],[1,"fxt-form"],[3,"formGroup"],[1,"row"],[1,"col-md-6"],[1,"form-group"],[1,"fxt-transformY-50","fxt-transition-delay-1"],["formControlName","name","type","text","name","f-name","placeholder","Name","required","required",1,"form-control"],["formControlName","phone","type","text","name","f-name","placeholder","Phone","required","required",1,"form-control"],["formControlName","city","type","text","name","f-name","placeholder","City","required","required",1,"form-control"],[1,"fxt-transformY-50","fxt-transition-delay-2"],["formControlName","address","type","text","name","l-name","placeholder","Address","required","required",1,"form-control"],["for","speciality",1,"label"],["fullWidth","","id","speciality","formControlName","speciality","selected","0"],["value","0"],[3,"value",4,"ngFor","ngForOf"],["for","country",1,"label"],["formControlName","country","fullWidth","","id","speciality","selected","0"],["value","cameroun"],["value","congo"],["value","rdc"],["value","rca"],["value","gabon"],[1,"fxt-transformY-50","fxt-transition-delay-3"],["type","email","formControlName","email","name","email","placeholder","Email Address","required","required",1,"form-control"],[1,"fxt-transformY-50","fxt-transition-delay-4"],["type","password","formControlName","password","name","password","placeholder","Password","required","required",1,"form-control"],[1,"fxt-transformY-50","fxt-transition-delay-6"],["type","submit",1,"fxt-btn-fill",3,"click"],[1,"fxt-footer"],[1,"fxt-transformY-50","fxt-transition-delay-7"],[1,"switcher-text2","inline-text",3,"routerLink"],[3,"value"]],template:function(t,n){1&t&&(f.TgZ(0,"section",0),f.TgZ(1,"div",1),f.TgZ(2,"div",2),f.TgZ(3,"div",3),f._UZ(4,"img",4),f.TgZ(5,"h2"),f._uU(6,"Register Shop"),f.qZA(),f.qZA(),f.qZA(),f.TgZ(7,"div",5),f.TgZ(8,"form",6),f.TgZ(9,"div",7),f.TgZ(10,"div",8),f.TgZ(11,"div",9),f.TgZ(12,"div",10),f._UZ(13,"input",11),f.qZA(),f.qZA(),f.TgZ(14,"div",9),f.TgZ(15,"div",10),f._UZ(16,"input",12),f.qZA(),f.qZA(),f.TgZ(17,"div",9),f.TgZ(18,"div",10),f._UZ(19,"input",13),f.qZA(),f.qZA(),f.qZA(),f.TgZ(20,"div",8),f.TgZ(21,"div",9),f.TgZ(22,"div",14),f._UZ(23,"input",15),f.qZA(),f.qZA(),f.TgZ(24,"div",9),f.TgZ(25,"div",14),f.TgZ(26,"label",16),f._uU(27,"speciality"),f.qZA(),f.TgZ(28,"nb-select",17),f.TgZ(29,"nb-option",18),f._uU(30,"Speciality"),f.qZA(),f.YNc(31,C,2,2,"nb-option",19),f.qZA(),f.qZA(),f.qZA(),f.TgZ(32,"div",9),f.TgZ(33,"div",14),f.TgZ(34,"label",20),f._uU(35,"country"),f.qZA(),f.TgZ(36,"nb-select",21),f.TgZ(37,"nb-option",18),f._uU(38,"Select country"),f.qZA(),f.TgZ(39,"nb-option",22),f._uU(40,"Cameroun"),f.qZA(),f.TgZ(41,"nb-option",23),f._uU(42,"Congo Brazzaville"),f.qZA(),f.TgZ(43,"nb-option",24),f._uU(44,"R.D.Congo"),f.qZA(),f.TgZ(45,"nb-option",25),f._uU(46,"R.centrafrique"),f.qZA(),f.TgZ(47,"nb-option",26),f._uU(48,"Gabon"),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.TgZ(49,"div",9),f.TgZ(50,"div",27),f._UZ(51,"input",28),f.qZA(),f.qZA(),f.TgZ(52,"div",9),f.TgZ(53,"div",29),f._UZ(54,"input",30),f.qZA(),f.qZA(),f.TgZ(55,"div",9),f.TgZ(56,"div",31),f.TgZ(57,"button",32),f.NdJ("click",function(){return n.onSubmit()}),f._uU(58,"Register"),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.TgZ(59,"div",33),f.TgZ(60,"div",34),f.TgZ(61,"p"),f._uU(62,"Have you an account?"),f.TgZ(63,"a",35),f._uU(64,"Log in"),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.qZA()),2&t&&(f.xp6(8),f.Q6J("formGroup",n.shopForm),f.xp6(23),f.Q6J("ngForOf",n.specialities),f.xp6(32),f.Q6J("routerLink",f.DdM(3,O)))},directives:[r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u,r.Q7,l.rs,l.q51,c.sg,p.yS],styles:['.fxt-template-layout20[_ngcontent-%COMP%]{min-height:100%;display:flex;align-items:center;justify-content:space-between}@media only screen and (max-width: 991px){.fxt-template-layout20[_ngcontent-%COMP%]{padding:15px}}@media only screen and (min-width: 1380px){.fxt-template-layout20[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{max-width:1350px}}.fxt-template-layout20[_ngcontent-%COMP%]   .fxt-checkbox-area[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-bottom:40px;flex-wrap:wrap}.fxt-template-layout20[_ngcontent-%COMP%]   .fxt-bg-color[_ngcontent-%COMP%]{background-color:#fff;width:100%;padding:0}.fxt-template-layout20[_ngcontent-%COMP%]   .fxt-bg-img[_ngcontent-%COMP%]{width:100%;background-repeat:no-repeat;background-position:center center;background-size:cover;margin:0;padding:0;border-radius:15px 0 0 15px}.fxt-template-layout20[_ngcontent-%COMP%]   .fxt-content[_ngcontent-%COMP%]{border-radius:0 15px 15px 0;padding:100px 50px 70px;width:100%;box-shadow:3px 0 79px rgba(0,0,0,.08)}@media only screen and (max-width: 1199px){.fxt-template-layout20[_ngcontent-%COMP%]   .fxt-content[_ngcontent-%COMP%]{padding:100px 35px 70px 50px}}@media only screen and (max-width: 991px){.fxt-template-layout20[_ngcontent-%COMP%]   .fxt-content[_ngcontent-%COMP%]{padding:100px 70px 70px}}@media only screen and (max-width: 767px){.fxt-template-layout20[_ngcontent-%COMP%]   .fxt-content[_ngcontent-%COMP%]{padding:80px 50px 50px}}@media only screen and (max-width: 575px){.fxt-template-layout20[_ngcontent-%COMP%]   .fxt-content[_ngcontent-%COMP%]{padding:60px 30px 30px}}@media only screen and (max-width: 479px){.fxt-template-layout20[_ngcontent-%COMP%]   .fxt-content[_ngcontent-%COMP%]{padding:50px 20px 20px}}.fxt-template-layout20[_ngcontent-%COMP%]   .fxt-header[_ngcontent-%COMP%]{text-align:center}.fxt-template-layout20[_ngcontent-%COMP%]   .fxt-logo[_ngcontent-%COMP%]{display:block;margin-bottom:50px;margin-left:auto;margin-right:auto;max-width:40vw}.fxt-template-layout20[_ngcontent-%COMP%]   .fxt-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{position:relative;z-index:1}.fxt-template-layout20[_ngcontent-%COMP%]   .fxt-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{min-height:50px;box-shadow:none;border:1px solid #e7e7e7;padding:10px 15px;color:#111}.fxt-template-layout20[_ngcontent-%COMP%]   .fxt-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#a1a1a1;font-size:15px;font-weight:300}.fxt-template-layout20[_ngcontent-%COMP%]   .fxt-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{color:#a1a1a1;font-size:15px;font-weight:300}.fxt-template-layout20[_ngcontent-%COMP%]   .fxt-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-moz-placeholder{color:#a1a1a1;font-size:15px;font-weight:300}.fxt-template-layout20[_ngcontent-%COMP%]   .fxt-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder{color:#a1a1a1;font-size:15px;font-weight:300}.fxt-template-layout20[_ngcontent-%COMP%]   .fxt-btn-fill[_ngcontent-%COMP%]{font-family:"Roboto",sans-serif;cursor:pointer;display:inline-block;font-size:17px;font-weight:500;box-shadow:none;outline:none;border:0;color:#fff;border-radius:3px;background-color:#6b79fd;padding:10px 36px;margin-bottom:10px;width:100%;transition:all .3s ease-in-out}.fxt-template-layout20[_ngcontent-%COMP%]   .fxt-btn-fill[_ngcontent-%COMP%]:hover{background-color:#4f5fec;border-color:#4f5fec}.fxt-template-layout20[_ngcontent-%COMP%]   .fxt-btn-fill[_ngcontent-%COMP%]:focus{outline:none}.fxt-template-layout20[_ngcontent-%COMP%]   .switcher-text[_ngcontent-%COMP%]{color:#63bbff;font-size:15px;margin-bottom:5px;display:block;transition:all .3s ease-in-out}.fxt-template-layout20[_ngcontent-%COMP%]   .switcher-text[_ngcontent-%COMP%]:hover{color:#000}.fxt-template-layout20[_ngcontent-%COMP%]   .switcher-text2[_ngcontent-%COMP%]{color:#63bbff;font-size:15px;display:inline-block;transition:all .3s ease-in-out}.fxt-template-layout20[_ngcontent-%COMP%]   .switcher-text2.inline-text[_ngcontent-%COMP%]{margin-left:3px}.fxt-template-layout20[_ngcontent-%COMP%]   .switcher-text2[_ngcontent-%COMP%]:hover{color:#000}.fxt-template-layout20[_ngcontent-%COMP%]   .fxt-style-line[_ngcontent-%COMP%]{overflow:hidden;text-align:center}.fxt-template-layout20[_ngcontent-%COMP%]   .fxt-style-line[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center;font-weight:300;margin-bottom:30px;font-size:20px;color:#a4a4a4;display:inline-block;position:relative;padding:0 25px;z-index:1}.fxt-template-layout20[_ngcontent-%COMP%]   .fxt-style-line[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:before{display:inline-block;content:"";height:1px;width:100%;background-color:#ebebeb;left:100%;top:50%;transform:translateY(-50%);position:absolute;z-index:1}.fxt-template-layout20[_ngcontent-%COMP%]   .fxt-style-line[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after{display:inline-block;content:"";height:1px;width:100%;background-color:#ebebeb;right:100%;top:50%;transform:translateY(-50%);position:absolute;z-index:1}.fxt-template-layout20[_ngcontent-%COMP%]   ul.fxt-socials[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;margin-right:-5px;margin-left:-5px;margin-bottom:20px}.fxt-template-layout20[_ngcontent-%COMP%]   ul.fxt-socials[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{max-width:100%;flex:0 0 33.33333%;padding-left:5px;padding-right:5px;margin-bottom:10px}@media only screen and (max-width: 575px){.fxt-template-layout20[_ngcontent-%COMP%]   ul.fxt-socials[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{flex:0 0 50%}}@media only screen and (max-width: 350px){.fxt-template-layout20[_ngcontent-%COMP%]   ul.fxt-socials[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{flex:0 0 100%}}.fxt-template-layout20[_ngcontent-%COMP%]   ul.fxt-socials[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{border-radius:2px;display:flex;align-items:center;justify-content:flex-start;font-size:14px;height:45px;color:#fff;transition:all .3s ease-in-out}.fxt-template-layout20[_ngcontent-%COMP%]   ul.fxt-socials[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{border-radius:2px 0 0 2px;display:flex;align-items:center;justify-content:center;width:45px;height:45px}.fxt-template-layout20[_ngcontent-%COMP%]   ul.fxt-socials[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{height:100%;width:100%;display:flex;align-items:center;justify-content:center;flex:1}.fxt-template-layout20[_ngcontent-%COMP%]   ul.fxt-socials[_ngcontent-%COMP%]   li.fxt-facebook[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background-color:#3b5998}.fxt-template-layout20[_ngcontent-%COMP%]   ul.fxt-socials[_ngcontent-%COMP%]   li.fxt-facebook[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{background-color:#4867aa}.fxt-template-layout20[_ngcontent-%COMP%]   ul.fxt-socials[_ngcontent-%COMP%]   li.fxt-facebook[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#5676bb}.fxt-template-layout20[_ngcontent-%COMP%]   ul.fxt-socials[_ngcontent-%COMP%]   li.fxt-twitter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background-color:#00acee}.fxt-template-layout20[_ngcontent-%COMP%]   ul.fxt-socials[_ngcontent-%COMP%]   li.fxt-twitter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{background-color:#3cf}.fxt-template-layout20[_ngcontent-%COMP%]   ul.fxt-socials[_ngcontent-%COMP%]   li.fxt-twitter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#3dc5f3}.fxt-template-layout20[_ngcontent-%COMP%]   ul.fxt-socials[_ngcontent-%COMP%]   li.fxt-google[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background-color:#c33}.fxt-template-layout20[_ngcontent-%COMP%]   ul.fxt-socials[_ngcontent-%COMP%]   li.fxt-google[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{background-color:#db4437}.fxt-template-layout20[_ngcontent-%COMP%]   ul.fxt-socials[_ngcontent-%COMP%]   li.fxt-google[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#e75042}.fxt-template-layout20[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]{padding-left:5px;margin-right:30px;margin-bottom:5px}.fxt-template-layout20[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{padding-left:20px;color:#a4a4a4;margin-bottom:0;font-size:15px;position:relative}.fxt-template-layout20[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:before{content:"";position:absolute;width:16px;height:16px;top:4px;left:0;margin-left:-5px;border:1px solid;border-color:#dcdcdc;border-radius:3px;background-color:#fff;transition:border .15s ease-in-out,color .15s ease-in-out}.fxt-template-layout20[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:after{position:absolute;margin-left:-20px;padding-left:3px;font-size:10px;color:#555}.fxt-template-layout20[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{display:none}.fxt-template-layout20[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:after{font-family:"Font Awesome 5 Free";content:"\\f00c";font-weight:900;color:#fff;left:15px;top:4px}.fxt-template-layout20[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:before{background-color:#6b79fd;border-color:#6b79fd}.fxt-template-layout20[_ngcontent-%COMP%]   .fxt-footer[_ngcontent-%COMP%]{text-align:center}']}),n}(),P=a(86665),h=[{path:"",component:P.AC,children:[{path:"login",component:_},{path:"register",component:M}]}],y=function(){var n=e(function n(){t(this,n)});return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=f.oAB({type:n}),n.\u0275inj=f.cJS({imports:[[p.Bz.forChild(h)],p.Bz]}),n}(),b=function(){var n=e(function n(){t(this,n)});return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=f.oAB({type:n}),n.\u0275inj=f.cJS({imports:[[c.ez,r.u5,r.UX,l.nKr,l.MfT,l.YNG,l.OA,l.IIj,l.KdK,g.O,l.zyh,l.T2N,y,P.S]]}),n}()}}])}();