  /**
   *
   * For each of the names in the array passed into this function
   *
   * - Add a <h1> tag to the website containing the name of the person
   * - Add a <h2> tag to the website containing the job of the person
   *
   * All of your HTML should go inside the Div tag with the id "content".
   *
   * <div id="content">
   *      <h1>{Name Here}</h1>
   *      <h2>{Job Here}</h2>
   *      .....
   * </div>
   */
  function exerciseOne(arrayOfPeople) {
    let content = document.querySelector("#content");
    for(var i = 0; i < arrayOfPeople.length; i++){
      let h1 = document.createElement("h1");
    content.appendChild(h1);
    h1.textContent = arrayOfPeople[i].name;
    let h2 = document.createElement("h2");
    content.appendChild(h2);
    h2.textContent = arrayOfPeople[i].job;
    

    }

  }
    
      
    


    


  /**
   *
   * Create a list of shopping items. You should use an unordered list.
   *
   * All of your HTML should go inside the Div tag with the id "content".
   * 
   * 
   *
  //  */
  function exerciseTwo(shopping) {
    let content = document.querySelector("#content");
    let shoppingListEl = document.createElement("ul");
    content.appendChild(shoppingListEl);
    // console.log(shoppingListEl);
  for(var i = 0; i < shopping.length; i++) {
    let item = document.createElement("li");
    // console.log(item);
    item.textContent = shopping[i];
    shoppingListEl.appendChild(item);
    // shoppingListEl.textContent = shopping[i];
  }
    // Write your code in here
  }


  /**
      I'd like to display my three favorite books inside a nice webpage!

      const books = [
          {
              title: "The Design of Everyday Things",
              author: "Don Norman",
              alreadyRead: false
          },
          {
              title: "The Most Human Human",
              author: "Brian Christian",
              alreadyRead: true
          },
          {
              title: "The Pragmatic Programmer",
              author: "Andrew Hunt",
              alreadyRead: true
          }
      ];

      Iterate through the array of books.
      - For each book, create a <p> element with the book title and author and append it to the page.
      - Use a <ul> and <li> to display the books.
      - Add an <img> to each book that links to a URL of the book cover.
      - Change the style of the book depending on whether you have read it (green) or not (red).

      The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
  **/
  function exerciseThree(books) {
    let body = document.querySelector("body");
    let bookListEl= document.createElement("ul");
    body.appendChild(bookListEl);
    let h3 = document.createElement("h3");
    h3.innerHTML = "bookList";
  for(var i = 0; i < books.length; i++){
  let _list = document.createElement("li");
  bookListEl.appendChild(_list);

  let para = document.createElement("p");
  para.textContent = `${books[i].title}  - ${books[i].author}`;
    _list.appendChild(para);
    let color = ["red", "green", "green"];
    let url =[
      "data:image/jpeg;base64,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",
      "data:image/jpeg;base64,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",
      "data:image/jpeg;base64,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"
    ]
  let img = new Image();
  img.src = url[i];
  _list.style.backgroundColor = color[i];
  _list.style.listStyle = "none";
  _list.style.margin ="20px";
  bookListEl.style.display = "flex";
    _list.appendChild(img);
  }

    //Write your code in here
  }

  //
  //
  //
  //
  // DO NOT EDIT BELOW HERE
  //
  //
  //
  //

  let people = [
    { name: "Chris", job: "Teacher" },
    { name: "Joanna", job: "Student" },
    { name: "Boris", job: "Prime Minister" }
  ];

  exerciseOne(people);

  let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

  exerciseTwo(shopping);

  const books = [
    {
      title: "The Design of Everyday Things",
      author: "Don Norman",
      alreadyRead: false
    },
    {
      title: "The Most Human Human",
      author: "Brian Christian",
      alreadyRead: true
    },
    {
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt",
      alreadyRead: true
    }
  ];

  exerciseThree(books);
