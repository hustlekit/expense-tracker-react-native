import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { GlobalStyles } from '../constants/styles';

import ManageExpense from '../screens/ManageExpense';
import RecentExpenses from '../screens/RecentExpenses';
import AllExpenses from '../screens/AllExpenses';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ExpensesOverview = () => {
	return (
		<BottomTabs.Navigator
			screenOptions={ {
				headerStyle: {
					backgroundColor: GlobalStyles.colors.primary500
				},
				headerTintColor: GlobalStyles.colors.accent5,
				tabBarStyle: {
					backgroundColor: GlobalStyles.colors.primary500
				},
				tabBarActiveTintColor: GlobalStyles.colors.accent5
			} }
		>
			<BottomTabs.Screen
				name={ 'RecentExpenses' }
				component={ RecentExpenses }
				options={ {
					title: 'Recent Expenses',
					tabBarLabel: 'Recent',
					tabBarIcon: ({ color, size }) => <Ionicons name={ 'hourglass' } color={ color } size={ size }/>
				} }
			/>
			<BottomTabs.Screen
				name={ 'AllExpenses' }
				component={ AllExpenses }
				options={ {
					title: 'All Expenses',
					tabBarLabel: 'All Expenses',
					tabBarIcon: ({ color, size }) => <Ionicons name={ 'calendar' } color={ color } size={ size }/>
				} }
			/>
		</BottomTabs.Navigator>
	);
};

const Navigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName={ 'ExpensesOverview' }
			>
				<Stack.Screen
					name={ 'ExpensesOverview' }
					component={ ExpensesOverview }
					options={ {
						headerShown: false
					} }
				/>
				<Stack.Screen
					name={ 'ManageExpense' }
					component={ ManageExpense }
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigator;