import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Bank } from 'src/app/models/bank.models';
import { Transaction } from 'src/app/models/transaction.models';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  urlApi = `${environment.API_URI}/bank`
  bankToCreate: Bank = new Bank()
  allBanks: Bank[] = []
  urlApiTransaction = `${environment.API_URI}/transaction`
  transactionToCreate: Transaction = new Transaction()
  allTransactions: Transaction[] = []
  token = localStorage.getItem('token') 
  constructor(private http: HttpClient) {
  }

  //metodos que van a consumir el api
  getAllBanks(){
    console.log(this.urlApi)
    return this.http.get(`${this.urlApi}/`, { headers: new HttpHeaders({'Authorization': 'key ' + this.token})})
  }

  getBank(_id: string){
    console.log(this.urlApi)
    return this.http.get(`${this.urlApi}/${_id}`, { headers: new HttpHeaders({'Authorization': 'key ' + this.token})})
  }

  createBank(data: Bank){
    return this.http.post(`${this.urlApi}/`, data, { headers: new HttpHeaders({'Authorization': 'key ' + this.token})})
  }

  createTransaction(data: any){
    return this.http.post(`${this.urlApiTransaction}/`, data, { headers: new HttpHeaders({'Authorization': 'key ' + this.token})})
  }

  deleteTransaction(_id: string){
    return this.http.delete(`${this.urlApiTransaction}/${_id}`,{ headers: new HttpHeaders({'Authorization': 'key ' + this.token})})
  }

  updateTransaction(data:any){
    return this.http.put(`${this.urlApiTransaction}/`,data,{ headers: new HttpHeaders({'Authorization': 'key ' + this.token})})
  }


  deleteBank(_id: string){
    return this.http.delete(`${this.urlApi}/${_id}`, { headers: new HttpHeaders({'Authorization': 'key ' + this.token})})
  }


  updateBank(data: any){
    let dataToUpdate = {
      _id: data._id,
      dataToUpdate : data
    }
    return this.http.put(`${this.urlApi}/updateBank`, dataToUpdate)
  }
}
