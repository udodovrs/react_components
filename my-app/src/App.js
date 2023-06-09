import logo from './logo.svg';
import './App.css';
const curentYear = new Date().getFullYear().toString();

export const App = () => {
		const appToHtml = `<div class="App">
			<header class="App-header">
				<img src=${logo} class="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					class="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<p>
					${curentYear}
				</p>
			</header>
		</div>`
		return appToHtml
}

