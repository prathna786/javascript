let scores = prompt("Enter Scores of Students(0-100)");
let grade;
if(scores  <=100 && scores >=90)
{
    grade = "A";
}
else if(scores<=89 && scores>=70)
{
    grade = "B";
}
else if(scores<=69 && scores>=60)
{
    grade = "C";
}
else if (scores<=59 && scores>=50)
{
    grade = "D";
}
else if(scores<=49 && scores>=0)
{
    grade = "F";
}
console.log("According to your scores,your grade was :",grade);
