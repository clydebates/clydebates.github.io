import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  isExternalProject: boolean = false;
  showUltimateTeammates: boolean = false;
  openItem: string = '';

  portfolioItems: any = {
    breakTheTargets: {
      title: 'Break the Targets',
      imgSrc: '/assets/img/breakTheTargets.gif',
      imgAlt: 'Break the Targets gameplay gif',
      ghLink: 'https://github.com/clydebates/hallebot-breaks-the-targets',
      description: `
      Created in Unity, Break the Targets is my first full featured game! 
      The gameplay is modeled after the minigame of the same name in Super Smash Bros 64 for the Nintendo 64.
      The goal is to destroy all the targets on the stage without falling to your death - and it's harder than it sounds!
      Being a Unity game, the code is all written in C#. It uses the State Machine design pattern to determine if the user is
      running, jumping, shooting, climbing, etc. It's still a work in progress, but as soon as it's completed, I plan to release it for free.
      For now, you can view the source code in GitHub (and compile and play yourself if you want)!
      `
    },
    pyPong: {
      title: 'PyPong',
      imgSrc: '/assets/img/pypongGameplay.gif',
      imgAlt: 'PyPong gameplay gif',
      ghLink: 'https://github.com/clydebates/pypong',
      description: `
      PyPong is a simple clone of the classic Atari game Pong. Written completely in Python, this game was my introduction to the popular module PyGame.
      `
    },
    ultimateTeammates: {
      title: 'Ultimate Teammates',
      description:`
      I play ultimate frisbee with my friends at least once a week. Eventually, we got tired of electing captains and making them pick teams every week.
      So I made this little web app to help out! You can enter names, heights, and skill levels - but only names are required. If you enter heights and/or skill levels, 
      the algorithm will try to sort all players as evenly as possible (first by height, then by skill level) so that you end up with a competitve match!
      `
    },
    truecoach: {
      title: 'TrueCoach by Xplor',
      companyLink: 'https://truecoach.co',
      linkTitle: 'TrueCoach website',
      description: `TrueCoach is an app designed for personal trainers to organize and schedule workouts, message with clients, and get paid. While at TrueCoach, I accomplished the following`,
      resumePoints: [
        'Updated and maintained an Ember.js web app designed for personal trainers to automate their planning, scheduling, and payments',
        'Collaborated with the backend team to design and build parts of the Ruby API. I implemented multiple new features such as Group Messaging, International Payments through Stripe, and many other improvements to the User Experience',
        'Worked closely with the Product team to determine not only what was feasible, but what delivered the most value to our customers',
        'Collaborated with a global team of fully remote coworkers',
      ]
    },
    rfd: {
      title: 'RFD & Associates, Inc',
      description: `
      RFD is a Texas-based private company doing contracting work for many state and federal government agencies. I can't go too in-depth about projects I worked on while at RFD due to security reasons, but while there I:   
      `,
      companyLink: 'https://rfdinc.com/',
      linkTitle: 'RFD Website',
      resumePoints: [
        'Created and maintained complex government information systems handling sensitive information such as Campaign Finance and Child Support. Worked with Postgres, Java, Angular 11, and AWS cloud infrastructure',
        'Used Java to improve and maintain legacy backend code for multiple government applications',
        'Improved and maintained JSF frontend code for an electoral ethics application',
        'Gained experience and technical proficiency with AWS services including Lambda, API Gateway, S3, EC2, and more',
        'Quickly became an essential part of the dev team by consistently and effectively communicating concerns, ideas, and solutions',
      ]
    }
  }

  @ViewChild('portfolioDialog', { static: true }) dialog!: ElementRef<HTMLDialogElement>;
  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  openModal(isExternalProject: boolean, itemName: string) {
    this.isExternalProject = isExternalProject;
    this.openItem = itemName;
    this.dialog.nativeElement.showModal();
    this.dialog.nativeElement.addEventListener('click', (event: any) => {
      if (event?.target?.id === 'modalOverlay') {
          this.closeModal();
      }
    });
  }

  closeModal() {
    this.openItem = '';
    this.showUltimateTeammates = false;
    this.dialog.nativeElement.close();
  }

}
