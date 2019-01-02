Mixsynth

Mixsynth is a basic synthesizer application.
Builds synths off the the Web Audio Api.



Requirements

# Rails API backend
# three resources (synths, users, saved synths)
full crud for synthesizers
#create
# create container made
# Add synth to the dom after creation
# Save synth button posts to synthesizer
# read existing synthesizers by clicking them in the list
make sure non user made synths cant be edited
-update
#delete
#deleted from dom
#delete from database
two different client side routes minimum (react router)
#login
user
create
synths
synths/id



Skateboard
#Users can Login and logout# (need authentication a db pull)
#Users can create a synth# (need to add filtering, and effects)
#database has been built out just need to populate it
#All users are loaded upon start of application
#All synths are loaded at start of app
#All saved synths are loaded at start of app
#Users can play synths with a virtual keyboard
#Synths can be played by clicking a keyboard
#enable a toggle for on the screen or with key controls or remove it
#Waveforms can be filtered



# logging in loads up a list of synths
# user synths and saved synths
- clicking on a synth loads that synth with presets
- Users can edit their synthesizers.
- Users can delete their synthesizers.
- favorited synths can not be edited.

navigation and urls

DB management
- creating an account adds a new user to the database
search functionality
-users can save a synth they created
-users can edit






synths can have effects

Stretch features

Users can create an account

search is ranked by synths that have the most likes.
mixing more than one synthesizer
multiple octaves
Synths can be played with  key down controls or midi.
Working authentication and authorization.




This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
