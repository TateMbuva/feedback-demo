import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';

/**
 * Generated class for the SlidesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html',
})
export class SlidesPage {
  @ViewChild(Slides) slides: Slides;
  activeEmoji: string;
  currentEmotion: string;
  qxns: any;
  keyHide: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, private keyboard: Keyboard) {
  	this.keyHide = false;
  	this.keyboard.onKeyboardShow().subscribe(() => {
            console.log(this.keyHide);
            console.log("Keyboard Up...");
            
        });
  	this.activeEmoji = "none";
  	this.currentEmotion = "Select an emoji above 👆🏽";
  	this.qxns = [
  		{
  			title: 'No Survey Selected',
  			qxn: "Select a survey to load...",
  			empty: true
  		},
  		{
  			title: 'Take this quick survey',
  			qxn: "It won't take much of <b>your time</b>, and would be greatly appreciated!",
  			start: true
  		},
  		{
  			title: 'Question 1',
  			qxn: "How do <b>you feel</b> about the service you recieved today?",
  			emoji: true
  		},
  		{
  			title: 'Question 2',
  			qxn: "How do <b>you feel</b> about the quality of our products?",
  			emoji: true
  		},
  		{
  			title: 'Question 3',
  			qxn: "How do <b>you feel</b> about the speed of our service?",
  			emoji: true
  		},
  		{
  			title: 'Question 4',
  			qxn: "How do <b>you feel</b> about our service providers?",
  			emoji: true
  		},
  		{
  			title: 'Thank You!',
  			qxn: "Your data will be used to <b>improve our service and products</b> for you, our valued customer",
  			end: true
  		}
  	];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlidesPage');
    //this.slides.lockSwipeToNext(true);
  }

  setEmotion(res){
  	this.activeEmoji = res;
  	this.currentEmotion = res;
  }

  nextQxn(){
  	this.activeEmoji = "none";
  	this.currentEmotion = "Select an emoji above 👆🏽";
  	this.slides.slideNext()
  }

  finishQxns(){
  	this.slides.slideTo(0);
  }

  

}
