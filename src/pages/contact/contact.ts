import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ScheDetailPage } from './scheDetail/scheDetail';
import { worker } from '../../app/global';
//import { user } from '../../app/global';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  scheData: string = "self";
  private worker: any;
  private worker_pro: any;
  private sche: any;
  private sche_self: any;
  private sche_search: any;
  private searchkeyword: any;

  constructor(public navCtrl: NavController,
              private modalCtrl: ModalController,
              ) {
  }

  private init(){
    this.sche = [];
    this.sche_self = [];
    this.worker = worker.worker_name;
    this.worker_pro = worker.worker_pro;
    this.searchkeyword = "";
    this.create_schedule_easy();
    this.getMySche();
  }

  ionViewWillEnter(){
    this.init();
  }

  public create_schedule_easy(){
    //let sche = [];
    let count = 0;   
    for(let day=1; day<=30; day++){
      let sche_day = {
          date: day,
          worker: [],
          worker_pro: [],
          sche_time: []
        };
      sche_day.date = day;
      for(let no = 0; no < 3; no++){
        let sche_time_temp = {
          time: "",
          worker: [],
          worker_pro: []
        };

        if(no == 0)
            sche_time_temp.time = "早班";
        else if(no == 1)
          sche_time_temp.time = "小夜班";
        else
          sche_time_temp.time = "大夜班";
        for(let i = 0; i < 2; i++, count++){
          sche_day.worker.push(this.worker[count%9]);
          sche_day.worker_pro.push("assets/imgs/"+this.worker_pro[count%9]);
          sche_time_temp.worker.push(this.worker[count%9]);
          sche_time_temp.worker_pro.push("assets/imgs/"+this.worker_pro[count%9]);
        }
        sche_day.sche_time.push(sche_time_temp);
      }
      //sche.push(sche_day);
      this.sche.push(sche_day);
    }

    console.log(this.sche);
        
  }

  private getMySche(){
    for(var i = 0; i < this.sche.length; i++){
      for(var j = 0; j < this.sche[i].worker.length; j++){
        //if(user.worker_name == this.sche[i].worker[j])  
          //this.sche_self.push(this.sche[i]);
      }
    }
  }

  go_scheDetail(sche){
    let profileModal = this.modalCtrl.create(ScheDetailPage, { 
      param1: sche
    }, {showBackdrop: false});
    profileModal.present();
  }

  private searchSche(event){
    this.scheData = "search";
    this.sche_search = [];

    for(var i = 0; i < this.sche.length; i++){
      for(var j = 0; j < this.sche[i].worker.length; j++){
        let equal = false;
        for(let k = 0; k < this.sche[i].worker[j].length; k++){
            if(this.searchkeyword[0] == this.sche[i].worker[j][k]){
                for(let m = 0; m < this.searchkeyword.length; m++){
                    if(this.searchkeyword[m] != this.sche[i].worker[j][k + m]){
                        equal = false;
                        break;
                    }
                    equal = true;
                }
            }
            if(equal == true){
                this.sche_search.push(this.sche[i]);
                break;
            }
        }
      }
    }
    
  }

  private searchClear(event){
    this.scheData = "self";
  }

  private searchCancel(event){
    this.scheData = "self";
  }
}
