let marks = 50
if(marks>80)
{
    console.log("A grade")
}
else if(marks>60)
{
    console.log("B grade")
}   
else{
    console.log("C grade")
}

switch(marks)
{
    case 90:    
        console.log("A grade");
        //break;
    case 80:
        console.log("B grade");
        //break;
    default:
        console.log("C grade");
}