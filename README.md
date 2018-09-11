# Vodafone Tech Test

This app was built as the solution to a tech test set by Vodafone. The user interface displays a picture of a phone, along with information including price and memory capacity. Users can click on the colour and capacity buttons and the app will update the image and price. It's deployed on Heroku [here](https://tranquil-coast-95833.herokuapp.com/).

![ScreenShot](public/ScreenShot.png)

### My Approach

The test instructions emphasised the importance of making the code readable, concise and reusable. This encouraged me to use React, which is well-suited to creating modular designs with reusable components. I first used React for my final Makers group project, and have used it since graduating in a couple of side projects, so it's still quite new to me.

My components are well-named (I hope!), and concise: I have attempted to obey the single-responsibility principle throughout. The solution employs just one stateful component, `<Page />`, which renders several stateless functional components and funnels data to them as props. Clicking on the buttons changes state in the parent component, re-rendering the page.

The components are organised into separate files so they can be imported easily, and they are stateless, making them both reusable and maintainable.

I have used ESLint to check the formatting of my code, ensuring that it meets the highest standards.

### Running the App
To run the app, simply clone this repo, `cd` into it in your terminal, then run `npm install` to install the dependencies and `npm start` to start the server. Finally, navigate to http://localhost:3000.

The components are fully unit tested using Jest and Enzyme. To run the tests use the `npm test` command.

### Extensions
Given more time, and a larger data set, I would like to have built a database and server (in Node) and routed them to and from the front-end, making the app less dependent on the datafile provided by Vodafone. It would have been fun to give the user more flexibility, enabling them to click through a wider range of phones (and see images of them), for example, or a broader selection of payment plans. This would have involved some interesting rewriting of the onClick functions in my programme, and most probably the use of a React Router component. 

### Technologies Used
- JavaScript
- React
- CSS
- Jest
- Enzyme
