// ***********************Assignment 4: Student List Organizer*********************
// Tasks:
// 1. Student Data: The provided code defines an interface named Student that describes 
// student information like name, senior status (true/false), and whether they've completed 
// their assignments (true/false).
// o Imagine this as a template for organizing student details.
interface Student{
    name:string;
    isSeniorStudent: Boolean;
    completedAssignments: Boolean;
};
// 2. Student List:
// o An array named students stores information about several students using the 
// Student template. Think of this array as your class list!

const students: Student[] =[ {
    name: "Aman",
    isSeniorStudent: true,
    completedAssignments: true,
},
 {
    name:"Ahmed",
    isSeniorStudent:false,
    completedAssignments:true,
},
{
    name: "Awais",
    isSeniorStudent: true,
    completedAssignments: false,
},
];
// 3. Find Senior Students with Assignments (Optional):
// o The code (not shown here) has a function that might find students who are seniors 
// and have completed their assignments.
// o Can you guess why this information might be helpful?
function findSeniorStudentsWithCompAssign(students:Student[]):Student[]{
    return students.filter((students)=>students.isSeniorStudent && students.completedAssignments)
};
let seniorStudentsWithCompletedAssignments=findSeniorStudentsWithCompAssign;
console.log("Senior Students With Completed Assignments" , seniorStudentsWithCompletedAssignments);
 
// 4. Class List Update:
// o Imagine you need to update your class list! The code (not shown here) might have 
// a function that removes students who haven't completed their assignments 
// (assuming only seniors are responsible).
// o Can you think of any reasons why this might be useful (consider limitations)?
function updateClassList(student:Student[]):Student[]{
    return student.filter((student)=>student.isSeniorStudent && student.completedAssignments)
};
let updatedClassList=updateClassList;
console.log("updated Class List" , updatedClassList(students));


 