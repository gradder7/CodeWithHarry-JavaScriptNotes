class RailwayForm1 {
  //always calls when we create an new object
  constructor(name1, tnum, address) {
    console.log(
      "i am a constuctor" +
        " given name " +
        name1 +
        " " +
        "train numberv " +
        tnum
    );
    this.name = name1;
    this.tnum = tnum;
    this.address = address;
  }
  //methods of class
  submit() {
    console.log(this.name + " submitted", "trainNumber=>", this.tnum);
  }
  preview() {
    alert(
      "Name=> "+
      this.name+
      "\n"+
      "train number=> "+
      this.tnum+
      "\n"+
      "address=>"+
      this.address
    );
  }
  cancle() {
    console.log(this.name + " cancled", "trainNumber=>", this.tnum);
    //reset value of cancle
    this.tnum=0;
  }
}

//harry and ram is an objects
//create the form for harry
//when harry obj is called than constructor also runs
let Himanshu = new RailwayForm1("himanshu", 11221, "khari bazar");
let anshu = new RailwayForm1("anshu", 100001, "dharampur,d.dun");

//calling the methods
Himanshu.submit();
Himanshu.preview();
anshu.submit();
anshu.cancle();
