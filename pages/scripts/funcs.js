 
import elstyle from '../../styles/calendar.module.css'


 export default function Navbar() {
    return(
    <nav className={elstyle.nav}> 
    <img className={elstyle.logo} alt="Blossom Logo" src="./blossom.logo.png"></img>
    <p  className={elstyle.sitetitle}>
       Calendar
    </p>
    <div className={elstyle.navicons} >
          <a href="/Home" > <img className={elstyle.homeicon} alt=" Home" src="./home.png"></img></a>

          <a href="/Profile"><img className={elstyle.profileicon} alt=" profile" src="./profile.png"></img> </a>
     </div>
    </nav>
    )
  } 
 
  
  export function mainContent(count)
  {
    if(count ==1){
   return ( 
   <div>
         <p>Journal {count} </p>
         <p> The time I have with myself is the most important.I change. I grow. I know myself a little more each time. </p>
         <p> I want my voice back.

         This year, I would like to work on that a bit more: Finding my voice.

         Knowing who I am just a little bit better. So that I can love me more with each and every passing day. The thought is a little sad actually: We are all so busy with our lives, we don’t have enough time to grow.

         And I find that just spending 1-2 hours by yourself, for yourself, isn’t enough at all. It takes 5+ hours sometimes of contemplation, of feeling, or exploring that tentative zone of darkness within us.

         Because it’s within that dark zone where the best and beautiful parts of ourselves “hide”. And they “hide” only because there is nothing like it in the physical world for us to compare it to. For it to be known as real.

         It takes time and presence to translate those “things” in the darkness into something of words, feelings, thoughts, and ideas.

         The beginning is never easy.

         More than anything in life, we as people need this.

         For art. For beauty. For poetry. For love. For souls.

         It all begins this way. In understanding.
       </p>
</div>
   )
  }


  if(count ==2){
    return(
      <div>
        <p>Journal {count} </p>
        <p>   My eyes are getting heavier tonight. I should sleep soon. It’s funny how I always think I have nothing to say but once I play with the start of ideas, it all starts to come down like rain.</p>
        <p> I needed this. To know I still have it in me. If I were to ever lose this part of myself… I’m not sure how I’d take that.

          For sure, I would feel so sad and so alone. Lost even.

          Writing is another love of mine. Writing is a form of looking in the mirror. Like drawing a figure. It is the drawing of one’s soul. Of one’s subconscious.

          Perhaps if you write the cusp of one’s soul and draw it out like a thread from the tangle of nothingness. And perhaps soon – it can become poetry.</p>

        <p> I needed this. To know I still have it in me. If I were to ever lose this part of myself… I’m not sure how I’d take that.

          For sure, I would feel so sad and so alone. Lost even.

          Writing is another love of mine. Writing is a form of looking in the mirror. Like drawing a figure. It is the drawing of one’s soul. Of one’s subconscious.

          Perhaps if you write the cusp of one’s soul and draw it out like a thread from the tangle of nothingness. And perhaps soon – it can become poetry.</p>
      </div>
    )
  }

  if(count ==3) {
    return ( 
     <div>
        <p>Journal {count} </p>
        <p>
          The mind can be its own worst enemy sometimes… More so than any angry comment, uncaring action, or thoughtlessly spewed words by others to you.</p>
        <p>
          You say the worst things to yourself. You make yourself cry and you mean to make yourself cry. Why? Why are you so mean to yourself?
          The world can be so hurtful sometimes, so why must you stoop so low to even yourself?</p>
        <p>You must take care of yourself even more so during the times the world is busy and can’t seem to care at the moment for you. Later, they will ask for forgiveness. Later, they will be kind and care. Later they will explain.
          But right now, you must not hurt yourself even more.</p>
        <p>
          You say the worst things to yourself. You make yourself cry and you mean to make yourself cry. Why? Why are you so mean to yourself?
          The world can be so hurtful sometimes, so why must you stoop so low to even yourself?</p>
        <p>You must take care of yourself even more so during the times the world is busy and can’t seem to care at the moment for you. Later, they will ask for forgiveness. Later, they will be kind and care. Later they will explain.
          But right now, you must not hurt yourself even more.</p>

    </div>
    )
     }

     if(count ==4) {
      return ( 
       <div>
          <p>Journal {count} </p>
          <p> Am I always going to keep others at arm’s length?
            You will never be able to make true, close friends like that. You must learn to give completely. Not be afraid. Freely love. Freely give love and affection to everyone.
            It is what you are missing the most from life right now. So love. Love not just internally. Let the love go everywhere around you. Stop being so afraid of getting hurt. You will gain more than what you could ever lose.
            I named my painting “What I See of You”. My art is a reminder of how much I love and care for people.</p>
          <p> Am I always going to keep others at arm’s length?
            You will never be able to make true, close friends like that. You must learn to give completely. Not be afraid. Freely love. Freely give love and affection to everyone.
            It is what you are missing the most from life right now. So love. Love not just internally. Let the love go everywhere around you. Stop being so afraid of getting hurt. You will gain more than what you could ever lose.
            I named my painting “What I See of You”. My art is a reminder of how much I love and care for people.</p>
      </div>
      )
       }
       
      
       return (
        <div>
           <p> The time I have with myself is the most important. I change. I grow. I know myself a little more each time. </p>
           <p> I want my voice back.

             This year, I would like to work on that a bit more: Finding my voice.

             Knowing who I am just a little bit better. So that I can love me more with each and every passing day. The thought is a little sad actually: We are all so busy with our lives, we don’t have enough time to grow.

             And I find that just spending 1-2 hours by yourself, for yourself, isn’t enough at all. It takes 5+ hours sometimes of contemplation, of feeling, or exploring that tentative zone of darkness within us.

             Because it’s within that dark zone where the best and beautiful parts of ourselves “hide”. And they “hide” only because there is nothing like it in the physical world for us to compare it to. For it to be known as real.

             It takes time and presence to translate those “things” in the darkness into something of words, feelings, thoughts, and ideas.

             The beginning is never easy.

             More than anything in life, we as people need this.

             For art. For beauty. For poetry. For love. For souls.

             It all begins this way. In understanding.

           </p>
        </div>
       )

  }

  
  export function headerOfdate(count)
  {
   return  <p style={{color:'#2c2a2a', fontweight: '600'}}>November, {count} , 2022 </p>
    
  }



  export function Reflection(count)
  {
    if( count==1){
   return (
    <div> 
     <p>As I grow older I have learned things about myself that I never thought were possible. Things seem to change with each passing moment and it is sometimes hard to keep up with even myself. </p>
     <p> Starting graduate school has been one of the biggest decisions in my life and seeing where it takes me over the next two and a half years will be a blast, but I know it wont be without hardships.</p>
     </div>
   )
   }

   if( count==2){
    return (
     <div>
      <p> When we have a setback, or when our illness has taken hold of us, we must admit it to ourselves and, when necessary, to others.</p>
      <p> Some of us may be tempted to try to fool others (or ourselves) into believing that everything is fine. We don't want to admit that we have taken a step back. </p>
      </div>
    )
    }

    if( count==3){
      return (
       <div>
        <p>Chances are, we never thought we would experience a mental illness; never thought we would become isolated or at times lose all hope; never thought suicide might become an obsession; never thought we could be institutionalized; never thought we could act so out of control, often against our morals or values. </p>
        <p> Today, I focused on what is possible here and now?</p>
        
        </div>
      )
      }

      if( count==4){
        return (
         <div>
          <p>We also probably never thought we could find hope and recover, never thought we could learn to cope with the illness, be reasonably content with ourselves, and live each day as best we can. Yet all of this can happen to us. </p>
          <p> Setbacks are normal from time to time. They do not make us weaker or less valued. When we feel tempted to deny our situation, let us cast aside our fear and pride and admit that we are having trouble. </p>
          </div>
        )
      }       
      
      return (
        <div>         
         <p>As I grow older I have learned things about myself that I never thought were possible. Things seem to change with each passing moment and it is sometimes hard to keep up with even myself. </p>
         <p> Starting graduate school has been one of the biggest decisions in my life and seeing where it takes me over the next two and a half years will be a blast, but I know it wont be without hardships.</p>       
         </div>
       )
  }


  export function todo(count)
  { if(count==1){
   return (
    <div>
       <label className={elstyle.container}>Do Laundry

         <span className={elstyle.checkmark}></span>
       </label>

       <label className={elstyle.container}>Submit my assignments

         <span className={elstyle.checkmark}></span>
       </label>

       <label className={elstyle.container}>Buy Groceries

         <span className={elstyle.checkmark}></span>
       </label>

       <label className={elstyle.container}>Send Email

         <span className={elstyle.checkmark}></span>
       </label>

       <label className={elstyle.container}>Apply for Internship

         <span className={elstyle.checkmark}></span>
       </label>
      
    </div>
   ) 
    }

if(count==2){
      return (
        <div>
          <label className={elstyle.container}>Cleaning

            <span className={elstyle.checkmark}></span>
          </label>

          <label className={elstyle.container}>Submit my activity

            <span className={elstyle.checkmark}></span>
          </label>

          <label className={elstyle.container}>Visit my doctor

            <span className={elstyle.checkmark}></span>
          </label>

          <label className={elstyle.container}>Fill my forms

            <span className={elstyle.checkmark}></span>
          </label>

          <label className={elstyle.container}>Apply for job

            <span className={elstyle.checkmark}></span>
          </label>
        
      </div>
      ) 
       }


 if (count == 3) {
      return (
        <div>
          <label className={elstyle.container}>Call my friend

            <span className={elstyle.checkmark}></span>
          </label>

          <label className={elstyle.container}>Go to my class

            <span className={elstyle.checkmark}></span>
          </label>

          <label className={elstyle.container}>Return my stuffs

            <span className={elstyle.checkmark}></span>
          </label>

          <label className={elstyle.container}>Send email for my boss

            <span className={elstyle.checkmark}></span>
          </label>

          <label className={elstyle.container}>Do youga

            <span className={elstyle.checkmark}></span>
          </label>

        </div>
        ) 
         }


 if(count==4){
          return (
            <div>
              <label className={elstyle.container}>Go to the gym

                <span className={elstyle.checkmark}></span>
              </label>

              <label className={elstyle.container}>Organize my room

                <span className={elstyle.checkmark}></span>
              </label>

              <label className={elstyle.container}>Buy Groceries

                <span className={elstyle.checkmark}></span>
              </label>

              <label className={elstyle.container}>Go to the pool

                <span className={elstyle.checkmark}></span>
              </label>

              <label className={elstyle.container}>Visit my family

                <span className={elstyle.checkmark}></span>
              </label>
            
          </div>
          ) 
           }


    return (
      <div>
        <label className={elstyle.container}>Do Laundry

          <span className={elstyle.checkmark}></span>
        </label>

        <label className={elstyle.container}>Submit my assignments

          <span className={elstyle.checkmark}></span>
        </label>

        <label className={elstyle.container}>Buy Groceries

          <span className={elstyle.checkmark}></span>
        </label>

        <label className={elstyle.container}>Send Email

          <span className={elstyle.checkmark}></span>
        </label>

        <label className={elstyle.container}>Apply for Internship

          <span className={elstyle.checkmark}></span>
        </label>

      </div>
    ) 

  }
  
  
  