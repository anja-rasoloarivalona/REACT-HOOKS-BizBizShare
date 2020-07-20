import React from 'react'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import './Home.css'

 const Home = props => {
    return (
        <div className="home">
            <form
                className="home__form"
                onSubmit={(event) => props.onSubmit(event, 'name', 'namesList', props.form.name)}
            >
                <Input
                    type="text"
                    id="name"
                    label="Name"
                    value={props.form.name}
                    placeholder="Name"
                    onChange={props.onChange}
                />
                <Button
                    type="submit"
                    disabled={props.form.name === ''} 
                    // Here, instead of checking if the value is not empty, we could have directly checked if the value could pass the test, which means the length is at least 3
                    // I did it deliberately so that it would be possible to make a mistake and see how the application reacts in that case
                >
                    Submit
                </Button>
            </form>

            <form
                className="home__form"
                onSubmit={(event) => props.onSubmit(event, 'animal', 'animalsList', props.form.animal)}
            >
                <Input
                    type="text"
                    id="animal"
                    label="Animal"
                    value={props.form.animal}
                    placeholder="Animal"
                    onChange={props.onChange}
                />
                <Button
                    type="submit"
                    disabled={props.form.animal === ''}
                >
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default Home
