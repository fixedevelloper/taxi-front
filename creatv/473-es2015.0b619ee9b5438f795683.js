"use strict";(self.webpackChunkngx_admin=self.webpackChunkngx_admin||[]).push([[473],{12473:function(e,t,a){a.r(t),a.d(t,{ShippingModule:function(){return E}});var i=a(38583),n=a(99763),o=a(3679),r=a(37716),s=a(38932),c=a(39407),l=a(17747);function u(e,t){1&e&&(r._uU(0),r.ALo(1,"date")),2&e&&r.hij(" ",r.lcZ(1,1,t.row.createdat)," ")}function d(e,t){1&e&&r._uU(0),2&e&&r.hij(" ",t.row.driver," ")}function g(e,t){1&e&&r._uU(0),2&e&&r.hij(" ",t.row.placename," ")}function p(e,t){1&e&&r._uU(0),2&e&&r.hij(" ",t.row.address," ")}function m(e,t){1&e&&r._uU(0),2&e&&r.hij(" ",t.row.distance," ")}function Z(e,t){1&e&&r._uU(0),2&e&&r.hij(" ",t.row.total," ")}const h=function(e){return["/pages/shipping/detail/",e]};function b(e,t){if(1&e&&(r.TgZ(0,"div",1),r.TgZ(1,"button",16),r._UZ(2,"i",17),r.qZA(),r.qZA()),2&e){const e=t.row;r.xp6(1),r.Q6J("routerLink",r.VKq(1,h,e.id))}}function f(e,t){1&e&&(r.TgZ(0,"p"),r._uU(1,"Are you sure you want delete this item?:"),r.qZA())}function A(e,t){if(1&e&&(r.TgZ(0,"nb-option",36),r._uU(1),r.qZA()),2&e){const e=t.$implicit;r.s9C("value",e.id),r.xp6(1),r.Oqu(e.name)}}function q(e,t){if(1&e&&(r.TgZ(0,"nb-option",36),r._uU(1),r.qZA()),2&e){const e=t.$implicit;r.s9C("value",e),r.xp6(1),r.AsE("",e.driver," - ",e.car_matricule,"")}}function T(e,t){if(1&e){const e=r.EpF();r.TgZ(0,"div",18),r.TgZ(1,"div",19),r.TgZ(2,"nb-card"),r.TgZ(3,"nb-card-header"),r._uU(4,"Ajouter une course"),r.qZA(),r.TgZ(5,"nb-card-body"),r.TgZ(6,"form",20),r.TgZ(7,"div",21),r.TgZ(8,"div",22),r.TgZ(9,"label",23),r._uU(10,"Client"),r.qZA(),r.TgZ(11,"nb-select",24),r.YNc(12,A,2,2,"nb-option",25),r.qZA(),r.qZA(),r.TgZ(13,"div",22),r.TgZ(14,"label",23),r._uU(15,"Chauffeur"),r.qZA(),r.TgZ(16,"nb-select",26),r.NdJ("change",function(){return r.CHM(e),r.oxw().changeDriver()}),r.YNc(17,q,2,3,"nb-option",25),r.qZA(),r.qZA(),r.TgZ(18,"div",27),r.TgZ(19,"label",23),r._uU(20,"Depart"),r.qZA(),r._UZ(21,"input",28),r.qZA(),r.TgZ(22,"div",27),r.TgZ(23,"label",23),r._uU(24,"Destination"),r.qZA(),r._UZ(25,"input",29),r.qZA(),r.TgZ(26,"div",30),r.TgZ(27,"label",23),r._uU(28,"Calculer le prix"),r.qZA(),r.TgZ(29,"button",31),r.NdJ("click",function(){return r.CHM(e),r.oxw().calcuerPrice()}),r._uU(30,"Calcul"),r.qZA(),r.qZA(),r.TgZ(31,"div",27),r.TgZ(32,"label",23),r._uU(33,"Km"),r.qZA(),r._UZ(34,"input",32),r.qZA(),r.TgZ(35,"div",27),r.TgZ(36,"label",23),r._uU(37,"Amount"),r.qZA(),r._UZ(38,"input",33),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(39,"nb-card-footer"),r.TgZ(40,"button",34),r.NdJ("click",function(){return r.CHM(e).dialogRef.close()}),r._uU(41,"Close "),r.qZA(),r.TgZ(42,"button",35),r.NdJ("click",function(){const t=r.CHM(e).dialogRef;return r.oxw().onSubmit(t)}),r._uU(43,"Save"),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA()}if(2&e){const e=r.oxw();r.xp6(6),r.Q6J("formGroup",e.itemForm),r.xp6(6),r.Q6J("ngForOf",e.clients),r.xp6(5),r.Q6J("ngForOf",e.chauffeurs),r.xp6(12),r.Q6J("nbSpinner",e.loadingMediumGroup),r.xp6(13),r.Q6J("nbSpinner",e.loadingMediumGroup)}}function v(e,t){if(1&e){const e=r.EpF();r.TgZ(0,"div",18),r.TgZ(1,"div",19),r.TgZ(2,"nb-card"),r.TgZ(3,"nb-card-header"),r._uU(4,"Add Car"),r.qZA(),r.TgZ(5,"nb-card-body"),r.TgZ(6,"form",20),r.TgZ(7,"div",21),r.TgZ(8,"div",27),r.TgZ(9,"label",23),r._uU(10,"Prix de base"),r.qZA(),r._UZ(11,"input",37),r.qZA(),r.TgZ(12,"div",27),r.TgZ(13,"label",23),r._uU(14,"Marque"),r.qZA(),r._UZ(15,"input",38),r.qZA(),r.TgZ(16,"div",27),r.TgZ(17,"label",23),r._uU(18,"Modele"),r.qZA(),r._UZ(19,"input",39),r.qZA(),r.TgZ(20,"div",27),r.TgZ(21,"label",23),r._uU(22,"Carte grise"),r.qZA(),r._UZ(23,"input",40),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(24,"nb-card-footer"),r.TgZ(25,"button",34),r.NdJ("click",function(){return r.CHM(e).dialogRef.close()}),r._uU(26,"Close "),r.qZA(),r.TgZ(27,"button",35),r.NdJ("click",function(){const t=r.CHM(e).dialogRef;return r.oxw().onSubmitEdit(t)}),r._uU(28,"Modifier"),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA()}if(2&e){const e=r.oxw();r.xp6(6),r.Q6J("formGroup",e.itemForm),r.xp6(21),r.Q6J("nbSpinner",e.loadingMediumGroup)}}function _(e,t){1&e&&(r._uU(0),r.ALo(1,"date")),2&e&&r.hij(" ",r.lcZ(1,1,t.row.createdat)," ")}function x(e,t){1&e&&r._uU(0),2&e&&r.hij(" ",t.row.driver," ")}function U(e,t){1&e&&r._uU(0),2&e&&r.hij(" ",t.row.placename," ")}function w(e,t){1&e&&r._uU(0),2&e&&r.hij(" ",t.row.address," ")}function S(e,t){1&e&&r._uU(0),2&e&&r.hij(" ",t.row.distance," ")}function N(e,t){1&e&&r._uU(0),2&e&&r.hij(" ",t.row.total," ")}const y=function(e){return["/pages/manage/shipping/detail/",e]};function k(e,t){if(1&e&&(r.TgZ(0,"div",11),r.TgZ(1,"button",12),r._UZ(2,"i",13),r.qZA(),r.qZA()),2&e){const e=t.row;r.xp6(1),r.Q6J("routerLink",r.VKq(1,y,e.id))}}function C(e,t){1&e&&(r._uU(0),r.ALo(1,"date")),2&e&&r.hij(" ",r.lcZ(1,1,t.row.createdat)," ")}function Y(e,t){1&e&&r._uU(0),2&e&&r.hij(" ",t.row.driver," ")}function M(e,t){1&e&&r._uU(0),2&e&&r.hij(" ",t.row.placename," ")}function J(e,t){1&e&&r._uU(0),2&e&&r.hij(" ",t.row.address," ")}function F(e,t){1&e&&r._uU(0),2&e&&r.hij(" ",t.row.distance," ")}function O(e,t){1&e&&r._uU(0),2&e&&r.hij(" ",t.row.total," ")}const j=function(e){return["/pages/manage/shipping/detail/",e]};function H(e,t){if(1&e&&(r.TgZ(0,"div",11),r.TgZ(1,"button",12),r._UZ(2,"i",13),r.qZA(),r.qZA()),2&e){const e=t.row;r.xp6(1),r.Q6J("routerLink",r.VKq(1,j,e.id))}}function R(e,t){if(1&e&&(r.TgZ(0,"tr"),r._UZ(1,"td"),r.TgZ(2,"td"),r._uU(3),r.qZA(),r.TgZ(4,"td"),r._uU(5),r.qZA(),r.TgZ(6,"td"),r._uU(7),r.qZA(),r.qZA()),2&e){const e=t.$implicit;r.xp6(3),r.Oqu(e.article),r.xp6(2),r.Oqu(e.quantity),r.xp6(2),r.Oqu(e.amount)}}const z=[{path:"",children:[{path:"list",component:(()=>{class e{constructor(e,t,a,i,n){this.databaseService=e,this.fb=t,this.windowService=a,this.dialogService=i,this.toastrService=n,this.loadingMediumGroup=!1,this.rows=[],this.chauffeurs=[],this.clients=[],this.itemForm=this.fb.group({affectation:["",[o.kI.required]],customer:["",o.kI.required],amount:["",o.kI.required],startto:["",o.kI.required],endto:["",o.kI.required],id:["",o.kI.required]})}ngOnInit(){this.databaseService.shippings_lists().subscribe(e=>{this.rows=e.data})}openWithoutBackdrop(e){this.databaseService.customers_lists().subscribe(e=>{this.clients=e.data}),this.databaseService.affectations_lists().subscribe(e=>{this.chauffeurs=e.data}),this.dialogService.open(e,{context:"Add category",closeOnBackdropClick:!1})}onSubmit(e){this.loadingMediumGroup=!0,this.databaseService.cars_create({data:{affectation:this.itemForm.value.affectation,customer:this.itemForm.value.customer,amount:this.itemForm.value.amount,startto:this.itemForm.value.startto,endto:this.itemForm.value.endto,id:null}}).subscribe(t=>{this.toastrService.success("Operation succesfull","Success"),e.close(),this.databaseService.cars_lists().subscribe(e=>{this.rows=e.data}),this.loadingMediumGroup=!1},e=>{this.toastrService.danger("Operation failed",e.message),this.loadingMediumGroup=!1})}delete(e){}detail(e,t){this.selectRow=e,this.itemForm.patchValue({baseprice:e.baseprice,propretaire:e.propretaire,marque:e.marque,model:e.model,matricule:e.matricule,cartegrise:e.cartegrise,id:e.id}),this.dialogService.open(t,{context:"Edit category",closeOnBackdropClick:!1})}changeRow(e){}onSubmitEdit(e){this.loadingMediumGroup=!0,this.databaseService.cars_create({data:{baseprice:this.itemForm.value.baseprice,propretaire:this.itemForm.value.propretaire,marque:this.itemForm.value.marque,model:this.itemForm.value.model,matricule:this.itemForm.value.matricule,cartegrise:this.itemForm.value.cartegrise,id:this.selectRow.id}}).subscribe(t=>{this.toastrService.success("Operation succesfull","Success"),e.close(),this.databaseService.cars_lists().subscribe(e=>{this.rows=e.data}),this.loadingMediumGroup=!1},e=>{this.toastrService.danger("Operation failed",e.message),this.loadingMediumGroup=!1})}changeDriver(){this.base_price_car=this.itemForm.value.affectation.car_baseprice,this.itemForm.value.amount=this.itemForm.value.affectation.car_baseprice}calcuerPrice(){}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(s.k),r.Y36(o.qu),r.Y36(c.eJ1),r.Y36(c.Gln),r.Y36(c.quB))},e.\u0275cmp=r.Xpm({type:e,selectors:[["ngx-shipping-list"]],decls:29,vars:17,consts:[[1,"d-grid","gap-2","d-md-flex","justify-content-md-end"],[1,"btn-group","btn-group-sm"],[1,"table-responsive"],[1,"bootstrap",3,"rows","columnMode","headerHeight","footerHeight","rowHeight","scrollbarH","limit","selectionType","selectAllRowsOnPage"],[3,"width","sortable","canAutoResize","draggable","resizeable","headerCheckboxable","checkboxable"],["name","Date"],["ngx-datatable-cell-template",""],["name","Livreur"],["name","Depart"],["name","Destination"],["name","Distance"],["name","Montant"],[3,"sortable"],["dialogDelete",""],["dialog",""],["dialogEdit",""],["type","button","size","small","nbButton","","status","success",1,"btn","btn-sm",3,"routerLink"],[1,"fa","fa-eye"],[1,"row","justify-content-md-center"],[1,"col-md-8"],["id","bookmark-form",1,"",3,"formGroup"],[1,"row"],[1,"col-md-12"],["for","cat_name_",1,"label"],["fullWidth","","formControlName","customer","placeholder","Select client"],[3,"value",4,"ngFor","ngForOf"],["fullWidth","","formControlName","affectation","placeholder","Select chauffeur",3,"change"],[1,"col-md-6","form-group"],["formControlName","startto","type","text","nbInput","","fullWidth","","id","cat_name_","placeholder","Depart"],["formControlName","endto","type","text","nbInput","","fullWidth","","id","cat_name_","placeholder","destination"],[1,"col-md-12","form-group"],["type","submit","fullWidth","","nbButton","","status","primary",3,"nbSpinner","click"],["readonly","","type","text","nbInput","","fullWidth","","id","cat_name_","placeholder",""],["readonly","","formControlName","amount","type","text","nbInput","","fullWidth","","id","cat_name_","placeholder",""],["nbButton","",3,"click"],["type","submit","nbButton","","status","success",3,"nbSpinner","click"],[3,"value"],["formControlName","baseprice","type","text","nbInput","","fullWidth","","id","cat_name_","placeholder","Name"],["formControlName","marque","type","text","nbInput","","fullWidth","","id","cat_name_","placeholder","Name"],["formControlName","model","type","text","nbInput","","fullWidth","","id","cat_name_","placeholder","Name"],["formControlName","cartegrise","type","text","nbInput","","fullWidth","","id","cat_name_","placeholder","Name"]],template:function(e,t){1&e&&(r.TgZ(0,"nb-card"),r.TgZ(1,"nb-card-header"),r._uU(2," Livraisons "),r.TgZ(3,"div",0),r._UZ(4,"div",1),r.qZA(),r.qZA(),r.TgZ(5,"nb-card-body"),r.TgZ(6,"div",2),r.TgZ(7,"ngx-datatable",3),r._UZ(8,"ngx-datatable-column",4),r.TgZ(9,"ngx-datatable-column",5),r.YNc(10,u,2,3,"ng-template",6),r.qZA(),r.TgZ(11,"ngx-datatable-column",7),r.YNc(12,d,1,1,"ng-template",6),r.qZA(),r.TgZ(13,"ngx-datatable-column",8),r.YNc(14,g,1,1,"ng-template",6),r.qZA(),r.TgZ(15,"ngx-datatable-column",9),r.YNc(16,p,1,1,"ng-template",6),r.qZA(),r.TgZ(17,"ngx-datatable-column",10),r.YNc(18,m,1,1,"ng-template",6),r.qZA(),r.TgZ(19,"ngx-datatable-column",11),r.YNc(20,Z,1,1,"ng-template",6),r.qZA(),r.TgZ(21,"ngx-datatable-column",12),r.YNc(22,b,3,3,"ng-template",6),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.YNc(23,f,2,0,"ng-template",null,13,r.W1O),r.YNc(25,T,44,5,"ng-template",null,14,r.W1O),r.YNc(27,v,29,2,"ng-template",null,15,r.W1O)),2&e&&(r.xp6(7),r.Q6J("rows",t.rows)("columnMode","force")("headerHeight",50)("footerHeight",50)("rowHeight","auto")("scrollbarH",!0)("limit",25)("selectionType","checkbox")("selectAllRowsOnPage",!1),r.xp6(1),r.Q6J("width",40)("sortable",!1)("canAutoResize",!1)("draggable",!1)("resizeable",!1)("headerCheckboxable",!0)("checkboxable",!0),r.xp6(13),r.Q6J("sortable",!1))},directives:[c.Asz,c.ndF,c.yKW,l.nE,l.UC,l.vq,c.DPz,n.rH,o._Y,o.JL,o.sg,c.rs,o.JJ,o.u,i.sg,o.Fj,c.h8i,c.Q7R,c.XWE,c.q51],pipes:[i.uU],styles:[""]}),e})()},{path:"end",component:(()=>{class e{constructor(e,t,a,i,n){this.databaseService=e,this.fb=t,this.windowService=a,this.dialogService=i,this.toastrService=n,this.loadingMediumGroup=!1,this.rows=[],this.propretaires=[]}ngOnInit(){this.databaseService.shipping_lists_finish().subscribe(e=>{this.rows=e.data})}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(s.k),r.Y36(o.qu),r.Y36(c.eJ1),r.Y36(c.Gln),r.Y36(c.quB))},e.\u0275cmp=r.Xpm({type:e,selectors:[["ngx-shipping-end"]],decls:21,vars:17,consts:[[1,"table-responsive"],[1,"bootstrap",3,"rows","columnMode","headerHeight","footerHeight","rowHeight","scrollbarH","limit","selectionType","selectAllRowsOnPage"],[3,"width","sortable","canAutoResize","draggable","resizeable","headerCheckboxable","checkboxable"],["name","Date"],["ngx-datatable-cell-template",""],["name","Livreur"],["name","Depart"],["name","Destination"],["name","Distance"],["name","Montant"],[3,"sortable"],[1,"btn-group","btn-group-sm"],["type","button","size","small","nbButton","","status","success",1,"btn","btn-sm",3,"routerLink"],[1,"fa","fa-eye"]],template:function(e,t){1&e&&(r.TgZ(0,"nb-card"),r.TgZ(1,"nb-card-header"),r._uU(2," Livraisons termin\xe9es "),r.qZA(),r.TgZ(3,"nb-card-body"),r.TgZ(4,"div",0),r.TgZ(5,"ngx-datatable",1),r._UZ(6,"ngx-datatable-column",2),r.TgZ(7,"ngx-datatable-column",3),r.YNc(8,_,2,3,"ng-template",4),r.qZA(),r.TgZ(9,"ngx-datatable-column",5),r.YNc(10,x,1,1,"ng-template",4),r.qZA(),r.TgZ(11,"ngx-datatable-column",6),r.YNc(12,U,1,1,"ng-template",4),r.qZA(),r.TgZ(13,"ngx-datatable-column",7),r.YNc(14,w,1,1,"ng-template",4),r.qZA(),r.TgZ(15,"ngx-datatable-column",8),r.YNc(16,S,1,1,"ng-template",4),r.qZA(),r.TgZ(17,"ngx-datatable-column",9),r.YNc(18,N,1,1,"ng-template",4),r.qZA(),r.TgZ(19,"ngx-datatable-column",10),r.YNc(20,k,3,3,"ng-template",4),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA()),2&e&&(r.xp6(5),r.Q6J("rows",t.rows)("columnMode","force")("headerHeight",50)("footerHeight",50)("rowHeight","auto")("scrollbarH",!0)("limit",25)("selectionType","checkbox")("selectAllRowsOnPage",!1),r.xp6(1),r.Q6J("width",40)("sortable",!1)("canAutoResize",!1)("draggable",!1)("resizeable",!1)("headerCheckboxable",!0)("checkboxable",!0),r.xp6(13),r.Q6J("sortable",!1))},directives:[c.Asz,c.ndF,c.yKW,l.nE,l.UC,l.vq,c.DPz,n.rH],pipes:[i.uU],styles:[""]}),e})()},{path:"start",component:(()=>{class e{constructor(e,t,a,i,n){this.databaseService=e,this.fb=t,this.windowService=a,this.dialogService=i,this.toastrService=n,this.loadingMediumGroup=!1,this.rows=[],this.propretaires=[]}ngOnInit(){this.databaseService.shipping_lists_starting().subscribe(e=>{this.rows=e.data})}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(s.k),r.Y36(o.qu),r.Y36(c.eJ1),r.Y36(c.Gln),r.Y36(c.quB))},e.\u0275cmp=r.Xpm({type:e,selectors:[["ngx-shipping-start"]],decls:21,vars:17,consts:[[1,"table-responsive"],[1,"bootstrap",3,"rows","columnMode","headerHeight","footerHeight","rowHeight","scrollbarH","limit","selectionType","selectAllRowsOnPage"],[3,"width","sortable","canAutoResize","draggable","resizeable","headerCheckboxable","checkboxable"],["name","Date"],["ngx-datatable-cell-template",""],["name","Livreur"],["name","Depart"],["name","Destination"],["name","Distance"],["name","Montant"],[3,"sortable"],[1,"btn-group","btn-group-sm"],["type","button","size","small","nbButton","","status","success",1,"btn","btn-sm",3,"routerLink"],[1,"fa","fa-map-marked"]],template:function(e,t){1&e&&(r.TgZ(0,"nb-card"),r.TgZ(1,"nb-card-header"),r._uU(2," Livraisons encours "),r.qZA(),r.TgZ(3,"nb-card-body"),r.TgZ(4,"div",0),r.TgZ(5,"ngx-datatable",1),r._UZ(6,"ngx-datatable-column",2),r.TgZ(7,"ngx-datatable-column",3),r.YNc(8,C,2,3,"ng-template",4),r.qZA(),r.TgZ(9,"ngx-datatable-column",5),r.YNc(10,Y,1,1,"ng-template",4),r.qZA(),r.TgZ(11,"ngx-datatable-column",6),r.YNc(12,M,1,1,"ng-template",4),r.qZA(),r.TgZ(13,"ngx-datatable-column",7),r.YNc(14,J,1,1,"ng-template",4),r.qZA(),r.TgZ(15,"ngx-datatable-column",8),r.YNc(16,F,1,1,"ng-template",4),r.qZA(),r.TgZ(17,"ngx-datatable-column",9),r.YNc(18,O,1,1,"ng-template",4),r.qZA(),r.TgZ(19,"ngx-datatable-column",10),r.YNc(20,H,3,3,"ng-template",4),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA()),2&e&&(r.xp6(5),r.Q6J("rows",t.rows)("columnMode","force")("headerHeight",50)("footerHeight",50)("rowHeight","auto")("scrollbarH",!0)("limit",25)("selectionType","checkbox")("selectAllRowsOnPage",!1),r.xp6(1),r.Q6J("width",40)("sortable",!1)("canAutoResize",!1)("draggable",!1)("resizeable",!1)("headerCheckboxable",!0)("checkboxable",!0),r.xp6(13),r.Q6J("sortable",!1))},directives:[c.Asz,c.ndF,c.yKW,l.nE,l.UC,l.vq,c.DPz,n.rH],pipes:[i.uU],styles:[""]}),e})()},{path:"map",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Xpm({type:e,selectors:[["ngx-shipping-map"]],decls:2,vars:0,template:function(e,t){1&e&&(r.TgZ(0,"p"),r._uU(1,"shipping-map works!"),r.qZA())},styles:[""]}),e})()},{path:"detail/:id",component:(()=>{class e{constructor(e,t,a,i,n,o){this.databaseService=e,this.fb=t,this.windowService=a,this.dialogService=i,this.toastrService=n,this.router=o,this.rows=[],this.shipping={},this.loadingMediumGroup=!1}ngOnInit(){this.databaseService.shipping_one(Number(this.router.snapshot.paramMap.get("id"))).subscribe(e=>{this.rows=e.data.lines,this.shipping=e.data})}onChangeStatus(){this.loadingMediumGroup=!0;const e={data:{action:this.statuscommand,ride:this.router.snapshot.paramMap.get("id")}};this.databaseService.shipping_change_status(e).subscribe(e=>{this.toastrService.success("Operation succesfull","Success"),this.loadingMediumGroup=!1},e=>{this.toastrService.danger("Operation failed",e.message),this.loadingMediumGroup=!1})}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(s.k),r.Y36(o.qu),r.Y36(c.eJ1),r.Y36(c.Gln),r.Y36(c.quB),r.Y36(n.gz))},e.\u0275cmp=r.Xpm({type:e,selectors:[["ngx-shipping-add"]],decls:57,vars:12,consts:[[1,"d-grid","gap-2","d-md-flex","justify-content-md-end"],[1,"row"],[1,"col-md-9"],[1,"col-md-6"],[1,"table"],[4,"ngFor","ngForOf"],[1,"col-md-3"],[1,"mb-3"],[1,"label"],["fullWidth","","placeholder","Select un type",3,"ngModel","ngModelChange"],["value","PREPARING"],["value","PENDING"],["value","REJECT"],["value","FINISH"],["type","button","nbButton","","status","success",3,"nbSpinner","click"]],template:function(e,t){1&e&&(r.TgZ(0,"nb-card"),r.TgZ(1,"nb-card-header"),r._uU(2," Detail Livraison "),r._UZ(3,"div",0),r.qZA(),r.TgZ(4,"nb-card-body"),r.TgZ(5,"div",1),r.TgZ(6,"div",2),r.TgZ(7,"div",1),r.TgZ(8,"div",3),r.TgZ(9,"p"),r._uU(10),r.qZA(),r.TgZ(11,"p"),r._uU(12),r.qZA(),r.TgZ(13,"p"),r._uU(14),r.qZA(),r.TgZ(15,"p"),r._uU(16),r.qZA(),r.TgZ(17,"p"),r._uU(18),r.qZA(),r.qZA(),r.TgZ(19,"div",3),r.TgZ(20,"p"),r._uU(21),r.qZA(),r.TgZ(22,"p"),r._uU(23),r.qZA(),r.TgZ(24,"p"),r._uU(25),r.qZA(),r.TgZ(26,"p"),r._uU(27),r.qZA(),r.qZA(),r.qZA(),r.TgZ(28,"table",4),r.TgZ(29,"thead"),r.TgZ(30,"tr"),r.TgZ(31,"th"),r._uU(32,"#"),r.qZA(),r.TgZ(33,"th"),r._uU(34,"Article"),r.qZA(),r.TgZ(35,"th"),r._uU(36,"Quantity"),r.qZA(),r.TgZ(37,"th"),r._uU(38,"Price"),r.qZA(),r.qZA(),r.qZA(),r.TgZ(39,"tbody"),r.YNc(40,R,8,3,"tr",5),r.qZA(),r.qZA(),r.qZA(),r.TgZ(41,"div",6),r.TgZ(42,"div",7),r.TgZ(43,"label",8),r._uU(44,"Changer Status commande"),r.qZA(),r.TgZ(45,"nb-select",9),r.NdJ("ngModelChange",function(e){return t.statuscommand=e}),r.TgZ(46,"nb-option",10),r._uU(47,"EN PREPARATION"),r.qZA(),r.TgZ(48,"nb-option",11),r._uU(49,"ACCEPTE"),r.qZA(),r.TgZ(50,"nb-option",12),r._uU(51,"ANNULER"),r.qZA(),r.TgZ(52,"nb-option",13),r._uU(53,"TERMIN\xc9E"),r.qZA(),r.qZA(),r.qZA(),r.TgZ(54,"div",7),r.TgZ(55,"button",14),r.NdJ("click",function(){return t.onChangeStatus()}),r._uU(56," Update status "),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA()),2&e&&(r.xp6(10),r.hij("Date de livraison: ",t.shipping.createdat,""),r.xp6(2),r.hij("Customer: ",t.shipping.customername,""),r.xp6(2),r.hij("Chauffeur : ",t.shipping.driver,""),r.xp6(2),r.hij("Prix de la course: ",t.shipping.priceshipping," FCFA"),r.xp6(2),r.hij("Status de la commande: ",t.shipping.status,""),r.xp6(3),r.hij("Distance: ",t.shipping.distance," KM"),r.xp6(2),r.hij("Restaurant : ",t.shipping.placename,""),r.xp6(2),r.hij("Destination: ",t.shipping.address,""),r.xp6(2),r.hij("Total de la commande: ",t.shipping.total," FCFA"),r.xp6(13),r.Q6J("ngForOf",t.rows),r.xp6(5),r.Q6J("ngModel",t.statuscommand),r.xp6(10),r.Q6J("nbSpinner",t.loadingMediumGroup))},directives:[c.Asz,c.ndF,c.yKW,i.sg,c.rs,o.JJ,o.On,c.q51,c.DPz,c.Q7R],styles:[""]}),e})()}]}];let D=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[[n.Bz.forChild(z)],n.Bz]}),e})();var I=a(82846),G=a(99010),Q=a(25569);let E=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[[i.ez,D,I.O,c.zyh,c.T2N,o.u5,o.UX,c.nKr,c.MfT,c.YNG,c.OA,c.IIj,c.KdK,l.xD,c.OA,G.Y4,Q.UO.forRoot(),c.uuI]]}),e})()}}]);