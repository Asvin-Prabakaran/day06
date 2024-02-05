//CIRCLE

class circle{
    constructor(radius){
      area = 3.14*radius
      circumference= 2*3.14*radius;
      this.area = area;
      this.circumference=circumference;
    }
    print_res(){
      return `the area is ${this.area}, 
      the circumference is ${this.circumference}`
  }
  }
  var area;
  var circumference;
  var res;
  var a = new circle(2);
  console.log(a.print_res());
  
  // person detail
  
  class person {
    constructor(name,age,gender,qualification,work){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.qualification = qualification;
        this.work = work ;
      
        }
    
    print_display(){
        
        console.log(
        `"name" :${this.name},
        "age" : ${this.age},
        "gender" : ${this.gender},
        "qualification" : ${this.qualification},
        "work" : ${this.work}`)
        
    }
    }
    var p1 = new person ("Arjun",23,"male","b-tech","TCS");
    var p2 = new person ("mahi",20,"female","b-tech","HCL");
    console.log(p1.print_display());
    console.log(p2.print_display());
  
    //movie ticket
  
    class movie {
      constructor(moviename,numberofppls,showtiming,price){
          this.moviename = moviename;
          this.numberofppls = numberofppls;
          this.showtiming = showtiming;
          this.price = 110*numberofppls;
        
          }
          
          print_display(){
              
              console.log(
              `${this.moviename},
              ${this.numberofppls},
              ${this.showtiming},
              ${this.price}`)
              
          }
          }
        var m1 = new movie ("leo", 5 , "11:50");
        var m2 = new movie ("KGF", 6 , "12:50");
        console.log(m1.print_display());
        console.log(m2.print_display());
      
   
    // URBAN PRICE
  
    class ubar{
      constructor(model,capacity,destination,km,price){
        this.model = model
        this.capacity = capacity
        this.destination = destination
        this.km = km
        this.price = km*50
      
    
      
      }
      print_display(){
        console.log(`
      ${this.model}
        ${this.capacity}
        ${this.destination}
        ${this.km}
        ${this.price}`)
      }
    }
    var car1 = new ubar ("toyota crysta", 7 , "kerala",750)
    var car2 = new ubar ("kia",5,"chennai",320)
    console.log(car1.print_display())
    console.log(car2.print_display())