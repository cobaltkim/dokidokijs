let stage = 0;
let innerStage = 0;
let profLove = 0;
let juneLove = 0;
let late = 0;
let presentationScore = 0;
let stu =[];
let score = [0, 0, 0, 0, 0, 0, 0, 0];

// let pg;
let b1;
let buttonL;
let buttonM;
let buttonR;
let b2;
let b3;
let talking = false; 
let innerTalking = false;
let bar = 800;
let bar2 = 1000;

let timeTracker;
let frame;

//assets
let font;
let cursor;
let cursor_over;
let whiteCursor; 
let whiteCursor_over;
let arrow;
let pen;
let blackOpacity;
let alpha = 0;
let pg_drawing; 
let drawing;
let drawings = [];
let length = 9;

let prologue = [];
let startScreen;
let weekStart = [];
let beforeSelect = [];
let answer = [];
let choosingtime = [];
let ending = [];
let endingCredit;
let sketchbook;
let lastButton;
let week5game = [];
let week5gameEx;
for (let i=1; i<6; i++){
  beforeSelect[i] = [];
  answer[i] = [];
  ending[i] = [];
  for (let j=1; j<5; j++){
    answer[i][j] = [];
  }
}
let select = [];
for (let i=1; i<6; i++){
  select[i] = [];
}
let gameStuStart = []; let gameStuIng = []; let gameStuEnd = [];
let bone;
let clock;
let particles = [];
let lightsX = [];
let lightsY = [];
let lightsR = [];
let loveUp =[];
let loveDown =[];
let loveTiming = 100;

let soundAssets = [];

let x = 0;
let trembling = false;

let border = 9;
let border2 = 17;
let border3 = 27; //edit
let border4 = 38; //edit
let border5 = 49; 

function preload(){
  for (let i=0; i<8; i++){
    prologue[i] = loadImage('assets/prologue_'+i+'.png');
  }
font = loadFont('assets/font.ttf');
cursor = loadImage('assets/cursor.png');
cursor_over = loadImage('assets/cursor_over.png');
whiteCursor = loadImage('assets/whiteCursor.png');
whiteCursor_over = loadImage('assets/whiteCursor_over.png');
arrow = loadImage('assets/UI_talkpanelarrow.png');
pen = loadImage('assets/pen.png');
blackOpacity = loadImage('assets/blackOpacity50.png')
timeTracker = loadImage('assets/timeTracker.gif');

startScreen = loadImage('assets/titleImage.png');
title0 = loadImage('assets/titleDokidoki.png');
title1 = loadImage('assets/titleClicktostart.png');

for (let i=1; i<5; i++){
  weekStart[i] = loadImage('assets/Week'+i+'/Week'+i+'_start.png');
  select[i] = loadImage('assets/Week'+i+'/select'+i+'.png');
    for(let j=1; j<4; j++){
      select[i][j] = loadImage('assets/Week'+i+'/select'+i+'_'+j+'.png');
    }
}

  for (let i=1; i<2; i++){
    for(let j=1; j<4; j++){
      beforeSelect[i][j] = loadImage('assets/Week1/beforeSelect'+i+'_'+j+'.png');
    }
    for(let j=1; j<5; j++){
      for(let k=1; k<5; k++){
        answer[i][j][k] = loadImage('assets/Week1/Week'+i+'_select'+j+'_'+k+'.png');
      }
    }
    answer[i][1][5] = loadImage('assets/Week1/Week1_select1_5.png');
  }

  for (let i=2; i<3; i++){
    for(let j=1; j<8; j++){
      beforeSelect[i][j] = loadImage('assets/Week2/beforeSelect'+i+'_'+j+'.png');
    }
    for(let j=1; j<5; j++){
      for(let k=1; k<5; k++){
        answer[i][j][k] = loadImage('assets/Week2/Week'+i+'_select'+j+'_'+k+'.png');
      }
    }
    answer[i][2][5] = loadImage('assets/Week2/Week2_select2_5.png');
    answer[i][3][5] = loadImage('assets/Week2/Week2_select3_5.png');
  }

  for (let i=3; i<4; i++){
    for(let j=1; j<7; j++){
      beforeSelect[i][j] = loadImage('assets/Week3/beforeSelect'+i+'_'+j+'.png');
    }
    for(let j=1; j<5; j++){
      for(let k=1; k<6; k++){
        answer[i][j][k] = loadImage('assets/Week3/Week'+i+'_select'+j+'_'+k+'.png');
      }
    }
    answer[i][2][6] = loadImage('assets/Week3/Week3_select2_6.png');
    answer[i][3][6] = loadImage('assets/Week3/Week3_select3_6.png');
  }

  for (let i=5; i<6; i++){
    for(let j=1; j<5; j++){
      beforeSelect[i][j] = loadImage('assets/Week5/Week'+i+'_'+j+'.png');
    }
    week5game[0] = loadImage('assets/Week5/Week5_Game_Background.png')
    for(let j=1; j<4; j++){
      for(let k=1; k<6; k++){
        answer[i][j][k] = loadImage('assets/Week5/Week'+i+'_select'+j+'_'+k+'.png');
      }
    }
    answer[i][3][6] = loadImage('assets/Week5/Week5_select3_6.png');
    weekStart[5] = loadImage('assets/Week5/Week5_start.png');
  }
  week5gameEx = loadImage('assets/Week5/Week5_Game_HowtoPlay.png');
  choosingtime[1] = loadImage('assets/Week5/choosingtime_1.png');
  choosingtime[2] = loadImage('assets/Week5/choosingtime_2.png');
  for(let i=1; i<8; i++){
    gameStuStart[i] = loadImage('assets/Week5/Week5_Game_'+i+'_start.png');
    gameStuIng[i] = loadImage('assets/Week5/Week5_Game_'+i+'_ing.png');
    gameStuEnd[i] = loadImage('assets/Week5/Week5_Game_'+i+'_end.png');
  }
  for (let i=1; i<11; i++){
    ending[1][i] = loadImage('assets/Ending/ending_1_'+i+'.png')
  }
  for (let i=1; i<9; i++){
    ending[2][i] = loadImage('assets/Ending/ending_2_'+i+'.png')
  }
  for (let i=1; i<6; i++){
    ending[3][i] = loadImage('assets/Ending/ending_3_'+i+'.png')
  }
  for (let i=1; i<13; i++){
    ending[4][i] = loadImage('assets/Ending/ending_4_'+i+'.png')
  }
  for (let i=1; i<12; i++){
    ending[5][i] = loadImage('assets/Ending/ending_5_'+i+'.png')
  }
  endingCredit = loadImage('assets/Ending/endingcredits_re.png');
  lastButton = loadImage('assets/Ending/lastbutton.png');
  sketchbook = loadImage('assets/sketchbook.png')

bone = loadImage('assets/ui_bone.PNG');
clock = loadImage('assets/ui_late.PNG');
loveUp[0] = loadImage('assets/loveup_professor.png');
loveUp[1] = loadImage('assets/loveup_teammate.png');
loveUp[2] = loadImage('assets/loveup_heart.png');
loveUp[3] = loadImage('assets/loveup_arrow.png');
loveDown[0] = loadImage('assets/lovedown_professor.png');
loveDown[1] = loadImage('assets/lovedown_teammate.png');
loveDown[2] = loadImage('assets/lovedown_heart.png');
loveDown[3] = loadImage('assets/lovedown_arrow.png');

soundAssets[0] = loadSound('assets/sound/makeItHappen.mp3'); // op, endingSelect
soundAssets[1] = loadSound('assets/sound/moonDance.mp3'); //pro
soundAssets[2] = loadSound('assets/sound/morningKiss.mp3'); //w1Select
soundAssets[3] = loadSound('assets/sound/comic.mp3'); //w1T, w3T
soundAssets[4] = loadSound('assets/sound/tongTong.mp3'); //w1L
soundAssets[5] = loadSound('assets/sound/boubleGum.mp3'); //w1M
soundAssets[6] = loadSound('assets/sound/rlqns.mp3'); //w1R
soundAssets[7] = loadSound('assets/sound/zmsdlfskTdjdy.mp3'); // w2Select
soundAssets[8] = loadSound('assets/sound/comic.mp3'); //w2T
soundAssets[9] = loadSound('assets/sound/boubleGum.mp3'); //w2L
soundAssets[10] = loadSound('assets/sound/didYouKnow.mp3'); //w2M
soundAssets[11] = loadSound('assets/sound/tongTong.mp3'); //w2R
soundAssets[12] = loadSound('assets/sound/statesMan.mp3'); // w3Select
soundAssets[13] = loadSound('assets/sound/comic.mp3'); //w3T
soundAssets[14] = loadSound('assets/sound/didYouKnow.mp3'); //w3L
soundAssets[15] = loadSound('assets/sound/boubleGum.mp3'); //w3M
soundAssets[16] = loadSound('assets/sound/rlqns.mp3'); //w3R
soundAssets[17] = loadSound('assets/sound/opening.mp3'); // w5manual
soundAssets[18] = loadSound('assets/sound/pointCard.mp3'); //w5Game
soundAssets[19] = loadSound('assets/sound/tongTong.mp3');//w5Best
soundAssets[20] = loadSound('assets/sound/retroGamer.mp3'); //w5GameSoso
soundAssets[21] = loadSound('assets/sound/boubleGum.mp3'); //w5GameWorst
soundAssets[22] = loadSound('assets/sound/funkyAction.mp3'); //enidngSelect
soundAssets[23] = loadSound('assets/sound/rainbow.mp3'); //endingProf
soundAssets[24] = loadSound('assets/sound/hideSeek.mp3'); //endingTeam
soundAssets[25] = loadSound('assets/sound/funkyAction.mp3'); //endingExit
soundAssets[26] = loadSound('assets/sound/loveMe.mp3'); //endingTogether
soundAssets[27] = loadSound('assets/sound/comic.mp3'); //endingLate
}

function setup() {
  createCanvas(1920, 1080);
  background(255);
  sound();
  noCursor();
  pg_drawing = createGraphics(width,height);
  for (i=0; i<length; i++){
    drawings.push(pg_drawing);
  }
  textFont(font);
  for (let i = 0; i < 40; i++){
    lightsX[i] = random(1920);
    lightsY[i] = random(1080);
    lightsR[i] = random(10, 25);
  }
  b3 = new Button(0,0,0,0);
  alpha = 255;
}

function draw() {
  switch (stage){
    // prologue
    case 0:
      image(startScreen,0,0);
      image(title0,0,0);
      noStroke();
      light();
      if(frameCount % 60 < 30){
        image(title1,0,0);
      }
      normalTime();
      break;
    case 1:
      image(prologue[0],0,0);
      noStroke();
      let t = frameCount/30;
      for(let i=0; i<1;i++){
        particles.push(new particle());
      }
      for(let particle of particles) {
        particle.update(t);
        particle.display();
      }
      talkTime();
      break;
    case 2:
      background(255);
      image(prologue[1],0,0);
      noStroke();
      for(let i=0; i<1;i++){
        particles.push(new particle());
      }
      for(let particle of particles) {
        particle.update(frameCount/30);
        particle.display();
      }
      talkTime();
      break;
    case 3:
      // if (trembling == true) x += 0.5;
      // else x -= 0.5;
      // if (x >= 2 || x <= -2) {trembling = !trembling;}
      image(timeTracker, -1200, -500, 1, 1);
      frame = timeTracker.getCurrentFrame();
      if(frame >= 0 && frame < 5){
        quake(prologue[2],0,0);
      } else{
        image(prologue[2],0,0);
      }
      for(let particle of particles) {
        particle.update(frameCount/30);
        particle.display();
      }
      talkTime();
      break;
    case 4:
      image(prologue[3],0,0);
      for(let i=0; i<1;i++){
        particles.push(new particle());
      }
      for(let particle of particles) {
        particle.update(frameCount/30);
        particle.display();
      }
      talkTime();
      break;
    case 5:
      image(prologue[4],0,0);
      for(let i=0; i<1;i++){
        particles.push(new particle());
      }
      for(let particle of particles) {
        particle.update(frameCount/30);
        particle.display();
      }
      talkTime();
      break;
    case 6:
      image(prologue[5],0,0);
      for(let i=0; i<1;i++){
        particles.push(new particle());
      }
      for(let particle of particles) {
        particle.update(frameCount/30);
        particle.display();
      }
      talkTime();
      break;
      case 7: //edit
        image(prologue[6],0,0);
        for(let i=0; i<1;i++){
          particles.push(new particle());
        }
        for(let particle of particles) {
          particle.update(frameCount/30);
          particle.display();
        }
        talkTime();
        break;
    case 8:
      image(prologue[7],0,0);
      normalTime();
      break;
    
    case border+0: // week 1
      setNumber(0);
      if (alpha>0){
        image(beforeSelect[1][1], 0, 0);  
        tint(255,alpha);
        image(weekStart[1],0,0);
        b1 = new Button(0,0,0,0);
        alpha -= 5;
      } else{
        noTint();
        image(beforeSelect[1][1], 0, 0);
        talkTime();
      }
      break;
    case border+1: 
      alpha = 255;
      noTint();
      image(beforeSelect[1][2], 0, 0);
      talkTime();
      break;
    case border+2:
      image(beforeSelect[1][3], 0, 0);
      talkTime();
      break;
    case border+3:
      image(beforeSelect[1][3],0,0);
      image(blackOpacity,0,0);
      if (x<20) x+=1;
      else selectTime(1);
      break;

    case border+4: // time over
    switch (innerStage){
      case 0:
        image(answer[1][4][1],0,0);
        afterAnswer();
        break;
      case 1:
        image(answer[1][4][2],0,0);
        profDown(0, 17);
        afterAnswer();
        break;
      case 2 :
        image(answer[1][4][3],0,0);
        loveTiming = 100;
        afterAnswer();
        break;
      case 3:
        image(timeTracker, -1200, -500, 1, 1);
        image(answer[1][4][4],0,0);
        frame = timeTracker.getCurrentFrame();
        if(frame >= 0){
          teamDown(20, 37);
        }
        timeOver();
        buttonR = new Button(0,0,width,height);
        break;
    }
    break;

    case border+5: // left answer
      switch (innerStage){
        case 0:
          image(answer[1][1][1],0,0);
          afterAnswer();
          break;
        case 1:
          image(answer[1][1][2],0,0);
          afterAnswer();
          break;
        case 2 :
          image(answer[1][1][3],0,0);
          afterAnswer();
          break;
        case 3:
          image(answer[1][1][4],0,0);
          afterAnswer();
          break;
        case 4:
          image(timeTracker, -1200, -500, 1, 1);
          image(answer[1][1][5],0,0);
          frame = timeTracker.getCurrentFrame();
          if(frame >= 0){
            profUp(0, 35);
          }
          answerL();
          buttonM = new Button(0,0,width,height);
          break;
      }
      break;

    case border+6: // middle answer
      switch (innerStage){
        case 0:
          image(answer[1][2][1],0,0);
          afterAnswer();
          break;
        case 1:
          image(answer[1][2][2],0,0);
          profDown(0,17);
          afterAnswer();
          break;
        case 2:
          image(answer[1][2][3],0,0);
          loveTiming = 100;
          afterAnswer();
          break;
        case 3:
          image(timeTracker, -1200, -500, 1, 1);
          image(answer[1][2][4],0,0);
          frame = timeTracker.getCurrentFrame();
          if(frame >= 0){
            teamDown(20, 37);
          }
          answerM();
          buttonL = new Button(0,0,width,height);
          break;
      }
      break;

    case border+7: // right answer
      switch (innerStage){
        case 0:
          image(answer[1][3][1],0,0);
          afterAnswer();
          break;
        case 1:
          image(answer[1][3][2],0,0);
          afterAnswer();
          break;
        case 2:
          image(answer[1][3][3],0,0);
          answerR();
          break;
      }
    break;

    case border2: // week 2
      setNumber(5);
      loveTiming = 100;
      if (alpha>0){
        image(beforeSelect[2][1], 0, 0);  
        tint(255,alpha);
        image(weekStart[2],0,0);
        b1 = new Button(0,0,0,0);
        alpha -= 5;
      } else{
        noTint();
        if(frameCount % 20 < 10){
          image(beforeSelect[2][1],0,0);
        } else {
          image(beforeSelect[2][2],0,0);
        }   
        talkTime();
      }
      break;
    case border2+1:
      alpha = 255;
      noTint();
      if(frameCount % 20 < 10){
        image(beforeSelect[2][3],0,0);
      } else {
        image(beforeSelect[2][4],0,0);
      }
      talkTime();
      break;
    case border2+2:
      normalTime();
      image(beforeSelect[2][5],0,0,width,height);
      image(pg_drawing,0,0);
      b1 = new Button(1194,775,224,61);
      if(584<mouseX&&mouseX<1300 && 295<mouseY&&mouseY<760){
        noCursor();
        image(pen,mouseX,mouseY-105,105,105);
        if (mouseIsPressed){
          pg_drawing.stroke(0);
          pg_drawing.strokeWeight(5);
          pg_drawing.line(mouseX,mouseY,pmouseX,pmouseY);
        }
      } else {
        if (b1.over()) image(whiteCursor_over,mouseX,mouseY,25,30);
        else image(whiteCursor,mouseX,mouseY,20,30);
      }
      noStroke();
      break;
    case border2+3:
      image(beforeSelect[2][6],0,0);
      talkTime();     
      break;
    case border2+4:
      image(beforeSelect[2][7],0,0);
      talkTime();      
      break;
    case border2+5:
      image(beforeSelect[2][7],0,0);
      image(blackOpacity,0,0);
      if (x<40) x+=1;
      else selectTime(2);
      break;

    case border2+6: // time over
    switch (innerStage){
      case 5:
        image(answer[2][4][1],0,0);
        afterAnswer();
        break;
      case 6:
        image(answer[2][4][2],0,0);
        afterAnswer();
        break;
      case 7:
        image(answer[2][4][3],0,0);
        afterAnswer();
        break;
      case 8:
        image(timeTracker, -1200, -500, 1, 1);
        image(answer[2][4][4],0,0);
        frame = timeTracker.getCurrentFrame();
        if(frame >= 0){
          profDown(0, 35);
        }
        timeOver();
        buttonR = new Button(0,0,width,height);
        break;
    }
    break;

    case border2+7: // left answer
      switch (innerStage){
        case 5:
          image(answer[2][1][1],0,0);
          afterAnswer();
          break;
        case 6:
          image(answer[2][1][2],0,0);
          afterAnswer();
          break;
        case 7:
          image(answer[2][1][3],0,0);
          afterAnswer();
          break;
        case 8:
          image(timeTracker, -1200, -500, 1, 1);
          image(answer[2][1][4],0,0);
          frame = timeTracker.getCurrentFrame();
          if(frame >= 0){
            profDown(0, 35);
          }
          answerL();
          buttonM = new Button(0,0,width,height);
          break;
      }
      break;

    case border2+8: // middle answer
      switch (innerStage){
        case 5:
          image(answer[2][2][1],0,0);
          afterAnswer();
          break;
        case 6:
          image(answer[2][2][2],0,0);
          afterAnswer();
          break;
        case 7:
          image(answer[2][2][3],0,0);
          afterAnswer();
          break;
        case 8: 
          image(answer[2][2][4],0,0);
          afterAnswer();
          break;
        case 9:
          image(timeTracker, -1200, -500, 1, 1);
          image(answer[2][2][5],0,0);
          frame = timeTracker.getCurrentFrame();
          if(frame >= 0){
            teamUp(0,35);
          }
          answerM();
          buttonL = new Button(0,0,width,height);
          break;
      }
      break;

    case border2+9: // right answer
      switch (innerStage){
        case 5:
          image(answer[2][3][1],0,0);
          afterAnswer();
          break;
        case 6:
          image(answer[2][3][2],0,0);
          afterAnswer();
          break;
        case 7:
          image(answer[2][3][3],0,0);
          afterAnswer();
          break;
        case 8:
          image(answer[2][3][4],0,0);
          afterAnswer();
          break;
        case 9:
          image(timeTracker, -1200, -500, 1, 1);
          image(answer[2][3][5],0,0);
          frame = timeTracker.getCurrentFrame();
          if(frame >= 0){
            profUp(0, 35);
          }
          answerR();
          b1 = new Button(0,0,width,height);
          break;
      }
      break;

    case border3: // week3
      setNumber(10);
      loveTiming = 100;
      if (alpha>0){
        image(beforeSelect[3][1], 0, 0);  
        tint(255,alpha);
        image(weekStart[3],0,0);
        b1 = new Button(0,0,0,0);
        alpha -= 5;
      } else{
      noTint();
      image(beforeSelect[3][1],0,0);
      talkTime();
      }
      break;
    case border3+1:
      alpha = 255;
      noTint();
      image(beforeSelect[3][2],0,0);
      talkTime();
      break;
    case border3+2:
      image(beforeSelect[3][3],0,0);
      talkTime();
      break;
    case border3+3:
      image(beforeSelect[3][4],0,0);
      normalTime();
      break;
    case border3+4:
      image(beforeSelect[3][5],0,0);
      talkTime();
      break;
    case border3+5:
      image(beforeSelect[3][6],0,0);
      talkTime();
      break;
    case border3+6:
      image(beforeSelect[3][6],0,0);
      image(blackOpacity,0,0);
      if (x<60) x+=1;
      else selectTime(3);
      break;
  
      case border3+7: // time over
      switch (innerStage){
        case 10:
          image(answer[3][4][1],0,0);
          afterAnswer();
          break;
        case 11:
          image(answer[3][4][2],0,0);
          afterAnswer();
          break;
        case 12:
          image(answer[3][4][3],0,0);
          afterAnswer();
          break;
        case 13:
          image(answer[3][4][4],0,0);
          afterAnswer();
          break;
        case 14:
          image(timeTracker, -1200, -500, 1, 1);
          image(answer[3][4][5],0,0);
          frame = timeTracker.getCurrentFrame();
          if(frame >= 0){
            teamDown(0, 35);
          }
          timeOver();
          buttonR = new Button(0,0,width,height);
          break;
      }break;
  
      case border3+8: // left answer
        switch (innerStage){
          case 10:
            image(answer[3][1][1],0,0);
            afterAnswer();
            break;
          case 11:
            image(answer[3][1][2],0,0);
            afterAnswer();
            break;
          case 12:
            image(answer[3][1][3],0,0);
            afterAnswer();
            break;
          case 13:
            image(answer[3][1][4],0,0);
            answerL();
            break;
        }
        break;
  
      case border3+9: // middle answer
        switch (innerStage){
          case 10:
            image(answer[3][2][1],0,0);
            afterAnswer();
            break;
          case 11:
            image(answer[3][2][2],0,0);
            afterAnswer();
            break;
          case 12:
            image(answer[3][2][3],0,0);
            afterAnswer();
            break;
          case 13: 
            image(answer[3][2][4],0,0);
            afterAnswer();
            break;
          case 14:
            image(answer[3][2][5],0,0);
            afterAnswer();
            break;
          case 15:
            image(timeTracker, -1200, -500, 1, 1);
            image(answer[3][2][6],0,0);
            frame = timeTracker.getCurrentFrame();
            if(frame >= 0){
              teamDown(0, 35);
            }
            answerM();
            buttonL = new Button(0,0,width,height);
            break;
        }
        break;
  
      case border3+10: // right answer
        switch (innerStage){
          case 10:
            image(answer[3][3][1],0,0);
            afterAnswer();
            break;
          case 11:
            image(answer[3][3][2],0,0);
            afterAnswer();
            break;
          case 12:
            image(answer[3][3][3],0,0);
            afterAnswer();
            break;
          case 13:
            image(answer[3][3][4],0,0);
            afterAnswer();
            break;
          case 14:
            image(answer[3][3][5],0,0);
            afterAnswer();
            break;
          case 15:
            image(timeTracker, -1200, -500, 1, 1);
            image(answer[3][3][6],0,0);
            frame = timeTracker.getCurrentFrame();
            if(frame >= 0){
              teamUp(0, 35);
            }
            answerR();
            b1 = new Button(0,0,width,height);
            break;
        }
        break;

    case border4: // week 4
      setNumber(16);
      loveTiming = 100;
      if (alpha>0){
        image(beforeSelect[5][1], 0, 0);  
        tint(255,alpha);
        image(weekStart[4],0,0);
        b1 = new Button(0,0,0,0);
        alpha -= 5;
      } else{
      noTint();
      image(beforeSelect[5][1],0,0);
      talkTime();
      }
      break;
    case border4+1:
      alpha = 255;
      noTint();
      image(beforeSelect[5][2],0,0);
      talkTime();
      break;
    case border4+2:
      image(beforeSelect[5][3],0,0);
      talkTime();
      break;
    case border4+3:
      image(beforeSelect[5][4],0,0);
      talkTime();
      break;
    case border4+4:
      image(week5game[0],0,0);
      normalTime();
      textFont(font);
      textSize(100);
      textAlign(CENTER);
      fill(0);
      text('게임 설명',width/2,height/2);
      normalTime();
      break;
    case border4+5:
      image(week5gameEx,0,0);
      normalTime();
      break;
    case border4+6:
      image(week5game[0],0,0);
      gameTime();
      stu[1] = new Presentation(175, 405, 400, 475, score[1]);
      stu[2] = new Presentation(1280, 375, 350, 515, score[2]);
      stu[3] = new Presentation(490, 375, 230, 260, score[3]);
      stu[4] = new Presentation(1175, 360, 240, 285, score[4]);
      stu[5] = new Presentation(1035, 430, 215, 225, score[5]);
      stu[6] = new Presentation(1660, 390, 140, 195, score[6]);
      stu[7] = new Presentation(110, 420, 200, 170, score[7]);
      for(let i = 1; i<8; i++){
        if(score[i]==0){
          image(gameStuStart[i],0, 0);
        } else if(score[i]>0 && score[i]<100){
          image(gameStuIng[i],0,0);
        } else if(score[i]>=100){
          image(gameStuEnd[i], 0, 0);
        }
        stu[i].show();
        if(score[i]>0 && score[i] < 100){
          score[i] -= 0.5;
        } else if(score[i]<=0){
          score[i] = 0;
        }
        gauge(stu[i], score[i]);
      }
      loadingBar2();
      if(score[1]>=100 && score[2]>=100 && score[3]>=100 && score[4]>=100 && score[5]>=100 && score[6]>=100 && score[7]>=100){
        stage += 1;
        presentationScore = 700;
      }
      break;
    case border4+7:
      image(week5game[0],0,0);
      textAlign(CENTER);
      textSize(30);
      text(presentationScore/100+' 명을 당신의 발표에 매료시켰다!', width/2, height/2);
      if (presentationScore >= 500){
        normalTime();
      } else if (presentationScore >= 300){
        answerM();
        buttonL = new Button(0,0,width,height);
      } else {
        answerL();
        buttonM = new Button(0,0,width,height);
      }
      break;
  
    case border4+8: // good
      switch (innerStage) {
        case 16:
          image(answer[5][1][1],0,0);
          afterAnswer();
          break;
        case 17:
          image(answer[5][1][2],0,0);
          afterAnswer();
          break;
        case 18:
          image(answer[5][1][3],0,0);
          profUp();
          afterAnswer();
          break;
        case 19:
          image(answer[5][1][4],0,0);
          loveTiming = 100;
          afterAnswer();
          break;
        case 20:
          image(answer[5][1][5],0,0);
          teamUp();
          answerL();
          buttonM = new Button(0,0,width,height);
      }
      break;
    case border4+9: // soso
    switch (innerStage) {
      case 16:
        image(answer[5][2][1],0,0);
        afterAnswer();
        break;
      case 17:
        image(answer[5][2][2],0,0);
        afterAnswer();
        break;
      case 18:
        image(answer[5][2][3],0,0);
        afterAnswer();
        break;
      case 19:
        image(answer[5][2][4],0,0);
        answerM();
        break;
    }
      break;
    case border4+10: // bad
    switch (innerStage) {
      case 16:
        image(answer[5][3][1],0,0);
        afterAnswer();
        break;
      case 17:
        image(answer[5][3][2],0,0);
        teamDown();
        afterAnswer();
        break;
      case 18:
        image(answer[5][3][3],0,0);
        loveTiming=100;
        afterAnswer();
        break;
      case 19:
        image(answer[5][3][4],0,0);
        profDown();
        afterAnswer();
        break;
      case 20:
        image(answer[5][3][5],0,0);
        afterAnswer();
        break;
      case 21:
        image(answer[5][3][6],0,0);
        profDown(0, 17);
        teamDown(20, 37);
        answerR();
        break;
    }
      break;

    case border5: // week 5
      setNumber(22);
      loveTiming = 100;
      if (alpha>0){
        image(choosingtime[1], 0, 0);  
        tint(255,alpha);
        image(weekStart[5],0,0);
        b1 = new Button(0,0,0,0);
        alpha -= 5;
      } else{
        noTint();
        image(choosingtime[1], 0, 0);
        talkTime();
      }
      break;
    case border5+1: 
      alpha = 255; 
      noTint();
      image(choosingtime[2],0,0);
      talkTime();
      break;
    case border5+2:
      image(choosingtime[2],0,0);
      image(blackOpacity,0,0);
      if (x<80) x+=1;
      else selectTime(4);
      break;
    
    case border5+3: // ending 1
      switch (innerStage) {
      case 22:
        x=0;
        image(ending[1][1],0,0);
        afterAnswer();
        break;
      case 23:
        image(ending[1][2],0,0);
        afterAnswer();
        break;
      case 24:
        image(ending[1][3],0,0);
        afterAnswer();
        break;
      case 25:
        image(ending[1][4],0,0);
        afterAnswer();
        break;
      case 26:
        image(ending[1][5],0,0);
        afterAnswer();
        break;
      case 27:
        image(ending[1][6],0,0);
        afterAnswer();
        break;
      case 28:
        image(ending[1][7],0,0);
        afterAnswer();
        break;
      case 29:
        image(ending[1][8],0,0);
        afterAnswer();
        break;
      case 30:
        image(ending[1][9],0,0);
        afterAnswer();
        break;
      case 31:
        image(ending[1][10],0,0);
        gameTime();
        b3 = new Button(0,0,width,height);
        break;
      }
      break;
    case border5+4: // ending 2
    switch (innerStage) {
      case 22:
        x=0;
        image(ending[2][1],0,0);
        afterAnswer();
        break;
      case 23:
        image(ending[2][2],0,0);
        afterAnswer();
        break;
      case 24:
        image(ending[2][3],0,0);
        afterAnswer();
        break;
      case 25:
        image(ending[2][4],0,0);
        afterAnswer();
        break;
      case 26:
        image(ending[2][5],0,0);
        afterAnswer();
        break;
      case 27:
        image(ending[2][6],0,0);
        afterAnswer();
        break;
      case 28:
        image(ending[2][7],0,0);
        afterAnswer();
        break;
      case 29:
        image(ending[2][8],0,0);
        timeOver();
        buttonR= new Button(0,0,width,height);
        break;
      }
      break;
    case border5+5: // ending 3
    switch (innerStage) {
      case 22:
        x=0;
        image(ending[3][1],0,0);
        afterAnswer();
        break;
      case 23:
        image(ending[3][2],0,0);
        afterAnswer();
        break;
      case 24:
        image(ending[3][3],0,0);
        afterAnswer();
        break;
      case 25:
        image(ending[3][4],0,0);
        afterAnswer();
        break;
      case 26:
        image(ending[3][5],0,0);
        answerL();
        buttonM= new Button(0,0,width,height);
        break;
    }
      break;
    case border5+6: // ending 4
    switch (innerStage) {
      case 22:
        x=0;
        image(ending[4][1],0,0);
        afterAnswer();
        break;
      case 23:
        image(ending[4][2],0,0);
        afterAnswer();
        break;
      case 24:
        image(ending[4][3],0,0);
        afterAnswer();
        break;
      case 25:
        image(ending[4][4],0,0);
        afterAnswer();
        break;
      case 26:
        image(ending[4][5],0,0);
        afterAnswer();
        break;
      case 27:
        image(ending[4][6],0,0);
        afterAnswer();
        break;
      case 28:
        image(ending[4][7],0,0);
        afterAnswer();
        break;
      case 29:
        image(ending[4][8],0,0);
        afterAnswer();
        break;
      case 30:
        image(ending[4][9],0,0);
        afterAnswer();
        break;
      case 31:
        image(ending[4][10],0,0);
        afterAnswer();
        break;
      case 32:
        image(ending[4][11],0,0);
        afterAnswer();
        break;
      case 33:
        image(ending[4][12],0,0);
        answerM();
        buttonL = new Button(0,0,width,height);
        break;
    }
      break;
    case border5+7: // ending 5
    switch (innerStage) {
      case 22:
        x=0;
        image(ending[5][1],0,0);
        afterAnswer();
        break;
      case 23:
        image(ending[5][2],0,0);
        afterAnswer();
        break;
      case 24:
        image(ending[5][3],0,0);
        afterAnswer();
        break;
      case 25:
        image(ending[5][4],0,0);
        afterAnswer();
        break;
      case 26:
        image(ending[5][5],0,0);
        afterAnswer();
        break;
      case 27:
        image(ending[5][6],0,0);
        afterAnswer();
        break;
      case 28:
        image(ending[5][7],0,0);
        afterAnswer();
        break;
      case 29:
        image(ending[5][8],0,0);
        afterAnswer();
        break;
      case 30:
        image(ending[5][9],0,0);
        afterAnswer();
        break;
      case 31:
        image(ending[5][10],0,0);
        afterAnswer();
        break;
      case 32:
        image(ending[5][11],0,0);
        answerR();
        b1=new Button(0,0,width,height);
        break;
    }
      break;
    case border5+8: // ending credit
      background(0);
      gameTime();
      image(endingCredit,0,x);
      if (x > -4800) {if(keyIsPressed && keyCode == 83){x -=6} else{x-=1;}}
      else{
        x=-4800;
        image(lastButton,0,0);
        normalTime();
        buttonL = new Button(363,835,350,150);
        b1 = new Button(1150,835,370,160);
      }
      if (b1.over()||buttonL.over()) image(whiteCursor_over,mouseX,mouseY,25,30);
      else image(whiteCursor,mouseX,mouseY,20,30);
      break;

    case border5+9: // drawing exhibition
      background(255);
      image(sketchbook,0,0);
        image(drawings[0],0,0);
        image(drawings[1],640,0);
        image(drawings[2],640*2,0);
        image(drawings[3],0,360);
        image(drawings[4],640,360);
        image(drawings[5],640*2,360);
        image(drawings[6],0,720);
        image(drawings[7],640,720);
        image(drawings[8],640*2,720);
        normalTime();
        textAlign(RIGHT);
        textSize(25);
        text('클릭하면 시작화면으로 돌아갑니다!',width-10,height-5);
      break;
    case border5+10:
      stage = 0;
      innerStage = 0;
      profLove = 0;
      juneLove = 0;
      late = 0;
      x = 0;
      bar = 800;
      pg_drawing.clear();
      bgm(0);
      for(let i = 1; i<soundAssets.length; i++){
        soundAssets[i].stop();
      }
      presentationScore = 0;
      stu =[];
      score = [0, 0, 0, 0, 0, 0, 0, 0];
      frame = 0;
      break;
    default:
      background(0);
  }

  if (stage != border2+2 && stage != border5+8){
    if (b1.over() ||b2.over()|| buttonL.over() || buttonM.over() || buttonR.over()) image(cursor_over,mouseX,mouseY,28,28);
    else image(cursor,mouseX,mouseY,22,22);
  }
  textFont(font);
  textSize(30);
  textAlign(RIGHT);
  fill(80,48,58);
  text('Press "R" to Restart',width-30, 40);
}

function loadingBar(){
    if (bar > 0){
      fill(220,48,58,255,30);
      noStroke();
      rectMode(CENTER);
      rect(width/2, height/2+250, bar, 30, 10);
      bar -= 2;
    } else {
      if (stage == border5+2){
        late += 1;
        if (late >= 2) stage = border5+7;
        else if (profLove >= 1 && juneLove >= 1) stage = border5+5;
        else if (profLove >= 1) stage = border5+3;
        else if (juneLove >= 1) stage = border5+4;
        else stage = border5+5;
      } else {
      late += 1;
      stage += 1;
      bar = 800;
      sound();
      }
    }
}
function loadingBar2(){
    if(bar2 > 0){
      fill(220,48,58,255,30);
      noStroke();
      rectMode(CENTER);
      rect(width/2, height/2-300, bar2, 30, 10);
      bar2 -= 1;
    } else {
      for(let i = 0; i<8; i++){
        if(score[i]>=100){
          presentationScore += 100;
        }
      }
      stage += 1;
      bar2 = 1000;
      sound();
    }
}


function selectTime(i){
  talking = false;
  innerTalking = false;
  b1 = new Button(0,0,0,0);
  b2 = new Button(0,0,0,0);
  buttonL = new ButtonCircle(width/4+20, height/2, 220);
  buttonM = new ButtonCircle(width/2, height/2, 220);
  buttonR = new ButtonCircle(width*3/4-20, height/2, 220);
  image(select[i],0,0);
  if (buttonL.over()) image(select[i][1],0,0);
  else if (buttonM.over()) image(select[i][2],0,0);
  else if (buttonR.over()) image(select[i][3],0,0);
  else image(select[i],0,0);
  loadingBar();
}

function normalTime(){
  talking = true;
  innerTalking = false;
  b1 = new Button(0,0,width,height);
  b2 = new Button(0,0,0,0);
  buttonL = new ButtonCircle(0,0,0);
  buttonM = new ButtonCircle(0,0,0);
  buttonR = new ButtonCircle(0,0,0);
}
function talkTime(){
  talking = true;
  innerTalking = false;
  b1 = new Button(345,855,1230,205);
  b2 = new Button(0,0,0,0);
  buttonL = new ButtonCircle(0,0,0);
  buttonM = new ButtonCircle(0,0,0);
  buttonR = new ButtonCircle(0,0,0);
  if(frameCount % 60 < 30){
    image(arrow,0,0);
  }
}
function timeOver(){
  talking = false;
  innerTalking = false;
  b1 = new ButtonCircle(0,0,0);
  b2 = new Button(0,0,0,0);
  buttonL = new ButtonCircle(0,0,0);
  buttonM = new ButtonCircle(0,0,0);
  buttonR = new Button(345,855,1230,205);
  if(frameCount % 60 < 30){
    image(arrow,0,0);
  }
}
function gameTime(){
  talking = false;
  innerTalking = false;
  b1 = new Button(0,0,0,0);
  b2 = new Button(0,0,0,0);
  buttonL = new ButtonCircle(0,0,0);
  buttonM = new ButtonCircle(0,0,0);
  buttonR = new ButtonCircle(0,0,0);
}
function answerL(){
  talking = false;
  innerTalking = false;
  b1 = new ButtonCircle(0,0,0);
  b2 = new Button(0,0,0,0);
  buttonL = new ButtonCircle(0,0,0);
  buttonM = new Button(345,855,1230,205);
  buttonR = new ButtonCircle(0,0,0);
  if(frameCount % 60 < 30){
    image(arrow,0,0);
  }
}
function answerM(){
  talking = false;
  innerTalking = false;
  b1 = new ButtonCircle(0,0,0);
  b2 = new Button(0,0,0,0);
  buttonL = new Button(345,855,1230,205);
  buttonM = new ButtonCircle(0,0,0);
  buttonR = new ButtonCircle(0,0,0);
  if(frameCount % 60 < 30){
    image(arrow,0,0);
  }
}
function answerR(){
  talking = false;
  innerTalking = false;
  b1 = new Button(345,855,1230,205);
  b2 = new Button(0,0,0,0);
  buttonL = new ButtonCircle(0,0,0);
  buttonM = new ButtonCircle(0,0,0);
  buttonR = new ButtonCircle(0,0,0);
  if(frameCount % 60 < 30){
    image(arrow,0,0);
  }
}
function afterAnswer(){
  talking = false;
  innerTalking = true;
  b1 = new ButtonCircle(0,0,0);
  buttonL = new ButtonCircle(0,0,0);
  buttonM = new ButtonCircle(0,0,0);
  buttonR = new ButtonCircle(0,0,0);
  b2 = new Button(345,855,1230,205);
  if(frameCount % 60 < 30){
    image(arrow,0,0);
  }
  bar = 800;
}


function setNumber(n){
  innerStage = n;
}

function quake(img){
  if(frameCount%10 >= 0 && frameCount%10 < 2){
    push();
    translate(-50, -30);
    image(img, 0, 0);
    pop();
  } else if(frameCount%10 >= 2 && frameCount%10 < 4) {
    push();
    translate(50, -30);
    image(img, 0, 0);
    pop();
  } else if(frameCount%10 >= 4 && frameCount%10 < 6) {
    push();
    translate(50, 30);
    image(img, 0, 0);
    pop();
  } else if(frameCount%10 >= 6 && frameCount%10 < 8) {
    push();
    translate(-50, 30);
    image(img, 0, 0);
    pop();
  } else {
    image(img, 0, 0);
  }
}

function particle() {
  this.posX = random(width);
  this.posY = random(height);
  this.initialangle = random(0, PI);
  this.size = random(2, 5);
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    let w = 0.2;
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);
    this.posY -= pow(this.size, 0.5);

    if (this.posY < 0) {
      let index = particles.indexOf(this);
      particles.splice(index, 1);
    }
  }

  this.display = function() {
    fill(255, 150);
    ellipse(this.posX, this.posY, this.size, this.size);
  };
}

function light() {
  let y = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5 , 4, 4, 4, 4, 4, 3, 3, 3, 3, 3,2, 2, 2, 2, 2,1, 1, 1, 1, 1];
  for (let i = 0; i < 30; i++){
    fill(255, 100);
    circle(lightsX[i], lightsY[i]+y[frameCount%50], lightsR[i]-y[frameCount%50]);
    fill(255, 50);
    circle(lightsX[i], lightsY[i]+y[frameCount%50], lightsR[i]*1.3-y[frameCount%50]);
    fill(255, 25);
    circle(lightsX[i], lightsY[i]+y[frameCount%50], lightsR[i]*1.6-y[frameCount%50]);
  }
}

function bgm(i) {
  if(i>=1){
    for(let j=0; j<i; j++){
      soundAssets[j].stop();
    }
    soundAssets[i].play();
    soundAssets[i].loop();
    soundAssets[i].setVolume(0.5);
  } else{
    soundAssets[i].play();
    soundAssets[i].loop();
    soundAssets[i].setVolume(0.5);
  }
}

function profUp(min, max){
  if (alpha>0){
    // image(timeTracker, -1000, -540, 1, 1);
    // frame = timeTracker.getCurrentFrame();
    // if(frame >= min && frame < max){
    alpha -= 5;
  } else if (alpha == 0) {
  profLove += 1;
  alpha -= 5;
  } else {
    image(blackOpacity,0,0);
    image(loveUp[0], 0, 0);
    image(loveUp[2], 0, -(frameCount%40/5));
    image(loveUp[3], 0, -(frameCount%40/5));
    alpha -= 5;
  }
}
// }
function profDown(min, max){
  if (alpha>0){
    alpha -=5;
  } else if (alpha == 0){
  profLove -= 1;
  alpha -= 5;
  } else {
    image(blackOpacity,0,0);
    image(loveDown[0], 0, 0);
    image(loveDown[2], 0, (frameCount%40/5));
    image(loveDown[3], 0, (frameCount%40/5));
    alpha -=5;
  }
}
function teamUp(min, max){
  if (alpha>0){
    // image(timeTracker, -1000, -540, 1, 1);
    // frame = timeTracker.getCurrentFrame();
    // if(frame >= min && frame < max){
    alpha -= 5;
  } else if (alpha == 0) {
  juneLove += 1;
  alpha -= 5;
  } else {
    image(blackOpacity,0,0);
    image(loveUp[1], 0, 0);
    image(loveUp[2], 0, -(frameCount%40/5));
    image(loveUp[3], 0, -(frameCount%40/5));
    alpha -= 5;
  }
}
function teamDown(min, max){
  if (alpha>0){
    alpha -=5;
  } else if (alpha == 0){
  juneLove -= 1;
  alpha -= 5;
  } else {
    image(blackOpacity,0,0);
    image(loveDown[1], 0, 0);
    image(loveDown[2], 0, (frameCount%40/5));
    image(loveDown[3], 0, (frameCount%40/5));
    alpha -=5;
  }
}

function gauge(object, score){
  if(object.stuOver()){
    rectMode(CORNER);
    fill(255, 200, 200);
    rect(mouseX, mouseY+100-score, 30, score);
    rectMode(CENTER);
  }
}

function mouseClicked() {
  if (stage == border4+6){
    for(let i=1; i<8; i++){
      if(stu[i].stuOver()==true){
        if(score[i]<100){
          score[i] += 15;
          } else {
            score[i]=100;
          }
      }
    }
  } else if (stage == border2+2 && b1.over()){
    drawing = pg_drawing.get(584,295,716,465);
    drawing.resize(600,0);
    for (i=length-1; i>0; i--){
      drawings[i] = drawings[i-1];
    }
      drawings[0] = drawing;
      pg_drawing.clear();
    stage += 1;sound();
  } else if (stage == border5+2){
      if (buttonL.over()||buttonM.over()||buttonR.over()){
        if (late >= 2) stage = border5+7;
        else if (profLove >= 1 && juneLove >= 1) stage = border5+6;
        else if (profLove >= 1) stage = border5+3;
        else if (juneLove >= 1) stage = border5+4;
        else stage = border5+5;
        }
    } else {
    if (b1.over()) {stage += 1;sound();}
    else if (buttonL.over()) {stage += 2;sound();} 
    else if (buttonM.over()) {stage += 3;sound();} 
    else if (buttonR.over()) {stage += 4;sound();} 
    else if (b2.over()) {innerStage += 1;sound();} 
    else if (b3.over()) {stage += 5;sound();}
  }
  }

function keyPressed() {
  if (keyCode === 82){
    stage = 0;
    innerStage = 0;
    profLove = 0;
    juneLove = 0;
    late = 0;
    x = 0;
    bar = 800;
    pg_drawing.clear();
    bgm(0);
    for(let i = 1; i<soundAssets.length; i++){
      soundAssets[i].stop();
    }
    presentationScore = 0;
    stu =[];
    score = [0, 0, 0, 0, 0, 0, 0, 0];
    frame = 0;
  }

  if(keyCode === 32 && talking == true){
    stage += 1;
    sound();
  } else if (keyCode === 32 && innerTalking == true){
    innerStage += 1;
  } else if (keyCode === 32 && timeOver()){
    innerStage += 4;
  } else if (keyCode === 32 && answerL()){
    stage += 3;
  } else if (keyCode === 32 && answerM()){
    stage += 2;
  } else if (keyCode === 32 && answerR()){
    stage += 1;
  }
}


function sound(){
  switch (stage){
    case 0: soundAssets[0].play(); break;
    case 1: bgm(1);break;

    case border: bgm(2); break;
    case border+4: switch(innerStage){
      case 0: bgm(3); break;} break;
    case border+5: switch(innerStage){
      case 0: bgm(4); break;} break;
    case border+6:switch(innerStage){
      case 0:bgm(5);break;}break;
    case border+7: switch(innerStage){
      case 0: bgm(6); break;}break;

    case border2: bgm(7); break;
    case border2+6:switch(innerStage){
      case 5:bgm(8); break;} break;
    case border2+7: switch(innerStage){
      case 5: bgm(9);break;} break;
    case border2+8: switch(innerStage){
      case 5: bgm(10); break;} break;
    case border2+9: switch(innerStage){
      case 5:bgm(11);break;} break;
    
    case border3: bgm(12); break;
    case border3+7: switch(innerStage){
      case 10:bgm(13); break;} break;
    case border3+8: switch(innerStage){
      case 10:bgm(14); break;} break;
    case border3+9: switch(innerStage){
      case 10:bgm(15); break;} break;
     case border3+10: switch(innerStage){
      case 10:bgm(16); break;} break;

    case border4:bgm(17);break;
    case border4+6:bgm(18); break;
    case border4+8: switch(innerStage){
      case 16:bgm(19); break;} break;
    case border4+9: switch(innerStage){
      case 16:bgm(20); break;} break;
    case border4+10: switch(innerStage){
      case 16:bgm(21); break;} break;

    case border5:bgm(22);break;
    case border5+3: switch(innerStage){
      case 21:bgm(23); break;} break;
    case border5+4: switch(innerStage){
      case 21:bgm(24); break;} break;
    case border5+5: switch(innerStage){
      case 21:bgm(25); break;} break;
    case border5+6: switch(innerStage){
      case 21:bgm(26); break;} break;
    case border5+7: switch(innerStage){
      case 21:bgm(27); break;} break;
  }
}