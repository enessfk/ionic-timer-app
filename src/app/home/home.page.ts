import { Component } from '@angular/core';
import { Insomnia } from '@ionic-native/insomnia/ngx'; 


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  percent:number = 50;
  radius:number = 100;

  fullTime:any = '00:01:30';

  timer:any = false;
  progress:number = 0;

  minutes:number = 1;
  seconds:any = 30;

  elapsed:any = {
    h:'00',
    m:'00',
    s:'00',
  }

  overallTimer: any = false;
  
  check:any = false;
  pauseTime:any = 0;
  countDownDate:any = new Date();

  constructor(private insomnia: Insomnia){

  }

  startTimer() {
    
    if(this.timer){
      clearInterval(this.timer);
    }

    if(!this.overallTimer) {
      this.progressTimer();
      this.insomnia.keepAwake();
    }

    this.timer = false;
    this.percent = this.percent;
    this.progress = (this.check == false) ? 1 : this.progress;

    let timeSplit = this.fullTime.split(':');
    this.minutes = timeSplit[1];
    this.seconds = timeSplit[2];

    let totalSeconds = Math.floor(this.minutes * 60) + parseInt(this.seconds);

    this.timer = setInterval(() => {
      if(this.percent == this.radius){
        clearInterval(this.timer);
        this.resetTimer();
      }

      this.percent = Math.floor((this.progress / totalSeconds) * 100);
      this.progress++;

    }, 1000)

  } 

  pauseTimer() {
    clearInterval(this.timer);
    clearInterval(this.overallTimer);
    this.overallTimer = false;
    this.timer = false;
    this.percent = this.percent;
    this.progress = this.progress;
    this.elapsed = this.elapsed;
    this.check = true;
    this.countDownDate = this.countDownDate;
    this.pauseTime = new Date().getTime();
  }

  progressTimer() {
    if(this.check == false){
      this.countDownDate = new Date()
    }
    let k = new Date().getTime() - this.pauseTime
    this.overallTimer = setInterval(() => {
      let now = new Date().getTime();
      let distance = (this.check == false) ? now-this.countDownDate.getTime() : now - this.countDownDate.getTime() - k;
 
      this.elapsed.h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (100 * 60 * 60));
      this.elapsed.m = Math.floor((distance % (1000 * 60 * 60)) / (1000 *60));
      this.elapsed.s = Math.floor((distance % (1000 * 60)) / 1000);
      
      this.elapsed.h = this.pad(this.elapsed.h,2);
      this.elapsed.m = this.pad(this.elapsed.m,2);
      this.elapsed.s = this.pad(this.elapsed.s,2);
      
    }, 1000)
  }

  pad(num, size) {
    let s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
  }

  resetTimer() {
    clearInterval(this.timer);
    clearInterval(this.overallTimer);
    this.overallTimer = 0;
    this.timer = 0;
    this.percent = 0;
    this.progress = 0;
    this.elapsed = {
      h:'00',
      m:'00',
      s:'00',
    }
    this.check = false;
    this.countDownDate = 0;
    this.pauseTime = new Date().getTime();
    this.insomnia.allowSleepAgain()
  }

}
