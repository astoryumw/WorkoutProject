import React from 'react';
import Login from '../components/login';
import SignUp from '../components/signup';
import { CookiesProvider } from "react-cookie";
import Form from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

// the idea, workout app
// build an app where users can create accounts and log in
// it will then match accounts with one another via id assigned to each user, so one on one
// the matched pairs can hold each other accountable with workouts, plan workouts, compare progress
// app will showcase optional workouts to choose from, perhaps have a news feed where users can share progress with everyone else
export default function Home() {
	return (
		<div class="bg-light">
			<h1 align="center" class="p-5">Workout Lister</h1>
		<div class="p-5 d-flex align-items-center justify-content-center">
			
			<CookiesProvider>
				<Form align="center" class="p-2 bg-light border" >
					<div class="container-sm p-5 ">
						<Login />
					</div>
				</Form>
				<Form align="center" class="p-2 bg-light border">
					<div class="container-sm p-5">
						<SignUp />
					</div>
				</Form>
			</CookiesProvider>
		</div>
		</div>
	)
}
