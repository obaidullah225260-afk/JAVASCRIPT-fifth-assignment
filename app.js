                      //JavaScript Assignment (17 , 18 , 19 ,20)
                     //Start Of The Chapter (17 , 18 , 19 , 20) 
                    //Chapter Name ((Arrays: removing, inserting, and extracting element) , (for: loops) , 
                    // (for: loops flags, Boolean, arrayslength, and breaks) , 
                    // (for loops nested))
                function startup() {
                  // Chapter 17 Q (01)
                //Declare and initialize an empty multidimensional array (Array of arrays)
                let emptyMultiArray = [
                  [] , [] , ["Its an Empty Array" ] , [] , []
              ];
                      // Chapter 17 Q (02)
                //Declare and initialize a multidimensional array representing the given matrix
                let matrixArray = [
                 [0, 1, 2, 3],
                 [1, 0, 1, 2],
                 [2, 1, 0, 1]
                ];
                document.getElementById('headfirst').innerHTML = ("<h2> Empty array and Matrix counting")
                document.getElementById('textfirst').innerHTML = ("Empty Multidimensional Array:", emptyMultiArray [2]);
                // document.getElementById('textsecond').innerHTML = ("Matrix Multidimensional Array:", matrixArray);
                let outputfirst = "";
                for (let i = 0; i < matrixArray.length; i++) {
                  outputfirst += matrixArray[i] + "," + "<br>";
                   document.getElementById('textsecond').innerHTML = ("<br>" + "Matrix Multidimensional Array:", outputfirst);
                }
              }
                      function first() {
                         // Chapter 17 Q (03)
                            //Numerics Counting From 1 to 10
                  let numerics = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
                  document.getElementById('head1').innerHTML = ("<h2>Numerics counting from 1 to 10</h2>");
                for (var i = 0; i < numerics.length; i++) {
                  document.getElementById('text').innerHTML = (`${numerics}`);
                };
                      };
                              function second() {
                                      // Chapter 18 Q (01)
                               //User Generates A Custom Table and Custom Index Of Table
                                  //Get user input for number and length 
                   let num = prompt("Enter a number to show its multiplication table:");
                   let length = prompt("Enter length of multiplication table:");
                   let output = "";
                   document.getElementById('head2').innerHTML = ("<h2>Custom multiplication table</h2>");
                   document.getElementById('secondone').innerHTML = (`<h2>Multiplication table of ${num}</h2>`);
                   document.getElementById('secondtwo').innerHTML = (`<h3>Length ${length}</h3>`);
                   //Generate multiplication table
                   for (let i = 1; i <= length; i++) {
                     output += `${num} x ${i} = ${num * i}<br>`;
                   }
                   document.getElementById("secondthree").innerHTML = output;
                  };
                 function third() {
                   //Find Index Of Fruits
                    // Chapter 18 Q (02)
                   let fruits = ["Apple", "Banana", "Mango", "Orange", "Strawberry"];
                   document.getElementById('head3').innerHTML = "<h2>Fruit with an index</h2>";
                   let index = "Element at index";
                   let output1 = "";
                   for (let i = 0; i < fruits.length; i++) {
                     output1 += fruits[i] + ", <br>";
                   }
                   document.getElementById('thirdone').innerHTML = output1;
    
                   let output2 = "";
                   for (let i = 0; i < fruits.length; i++) {
                     output2 += `${index} ${i} is ${fruits[i]} <br>`;
                  }
                   document.getElementById('thirdtwo').innerHTML = output2;
                  }
                  function fourth() {
                     // Chapter 18 Q (03)
                    //  Series Of counting
                   let name = ["Counting:", "Reverse counting:", "Even:", "Odd:", "Series:"];
  
                   document.getElementById('head4').innerHTML = "<h2>Series of counting</h2>";
                    document.getElementById('fourone').innerHTML = `<br><b>${name[0]}</b><br>`;
  
                    let counting = "";
                    for (let i = 1; i <= 15; i++) {
                      counting += i + ", ";
                    }
                    document.getElementById('fourtwo').innerHTML = counting;
  
                    document.getElementById('fourthree').innerHTML = `<br><b>${name[1]}</b><br>`;
                    let reverse = "";
                    for (let i = 10; i >= 1; i--) {
                      reverse += i + ", ";
                    }
                   document.getElementById('fourfive').innerHTML = reverse;
  
                    document.getElementById('foursix').innerHTML = `<br><b>${name[2]}</b><br>`;
                   let even = "";
                    for (let i = 0; i <= 20; i +=2) {
                      even += i + ", ";
                   }
                   document.getElementById('fourseven').innerHTML = even;
  
                    document.getElementById('foureight').innerHTML = `<br><b>${name[3]}</b><br>`;
                    let odd = "";
                   for (let i = 1; i <= 19; i +=2) {
                      odd += i + ", ";
                   }
                   document.getElementById('fournine').innerHTML = odd;
  
                   document.getElementById('fourten').innerHTML = `<br><b>${name[4]}</b><br>`;
                    let series = "";
                    for (let i = 2; i <= 20; i +=2) {
                      series += i + "k, ";
                   }
                    document.getElementById('foureleven').innerHTML = series;
                  }
                        function fifth() {
                           // Chapter 19 Q (01)
                            //Searching My Bakery Order
                  let A = ["cake", "apple pie", "cookies", "chips", "patties"];
                  let userInput = prompt("Welcome to ABC bakery. What do you want to order sir/mam?");
                  let index1 = A.indexOf(userInput);
                  document.getElementById('head5').innerHTML = ("<h2>Bakery orders with an index</h2>");
                  if (index1 !== -1) {
                  document.getElementById('fiveone').innerHTML = (`<br><br>${userInput} is available at index ${index1} in our bakery.<br>`)
                  } else {
                    document.getElementById('fivetwo').innerHTML = (`<br><br>We are sorry. ${userInput} is not available in our bakery.<br>`);
                  };
                        };
                         function sixth() {
                           // Chapter 19 Q (02)
                          //Identify the Largest Number 
                  let largerNum = [24, 53, 78, 91, 12];
                  let largest = Math.max(...largerNum);
                     document.getElementById('head6').innerHTML = ("<h2>Identify the largest number</h2>");
                    document.getElementById('sixone').innerHTML = (`<br>Arrays item: ${largerNum.join(", ")}<br>`) 
                    document.getElementById('sixtwo').innerHTML = (`<br>The largest number is ${largest}<br>`);
                         };
                                function seventh() {
                                   // Chapter 20 Q (01)
                         //Identify the Smallest Number
                    let smallestNumber = [24, 53, 78, 91, 12];
                  let smallestnum = Math.min(...smallestNumber);
                    document.getElementById('head7').innerHTML = ("<h2>Identify the smallest number</h2>");
                    document.getElementById('sevenone').innerHTML = (`<br>Arrays item: ${smallestNumber.join(", ")}<br>`) 
                    document.getElementById('seventwo').innerHTML = (`<br>The Smallest number is ${smallestnum}<br>`);
                                };
                              function eight(){
                                 // Chapter 20 Q (02)
                             //Add Of 5 Numbers From 1 to 100
                    let output = "";
                    document.getElementById('head8').innerHTML = ("<h2>Add of 5 numbers from 1 to 100</h2>");
                    for (let i = 5; i <= 100; i += 5) {
                        output += i + "\n, ";
                    }
                    document.getElementById('eightone').innerHTML = output;
                              };