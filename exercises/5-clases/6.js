class CoolGuy {
    constructor (trick) {
      this.specialTrick = trick;
    }
  
    showOff () {
      this.output("Here's my trick: ", this.specialTrick);
    }
    output (str, trick) {
      console.log(str, trick);
    }
  }
  
  let Joe = new CoolGuy('jumping rope');
  
  Joe.showOff(); // Here's my trick: jumping rope
