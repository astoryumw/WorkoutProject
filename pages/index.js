import React from 'react';
import Login from '../components/login';
import SignUp from '../components/signup';

// the idea, workout app
// build an app where users can create accounts and log in
// it will then match accounts with one another via id assigned to each user, so one on one
// the matched pairs can hold each other accountable with workouts, plan workouts, compare progress
// app will showcase optional workouts to choose from, perhaps have a news feed where users can share progress with everyone else
export default function Home() {
	return (
		<div>
			<h1>Hey</h1>
			<Login />
			<SignUp />
		</div>
	)
}
