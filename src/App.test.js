import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


//docker exec -it {container_id} npm run test , conatiner id -> docker ps -> docker inspect {container_id} -> look for the id in the json file -> "HostConfig": { "Binds": [ "C:\\Users\\sahil\\Desktop\\CI-CD_pipleine\\Appss\\frontend\\src:/app/src" ] }