var chalk=require("chalk");
var readlinesync=require("readline-sync");
console.log(chalk.bold.dim.underline.yellowBright("WELCOME!to NAMRATA JAIN's quiz world"));
var username=readlinesync.question(chalk.italic.blue("what's your name?\n"));
console.log(chalk.italic.black.bgWhiteBright("\nhello!",username));
var userchoice=readlinesync.question(chalk.italic.dim.green("would you like to play the game or quit the game?enter 'p' to play and 'q' to quit according to your choice.\n"));
if(userchoice.toUpperCase()=="P")
{
console.log(chalk.italic.blue("\nwhich webseries quiz do you wish to play!?\ntvd quiz/the originals quiz?"));
var useranswer=readlinesync.question(chalk.italic.dim.green("enter '1'for tvd,'2' for the originals!!\n"));

if(useranswer=='1')
{
  console.log(chalk.yellowBright("_____________________________________________________\n"));
  console.log(chalk.italic.yellowBright("hello!",username,"we warmly welcome you to tvd quiz\n"));

  var questionone={
    question:"who are the salvatore brother's?",
    option1:"1)damon and stefan",
    option2:"2)matt and tyler",
    option3:"3)damon and alaric",
    option4:"4)enzo and enders",
    answer:1
  }
  var questiontwo={
    question:"what's elena's last name?",
    option1:"1)green",
    option2:"2)gilbert",
    option3:"3)sullivan",
    option4:"4)gilford",
    answer:2
    }
  var questionthree={
    question:"why do vampires hate the herb vervain?",
    option1:"1)vervain makes them grow excess hair.",
    option2:"2)vervain protects human from being compelled by them.",
    option3:"3)vervain decreaces their hunger for blood.",
    option4:"4)vervain heals human.",
    answer:2   
  }
  var questionfour={
    question:"who is elena's brother?",
    option1:"1)james gilbert",
    option2:"2)john gilbert",
    option3:"3)jeremy gilbert",
    option4:"4)jeff gilbert",
    answer:3
  }
  var questionfive={
    question:"what is the only way elena could wake up from her coma?",
    option1:"1)damon salvatore must kiss her.",
    option2:"2)bonnie bennett must die.",
    option3:"3)stefan salvatore must find the cure.",
    option4:"4)jeremy must die.",
    answer:2
  }
  var questionsix={
    question:"who did elena date first in mystic falls?",
    option1:"1)matt donovan",
    option2:"2)stefan salvatore",
    option3:"3)tyler lockwood",
    option4:"4)damon salvatore",
    answer:1
  }
  var questionseven={
    question:"what are the names of stefan's doppelgangers?",
    option1:"1)shamus and tim",
    option2:"2)matt and tyler",
    option3:"3)silas and tom",
    option4:"4)silas and tyler",
    answer:3
  }
  var questioneight={
    question:"whose blood could help klaus create hybrids?",
    option1:"1)stefan",
    option2:"2)elena",
    option3:"3)damon",
    option4:"4)caroline",
    answer:2
  }
  var questionnine={
    question:"jeremy gilbert is what type of supernatural being?",
    option1:"1)werewolf",
    option2:"2)witch",
    option3:"3)vampire hunter",
    option4:"4)vampire",
    answer:3
  }
  var questionten={
    question:"who is the father of jo's twins that caroline births?",
    option1:"1)alaric saltzman",
    option2:"2)stefan salvatore",
    option3:"3)matt donovan",
    option4:"4)tyler lockwood",
    answer:1
      }

  var array=[questionone,questiontwo,questionthree,questionfour,questionfive,questionsix,questionseven,questioneight,questionnine,questionten];
  var score=0;
  for(var i=0;i<array.length;i++)
  {
    console.log(chalk.yellow("QUESTION:"),array[i].question);
    console.log(array[i].option1);
    console.log(array[i].option2);
    console.log(array[i].option3);
    console.log(array[i].option4);

    var ans=readlinesync.question(chalk.italic.dim.green("\nchoose one option:"));
     if (ans==array[i].answer)
     {
       console.log(chalk.italic.green("you are right!"));
       score=score+1;
       console.log(chalk.yellowBright("your current score is:",score));
       console.log(chalk.blue("\n_____________________________________\n"));
     }else
       {
        console.log(chalk.italic.red("you are wrong!"));
        console.log(chalk.yellowBright("your current score is:",score));
        console.log(chalk.italic.yellow("right option is:",array[i].answer));
        console.log(chalk.blue("\n____________________________________\n")); 
       }
  } 
  console.log(chalk.italic.yellowBright("your final score is:",score));   
}

if(useranswer=='2')
{
  console.log(chalk.yellowBright("_____________________________________________________\n"));
console.log(chalk.italic.yellowBright("hello!",username,"we warmly welcome you to the originals quiz\n"));

var questionone={
question:"what brought mikaelson's back to the french quarter?",
option1:"1)klaus wanted control back over the city he built.",
option2:"2)marcel send them an e-invite for the party.",
option3:"3)klaus caught wind of plot brewing against him.",
answer:1
}
var questiontwo={
  question:"how did klaus first discovered that he was a hybrid?",
  option1:"1)his mother esther told him.",
  option2:"2)he activated the werewolf curse after his first kill.",
  option3:"3)he transformed during the full moon.",
  answer:2
}
var questionthree={
  question:"how many mikaelsons siblings are there?",
  option1:"1)4",
  option2:"2)5",
  option3:"3)6",
  answer:3
}
var questionfour={
  question:"who was the founder of the strix,the oldest vampire society in the world?",
  option1:"1)tristan de martel",
  option2:"2)aya-al-rashid",
  option3:"3)elijah mikaelson",
  answer:3
}
var questionfive={
  question:"why did rebekah wanted elijah to dagger her in season3 episode9?",
  option1:"1)she was tired of running.",
  option2:"2)the curse enacted by the dagger had return.",
  option3:"3)to embrace the prophecy of a mikaelson falling by the hands of a family.",
  answer:2
}
var questionsix={
  question:"why did klaus blood was not helpful in healing finn's wound that he got from lucien?",
  option1:"1)davina fused finn's soul to his body.",
  option2:"2)finn wanted to die and willed it so.",
  option3:"3)venom of all seven packs was added to the spell.",
  answer:3
}
var questionseven={
 question:"which dark object trapped tristan?",
  option1:"1)the devil's star",
  option2:"2)the cursed shackels",
  option3:"3)the serratura",
  answer:3
}
var questioneight={
  question:"how many time has klaus killed mikael?",
  option1:"1)1",
  option2:"2)2",
  option3:"3)3",
  answer:2
}
var array=[questionone,questiontwo,questionthree,questionfour,questionfive,questionsix,questionseven,questioneight];

var score=0;
for(var i=0;i<array.length;i++)
  {
    console.log(chalk.yellow("QUESTION:"),array[i].question);
    console.log(array[i].option1);
    console.log(array[i].option2);
    console.log(array[i].option3);

    var ans=readlinesync.question(chalk.italic.dim.green("\nchoose one option:"));
     if (ans==array[i].answer)
     {
       console.log(chalk.italic.green("you are right!"));
       score=score+1;
       console.log(chalk.yellowBright("your current score is:",score));
       console.log(chalk.blue("\n_____________________________________\n"));
     }else
       {
        console.log(chalk.italic.red("you are wrong!"));
        console.log(chalk.yellowBright("your current score is:",score));
        console.log(chalk.italic.yellow("right option is:",array[i].answer));
        console.log(chalk.blue("\n____________________________________\n")); 
       }
  }
  console.log(chalk.italic.yellowBright("your final score is:",score));    
}
}
else{
  console.log(chalk.yellow("thanks for joining!"));
}
