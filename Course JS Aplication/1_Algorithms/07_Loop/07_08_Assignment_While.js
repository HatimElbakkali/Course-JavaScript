let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];

let index = 0;
let counter = 0;

while(index < friends.length){
    if (
      friends[index] != friends[2] &&
      friends[index] != friends[0] &&
      friends[index] != friends[6] &&
      friends[index] != friends[3] &&
      friends[index] != friends[4]
    ) {
      console.log(friends[index]);
    }
    index += 1;

}
