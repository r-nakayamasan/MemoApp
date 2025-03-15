import { Stack } from 'expo-router';

const Layout = (): JSX.Element => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4285F4',
        },
        headerTitle: 'Memo App',
        headerTitleStyle: {
          fontSize: 28,
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
        headerBackTitle: 'Back',
      }}
    />
  );
};

export default Layout;