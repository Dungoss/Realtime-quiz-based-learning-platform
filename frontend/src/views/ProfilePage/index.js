import React from 'react';
import { Image, List } from 'semantic-ui-react';

const ProfilePage = () => (
    <List divided verticalAlign="middle">
        <List.Item>
            <Image avatar src="https://react.semantic-ui.com/images/avatar/small/daniel.jpg" />
            <List.Content>
                <List.Header as="a">Daniel Louise</List.Header>
            </List.Content>
        </List.Item>
        <List.Item>
            <Image avatar src="https://react.semantic-ui.com/images/avatar/small/stevie.jpg" />
            <List.Content>
                <List.Header as="a">Stevie Feliciano</List.Header>
            </List.Content>
        </List.Item>
        <List.Item>
            <Image avatar src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
            <List.Content>
                <List.Header as="a">Elliot Fu</List.Header>
            </List.Content>
        </List.Item>
    </List>
);

export default ProfilePage;
