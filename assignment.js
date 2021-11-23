// Foot to Mile
function feetToMile(feet){
    var mile = feet*0.000189394;
    return mile;
    // console.log(feet + " Feet is equal to " + mile);
}
// feetToMile(Enter feet value)


// Wood Calculator
function woodCalculator(chair, table, bed){
    let chairWood = 1 * chair;
    let tableWood = 3 * table;
    let bedWood = 5 * bed;
    let woods = chairWood + tableWood + bedWood;
    return woods;
    // console.log(woods);
}
// woodCalculator(Chair, Table, Bed);


// Brick Calculator
function stepsCalculator(steps){
    if (steps<=10) {
        let firstTen = (steps*15)*1000;
        return firstTen;
        // console.log(firstTen);
    }
    else if(steps<=20){
        let secTen = (((steps-10)*12)*1000)+150000;
        return secTen;
        // console.log(secTen);
    }
    else{
        let all = (((steps-20)*10)*1000)+120000+150000;
        return all;
        // console.log(all);
    }
}
// stepsCalculator(Building steps);


// Shortest Name Friend
function tinyFriend(friends){
    let initial = 0;
    let tFriend = "";
    for(let friend of friends){
        if (friend.length>initial) {
            initial = friend.length;
            tFriend = friend;
        }else if(friend.length==initial){
            tFriend+=`, ${friend}`;
        }
    }
    return tFriend;
    // console.log(tFriend);
}
// tinyFriend([
//     "Liam",
//     "Olivia",
//     "Noah",
//     "Emma",
//     "Oliver",
//     "Ava",
//     "William",
//     "Sophia",
//     "Elijah",
//     "Isabella",
//     "James",
//     "Benjamin",
//     "Amelia",
//     "Lucas",
//     "Mia",
//     "Mason",
//     "Harper",
//     "Ethan",
//     "Evelyn"
// ]);