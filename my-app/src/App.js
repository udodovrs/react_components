import logo from './logo.svg';
import './App.css';

export const App = () => {
	return (
  	<div className="App"> {/*декларативный*/}
			<header className="App-header"> {/*декларативный*/}
				<img src={logo} className="App-logo" alt="logo" /> {/*декларативный*/}
				<p> {/*декларативный*/}
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				> {/*декларативный*/}
					Learn React
				</a>
				<p> {/*декларативный*/}
					{new Date().getFullYear().toString()} {/*императивный*/}
				</p>
			</header>
		</div>
	);
}

