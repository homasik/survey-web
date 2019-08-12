# survey-web
Web client for the students' survey system

## Mockups
https://ninjamock.com/s/9925NDx

## Store

- userSession
  - UserId
  - token ??
  - userName
- userProfile (when Profile page is opened)
- surveys
  - when Home page of a student is opened
  - when student History is opened (button 'H')
  - when student Tests is opened (button 'T')
- questions (for currently opened survey)
- admins
- teachers
- students
- ??? newSurvey
  - name
  - newQuestions

## Decisions
- Home page for students will be exactly the same as for admins

## Questions
  - what if user closed the app in a middle of survey answering. Should server return in-complete surveys?
  - Teachers are created in the same way as admins. Remove list of technologies while creating a teacher
