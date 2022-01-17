Added folders structure: 
- assets - images which where used in the application,
- src:
    - components: 
        - Button - button component created in two color variants,
        - Images - images used for screen backgrounds
    - routes: 
        - StackRouter.js - file in which navigation was set up
    - screens:
        - HomeScreen.js - main screen where first three steps of the task was made, fetch remote data is inside this screen also
        -  DetailsScreen.js - screen with picked item details are display, adding opinions using local storage was also made in that file

Screen styles was included in screen files.
Components styles was extern to external files in the same folders.
For data source https://jsonplaceholder.typicode.com was used which is free fake API for testing and prototyping.
Images picked up in application are random and was included to avoid black-white look.
Application was made in a way to avoid adding any unnessecery packages.