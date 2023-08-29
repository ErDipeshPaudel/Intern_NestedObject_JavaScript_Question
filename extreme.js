const input = {
  1: {
    id: 1,
    name: "John",
    children: [
      { id: 2, name: "Sally" },
      {
        id: 3,
        name: "Mark",
        children: [
          { id: 4, name: "Harry", children: [{ id: 15, name: "dipesh" }] },
          { id: 10, name: "jutta" },
        ],
      },
    ],
  },

  5: {
    id: 5,
    name: "Mike",
    children: [
      { id: 6, name: "Peter" },
      { id: 7, name: "sudip" },
    ],
  },
};

outputObj = {};

for (let i in input) {
  let outputObjLength = Object.keys(outputObj).length;
  outputObj[outputObjLength] = { id: input[i]?.id, name: input[i]?.name };
  if (input[i]?.children?.length) {
    hasChildren(input[i]?.children, outputObjLength);
  }
  // console.log(outputObjLength);
  // console.log(input[i]);
}

function hasChildren(child, index) {
  if (!outputObj[index]?.hasOwnProperty("children")) {
    outputObj[index]["children"] = [];
  }

  child?.forEach((ele) => {
    outputObj[index]["children"].push(ele?.id);
    let outputObjLength = Object.keys(outputObj).length;
    outputObj[outputObjLength] = { id: ele?.id, namae: ele?.name };
    if (ele?.children?.length) {
      hasChildren(ele?.children, outputObjLength);
    }
  });
}

console.log(outputObj);

// for (let i in input) {
//   outputObj = {
//     ...outputObj,
//     id: input[i]?.id,
//     name: input[i].name,
//     children: [],
//   };

//   console.log(outputObj);
//   if (input[i]?.children?.length) {
//     hasChildren(input[i]?.children);
//   }
// }

// function hasChildren(child) {
//   child.forEach((el) => {
//     outputObj = {
//       ...outputObj,
//       id: el.id,
//       name: el.name,
//       children: [],
//     };
//     console.log(outputObj);
//     if (el?.children) {
//       hasChildren(el?.children);
//     }
//   });
// }

//output
// {
//     '0': { id: 1, name: 'John', children: [ 2, 3 ] },
//     '1': { id: 2, name: 'Sally' },
//     '2': { id: 3, name: 'Mark', children: [ 4, 10 ] },
//     '3': { id: 4, name: 'Harry' },
//     '4': { id: 10, name: 'jutta' },
//     '5': { id: 5, name: 'Mike', children: [ 6, 7 ] },
//     '6': { id: 6, name: 'Peter' },
//     '7': { id: 7, name: 'sudip' }
// }
