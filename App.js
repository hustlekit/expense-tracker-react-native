import { StatusBar } from 'expo-status-bar';

import Navigator from './navigation/Navigator';

const App = () => {
	return (
		<>
			<StatusBar style="auto"/>
			<Navigator />
		</>
	);
}

export default App;