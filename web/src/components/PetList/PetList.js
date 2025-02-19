import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import PetItem from './components/PetItem';
import NewPetItem from './components/PetItem/NewPetItem';
import { getPets } from './selectors';
import './PetList.css';

const PetList = () => {
    const pets = useSelector(getPets);
    return (
        <Fragment>
            <h1 className="Pets-title">My Pets</h1>
            <div className="Pets-list">
                <NewPetItem />
                { pets.length > 1 && pets.map(pet => <PetItem pet={pet} key={pet.id}/>) }
            </div>
        </Fragment>
    );
};

export default PetList;
