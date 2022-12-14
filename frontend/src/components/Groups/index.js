import React from 'react';
import './index.css';
import CardItem from '../GroupElement';
import { getGroups } from '../../api';

import { Link } from 'react-router-dom';

function Cards() {
    const [groups, setGroups] = React.useState([]);

    React.useEffect(() => {
        const getData = async () => {
            const res = await getGroups();
            setGroups(res?.data?.groups);
            console.log('groups', res?.data?.groups);
        };

        getData();
    }, []);

    return (
        <div className="cards">
            <h1>These are the groups</h1>
            <div className="btn1">
                <Link to="/profile" className="link1">
                    Join a group?
                </Link>
            </div>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        {groups?.map((item, index) => (
                            <CardItem
                                src="images/img-9.jpg"
                                text={item?.group_name}
                                label="Adventure"
                                path="/services"
                            />
                        ))}
                    </ul>
                    {/* <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/products"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul> */}
                </div>
            </div>
        </div>
    );
}

export default Cards;
