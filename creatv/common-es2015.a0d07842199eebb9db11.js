"use strict";(self.webpackChunkngx_admin=self.webpackChunkngx_admin||[]).push([[592],{38932:function(t,r,e){e.d(r,{k:function(){return a}});var i=e(91841),s=e(92340),p=e(37716);let a=(()=>{class t{constructor(t){this.http=t,this.httpOptions={headers:new i.WM({"Content-Type":"application/json","Access-Control-Allow-Origin":"*"})}}cars_create(t){return this.http.post(`${s.N.apiUrl}/v1/cars`,t)}cars_lists(){return this.http.get(`${s.N.apiUrl}/v1/cars`)}cars_lists_propretaire(t){return this.http.get(`${s.N.apiUrl}/v1/cars/propretaire/${t}`)}cars_get_one(t){return this.http.get(`${s.N.apiUrl}/v1/cars/${t}`)}cars_delete(t){return this.http.delete(`${s.N.apiUrl}/v1/cars/${t}`)}drivers_create(t){return this.http.post(`${s.N.apiUrl}/v1/drivers`,t)}drivers_lists(){return this.http.get(`${s.N.apiUrl}/v1/drivers`)}drivers_get_one(t){return this.http.get(`${s.N.apiUrl}/v1/drivers/${t}`)}drivers_delete(t){return this.http.delete(`${s.N.apiUrl}/v1/drivers/${t}`)}propretaires_create(t){return this.http.post(`${s.N.apiUrl}/v1/propretaires`,t)}propretaires_lists(){return this.http.get(`${s.N.apiUrl}/v1/propretaires`)}propretaires_get_one(t){return this.http.get(`${s.N.apiUrl}/v1/propretaires/${t}`)}propretaires_delete(t){return this.http.delete(`${s.N.apiUrl}/v1/propretaires/${t}`)}image_create(t){return this.http.post(`${s.N.apiUrl}/v1/images`,t)}image_lists(){return this.http.get(`${s.N.apiUrl}/v1/images`)}image_get_one(t){return this.http.get(`${s.N.apiUrl}/v1/images/${t}`)}image_delete(t){return this.http.delete(`${s.N.apiUrl}/v1/images/${t}`)}customers_lists(){return this.http.get(`${s.N.apiUrl}/v1/customers`)}customers_get_one(t){return this.http.get(`${s.N.apiUrl}/v1/customers/${t}`)}customers_delete(t){return this.http.delete(`${s.N.apiUrl}/v1/customers/${t}`)}customers_create(t){return this.http.post(`${s.N.apiUrl}/v1/customers`,t)}speciality_create(t){return this.http.post(`${s.N.apiUrl}/v1/rides`,t)}rides_lists_customer(t){return this.http.get(`${s.N.apiUrl}/v1/rides/customer/${t}`)}rides_by_id(t){return this.http.get(`${s.N.apiUrl}/v1/rides/one/${t}`)}rides_lists_starting(){return this.http.get(`${s.N.apiUrl}/v1/rides/pending`)}rides_lists_finish(){return this.http.get(`${s.N.apiUrl}/v1/rides/finish`)}rides_lists(){return this.http.get(`${s.N.apiUrl}/v1/rides`)}shipping_lists_customer(t){return this.http.get(`${s.N.apiUrl}/v1/shippings/customer/${t}`)}shipping_lists_starting(){return this.http.get(`${s.N.apiUrl}/v1/shippings/pending`)}shipping_lists_finish(){return this.http.get(`${s.N.apiUrl}/v1/shippings/finish`)}shippings_lists(){return this.http.get(`${s.N.apiUrl}/v1/shippings`)}place_create(t){return this.http.post(`${s.N.apiUrl}/v1/places`,t)}place_lists(){return this.http.get(`${s.N.apiUrl}/v1/places`)}place_one(t){return this.http.get(`${s.N.apiUrl}/v1/places/${t}`)}place_lists_propretaire(t){return this.http.get(`${s.N.apiUrl}/v1/places/propretaire/${t}`)}article_create(t){return this.http.post(`${s.N.apiUrl}/v1/articles`,t)}article_category(t){return this.http.get(`${s.N.apiUrl}/v1/articles/category/${t}`)}article_list(t){return this.http.get(`${s.N.apiUrl}/v1/articles/${t}`)}category_create(t){return this.http.post(`${s.N.apiUrl}/v1/categories`,t)}category_lists(t){return this.http.get(`${s.N.apiUrl}/v1/categories/${t}`)}category_one(t){return this.http.get(`${s.N.apiUrl}/v1/categories/${t}`)}affectations_lists(){return this.http.get(`${s.N.apiUrl}/v1/affectations`)}affectations_driver_lists(t){return this.http.get(`${s.N.apiUrl}/v1/affectations/driver/${t}`)}affectations_create(t){return this.http.post(`${s.N.apiUrl}/v1/affectations`,t)}gpsdevice_create(t){return this.http.post(`${s.N.apiUrl}/v1/gpsdevise`,t)}gpsdevice_one(t){return this.http.get(`${s.N.apiUrl}/v1/gpsdevise/${t}`)}getDriverIp(t){return this.http.get(`${s.N.apiUrl}/v1/iplocations/driver/${t}/google`)}parametre_create(t){return this.http.post(`${s.N.apiUrl}/v1/parametres`,t)}parametre_lists(){return this.http.get(`${s.N.apiUrl}/v1/parametres`)}}return t.\u0275fac=function(r){return new(r||t)(p.LFG(i.eN))},t.\u0275prov=p.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);