## Q-1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: The difference is given bellow: 1.getElementById() is used to find the specific element of HTML file. Every Id is unique that's why getElementById return a single HTML element. 2.With getElmentsByClassName() we can find all the elements of HTML file with the specific and same class name and it returns a live HTML collection. 3.For get the first element with CSS selector from HTML file with we use querySelector. It retuns an HTML element. 4.querySelectorAll is used to find all the elements from the HTML file with CSS selector and returns a static Nodelist.

Q-2: How do you create and insert a new element into the DOM? Ans: To create and insert a new element into the DOM I follow some steps these are given bellow: 1.Create element 2.Set contents or attributes 3.Append it to a parent element or the body

example: const newDiv = document.createElement("div"); newDiv.innerHtml = <h1> Hi This is My New Div ; const parent = document.getElementById("parentDiv"); parent.appendChild(newDiv)

Q-3: What is Event Bubbling and how does it work? Ans: Event Bubbling is an event transferring system in JavaScript. When an event is triggered on an element, it propagates from the child element to its parent element, then to the body, and finally to the document.

Q-4: What is Event Delegation in JavaScript? Why is it useful? Ans: Event Delegation is a technique in JavaScript where a single event listener is add to a parent element instead of applying multiple event listener on it's child element. It is very useful because with this we can reduce repeating code and work on many element with a single event listener.

Q-5: What is the difference between preventDefault() and stopPropagation() methods? Ans: preventDefault() is used to stop auto refreshing while we add a event listener. And on the other hand stopPropagation() is used to stop bubbling up to it's parent.
