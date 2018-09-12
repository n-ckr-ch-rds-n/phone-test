# Vodafone Tech Test

This app was built as the solution to a tech test set by Vodafone. The user interface displays a picture of a phone, along with information including price and memory capacity. Users can click on the colour and capacity buttons and the app will update the image and price. It's deployed on Heroku [here](https://tranquil-coast-95833.herokuapp.com/).

![ScreenShot](public/ScreenShot.png)

### My Approach

The test instructions emphasised the importance of making the code readable, concise and reusable. This encouraged me to use React, which is well-suited to creating modular designs with reusable components. I first used React for my final Makers group project, and have used it since graduating in a couple of side projects. On this occasion, I used [create-react-app](https://github.com/facebook/create-react-app) to generate my app's structure, largely because it handles the app's build process and makes it easier to deploy.

My first step was to sketch out a plan for my components. I divided the interface into a `<Page />` component that contains all the other components, then divided up the subsidiaries – components for the phone image, the phone information, the price block, and the panel of buttons that select between different capacities and colours. 

To abide by the single responsibility principle, and follow the guidelines in the React docs for which components should hold state and which shouldn't, I decided to make the `<Page />` component the only stateful component, and that it should pass the data to the functional child components as props. 

I built the components one by one, first including them in the body of the parent component, then refactoring them out into their own components, then copying them into separate files and exporting them (and importing them back into the parent's file). 

Next, I wrote the onClick functions that allow the user to see different phones by changing state in the parent components. These functions set the 'phonetype' value based on the user input by checking the user-inputted value against the current capacity/colour values and returning the matching phone from the data file.

Once the components were locked down I wrote a full test suite for them using Jest and Enzyme. Then I used ESLint to check the formatting of my code, ensuring that it meets the highest standards for style. Lastly, I deployed the app to Heroku to demonstrate the success of the build process.

### Running the App
To run the app locally, simply clone this repo, `cd` into it in your terminal, then run `npm install` to install the dependencies and `npm start` to start the server. Finally, navigate to http://localhost:3000.

To run the unit tests use the `npm test` command.

### Extensions
As I was quite short of time, I wasn't able to add any feature tests, which I would written Cypress, a framework I'm fairly familiar with. With more time and a larger data set, I would also like to have built a database and server (in Node) and routed them to and from the front-end, and to have made the app less dependent on the datafile provided by Vodafone. It would have been fun to give the user more flexibility, enabling them to click through a wider range of phones (and see images of them), for example, or a broader selection of payment plans. This would have involved some interesting rewriting of the onClick functions in my programme – currently dependent on the format of the given data – and most probably the use of a React Router component. Finally, I regret not implementing the star-rating system. To achieve this, I would have used the 'rating' properties in the data to set the width of the star component in CSS. 

### Technologies Used
- JavaScript
- React
- CSS
- Jest
- Enzyme
