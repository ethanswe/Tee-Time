# Welcome to Tee Time!

TeeTime is a social media platform for golfers to offer the golf community the ability to find tee times available in their area. Users are able to see existing tee times and find golf courses in their area, as well as creating their own tee times for others to join.


## Getting Started
- Getting started with TeeTime is easy! Just follow the live link: https://tee-time-aa.herokuapp.com/

## Technologies used
JavaScript, Express, PostgreSQL w/ Sequelize, CSS, Pug

## Wiki docs:
https://github.com/ethanswe/Tee-Time/wiki

## Our two favorite features:
- Tee Time Join, create, update, delete functionality
The user can either go to a course and create a tee time off of that course profile page, or they can look through a list of available tee-times. From there, they can either join an existing event, create a new one, update an existing event, or delete their event. Each event displays the course information (description, photo of the course, the price range) and the playstyle of the event (duos, scramble, tournament, foursome). 
- Golf course profiles
Each course has their own unique page to display their course information. All course profiles are linked to the back-end database so that a specific picture of that course automatically renders for the user. Users have the ability to create an event from each golf course's profile that will autofill the course information for their event. 

## Roadblocks
- Delete functionality 
- Update functionality
- Generalized styling 
- Autofilling course information when navigating from course profile to create an event 

## Code Snippets 

### Delete functionality
```
document.querySelectorAll('.delete-button').forEach(button => {
  button.addEventListener('click', async (e) => {
    e.preventDefault();
    const teeTimeId = e.target.id.split('-')[2];

    await fetch(`/api/tee-times/${teeTimeId}/delete`, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ teeTimeId })
    })
    window.location.reload();
  })
})

router.delete('/tee-times/:id(\\d+)/delete', 
  requireAuth, 
  asyncHandler(async(req, res) => {
    const { teeTimeId } = req.body;
    const teeTime = await db.TeeTime.findByPk(teeTimeId);
    await db.UserTeeTime.destroy({ where: { teeTimeId }})
    await teeTime.destroy();
    res.json()
}))
```
### Dynamic button rendering
```
 if user
        .grid-item__3
          .grid-button
            if (teeTime.ownerId === user.id)
              button.edit-button(id=`edit-button-${teeTime.id}`) Edit
              button.delete-button(type='submit' id=`delete-button-${teeTime.id}`) Delete

            else
              if teeTime.isFull(user.id)
                button.full-button Full
              else
                if teeTime.isJoined(user.id)
                  button.join-button.hidden(id=`join-button-${teeTime.id}`) Join
                  button.unjoin-button(id=`unjoin-button-${teeTime.id}`) Unjoin
                else
                  button.join-button(id=`join-button-${teeTime.id}`) Join
                  button.unjoin-button.hidden(id=`unjoin-button-${teeTime.id}`) Unjoin
                
```

