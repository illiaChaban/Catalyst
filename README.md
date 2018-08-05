# Catalyst - front end
[check out the server-side](https://github.com/illiaChaban/catalyst-server)


## Overview:
Motivational app for people that are lacking that extra push. Group of close friends post their goals that they want to commit to. Your friends vote for a ridiculous punishment for you if you don’t follow through. You have to ‘check-in’ to prove that you actually doing the work, else get punished!

#### Watch demo:

<a href="https://www.youtube.com/watch?v=hNMJl7z7fHQ&t=0s" target="_blank">
  <img src="https://user-images.githubusercontent.com/34459770/40567095-ed30773e-6041-11e8-8f5b-7ca37e535b02.png" height="150"/>
</a>

#### Screenshots:

<div>
  <img width="150" alt="sc1" src="https://user-images.githubusercontent.com/34459770/40567439-4d3d368e-6043-11e8-8020-3b4117b18a15.png">
  <img width="150" alt="sc2" src="https://user-images.githubusercontent.com/34459770/40567441-4e48135a-6043-11e8-8664-5ff0846c3382.png">
  <img width="150" alt="sc3" src="https://user-images.githubusercontent.com/34459770/40567443-4f8611a4-6043-11e8-9b78-344b3f87d693.png">
  <img width="150" alt="sc4" src="https://user-images.githubusercontent.com/34459770/40567445-5100a01c-6043-11e8-87c4-1f61dbd6efc5.png">
  <img width="150" alt="sc5" src="https://user-images.githubusercontent.com/34459770/40567447-5287d52c-6043-11e8-9a2a-b8d32976d130.png">

</div>



## Team Members & Roles:
* [Itzik Shaoulian](https://github.com/itzik415) "The soul of the team, obviously"
* [Aaron Gross](https://github.com/ponchieponcho) "Bruce Willis of the team"
* [Illia Chaban](https://github.com/illiaChaban) "Had to be motivated by the app to finish the app"


## Technologies used:
 * React 
 * PostgreSQL 
 * Redux
 * Express.js 
 * JavaScript
 * Node.js
 * CSS
 * Amazon EC2.


## Code snippets:

```javascript
class ProfilePage extends Component{
    async componentDidMount() {
        let { dispatch } = this.props;
        let response = await fetchMe();
        if (response.status === 200) {
            let user = await response.json();
            updateUserInfo({dispatch, user })
        }
    }

    render() {
        let { me, profileUserId, history } = this.props;

        return (
            <div>
                <ProfileIconPart userId={profileUserId} me={me} history={history}/>
                <ProfileGoals userId={profileUserId} me={me}/>
                <ProfileCheckins userId={profileUserId} me={me}/>
            </div>
        )
    }
}

export default connect(
    (state, props) => ({ 
        me: state.user,
        profileUserId: props.profileUserId,
        history: props.history,
    })
)(ProfilePage);

```

