const workCurrent = document.getElementById('workcurrent');
   const workPrevious = document.getElementById('workprevious');

   const playCurrent =document.getElementById('playcurrent');
   const playPrevious = document.getElementById('playprevious');

   const studyCurrent =document.getElementById('studycurrent');
   const studyPrevious = document.getElementById('studyprevious');

   const exerciseCurrent = document.getElementById('exercisecurrent');
   const exercisePrevious = document.getElementById('exerciseprevious');

   const socialCurrent = document.getElementById('socialcurrent');
   const socialPrevious = document.getElementById('socialprevious');

   const selfCareCurrent = document.getElementById('selfcarecurrent');
   const selfCarePrevious = document.getElementById('selfcareprevious');


 

// Fetching data from the data.jsonfile


 const UpdateContent =() => {
  fetch("./data.json")
        .then((res) => res.json())
        .then((data) => 
            data.forEach(item => {
               let itemTimeFrame = item.timeframes.daily;
              
               if(frequency === "Weekly")
                 itemTimeFrame = item.timeframes.weekly;
               
               if(frequency === "Monthly")
                 itemTimeFrame =item.timeframes.monthly;
          

             

             switch (item.title){
               case  'Work' : 
                workCurrent.innerText = itemTimeFrame.current;
                workPrevious.innerText = itemTimeFrame.previous;

                case 'Play':
                playCurrent.innerText = itemTimeFrame.current
                playPrevious.innerText = itemTimeFrame.previous;  
                
                case 'Study':
                studyCurrent.innerText = itemTimeFrame.current
                studyPrevious.innerText = itemTimeFrame.previous;
                
                case 'Exercise':
                exerciseCurrent.innerText = itemTimeFrame.current
                exercisePrevious.innerText = itemTimeFrame.previous;

                case 'Social':
                socialCurrent.innerText = itemTimeFrame.current
                socialPrevious.innerText = itemTimeFrame.previous;

                case 'Self Care':
                selfCareCurrent.innerText = itemTimeFrame.current
                selfCarePrevious.innerText = itemTimeFrame.previous;
                
                break; 
                

             }
            })
          
         
        )
        .catch((err) => console.error(err));
      };

      UpdateContent();

       let frequency = "Daily";

        //  frequency Buttons

      const dailyBtn = document.querySelector("#daily");
      const weeklyBtn = document.querySelector("#weekly");
      const monthlyBtn = document.querySelector("#monthly");


      dailyBtn.addEventListener("click",()=>{
        frequency = 'Daily';
        UpdateContent();
      });

      weeklyBtn.addEventListener("click",()=>{
        frequency = 'Weekly';
        UpdateContent();
       
      });

      
      monthlyBtn.addEventListener("click",()=>{
        frequency = 'Monthly';
        UpdateContent();
      });
