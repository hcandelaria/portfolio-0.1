import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ProjectDialogComponent } from '../project-dialog/project-dialog.component';
@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.css']
})
export class PortfolioPageComponent implements OnInit {

  constructor(public dialog: MatDialog) {}
  dialogProject = {};
  projects = [
    {
      name:   'Feel to Reel',
      description:  'A web app that allows users to use their device camera to take a picture of their current mood and get movies suggestions base on their mood. worked on a team, Responsible for the responsive front-end design using different technologies: HTML, CSS, JavaScript and Media Queries. as well as libraries: Materializer & GreenSock.',
      links:  ['https://feel-to-reel.firebaseapp.com/', 'https://github.com/hcandelaria/Movie-Feels"'],
      img:    'assets/img/feeltoreel/feeltoreel0.png/',
    },
    {
      name: 'Barber Scheduler',
      description: 'Barber Scheduler is a web app which enhances both clients and barbers experience by providing multiple tools. Worked on a team, Responsible for the back-end design using different technologies: MySQL, express, sequelize, sequelizejs, routes.',
      links: ['https://mighty-crag-92193.herokuapp.com/', 'https://github.com/hcandelaria/Barber-Shop'],
      img:    'assets/img/barberscheduler/barberscheduler0.png/',
    },
    {
      name: 'Clicky Game',
      description: 'gotta catch em all! On this game app you have to try to catch em all ONCE and try to get the highest score. Worked on this game for fun to practice and get more familiar with react.js, JSX.',
      links: ['https://fast-ridge-44681.herokuapp.com/', 'https://github.com/hcandelaria/clicky-game.git'],
      img:    'assets/img/clickygame/clickygame0.png/',
    },
    {
      name: 'Scraper News',
      description: 'A web app that scrapes articles from hacker news which can then be saved in MongoDB for easier access and additional notes. Independent project responsible for the overall performances of the app while implementing new technologies and npm packages. Technologies: MongoDB, Mongoose.js, handlebars, etc.',
      links: ['https://afternoon-anchorage-79574.herokuapp.com/', 'https://github.com/hcandelaria/reading-list.git'],
      img:    'assets/img/scrapernews/scrapernews0.png/',
    },
    {
      name: 'Inventory Assistant',
      description: 'Inventory Assistant is your real time sales tracker. Objective is to help the freelancer keep track of inventory, without having to pay a full time assistant. Notice which one of your products are quickly flying off the shelves, and identifiying which products might need that extra push, without having to pay a ton of money for a VP of marketing.     worked on as team, Responsible for the back-end & connecting the front-end and back-end. Technologies: reactjs, recharj, mongoose, material-ui, passport, jsonwebtoken, bcrypt, express.',
      links: ['https://damp-sea-65164.herokuapp.com/', 'https://github.com/hcandelaria/Finalproject'],
      img:    'assets/img/inventoryassistant/inventoryassistant0.png/',
    }
  ];
  openDialog($event, project): void {
    const dialogRef = this.dialog.open(ProjectDialogComponent, {
      data: project,
      height: '100vh',
      width: '100vw',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  ngOnInit() {
  }

}
