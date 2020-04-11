import React from "react";
import axios from "axios";
import Head from "../components/head";
import Layout from "../components/layout/Layout";
import { BASE_URL } from "../constants/api";

export default function Index(props) {
	// the log here will happen in the browser
	console.log(props.posts);

	return (
		<Layout>
			<Head title="Next Intro" />

			{props.posts.map((post) => {
				return <h3 key={post.id}>{post.title}</h3>;
			})}
		</Layout>
	);
}

export async function getStaticProps() {
	// in case there is an error in the API call
	// we'll send an empty array in as the prop
	let posts = [];

	try {
		const response = await axios.get(BASE_URL);
		// the log here will happen on the server, you can check the console in your editor
		console.log(response.data);
		posts = response.data;
	} catch (error) {
		console.log(error);
	}

	// the props object we return here will become the props in the component
	return {
		props: {
			posts: posts,
		},
	};
}
